import React from 'react'
import './Form.css'
export default function Form() {
    return (
        <div class='Form'>
            <h2>Add Task</h2>
            <span class='TaskField'>
                <p>Task</p>
                <input class='field' type='text' placeholder='Type your task here...'></input>
            </span>
            <div class="radio-container">
                <div class="radio-high">
                    <input type="radio" id="high" name="priority" value="high"></input>
                    <label for="high" class="radio-high">High</label>
                </div>
                <div class="radio-medium">
                    <input type="radio" id="medium" name="priority" value="medium"></input>
                    <label for="medium" class="radio-medium">Medium</label>
                </div>
                <div class="radio-low">
                    <input type="radio" id="low" name="priority" value="low"></input>
                    <label for="low" class="radio-low">Low</label>
                </div>
            </div>
        </div>
    )
}
