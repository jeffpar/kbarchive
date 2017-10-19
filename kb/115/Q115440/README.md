---
layout: page
title: "Q115440: X400: Priority 1 Mail Returned in 24 Hours Instead of 36 Hours"
permalink: /kb/115/Q115440/
---

## Q115440: X400: Priority 1 Mail Returned in 24 Hours Instead of 36 Hours

	Article: Q115440
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Priority 1 mail is returned in 24 hours instead of the expected 36 hours.
	
	CAUSE
	=====
	
	This happens if the -U0 option is NOT used, because the MTA moves the
	low-priority mail into the normal-priority queue when it re-starts. If the -U0
	option is used (to prevent the MTA from re-starting) priority 1 mail is returned
	in 36 hours as you would expect.
	
	RESOLUTION
	==========
	
	It was felt that if the MTA needs to be re-started, low-priority mail should be
	sent earlier.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
