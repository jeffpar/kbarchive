---
layout: page
title: "Q198039: WD97: Understanding the Template Path and Normal.dot"
permalink: /kb/198/Q198039/
---

## Q198039: WD97: Understanding the Template Path and Normal.dot

	Article: Q198039
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you click New on the File menu, the templates listed in the Template box
	are the templates found in the directory specified in the File Locations tab for
	User Templates or Workgroup Templates. You can change this location by clicking
	Options on the Tools menu, selecting the File Type, and clicking the Modify
	button.
	
	If you don't have a directory set for your User Templates, but you have a
	Workgroup Templates directory set, Word looks to the Workgroup directory for a
	Normal.dot file. If you have a workstation installation and you set both the
	User Templates and the Workgroup Templates directories, Word first looks in the
	Workgroup Templates directory for Normal.dot. Word searches for Normal.dot in
	the following order:
	
	  User-Dot-Path
	
	  Workgroup-Dot-Path
	
	  Word Program directory
	
	  Current directory
	
	If Word cannot find the Normal template in any of the above locations, it uses
	the preset program default settings.
	
	MORE INFORMATION
	================
	
	This article uses four examples to demonstrate how Word searches for
	Normal.dot.
	
	Situation 1
	-----------
	
	If your dot-path is set to C:\templates and there is no Normal.dot file in
	C:\templates or in the Word for Windows program directory, Word uses the
	dot-path correctly.
	
	Situation 2
	-----------
	
	If your dot-path is set to C:\Templates and there is no Normal.dot file in
	C:\Templates but there is in the Word for Windows program directory, Word for
	Windows uses the Normal.dot file in the Word for Windows program directory.
	
	NOTE: If you are working over a network and the Normal.dot file is in the program
	directory, Normal.dot should be read-only; therefore, you will receive read-only
	errors when you save changes to Normal.dot.
	
	WARNING: If you are working over a network and the Normal.dot file is in the
	program directory but is not marked as read-only, Word uses that copy of
	Normal.dot, which can cause unexpected results for all users running Word from
	the same network location.
	
	Situation 3
	-----------
	
	If your dot-path is set to C:\Templates and there is a Normal.dot file in
	C:\Templates and in the Word for Windows program directory, Word for Windows
	uses the dot-path.
	
	Situation 4
	-----------
	
	If your dot-path is set to C:\Templates and there is a Normal.dot file in
	C:\Templates but not in the Word for Windows program directory, Word for Windows
	uses the dot-path.
	
	Additional query words: READ ONLY
	
	======================================================================
	Keywords          : kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
