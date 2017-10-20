---
layout: page
title: "Q134550: No Sound in MS-DOS-Based Programs with Gravis Ultrasound Card"
permalink: /kb/134/Q134550/
---

## Q134550: No Sound in MS-DOS-Based Programs with Gravis Ultrasound Card

{% raw %}

	Article: Q134550
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
	
	When you are using a Gravis Ultrasound (GUS) sound card, you may not hear any
	sound in MS-DOS-based programs that use the sound card.
	
	CAUSE
	=====
	
	Windows 95 does not include updated GUS drivers. Windows 95 continues to use the
	Windows 3.1 GUS drivers, which do not provide Sound Blaster emulation for
	MS-DOS-based programs.
	
	RESOLUTION
	==========
	
	First, try to configure the program for native GUS support rather than Sound
	Blaster emulation. If you cannot do so, configure the program to run in MS-DOS
	mode. To do so, follow these steps:
	
	1. Use the right mouse button to click the program icon, and then click
	  Properties on the menu that appears.
	
	2. On the Program tab, click the Advanced button.
	
	3. Click the MS-DOS Mode check box to select it.
	
	4. Click the Use Current MS-DOS Configuration option button.
	
	5. Click OK to close all the dialog boxes that have opened.
	
	Run the program by double-clicking the icon, or by typing the program name in the
	Run dialog box. Note that typing the program name at an MS-DOS prompt does not
	cause the program to use the new configuration.
	
	You may need to take additional steps to set up the mouse, sound card, or CD-ROM
	drive; follow standard procedures for MS-DOS mode programs to make such services
	available.
	
	You may also want to contact Gravis to inquire about obtaining updated GUS
	drivers.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
