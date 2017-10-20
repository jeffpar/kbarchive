---
layout: page
title: "Q86872: Program Manager DDE Command AddItem Documentation"
permalink: /kb/086/Q86872/
---

## Q86872: Program Manager DDE Command AddItem Documentation

{% raw %}

	Article: Q86872
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Program Manager has a dynamic data exchange (DDE)
	command-string interface that allows another application to create, update, and
	delete groups and programs within groups. The text below extends the
	documentation for the AddItem command that begins on page 373 of the "Microsoft
	Windows Software Development Kit: Reference, Volume 1: Overview."
	
	MORE INFORMATION
	================
	
	The syntax for the AddItem command has the following form:
	
	  AddItem(CmdLine[, Name[, IconPath[, IconIndex[, xPos, yPos[,
	          DefDir[, HotKey[, fMinimize] ] ] ] ] ] ])
	
	The AddItem command instructs Program Manager to add an icon to an existing
	group.
	
	If you specify fewer than four parameters, the IconIndex defaults to the last
	icon in the group. For example:
	
	  AddItem(notepad.exe, "Notepad", notepad.exe)
	
	If you specify five or more parameters but do not specify values for xPos and
	yPos, the icon position defaults to 0, 0 (the first icon in the group). For
	example:
	
	  AddItem(notepad.exe, "Notepad", notepad.exe,,,, "c:\")
	
	Therefore, to create the last icon in the group and specify five or more
	parameters, set xPos and yPos to -1. For example:
	
	  AddItem(notepad.exe, "Notepad", notepad.exe,, -1, -1, "c:\")
	
	For the HotKey parameter, specify the ASCII value of the desired key. The
	application can create a key combination (for example, ALT+SHIFT+A) by adding
	one or more of the following values to the ASCII value for the key:
	
	               Decimal
	  Key           Offset
	  ---           ------
	  SHIFT            256
	  CTRL             512
	  ALT             1024
	  Extended        2048
	
	For example, ALT+SHIFT+A is signified by 1345 (1024+256+65).
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
