---
layout: page
title: "Q161204: PPT7: WLL's May Cause Write-Up to Fail"
permalink: kb/161/Q161204/
---

## Q161204: PPT7: WLL's May Cause Write-Up to Fail

	Article: Q161204
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the PowerPoint 7.0 Write-Up feature, the first slide of your
	presentation may be copied into Microsoft Word, but the remaining slides may not
	be copied.
	
	CAUSE
	=====
	
	The Write-Up feature may not behave as expected if a macro or add-in (Word
	Linked Library) is modifying the normal behavior of Microsoft Word.
	
	
	NOTE: Add-ins usually have a WLL file extension.
	
	
	RESOLUTION
	==========
	
	Remove the Contents of the WinWord Startup Directory
	----------------------------------------------------
	
	1. Exit from Microsoft Word.
	
	2. Open Word's StartUp directory. By default, the path to this folder is
	  MSOffice\Winword\Startup.
	
	3. Remove the contents of this folder.
	
	The Write-Up feature should now behave as expected.
	
	Additional query words: 7.00 write up send to
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
