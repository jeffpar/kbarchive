---
layout: page
title: "Q172007: MSB Rainforest: Hangs When Exiting the Driver's License Screen"
permalink: /kb/172/Q172007/
---

## Q172007: MSB Rainforest: Hangs When Exiting the Driver's License Screen

{% raw %}

	Article: Q172007
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Rainforest for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Magic School Bus (MSB) Explores the Rainforest hangs at the Driver's License
	screen after you click the Snake to exit the bus. Your pointer remains an
	hourglass, the background music continues to play, and the CD-ROM drive is
	continually accessed.
	
	When you press the CTRL+ALT+DELETE key combination on your keyboard to open the
	Close Program dialog box, MSB Rainforest is shown as not responding.
	
	NOTE: On some computers, the program will eventually continue to the next screen
	if left for a few minutes.
	
	CAUSE
	=====
	
	This occurs if you are using real mode (MS-DOS) CD-ROM drivers.
	
	RESOLUTION
	==========
	
	To resolve this problem, update your real mode CD-ROM drivers to Windows 32-bit
	protected-mode CD-ROM drivers.
	
	MORE INFORMATION
	================
	
	Windows protected-mode drivers should be available from the CD-ROM drive
	manufacturer. Some protected-mode CD-ROM drivers are available in Windows.
	
	For additional information about loading protected mode CD-ROM drivers, see the
	following article in the Microsoft Knowledge Base:
	
	  Q151634 Protected-Mode CD-ROM Drive Support in Windows
	
	Additional query words: 1.00 msbrain rain forest cd rom hung
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbHomeProdSearch _IKkbbogus kbKidsSearch kbScholasticRainForest kbMSBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
