<script>
    export let primary = true;
</script>

<button class:primary class:secondary={!primary} on:click>
    <span><slot /></span>
</button>

<style>
    button {
        /* TODO: Move color variables to global stylesheet */
        /* --primary-color: #2a72d9;
        --secondary-color: #972ad9; */

        cursor: pointer;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 15px 25px;
        gap: 10px;

        height: 50px;
        border-radius: 6px;
        border: none;

        color: #fff;
        font-weight: bold;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    button:disabled {
        opacity: 0.2;
    }

    button:not(:disabled):active {
        opacity: 0.5;
    }

    button:hover {
        opacity: 0.8;
    }

    .primary {
        background: var(--primary-color);
    }

    .secondary {
        background: var(--secondary-color);
    }
</style>
