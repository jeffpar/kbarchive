---
layout: page
title: "Q134545: Restart Problems When Running Ssmode.exe"
permalink: /kb/134/Q134545/
---

## Q134545: Restart Problems When Running Ssmode.exe

{% raw %}

	Article: Q134545
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Shut Down command to restart your computer, colored boxes may
	appear on the screen.
	
	CAUSE
	=====
	
	This problem can occur if you load Ssmode.exe in the Autoexec.bat file.
	
	RESOLUTION
	==========
	
	To eliminate the restart problem, remove Ssmode.exe from the Autoexec.bat file.
	Note that this resolution affects the video card's refresh rate, and may cause
	the card to run in interlaced mode.
	
	MORE INFORMATION
	================
	
	The Ssmode.exe tool sets the refresh rate on Diamond SpeedStar 64 video cards.
	Diamond has developed a Windows 95 display driver that can set the refresh rate
	on these cards. To install the Diamond SpeedStar 64 display drivers, follow
	these steps:
	
	1. In Control Panel, double-click the Display icon.
	
	2. On the Settings tab, click Change Display Type.
	
	3. In the Adapter Type section, click Change.
	
	4. Click the Have Disk button.
	
	5. In the Copy Manufacturer's Files From box, type the following line and then
	  press ENTER
	
	  " <drive>:\drivers\display\diamond " (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM drive containing the
	  Windows 95 CD-ROM.
	
	6. In the Models box, click the model matching the video card in your computer,
	  and then click OK.
	
	7. Click Close until you are prompted to restart your computer, and then click
	  Yes.
	
	8. After Windows 95 restarts, you can select different resolutions and color
	  depths using the Display tool in Control Panel.
	
	Additional query words: cirrus logic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
