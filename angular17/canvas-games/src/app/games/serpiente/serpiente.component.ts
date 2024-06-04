import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-serpiente',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './serpiente.component.html',
  styleUrl: './serpiente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SerpienteComponent { 


  startGame() {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas');
      return;
    }
  
    const snake = [{ x: 160, y: 160 }];
    const food = [{ x: 320, y: 320 }];  // Cambiado a un arreglo para manejar múltiples manzanas
    
    const gridSize = 20;
    let dx = gridSize;
    let dy = 0;
    let changingDirection = false;
    let speed = 100;
    
  
    document.addEventListener("keydown", changeDirection);
  
    function main() {
      if (didGameEnd()) return;
  
      changingDirection = false;
      setTimeout(function onTick() {
        clearCanvas();
        paintCanvasBorders();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
      }, speed);
    }
  
    function clearCanvas() {
      if (ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  
    function drawFood() {
      if (ctx) {
        const img = new Image();
        img.src = 'assets/fresa.png';
        img.onload = () => {
          food.forEach(f => {
            ctx.drawImage(img, f.x, f.y, gridSize, gridSize);
          });
        };
      }
    }
  
    function advanceSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
      var foodEaten = false;
  
      // Verificar si la serpiente comió alguna manzana
      food.forEach((f, index) => {
        if (snake[0].x === f.x && snake[0].y === f.y) {
          
          // Generar dos nuevas manzanas
          for (let i = 0; i < 3; i++) {
            const x = Math.floor(Math.random() * (canvas.width/gridSize)) * gridSize;
            const y = Math.floor(Math.random() * (canvas.height/gridSize)) * gridSize;
            food.push({ x, y });
          }
          // Eliminar la manzana comida del arreglo
          food.splice(index, 1);
          foodEaten = true;
          speed = speed - 7;
        }

      });
  
      // Eliminar la cola si no se comió una manzana
      if (!foodEaten) {
        snake.pop();
      }
    }
  
    function drawSnake() {
      if (ctx) {
        snake.forEach(part => {
          ctx.fillStyle = 'green';
          ctx.fillRect(part.x, part.y, gridSize, gridSize);
        });
      }
    }
  
    function changeDirection(event: KeyboardEvent) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;
  
      if (changingDirection) return;
      changingDirection = true;
  
      const keyPressed = event.keyCode;
      const goingUp = dy === -gridSize;
      const goingDown = dy === gridSize;
      const goingRight = dx === gridSize;
      const goingLeft = dx === -gridSize;
  
      if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -gridSize;
        dy = 0;
      }
      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -gridSize;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = gridSize;
        dy = 0;
      }
      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = gridSize;
      }
    }
  
    function didGameEnd() {
      for (let i = 4; i < snake.length; i++) {
        const collided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if (collided) return true;
      }
  
      const hitLeftWall = snake[0].x < 0;
      const hitRightWall = snake[0].x > canvas.width - gridSize;
      const hitTopWall = snake[0].y < 0;
      const hitBottomWall = snake[0].y > canvas.height - gridSize;
  
      return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
    }
  
    function paintCanvasBorders() {
      if (ctx) {
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      }
      
    }
  
    main();
  }


}
