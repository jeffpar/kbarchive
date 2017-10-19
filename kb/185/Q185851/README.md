---
layout: page
title: "Q185851: Parts of Volume Control Are Cut Off at Some Resolutions"
permalink: /kb/185/Q185851/
---

## Q185851: Parts of Volume Control Are Cut Off at Some Resolutions

	Article: Q185851
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbui win95
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view the Volume Control tool, some of the devices located on the
	right side of Volume Control may be cut off or missing.
	
	CAUSE
	=====
	
	This problem can occur if the width of Volume Control exceeds the width of the
	Windows desktop. This can occur if Volume Control is configured to display more
	devices than can fit on the visible portion of the desktop. Note that this
	problem is more likely to occur at screen resolutions of 800 by 600 pixels or
	less.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one or more of the following methods:
	
	Method 1
	--------
	
	1. Click Start, point to Programs, point to Accessories, point to Multimedia,
	  and then click Volume Control. If Volume Control is not listed, click Start,
	  click Run, type "Sndvol32.exe" (without quotation marks) in the Open box, and
	  then click OK.
	
	  In Windows 98, click Start, point to Programs, point to Accessories, point to
	  Entertainment, and then click Volume Control.
	
	2. Press CTRL+S to view Volume Control in a smaller window. If you want to view
	  Volume Control in its original window size, press CTRL+S again. Note that
	  when you view Volume Control in a smaller window, you may notice the
	  following differences:
	
	   - The Status bar is not displayed.
	
	   - The speaker icons are not displayed.
	
	   - The sliders are missing the words Balance and Volume.
	
	   - The Advanced button is not displayed.
	
	   - The light-emitting diode (LED) displays are not displayed.
	
	Method 2
	--------
	
	Increase your screen resolution. To do so, use the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Display.
	
	2. Click the Settings tab, and then move the slider under Screen Area to a
	  higher screen resolution.
	
	3. Click OK, and if you are prompted to restart your computer, do so.
	
	Method 3
	--------
	
	Configure your computer to use small screen fonts. Using large fonts may reduce
	the number of volume controls that can fit on the screen.
	
	To do so, use the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Display.
	
	2. Click the Settings tab, click Small Fonts in the Font Size box, and then
	  click OK.
	
	  In Windows 98, click the Advanced button on the Settings tab to access the
	  Font Size box.
	
	3. When you are prompted to restart your computer, do so.
	
	Method 4
	--------
	
	Configure the Volume Control to display fewer mixer listings. To do so, use the
	following steps:
	
	1. Click Start, point to Programs, point to Accessories, point to Multimedia,
	  and then click Volume Control. If Volume Control is not listed, click Start,
	  click Run, type "Sndvol32.exe" (without quotation marks) in the Open box, and
	  then click OK.
	
	  In Windows 98, click Start, point to Programs, point to Accessories, point to
	  Entertainment, and then click Volume Control.
	
	2. On the Options menu, click Properties.
	
	3. In the Show The Following Volume Controls box, click one of the listed volume
	  control check boxes to clear it, and then click OK. If the Volume Control is
	  not totally visible, repeat steps 2-3 until you can view all of the Volume
	  Control. You may want to leave the most commonly used controls such as Volume
	  Control(or Speaker), Wave, MIDI, and CD Player enabled for easy access.
	
	4. Close Volume Control.
	
	Method 5
	--------
	
	If you are using Windows 98, you may want to enable support for multiple
	monitors. With this feature, Volume Control can extend past the edge of the
	primary monitor screen without being cut off. For information about how to
	enable support for multiple monitors, see the following article in the Microsoft
	Knowledge Base:
	
	  Q179602 How to Enable Multiple Display Support Using Windows 98
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Volume Control.
	
	MORE INFORMATION
	================
	
	The following list is a general guide for the number of devices you can display
	at various resolutions and font sizes:
	
	Resolution   Font Sizes    Number of Devices
	--------------------------------------------
	640x480      small fonts   7
	640x480      large fonts   5
	
	800x600      small fonts   8
	800x600      large fonts   6
	
	1024x768     small fonts  11
	1024x768     large fonts   8
	
	Additional query words: truncated sndvol32 chopped cropped
	
	======================================================================
	Keywords          : kbui win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
