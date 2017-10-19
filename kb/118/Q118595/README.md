---
layout: page
title: "Q118595: SMTP: Gateway Tries to UUDECODE Text That is not UUENCODED"
permalink: /kb/118/Q118595/
---

## Q118595: SMTP: Gateway Tries to UUDECODE Text That is not UUENCODED

	Article: Q118595
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Gateway to SMTP attempts to uudecode an incoming message (or
	attachment) that is not uuencoded.
	
	CAUSE
	=====
	
	To determine the presence of uuencoded text the Gateway parses the message and
	looks for the word BEGIN at the far left of a new line, followed by a blank, and
	END at the far left of a subsequent line. Uuencoded text is marked at the
	beginning with the phrase BEGIN UUENCODE and at the end with END.
	
	The word END can actually be a part of another word, such as ENDEAVOR, and if the
	Gateway finds BEGIN at the start of a new line, followed by a blank, then END at
	the start of another line, it considers the text in between to be uuencoded and
	tries to uudecode it.
	
	RESOLUTION
	==========
	
	None.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Mail Gateway to
	SMTP, version 3.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.00 smtp uudecode uuencode
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
