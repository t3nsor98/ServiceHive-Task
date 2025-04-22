<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


/**
* The base configuration for WordPress
*
* The wp-config.php creation script uses this file during the installation.
* You don't have to use the website, you can copy this file to "wp-config.php"
* and fill in the values.
*
* This file contains the following configurations:
*
* * Database settings
* * Secret keys
* * Database table prefix
* * ABSPATH
*
* @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
*
* @package WordPress
*/

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
* Authentication unique keys and salts.
*
* Change these to different unique phrases! You can generate these using
* the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
*
* You can change these at any point in time to invalidate all existing cookies.
* This will force all users to have to log in again.
*
* @since 2.6.0
*/
define( 'AUTH_KEY',         'C+e1^b(1Ol||}Nf?p_F(Ib8/-za<Pf7xEtrFd+ru[N-8p}8OKLsd0]Vh9Lk9n&Uv' );
define( 'SECURE_AUTH_KEY',  '[lM|fQ/Uq1ztq#,NNW5rgYjDp{hqa$ZmF!N[J=pw2[R^NH]yJ~?We;HJ9@N^RDR4' );
define( 'LOGGED_IN_KEY',    '3$RI@I4En/&m)Hnb_%:h<uE#X3C89c&b@Khu^`(Z+.]JXH`LL_YJm[T!sp6qG@i,' );
define( 'NONCE_KEY',        'b]2hj;-%9;QP1|12L#QQ!yhnUP@6~Y5lyEKYf-[{A%wX/0gOx;()sGV]f(M^o6]W' );
define( 'AUTH_SALT',        '6~if}c^E/cyC:4wbbo}<16~h-N)OKTx0Q;j!;U?R0-a?%SZ)Tu0Jx@07dVIyY];$' );
define( 'SECURE_AUTH_SALT', 'FV$i2[N 6sr]IR`Y2RC.q7:H1RV39|H8R1!LGn9qID%j[:2GmZ!cPg%{CJ6LG,+b' );
define( 'LOGGED_IN_SALT',   '<R)9h,8|dq$~=A}h$VLHODF>].72}ShM4}5{L6m)?Q}p73>XtnnjR4Y9o~!/4^Ao' );
define( 'NONCE_SALT',       't(^nl+1~jBe-oF<h.--f(JzH ,+!CVvg> x2+&JpmaM8J/7@ V<3sPPDAV8 Omr9' );

/**#@-*/

/**
* WordPress database table prefix.
*
* You can have multiple installations in one database if you give each
* a unique prefix. Only numbers, letters, and underscores please!
*
* At the installation time, database tables are created with the specified prefix.
* Changing this value after WordPress is installed will make your site think
* it has not been installed.
*
* @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
*/
$table_prefix = 'wp_';

/**
* For developers: WordPress debugging mode.
*
* Change this to true to enable the display of notices during development.
* It is strongly recommended that plugin and theme developers use WP_DEBUG
* in their development environments.
*
* For information on other constants that can be used for debugging,
* visit the documentation.
*
* @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
*/
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';