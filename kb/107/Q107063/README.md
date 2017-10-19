---
layout: page
title: "Q107063: PC Win: Err Msg: An Error Occurred While Moving..."
permalink: /kb/107/Q107063/
---

## Q107063: PC Win: Err Msg: An Error Occurred While Moving...

	Article: Q107063
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0b and 3.2 of Microsoft Mail for Windows, if you try to make a
	second-level folder a root-level folder in an export Mail message file (MMF)
	operation, and a folder with that name already exists at the root level in the
	export file, the following error message occurs:
	
	  An error occurred while moving or copying a folder.
	
	CAUSE
	=====
	
	This problem occurs because the export program is attempting to create two
	folders with the same name at the same level.
	
	RESOLUTION
	==========
	
	To avoid this problem, do one of the following when you export folders:
	
	- Do not change folder levels for folders with identical names.
	
	-or-
	
	- Choose the option to rename the folder in the Duplicate File Name dialog box.
	
	
	Additional query words: 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
