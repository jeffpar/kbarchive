---
layout: page
title: "Q119051: FAX: Macintosh ASCII Attachments Fax Incorrectly"
permalink: kb/119/Q119051/
---

## Q119051: FAX: Macintosh ASCII Attachments Fax Incorrectly

	Article: Q119051
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files created and saved in ASCII on an Apple Macintosh, and sent through the
	Microsoft Mail Gateway to FAX, may wrap text lines back over themselves rather
	than to another line.
	
	ASCII documents created on an MS-DOS or Windows-based PC fax correctly.
	
	CAUSE
	=====
	
	The Macintosh saves documents in ASCII format with only a carriage return; the
	PC uses a carriage return plus a linefeed character.
	
	RESOLUTION
	==========
	
	Run the Macintosh ASCII document through a file format filter (such as MacSink)
	that adds a linefeed character to the end of each line.
	
	
	Additional query words: 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300 kbMailGateFax300a
	Version           : MS-DOS:3.0,3.0a
	
	=============================================================================
	
