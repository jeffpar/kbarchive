---
layout: page
title: "Q85057: FFAPI: Summary of Changes"
permalink: /kb/085/Q85057/
---

## Q85057: FFAPI: Summary of Changes

	Article: Q85057
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a brief summary of the changes made to the File Format
	Application Programming Interface (FFAPI) between versions 2.1c and 3.0.
	
	MORE INFORMATION
	================
	
	1. Full drive path support in -d parameter, if path longer than one character.
	
	2. -k support in courput and courget.
	
	3. Allow native transport of FROM addresses in the SNADS (System Network
	  Architecture Distributed Services) mapping.
	
	4. Added truncation of subject line.
	
	5. Support for SNADS names with spaces.
	
	6. Enable PAT deletion in Remote FFAPI. Delete .PAT files associated with
	  attachments once the attachments have been processed correctly.
	
	7. Disabled address checking in remote client. Do not validate addresses when
	  FFAPI courput is running on a remote postoffice where there is insufficient
	  information to validate addresses.
	
	8. Change *GET.EXE so the TIME and DATE fields reflect the time and date at
	  which the message was submitted to the message system rather than the time
	  and date at which the message was extracted by courget.
	
	9. Auto version and file delete on error. Correct the output file delete
	  characteristics so the output file is deleted if both of the following cases
	  are met:
	
	   - courget created the file.
	
	   - No messages were written to the file.
	
	
	Additional query words: 3.00 pcmail 2.1d
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
