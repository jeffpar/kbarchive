---
layout: page
title: "Q179802: XCLN: Error Msg: Application Error, Call to Undefined Dynalink"
permalink: kb/179/Q179802/
---

## Q179802: XCLN: Error Msg: Application Error, Call to Undefined Dynalink

	Article: Q179802
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the Windows 3.x Exchange or Outlook client, you may
	receive one of the following error messages:
	
	  Application Error
	  Call to Undefined Dynalink
	
	-or-
	
	  Application Error
	  Cannot find Mapi.dll
	
	CAUSE
	=====
	
	The Mapi.dll file, located in the c:\windows\system subdirectory by default, is
	missing, corrupted, or has been replaced by another version.
	
	WORKAROUND
	==========
	
	To correct the problem, perform one of the following steps:
	
	- Copy the Mapi.dll from another Windows 3.x client system that is working
	  properly.
	
	  -or-
	
	- Reinstall the Exchange client.
	
	  -or-
	
	- Expand Mapi.dll from the client CD-ROM cabinet (.Cab) files.
	
	  The syntax for the EXPAND (Expand.exe) utility is:
	  " EXPAND <sourcename> <destinationname>" (without the quotation
	  marks)
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0
	Issue type        : kbprb
	
	=============================================================================
	
