---
layout: page
title: "Q98209: FFAPI: Message Body Begins with a Blank Line (CRLF)"
permalink: /kb/098/Q98209/
---

## Q98209: FFAPI: Message Body Begins with a Blank Line (CRLF)

	Article: Q98209
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Developers using the Microsoft Mail Software Development Kit: File Format API
	for Gateways and Applications (FFAPI) should note that the message body may
	begin with a blank line consisting of a carriage return (CR), a line feed (LF),
	or both (CRLF).
	
	Versions 3.0 and 3.2 of Microsoft Mail for Windows place an initial blank line
	within the body of the message. Unlike versions 2.1 and earlier, which do not
	include a blank line. Versions 3.0 and 3.2 of Microsoft Mail for MS-DOS do not
	place a blank line at the beginning of the message body.
	
	FFAPI developers interpreting information in the main body of a message should be
	aware of the blank line the Windows client places in the beginning of the
	message body.
	
	NOTE: The blank like is controlled by the -F parameter of FFAPI. Please consult
	the Microsoft Mail Software Development Kit manual for detailed information
	about this command.
	
	
	Additional query words: 3.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300 kbSDKMailFFAPI210
	Version           : :2.1,3.0
	
	=============================================================================
	
