---
layout: page
title: "Q136801: XCLN: Err Msg: The File Could Not Be Saved"
permalink: /kb/136/Q136801/
---

## Q136801: XCLN: Err Msg: The File Could Not Be Saved

	Article: Q136801
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open an attachment, you may receive the following error:
	
	  The file could not be saved.
	
	CAUSE
	=====
	
	This error message can appear when the computer running the Microsoft Exchange
	Windows client is very low on free hard disk space.
	
	When you open an attachment, the Microsoft Exchange Windows client saves the
	attachment as a temporary file and then uses the Windows file extension
	association to open the attachment. If there is not sufficient disk space to
	save the temporary file, the above error is generated.
	
	RESOLUTION
	==========
	
	To resolve this problem, free hard disk space by deleting some files.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0
	
	=============================================================================
	
