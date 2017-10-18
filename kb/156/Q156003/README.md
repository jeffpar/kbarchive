---
layout: page
title: "Q156003: PPT: Error Trying to Install Internet Assistant for PowerPoint"
permalink: kb/156/Q156003/
---

## Q156003: PPT: Error Trying to Install Internet Assistant for PowerPoint

	Article: Q156003
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0,97
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Internet Assistant for Microsoft PowerPoint on a
	computer that has PowerPoint 4.0 or PowerPoint 97 installed, but not PowerPoint
	95, you may receive the following error message:
	
	  Error: You don't have Visual Basic add-ins installed with PowerPoint. Please
	  run PowerPoint setup
	
	CAUSE
	=====
	
	PowerPoint 95 is designed to accept add-in products written in Microsoft Visual
	Basic. The setup program for the Internet Assistant checks the Windows Registry
	to see if that add-in support has been installed. If PowerPoint 95 has not been
	installed, the proper information is not written to the Windows Registry.
	
	You may also receive this error if you install PowerPoint 95, but you choose the
	Laptop (minimum) installation option. The Laptop installation does not install
	the Visual Basic add-in support.
	
	PowerPoint 97 has this ability and does not need to have the Internet Assistant
	installed to provide this service. It can be accessed from the File menu.
	
	RESOLUTION
	==========
	
	If you have PowerPoint 4.0 and you want to use the Internet Assistant, you must
	upgrade to PowerPoint 95. Furthermore, when you install PowerPoint 95, you
	should not choose the Laptop (minimum) installation.
	
	If you have already installed PowerPoint 95 with the Laptop installation, use
	PowerPoint Setup to remove PowerPoint. Then, reinstall it using the Typical or
	Custom/Complete installation choices.
	
	Additional query words: 4.0 7.0 ppt4.0 ppt7.0 ppt4 ppt7 VBA ppa IA pptia pptia.exe ppt97 ppt8.0 8.0
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbPowerPt97 kbZNotKeyword2 kbPowerPt97Search kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0,97
	Issue type        : kbprb
	
	=============================================================================
	
