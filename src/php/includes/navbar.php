<!-- Navbar HTML -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
  <div class="container">
    <?php if(isset($_SESSION['manager_id']) && $_SESSION['manager_id'] == 100) : ?>
      <a class="navbar-brand" href="<?php echo URLROOT; ?>/admins/index"><?php echo SITENAME; ?></a>
    <?php elseif(isset($_SESSION['manager_id'])) : ?>
      <a class="navbar-brand" href="<?php echo URLROOT; ?>/pages/index"><?php echo SITENAME; ?></a>
    <?php else : ?>
      <a class="navbar-brand" href="<?php echo URLROOT; ?>/managers/login"><?php echo SITENAME; ?></a>
    <?php endif; ?>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <?php if(isset($_SESSION['manager_id']) && $_SESSION['manager_id'] == 100) : ?>
          <a class="nav-link" href="<?php echo URLROOT; ?>/admins/index">Home</a>
        <?php elseif(isset($_SESSION['manager_id'])) : ?>
          <a class="nav-link" href="<?php echo URLROOT; ?>">Home</a>
        <?php else : ?>
          <a class="nav-link" href="<?php echo URLROOT; ?>/managers/login">Home</a>
        <?php endif; ?>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo URLROOT; ?>/pages/about">About</a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
      <?php if(isset($_SESSION['manager_id'])) : ?>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo URLROOT; ?>/managers/logout">Logout</a>
        </li>
      <?php else : ?>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo URLROOT; ?>/managers/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo URLROOT; ?>/managers/login">Login</a>
        </li>
      <?php endif; ?>
      </ul>
    </div>
  </div>
</nav>