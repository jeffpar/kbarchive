---
layout: page
title: "Q99950: QH.EXE Does Not Support Most Cross-Reference Commands"
permalink: /kb/099/Q99950/
---

## Q99950: QH.EXE Does Not Support Most Cross-Reference Commands

	Article: Q99950
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.7,1.83; OS/2:1.7
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft QuickHelp for MS-DOS, versions 1.7, 1.83 
	- Microsoft QuickHelp for OS/2, version 1.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Professional Advisor Library Reference Manual" documents many
	cross-reference commands that the QuickHelp utility (QH.EXE) does not support.
	To use these commands in your help file, you must develop a help viewer
	application using the functions that the Microsoft Professional Advisor Library
	provides.
	
	MORE INFORMATION
	================
	
	Cross-reference commands direct the host application to perform an action when
	the user selects a hotspot. The Reference manual discusses these commands on
	page 19-21.
	
	QuickHelp, distributed with most Microsoft programming language products, can
	view help files, but is supports only a small subset of the cross-reference
	commands. The supported commands are as follows:
	
	  !B Back
	  !P Position
	  !M Mark
	
	To use any other cross-reference command in your help file, you must develop a
	help file viewing application using the Microsoft Advisor Library help engine.
	
	Additional query words: kbinf 1.70 1.83 helpmake rtf
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbQBASICSearch kbQuickHelpSearch kbQuickHelp170DOS kbQuickHelp183DOS kbQuickHelp170OS2
	Version           : MS-DOS:1.7,1.83; OS/2:1.7
	
	=============================================================================
	
