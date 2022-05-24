hue = 0
    function hsl() {
        let colors = [0, 100, 50];

        function setBG() {
            document.body.style.backgroundColor = `hsl(${colors[0]}, ${colors[1]}%, ${colors[2]}%)`;
        }

        function rainbow() {
            colors[0] = (colors[0] + 1) % 360;
            setBG()
        }

        setInterval(rainbow, 20);
}
hsl()