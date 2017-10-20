---
layout: page
title: "Q123485: Troubleshooting Print Overflow/Overrun Errors w/LaserJet 4"
permalink: /kb/123/Q123485/
---

## Q123485: Troubleshooting Print Overflow/Overrun Errors w/LaserJet 4

{% raw %}

	Article: Q123485
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Windows-based application to a Hewlett-Packard (HP)
	LaserJet printer, you may receive a print "overrun" or "overflow" error.
	LaserJet printers display either error 20 or error 21, both of which are defined
	as "Printer out of memory." This error is most likely to occur when you print
	certain BorderArt images from Publisher 2.0 that contain circles, such as the
	Hearts or Hypnotic BorderArt images to a Hewlett-Packard (HP) LaserJet 4 printer
	using printer driver versions 3.1.18 and earlier.
	
	CAUSE
	=====
	
	These errors occur when information sent to the printer exceeds the amount of
	installed printer memory.
	
	MORE INFORMATION
	================
	
	The HP-GL/2 printer language is strictly vector based. It defines a curve using
	a recursive algorithm creating a series of very short lines. Some basic objects
	such as a circle in BorderArt are printed by defining thousands of lines. This
	may overflow the printer's memory. Adding memory to the printer does not
	necessarily resolve the error message.
	
	In raster mode, images are interpreted as bitmaps, so the printer memory does not
	become overloaded with a large number of line descriptions.
	
	RESOLUTION
	==========
	
	Several options that can help prevent these errors are listed below.
	
	NOTE: These workarounds assume you are using Microsoft Publisher; however, they
	apply to many other Windows-based programs. The exact steps for adjusting
	printer options may vary in your application.
	
	Windows 3.1x
	------------
	
	Workaround 1:
	
	Turn on page protection. To do this:
	
	1. Run Windows Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Select the entry for the LaserJet under Installed Printers, then choose
	  Setup.
	
	4. In the Page Protection box, select either Letter or On.
	
	NOTE: In Publisher, after turning on page protection in Control Panel, you must
	choose Specific Printer and then choose Default Printer for the page- protection
	change to affect the current document.
	
	
	
	Workaround 2:
	
	Switch from HP-GL/2 mode to raster mode.
	
	NOTE: Only LaserJet 4 printers have this option.
	
	1. Run Windows Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Select the entry for the LaserJet under Installed Printers, then choose
	  Setup.
	
	4. Choose the Options button.
	
	5. In the Graphics Mode box, change HP-GL/2 to Raster.
	
	Workaround 3:
	
	Lower the print resolution.
	
	NOTE: Try this change for both types of printing on the LaserJet 4 (raster and
	HP-GL/2).
	
	1. Run Windows Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Select the entry for the LaserJet under Installed Printers, then choose
	  Setup.
	
	4. Do one of the following:
	
	   - Change the value for Printer Resolution to a lower value.
	
	  -or-
	
	   - Choose the Options button. In the Graphics Quality box, change the value
	     from High to either Medium or Low.
	
	Workaround 4:
	
	Use a LaserJet III printer driver. To do this:
	
	1. Run Windows Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Select the LaserJet III, then click the Set As Default Printer button. If a
	  LaserJet III is not available, do the following:
	
	  a. Choose the Add button.
	
	  b. Select HP LaserJet III from the list.
	
	  c. Choose Install and follow the prompts.
	
	  d. Set the LaserJet III as your default printer.
	
	Workaround 5:
	
	Print to the LaserJet using an add-on PostScript option.
	
	NOTE: This workaround can be used only if the printer came with a PostScript
	option installed.
	
	1. Run Windows Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Select the appropriate HP PostScript model.
	
	4. Click the Set As Default Printer button.
	
	If the appropriate model with PostScript is not available, do the following:
	
	1. Run Windows Control Panel.
	
	2. Double-click the Printers icon.
	
	3. Choose the Add button.
	
	4. Select the appropriate HP LaserJet model with PostScript from the list.
	
	5. Choose Install, and follow the prompts.
	
	6. Select the printer, and set it as your default printer.
	
	Windows 95
	----------
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right mouse button to click the HP LaserJet 4 printer, and then click
	  Properties on the menu that appears.
	
	3. Click the Paper tab, and then verify that the paper size and orientation
	  settings match the document you are trying to print.
	
	4. Click the Device Options tab, and then enable the Page Protection option.
	
	5. Verify that the Printer Memory setting matches your printer's configuration.
	
	6. Click OK.
	
	
	Additional query words: tshoot 2.00 2.0a mspub error 21 20 HP4 print printing rastor
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbWin3xSearch kbWin95search kbZNotKeyword3 kbWin310 kbWin311
	Version           : Win2000:3.1,3.11,95
	
	=============================================================================
	

{% endraw %}
