---
layout: page
title: "Q127914: MSB Human: ErrMsg: This Program Requires 256 Colors Video Mode"
permalink: /kb/127/Q127914/
---

## Q127914: MSB Human: ErrMsg: This Program Requires 256 Colors Video Mode

{% raw %}

	Article: Q127914
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Magic School Bus Explores the Human Body on a computer with an
	ATI Mach 64 video card installed, you may receive the following error message:
	
	  This program requires 256 colors video mode. Run Windows Setup to
	  reconfigure.
	
	CAUSE
	=====
	
	Magic School Bus Human Body requires a 256 Colors display setting to run.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate steps below for your version of
	Windows.
	
	Windows 95/98
	-------------
	
	Use the display drivers for the ATI card that are included with Windows.
	
	For information about how to change video drivers, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q131806 Windows 95/98: How to Install or Change a Display Driver
	
	
	Windows 3.x
	-----------
	
	Use the following steps to resolve the problem:
	
	Check to see that the video display driver is set to 256 colors:
	
	1. In Program Manager, open the ATI DeskTop program group.
	
	2. Run ATI DeskTop, then choose ATI FlexDesk.
	
	3. If 256 Colors is not already selected, select 256 Colors.
	
	4. Click the Advanced button.
	
	5. Click Color Pallete, then choose OK.
	
	6. Click OK to close FlexDesk.
	
	7. When you receive the message to restart Windows, click Continue.
	
	Once 256-color video mode has been selected, follow these steps to turn off
	(disable) ATI's WinSwitch:
	
	1. In Program Manager, open the ATI DeskTop program group.
	
	2. Run ATI DeskTop, then choose ATI FlexDesk.
	
	3. Make sure that the Winswitch box is not checked. This will disable the
	  Winswitch feature of the ATI video driver.
	
	4. Click OK to close WinSwitch.
	
	5. Restart Windows when prompted to do so.
	
	After following these steps, you should be able to install and run the program
	successfully.
	
	MORE INFORMATION
	================
	
	WinSwitch is an ATI utility that allows you to use keyboard commands to
	dynamically change the number of colors available on the screen in Windows. To
	do this, however, it loads all 64,000 colors so they can be made available as
	needed.
	
	When the 256 color option is selected in combination with WinSwitch, the color
	palette is not in use.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msbhb msbss frizz kbmm error errors messages desk top flex setup driver drivers frizzle liz screen display number limit requirement winmsbhuman msbhuman
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticHuman kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
