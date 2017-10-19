---
layout: page
title: "Q119842: PPT: &quot;Server Not Found&quot; Error Editing 3.0 Slide in 4.0"
permalink: /kb/119/Q119842/
---

## Q119842: PPT: &quot;Server Not Found&quot; Error Editing 3.0 Slide in 4.0

	Article: Q119842
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit a graph from a PowerPoint 3.0 presentation using PowerPoint 4.0,
	you may receive the following error: The server application, source file, or
	item cannot be found. Make sure the application is properly installed, and that
	it has not been deleted, moved, or renamed.
	
	CAUSE
	=====
	
	This will occur if the following two circumstances are true:
	
	1. Microsoft Graph version 3.0 was never installed on your machine.
	
	2. The PowerPoint 4.0 Setup option to automatically update Graph 3.0 objects to
	  Graph 5.0 was not chosen.
	
	RESOLUTION
	==========
	
	You can configure Microsoft Graph 5.0 so that it can open Graph 3.0 objects. To
	do this, double-click the Graph AutoConvert icon, which can be found in your
	PowerPoint group in Program Manager. Choose the On button.
	
	MORE INFORMATION
	================
	
	During the setup of PowerPoint 4.0, there is an option to automatically convert
	graphs made by Graph version 3.0 to Graph version 5.0. This includes a warning
	that PowerPoint 3.0 presentations opened in PowerPoint 4.0 may no longer be
	compatible with PowerPoint 3.0.
	
	If the choice is made not to automatically convert graphs, PowerPoint 3.0
	presentations opened by PowerPoint 4.0 will contain graphs that will use
	Microsoft Graph version 3.0 for editing. If Graph 3.0 is not installed on the
	computer, you will receive the above error message.
	
	If you use the Graph AutoConvert program to activate auto-conversion, all Graph
	version 3.0 graphs will update to version 5.0 and allow the installed version of
	Graph to edit them.
	
	Additional query words: 4.00a power point powerpt err msg ppt95 winppt 4.00c
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
