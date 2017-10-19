---
layout: page
title: "Q110892: Scenes Err Msg: Please Report File &quot;Common&#92;List1.C&quot;,Line=&quot;1007&quot;"
permalink: /kb/110/Q110892/
---

## Q110892: Scenes Err Msg: Please Report File &quot;Common&#92;List1.C&quot;,Line=&quot;1007&quot;

	Article: Q110892
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimu
	Last Modified: 07-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Scenes 1.0, you may receive the following
	error message:
	
	  Setup has encountered a problem.
	
	  Please report File="COMMON\LIST1.C",Line="1007" to Microsoft Product Support
	  Services.
	
	When you press ENTER or click OK, you receive the following error message:
	
	  FADDSECTIONFILESTOCOPYLIST() FAILED.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The path for the first installed picture set in the SCENES.INI file contains
	  less than three folder levels. For example:
	
	  [Picture Sets]
	  C:\Scenes\Sierra
	
	- A third-party terminate-and-stay-resident (TSR) program or memory manager is
	  interfering with the Scenes installation program.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Clean boot the computer to an MS-DOS prompt. For additional information about
	  how to clean boot Microsoft Windows 3.1, please see the following article in
	  the Microsoft Knowledge Base:
	
	  Q87290 What Is a Clean Boot for Windows 3.1?
	
	2. Start Windows in Standard mode. To do this, type "win /s" (without the
	  quotation marks) at the command prompt, and then press ENTER.
	
	3. Install Scenes, select the Custom Installation mode, and then follow the
	  instructions on the screen to install Scenes.
	
	Additional query words: 1.00 msscenes screen saver screensaver multi media multi-media mm mmtitles
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu 
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
