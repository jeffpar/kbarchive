---
layout: page
title: "Q112204: PC Adm: Doc Err: After Completing Task Import"
permalink: kb/112/Q112204/
---

## Q112204: PC Adm: Doc Err: After Completing Task Import

	Article: Q112204
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 283 of the version 3.0 Microsoft Mail for PC Networks
	"Administrator[ASCII 146]s Guide" and on page 322 of the version 3.2
	"Administrator's Guide," it states that after the Import utility completes a
	task it will display MS-DOS errorlevel codes. This is misleading; the codes are
	not visible to the user.
	
	MORE INFORMATION
	================
	
	The documentation does not explicitly state that the Import utility does not
	generate external errorlevel codes, but rather internal errorlevel codes. The
	Import utility will generate various MS-DOS internal errorlevel codes when it
	participates in directory synchronization (Dir-Sync).
	
	These codes are typically received and processed by DISPATCH.EXE, which is
	responsible for calling and governing the automatic Dir-Sync process.
	
	The IMPORT utility itself incorporates its own error codes to be received and
	processed by DISPATCH.EXE during the automated Dir-Sync process. Mail
	administrators attempting to employ any fault tolerance schemes dependent on
	these implied external errorlevel codes will unlikely be able to do so.
	
	
	Additional query words: 3.00 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
