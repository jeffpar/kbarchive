---
layout: page
title: "Q131977: Cannot Install Adaptec SCSI AudioMachine or AudioEdge Card"
permalink: /kb/131/Q131977/
---

## Q131977: Cannot Install Adaptec SCSI AudioMachine or AudioEdge Card

{% raw %}

	Article: Q131977
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Setup program for the Microsoft Windows Sound System software
	that is included with the Adaptec SCSI AudioMachine or Adaptec AudioEdge sound
	card, you receive the following error message:
	
	  This program may not work correctly with Windows. For more information, click
	  Help.
	
	If you click the Help button, the following message is displayed:
	
	  Do not run the Microsoft Sound System version 2.0 Setup program in
	  Windows 95. The Setup program replaces several system files that
	  cause Windows 95 to become unstable. If you install the Microsoft
	  Sound System version 2.0 before upgrading to Windows 95 you will
	  not have this problem.
	
	If you install Windows 95 on a computer with either of the Adaptec sound cards
	listed above installed, or you run the Add New Hardware Wizard after installing
	the sound card, the Adaptec sound card may be incorrectly detected as one of the
	following sound cards:
	
	- MS Windows Sound System Compatible
	
	- Creative Labs Sound Blaster
	
	- MPU-401 Compatible
	
	After you finish installing Windows 95, or you finish installing the sound card
	using the Add New Hardware Wizard, the sound card does not function properly.
	
	CAUSE
	=====
	
	The Windows Sound System Setup program is incompatible with Windows 95. In
	addition, the Adaptec SCSI AudioMachine and Adaptec AudioEdge sound cards are
	not completely compatible with Windows Sound System.
	
	
	RESOLUTION
	==========
	
	To work around this problem, obtain Windows 3.1 drivers for the sound card from
	the manufacturer and install the drivers in Windows 95. For information about
	obtaining and installing these drivers, please contact the sound card
	manufacturer.
	
	
	If the sound card has been incorrectly detected as one of the sound cards listed
	above, use the following steps to remove the incorrect drivers:
	
	1. Use the right mouse button to click My Computer, then click Properties on the
	  menu that appears.
	
	2. Click the Device Manager tab.
	
	3. Double-click the Sound, Video, And Game Controllers branch.
	
	4. Click the sound card you want to remove, then click Remove.
	
	5. Click OK.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
