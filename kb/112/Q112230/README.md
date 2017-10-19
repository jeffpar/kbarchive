---
layout: page
title: "Q112230: FAX: Err Msg: App for Attached File Could Not Be Found"
permalink: /kb/112/Q112230/
---

## Q112230: FAX: Err Msg: App for Attached File Could Not Be Found

	Article: Q112230
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1a; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 2.1a 
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail version 3.0 Windows Client fails when trying to read a FAX
	attachment from a 2.1a version of the Microsoft Mail Gateway to FAX.
	
	The error message reads:
	
	  The application for the attached file 'M:\FAX\00000002.DCX
	  (or one of its components) could not be found.
	
	CAUSE
	=====
	
	The problem is that the 2.1 Gateway to FAX places the path name in front of the
	attachment file name.
	
	RESOLUTION
	==========
	
	Upgrade your Microsoft Mail Gateway to FAX to version 3.0.
	
	
	Additional query words: 2.10a 3.00 3.0a err msg errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMail300 kbMailGateFax210a
	Version           : MS-DOS:2.1a; WINDOWS:3.0
	
	=============================================================================
	
