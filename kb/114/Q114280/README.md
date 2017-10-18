---
layout: page
title: "Q114280: PC WRmt: Selector Doesn't Allow Copy/Move Without ServerPath"
permalink: kb/114/Q114280/
---

## Q114280: PC WRmt: Selector Doesn't Allow Copy/Move Without ServerPath

	Article: Q114280
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail System Selector, provided with version 3.2 of Microsoft Mail
	Remote for Windows, won't let you copy the postoffice list or move your personal
	message file locally.
	
	CAUSE
	=====
	
	Microsoft Mail for Windows looks for the Mail system database in one of three
	places: The location specified by the ServerPath= entry in the MSMAIL.INI file,
	the drive specified by the ServerDrive= entry in MSMAIL.INI, or, if neither
	entry exists, the current directory of drive M.
	
	However, the Mail Remote for Windows System Selector, only looks at the
	ServerPath= entry in the MSMAIL.INI file and does not provide the copy or move
	functionality if the entry is invalid or does not exist.
	
	RESOLUTION
	==========
	
	Add a ServerPath= line to the [Microsoft Mail] section of your MSMAIL.INI file.
	Specify a drive and path (for example, M:\MAILDATA), a universal naming
	convention (UNC) path, or a Novell path.
	
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
