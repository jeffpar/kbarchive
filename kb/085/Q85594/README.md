---
layout: page
title: "Q85594: Application Cannot Clear the Windows Help History List"
permalink: /kb/085/Q85594/
---

## Q85594: Application Cannot Clear the Windows Help History List

	Article: Q85594
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Windows 3.1 Help application, when the user chooses the History button on
	the button bar, Windows Help displays a list of the previous 40 topics
	accessed.
	
	If the user closes the Windows Help application and launches it again, Windows
	Help creates a new history list. However, if one application launches the
	Windows Help application and another application calls Windows Help to display a
	different help file, the history list can contain topics from each help file.
	This allows the user to move back and forth between help files.
	
	Windows Help version 3.1 does not provide a method to empty the history list and
	remove references to any prior help files.
	
	Additional query words: 3.10 WinHelp HC HC.EXE HC31.EXE HCP.EXE
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
