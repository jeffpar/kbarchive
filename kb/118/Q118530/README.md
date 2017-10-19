---
layout: page
title: "Q118530: SMTP: When Gateway UUENCODEs Attachments"
permalink: /kb/118/Q118530/
---

## Q118530: SMTP: When Gateway UUENCODEs Attachments

	Article: Q118530
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	Version 3.0 of the Microsoft Mail Gateway to SMTP uuencodes attachments
	that contain characters outside the ASCII character set. Because the
	Microsoft Word formatting characters are outside the ASCII character set,
	the SMTP Gateway uuencodes attached files save in Word format.
	
	The Gateway does not uuencode an attachment if you save a document in
	Word as:
	
	
	- MS-DOS text
	
	- text only
	
	- text only with linebreaks
	
	- MS-DOS text with linebreaks
	
	- MS-DOS text with layout
	
	- text with layout
	
	- rich text format
	
	The uuencode used is SUN's version 5. This is not configurable.
	
	Additional query words: 3.00 SMTP uuencode attachments
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
