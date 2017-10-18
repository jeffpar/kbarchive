---
layout: page
title: "Q137820: Microsoft Plus! Readme.txt File Contents (2 of 2)"
permalink: kb/137/Q137820/
---

## Q137820: Microsoft Plus! Readme.txt File Contents (2 of 2)

	Article: Q137820
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is a copy of the information in the Microsoft Plus!
	for Windows 95 Readme.txt file (part 2 of 2).
	
	MORE INFORMATION
	================
	
	If Your Mouse Pointers Do Not Animate
	-------------------------------------
	
	To use animated pointers in Microsoft Plus!, you must use protected-
	mode disk drivers and a Windows 95-compatible display driver that
	uses the device-independent bitmap (DIB) engine AND meets at least
	one of the following criteria:
	
	- The display driver is set to 256 colors or higher, and supports
	  color pointers.
	
	  -or-
	
	- The display driver allows Windows 95 to access its memory in a
	  linear fashion (such as through a frame buffer) to provide smoother
	  animation.
	
	The following display drivers do NOT support animated mouse pointers:
	
	- ATI Ultra (mach8)
	  This driver does not support a frame buffer.
	
	- Diamond Viper
	  This driver is based on the Windows 3.1 video standard.
	
	- Standard Display Adapter (VGA)
	  This driver is based on a standard established before animated
	  pointers were developed.
	
	- Super VGA
	  This driver is based on a standard established before animated
	  pointers were developed.
	
	To determine if you are using protected-mode disk drivers:
	
	1. Click the Start button, point to Settings, and then click
	  Control Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, click File System, and then
	  click the Troubleshooting tab.
	
	4. If "Disable All 32-bit Protect-Mode Disk Drivers" is NOT checked,
	   you are using protected-mode disk drivers.
	
	If your system meets these requirements but your mouse pointers
	still do not animate, scan your computer for viruses. Boot-sector
	viruses can prevent mouse pointers from animating.
	
	If You Use Desktop Themes with Programs that Have Their Own Color Palette
	-------------------------------------------------------------------------
	
	If your display is configured for 256 colors and you are using a desktop
	theme, when you switch to another program (such as Microsoft Encarta,
	Microsoft Office 95 Shortcut bar (!), Autorun, and Multi-Media Catalog)
	that
	uses its own color palette, the wallpaper may flash, and then may be
	repainted using the colors from the program's palette. This may cause your
	screen colors to look strange.
	
	To solve this problem, you can:
	
	-- Change the Color Palette setting for your display to High Color.
	  NOTE: You may need to purchase additional VRAM or reduce the screen
	  resolution to run your display in High Color mode.
	
	-- Use programs that do not use their own display palettes.
	
	-- Use the Windows default wallpaper, icons and colors in place of those
	  that come with the desktop themes.
	
	If Your Mouse Pointers Flicker or Leave Trails When Using a Theme
	-----------------------------------------------------------------
	
	On some displays, the mouse pointers in a desktop theme may flicker
	or leave "trails" of dots behind them. To prevent this from
	happening, use the Windows default pointers instead of the pointers
	for your theme.
	
	To use the Windows default pointers with a theme, make sure the Mouse
	Pointers box is NOT checked when you apply the theme. If you are
	already using a theme, you will need to restore your desktop to the
	Windows default settings before you can use a theme with the Windows
	default pointers.
	
	To restore your desktop to the default settings, and then use the
	default pointers with a theme:
	
	1. Click the Start button, point to Settings, and then click Control
	  Panel.
	
	2. Double-click the Desktop Themes icon.
	
	3. In the Theme list, click "Windows Default," and then click Apply.
	
	4. In the Theme list, click the theme you want to use.
	
	5. Make sure the Mouse Pointers box is NOT checked, and then choose OK.
	
	If Your Large Desktop Icons Look Jagged
	---------------------------------------
	
	If your desktop icons are large, and some of the icons look
	jagged or have poor resolution, then those programs did not provide
	large icons for use with the Use Large Icons display option.
	
	To improve the look of your desktop, you might want to use small
	(standard) desktop icons instead of large icons.
	
	To stop using large icons:
	
	1. Right-click the desktop, and then click Properties.
	
	2. Click the Plus! tab.
	
	3. Make sure the Use Large Icons box is unchecked.
	
	If Your Desktop Icons Look Blotchy
	----------------------------------
	
	If you are using a desktop theme and your desktop icons don't look
	right (they are too dark, blotchy, or the shadowing doesn't seem
	right), try disabling some or all graphics acceleration for your
	display.
	
	To disable your display's graphics acceleration:
	
	1. Click the Start button, point to Settings, and then click Control
	  Panel.
	
	2. Double-click the System icon.
	
	3. Click the Performance tab, and then click Graphics.
	
	4. Move the Hardware Acceleration slider bar towards "None."
	
	  NOTE: If you reinstall Windows 95, the slider will be reset to
	  the default position. In this case, you will need to repeat this
	  procedure to turn off graphics acceleration.
	
	If Your Quicken Version 4.0 Program Does Not Look Right
	-------------------------------------------------------
	
	If you are using a desktop theme while using Quicken Version 4.0, the
	Quicken program window may not look right on your screen. To solve
	this problem, use the Windows default color settings instead of the
	color settings that come with your theme.
	
	To apply the Windows default color settings after you've selected a
	theme:
	
	1. Use the right mouse button to click anywhere on the desktop, and
	  then click the Appearance tab.
	
	2. In the Scheme list, click Windows Standard.
	
	To preserve the Windows color scheme when selecting a new theme:
	
	> In the Desktop Themes window, make sure the Colors box is
	  unchecked.
	
	If You Use Desktop Themes in Conjunction With User Profiles
	-----------------------------------------------------------
	
	If your computer is configured with a different user profile for
	each user, and one user selects a particular desktop theme,
	all users of that computer will now see the icons and screen
	saver associated with that theme. Other elements of a desktop
	theme (for example, background wallpaper or screen colors) are
	saved on a per-user basis.
	
	OTHER MICROSOFT PLUS! PROGRAMS
	==============================
	
	This section contains notes about other Microsoft Plus! programs.
	
	Using Dial-Up Server with Fax Programs
	--------------------------------------
	
	If Dial-Up Server is enabled, it answers all incoming calls
	on the first ring. This prevents fax programs, such as
	Microsoft Fax, from answering any incoming faxes.
	
	To enable your fax program to answer incoming faxes, turn off
	Dial-Up Server.
	
	To turn off Dial-Up Server:
	
	1. On the desktop, double-click My Computer.
	
	2. Double-click the Dial-Up Networking icon.
	
	3. Click the Connections menu, and then click Dial-Up Server.
	
	4. Click the No Caller Access option.
	
	If Dial-Up Networking Won't Let You Save Your Password
	------------------------------------------------------
	
	When you place a call to a remote computer by using a Dial-Up
	Networking connection, the Connect To dialog box appears.
	If the Save Password check box is not enabled:
	
	1. In Control Panel, double-click the Network icon, and
	  then click Add.
	
	2. In the Select Network Component Type dialog box,
	  click Client, and then click Add.
	
	3. In the list of manufacturers, click Microsoft, click
	  Client for Microsoft Networks, and then click OK.
	
	4. Click the Identification tab, and then enter unique
	  names for your computer and workgroup.
	
	5. Restart your computer. (When your computer starts, Windows
	  will prompt you to log on to your system by typing a
	  username and password. If you want, you can leave the
	  Password box blank.)
	
	If You Can't Connect to a Microsoft Plus! Dial-Up Server
	--------------------------------------------------------
	
	If you cannot connect to a computer that is configured as
	a Microsoft Plus! Dial-Up Server, make sure your computer
	and the other computer are both using a common protocol
	in addition to TCP/IP. (Dial-Up Server cannot route TCP/IP.)
	
	To solve this problem, an additional Microsoft network protocol,
	such as NetBEUI or IPX, might need to be added to one or both
	machines. To add a protocol:
	
	1. In Control Panel, double-click the Network icon, and then
	  click Add.
	
	2. In the Select Network Component Type dialog box, click
	  Protocol, and then click Add.
	
	3. In the list of manufacturers, click Microsoft, and then
	  select the network protocol you want.
	
	If You Have Problems with the Sound Effects in 3D Pinball
	---------------------------------------------------------
	
	If you are experiencing a problem with the sound effects in Pinball,
	you can try running the Wmconfig program to fix the problem.
	
	1. Run the Wmconfig program.
	
	  Wmconfig is located in the folder that contains your 3D Pinball
	  files (typically, in the C:\PROGRAM FILES\PLUS!\PINBALL folder).
	
	2. In Wmconfig, select your sound card from the list. If you don't
	  know which sound card you have or you can't find it, click the
	  first Generic option in the list, and then click the Test button.
	
	  To find out which sound card you have, right-click My Computer
	  on the desktop, click Properties, and click the Device Manager
	  tab. Then, click the + to the left of Sound, Video, and Game
	  Controllers.
	
	3. Continue testing Generic sound options until the sound effects
	  sound the way you want them to.
	
	4. Restart Pinball.
	
	If 3D Pinball's Right Flipper Key Does Not Work
	-----------------------------------------------
	
	If you are using a non-U.S. keyboard with Pinball, the right
	flipper key will have no default setting and therefore will not
	work. To solve this problem:
	
	1. In 3D Pinball, click Options, and then click Player Controls.
	
	2. Change the Right Flipper setting to specify the key you want
	  to use.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	
