---
layout: page
title: "Q85356: FAX: Special Formats for Profile Parameters"
permalink: /kb/085/Q85356/
---

## Q85356: FAX: Special Formats for Profile Parameters

	Article: Q85356
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of the Microsoft Mail Gateway to Fax earlier than version 3.0, the
	following parameters need to be formatted correctly:
	
	  Parameter      Action
	  ---------      ------
	
	  Printer path   Add a backslash (\) at the end of the path.
	  Logo file      Add a backslash (\) at the end of the path.
	
	The semicolons and comments in the profile file should not be removed.
	
	In version 3.0 of the Microsoft Mail Gateway to Fax, the PROFILE.EXE program is
	used to edit the PROFILE.GLB file; there are no special formats.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to Fax Administrator's Guide."
	
	
	Additional query words: 3.00 2.1a pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
