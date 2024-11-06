<?php $id = 1; ?>

<a href="" onClick="popitup('home.php'); return false;">Open Home</a>

<script type="text/javascript">
    function popitup(url) {
        newwindow = window.open(url, 'name', 'height=200,width=150');
        if (window.focus) { newwindow.focus(); }
        return false;
    }
</script>
