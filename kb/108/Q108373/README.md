---
layout: page
title: "Q108373: PC WSPlus: Running Schedule+ Demo from a Network Installation"
permalink: /kb/108/Q108373/
---

## Q108373: PC WSPlus: Running Schedule+ Demo from a Network Installation

	Article: Q108373
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, the Schedule+ Demo
	requires that the working directory be the directory containing the
	demonstration program files (PLAY.EXE, SCHDPLUS.EXE, DEMOFX.DEX, and
	CBLIB3.DLL).
	
	This can create problems when you run Schedule+ from the network (a network
	installation). Typically, a network administrator would want to limit the
	directories that contain executable files to Read Only status. However, with the
	Schedule+ Demo configuration, this is not possible.
	
	RESOLUTION
	==========
	
	The following steps outline a procedure to create an alternate directory for
	just the Schedule+ Demo files:
	
	1. Create the directory X:\SCHDDEMO on the file server, where X is the server
	  from which the Schedule+ Demo files are to be run.
	
	2. Copy the following files from the SCHDPLUS directory to the newly created
	  shared directory:
	
	  PLAY.EXE
	  SCHDPLUS.LES
	  DEMOFX.DEX
	  CBLIB3.DLL
	
	3. From the Windows File Manager File menu, choose Associate. In the Files With
	  Extension box, type "les" (without the quotation marks). In the Associate
	  With box type "PLAY.EXE" (without the quotation marks). Choose OK.
	
	4. From the Windows Program Manager File menu, choose New, then select Program
	  Item. Then type the following information:
	  +----------------------------------------------+
	  | In This Box       | Type                     | 
	  +----------------------------------------------+
	  | Description       | Schedule+ Demo           | 
	  +----------------------------------------------+
	  | Command Line      | x:\schddemo\schdplus.les | 
	  +----------------------------------------------+
	  | Working Directory | x:\schddemo              | 
	  +----------------------------------------------+
	
	You should now be able to run the Schedule+ Demo by double-clicking the Schedule+
	Demo icon or by double-clicking the SCHDPLUS.LES file in File Manager.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
