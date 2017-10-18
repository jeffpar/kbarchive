---
layout: page
title: "Q129920: PRB: INDEX ON produces 'File is read-only' Error with Cursor"
permalink: kb/129/Q129920/
---

## Q129920: PRB: INDEX ON produces 'File is read-only' Error with Cursor

	Article: Q129920
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a; WINDOWS:2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to create an INDEX for a read-only cursor, you receive this
	error:
	
	  File is read-only
	
	RESOLUTION
	==========
	
	Specify an .IDX file for the tags to be added to. For example, issue the
	following commands to create the two tags without yielding the error message:
	
	     USE tutorial\customer
	     SELECT * FROM customer WHERE state = 'CA' INTO CURSOR test
	     INDEX ON zip+city TAG zip_city OF tutorial\testzip.idx
	
	Because you can have only one IDX file assoicated with a cursor open at a time,
	you need to recreate the new index as needed with these commands:
	
	     SET ORDER TO
	     INDEX ON cno+company TO c:\fpw26\test2.idx
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: FoxWin FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.6a; WINDOWS:2.6a,3.0
	
	=============================================================================
	
