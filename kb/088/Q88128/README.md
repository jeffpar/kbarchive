---
layout: page
title: "Q88128: BUG: Minimized Windows Help Yields Incorrect Icon"
permalink: kb/088/Q88128/
---

## Q88128: BUG: Minimized Windows Help Yields Incorrect Icon

	Article: Q88128
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a Microsoft Windows Help file, when a topic is displayed in a secondary
	window, the icon specified in the ICON statement in the [OPTIONS] section of the
	Help project (.HPJ) file does not appear when the user minimizes the Help
	application. This condition persists even after the user closes the secondary
	window.
	
	CAUSE
	=====
	
	The topic in the secondary window is stored in a separate Help file. The icon
	from this file displaces the icon for the main Help file.
	
	RESOLUTION
	==========
	
	To work around this problem, modify the ICON statement in the [OPTIONS] section
	of the .HPJ file that contains the topic for the secondary window to specify the
	same icon as the main Help file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows Help version 3.1.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10 WinHelp HC31 HC31.EXE HCP HCP.EXE ICON=icon-file
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
