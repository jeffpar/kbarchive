---
layout: page
title: "Q165211: PPT7: Text Behind Object Prints w/ Some HP Printer Drivers"
permalink: /kb/165/Q165211/
---

## Q165211: PPT7: Text Behind Object Prints w/ Some HP Printer Drivers

{% raw %}

	Article: Q165211
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbdta
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place text behind an object to facilitate a build, the text behind the
	object may appear on the printout, even though you cannot see it on the screen.
	
	NOTE: This symptom also occurs in other programs that allow you to place a text
	object behind another object.
	
	CAUSE
	=====
	
	This behavior occurs if you are using one of the following printer drivers for
	Windows 95:
	
	  HP LaserJet II
	  HP LaserJet III
	  HP LaserJet IIIsi
	  HP LaserJet 4
	  HP LaserJet 4 Plus
	  HP LaserJet 4M Plus
	  Printers compatible with any of the above
	
	These printers use various versions of the Hewlett-Packard Printer Control
	Language (HPPCL). In HPPCL, text is printed on the page first and then graphics
	are overlaid on top of the text. If the graphic is not entirely opaque, the text
	shows through.
	
	RESOLUTION
	==========
	
	To print your file so that the text remains hidden behind the object, use one of
	the following methods.
	
	Method 1: Use the Print TrueType As Graphics Option
	---------------------------------------------------
	
	This method is effective for printing TrueType fonts to the LaserJet series II
	and III printers.
	
	The LaserJet 4 printer treats many of the common Windows TrueType fonts (such as
	Arial, Courier New, Times New Roman, and WingDings) as built-in fonts. If your
	text uses one of these fonts, and you are using a LaserJet 4 driver, this
	solution does not work.
	
	1. On the File menu, click Print.
	
	2. Click Properties.
	
	3. Click the Fonts tab.
	
	4. Click the Print TrueType As Graphics option, and then click OK.
	
	5. Click OK.
	
	Method 2: Use the PostScript Page Description Language
	------------------------------------------------------
	
	This method is effective when printing any font to a printer that supports the
	Adobe PostScript page description language in addition to HPPCL. The LaserJet
	IIIsi and 4si printers have built-in support for the Adobe PostScript language.
	Other printers may support this language if you install a PostScript option (an
	add-on card or cartridge). Make sure your printer supports PostScript before you
	use this method!
	
	1. On the Windows Start menu, point to Settings, and then click Printers.
	
	2. Double-click the Add A Printer icon.
	
	3. Follow the instructions on the screen to install a printer driver from the
	  following list that matches your printer model:
	
	  HP LaserJet IIIsi PS
	  HP LaserJet 4 PS
	  HP LaserJet 4 PS
	  HP LaserJet 4si PS
	  HP LaserJet 4 Plus PS
	  HP LaserJet 4M Plus PS
	
	4. Print your presentation using this driver.
	
	MORE INFORMATION
	================
	
	For more information about installing printer drivers, see your Windows printed
	documentation or online Help.
	
	
	Additional query words: ppt95 powerpt ppt blank grey hidden hp4 hp laserjet Box Textbox Over
	
	======================================================================
	Keywords          : kbprint kbdta 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
