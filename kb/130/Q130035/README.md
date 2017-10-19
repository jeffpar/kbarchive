---
layout: page
title: "Q130035: PC Win: Troubleshooting Segment Load Failures in Mail"
permalink: /kb/130/Q130035/
---

## Q130035: PC Win: Troubleshooting Segment Load Failures in Mail

	Article: Q130035
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an application attempts to access a segment of code that is not in memory,
	Microsoft Windows will load it from the hard disk. If the segment cannot be
	loaded into memory the following error message will be generated:
	
	  Segment Load Failure
	
	CAUSE
	=====
	
	Segment Load Failures can be the result of any of the following:
	
	1. A discarded code segment has been damaged or moved.
	
	2. Windows has insufficient resources to load the file.
	
	3. Insufficient MS-DOS file handles.
	
	4. Corrupt binary files.
	
	RESOLUTION
	==========
	
	1. A discarded code segment has been damaged or moved.
	
	  Put a fresh copy of the appropriate file on the hard disk. You can find the
	  file on the Install diskettes, and then expand it, if necessary.
	
	2. Windows has insufficient resources to load the file.
	
	  Make sure that there are no other Windows applications running when you start
	  Mail. Ensure you do not have anything on the following lines of the WIN.INI:
	
	  LOAD=
	  RUN=
	
	  Also remove all items from the startup group, or suppress it on startup by
	  pressing and holding the SHIFT key.
	
	3. Insufficient MS-DOS file handles.
	
	  Ensure you have following minimum setting in the CONFIG.SYS:
	
	  FILES=60
	
	4. Corrupt binary files.
	
	  You may need to reinstall Windows.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q94380 Troubleshooting 'Segment Load Failure' Errors
	
	  Q82710 Causes of General Protection Faults
	
	  Q107471 WFWG 3.11 Err Msg: Segment Load Failure
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
