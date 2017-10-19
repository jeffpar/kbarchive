---
layout: page
title: "Q130075: TEMP Environment Variable Overwritten in Command Prompt"
permalink: /kb/130/Q130075/
---

## Q130075: TEMP Environment Variable Overwritten in Command Prompt

	Article: Q130075
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TEMP environment variable is set to a series of Xs in an MS-DOS virtual
	machine (or command prompt).
	
	CAUSE
	=====
	
	If the MS-DOS TEMP environment variable is set to a directory that does not
	exist, Windows 95 automatically overwrites the variable with a series of Xs.
	
	
	RESOLUTION
	==========
	
	To make sure that the TEMP environment variable is valid, use any one of the
	following methods:
	
	- Remove the SET TEMP statement from the AUTOEXEC.BAT file.
	
	- Create the directory that the TEMP environment variable points to.
	
	- Change the SET TEMP statement to point to a directory that exists.
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
