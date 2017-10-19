---
layout: page
title: "Q139990: Sound Problems with ESS ES1688 AudioDrive"
permalink: /kb/139/Q139990/
---

## Q139990: Sound Problems with ESS ES1688 AudioDrive

	Article: Q139990
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): win31 win95
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a computer with an ESS Technology ES1688 AudioDrive sound
	card, sound may not work correctly, or may cause programs to stop responding
	(hang). In Windows 95, Device Manager may report a problem with the device, or
	that the device is not working correctly.
	
	CAUSE
	=====
	
	The ESS AudioDrive device that exhibits this problem is an onboard chip that is
	soldered to the motherboard. Early versions of the driver for this device cannot
	reserve physical RAM, and allow the driver to be paged out of virtual memory.
	The device is not capable of using virtual memory.
	
	Although Windows 95 correctly identifies the sound card as an ESS Technology
	ES1688 AudioDrive sound card, the Windows 95 driver does not work correctly.
	
	RESOLUTION
	==========
	
	Windows 95
	----------
	
	To resolve this issue, use either of the following methods:
	
	- Remove the ES1688 sound card driver and replace it with the ESS ES688 sound
	  card driver. To do so, follow these steps:
	
	  1. In Control Panel, double-click the System icon.
	
	  2. On the Device Manager tab, double-click the Sound, Video, And Game
	     Controllers branch.
	
	  3. Click the ESS Technology ES1688 AudioDrive device, and then click Remove.
	     Click Close or OK until you return to Control Panel.
	
	  4. In Control Panel, double-click the Add New Hardware icon.
	
	  5. Click Next, click the No option, and then click Next.
	
	  6. In the Hardware Types box, click Sound, Video, And Game Controllers, and
	     then click Next.
	
	  7. In the Manufacturers box, click ESS Technology, Inc.
	
	  8. In the Models box, click ESS ES688 AudioDrive, and then click Next.
	
	  9. Click Next to accept the default hardware settings for the audio card.
	
	  10. Click Finish.
	
	  11. Click Yes to restart your computer.
	
	- Obtain the ESS AudioDrive drivers version 4.2 or higher from ESS Technology.
	  Or, obtain the latest version of Media Pilot from Compaq Computer
	  Corporation. Media Pilot contains an update to the ESS AudioDrive drivers.
	
	Windows and Windows for Workgroups 3.1 and 3.11
	-----------------------------------------------
	
	Obtain the ESS AudioDrive drivers version 4.2 or higher from ESS Technology. Or,
	obtain the latest version of Media Pilot from Compaq Computer Corporation. Media
	Pilot contains an update to the ESS AudioDrive drivers.
	
	MORE INFORMATION
	================
	
	Although Windows 95 detects the ES1688 AudioDrive device, the driver does not
	work correctly. Replacing the driver with the ES688 AudioDrive driver corrects
	the problem.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.11 cd audio player
	
	======================================================================
	Keywords          : win31 win95 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
