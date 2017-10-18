---
layout: page
title: "Q128324: PC DOS: Err Msg: Notice 109 Accessing Folders"
permalink: kb/128/Q128324/
---

## Q128324: PC DOS: Err Msg: Notice 109 Accessing Folders

	Article: Q128324
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you first launch versions 3.2 and 3.2a of Microsoft Mail for PC Networks,
	MS-DOS workstation, the following error message may occur:
	
	  Notice 109 Accessing Folders.
	
	The correct path to the user's directory may be shown when you run the
	Administration program (ADMIN.EXE) under Local-Admin, Options, Path. However,
	when you look in the MS-DOS client under Options, Folders, Private Storage,
	Local-Storage, the path will include extended characters.
	
	CAUSE
	=====
	
	A corrupt MODEM.GLB file may cause corrupted information to be written to the
	ACCESS3.GLB when the user is first created.
	
	RESOLUTION
	==========
	
	Rename the MODEM.GLB file, and re-launch ADMIN.EXE so that a new MODEM.GLB file
	will be created.
	
	
	Additional query words: 3.20 3.20a error MODEM.GLB DOS Client
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
