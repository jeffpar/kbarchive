---
layout: page
title: "Q143021: PPT7: Error Saving Presentation as PowerPoint 4.0 File"
permalink: kb/143/Q143021/
---

## Q143021: PPT7: Error Saving Presentation as PowerPoint 4.0 File

	Article: Q143021
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbdta kbconversion
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a PowerPoint for Windows 95, version 7.0 presentation as a
	PowerPoint 4.0 presentation, you receive the following error message:
	
	  This program has caused an illegal operation and will be shut down.
	  If the problem persists, please contact the program vendor.
	
	You may also receive a second error message indicating a stack fault error.
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall PowerPoint using the following steps:
	
	1. Rename the following files:
	
	  C:\MSOffice\Powerpnt\ppttools.ppa
	  C:\MSOffice\Powerpnt\ppttools1.ppa
	  C:\Windows\System\Vba32.dll
	  C:\Windows\System\Vbaen32.dll
	  C:\Windows\System\Vbaen32.olb
	
	2. Start PowerPoint Setup, and select Reinstall Current Installation.
	
	  You should now be able to save correctly in PowerPoint 4.0 format.
	
	Additional query words: 7.00 save saveas vba w_powerpt powerpnt
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
