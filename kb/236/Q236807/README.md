---
layout: page
title: "Q236807: XFOR: AS/400 SND Commands Connector for SNADS Doesn't Handle"
permalink: /kb/236/Q236807/
---

## Q236807: XFOR: AS/400 SND Commands Connector for SNADS Doesn't Handle

	Article: Q236807
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 exc55sp2
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for SNADS may generate the following error
	messages in the connectivity browse log:
	
	  1999/07/09 12:45:03-<A0><A0><A0><A0><A0><A0><A0>LME-SNADS-IN(00c2) 1 22384:Rejecting:
	  S10186DR(BRIANCL), 1999/07/09 11:44:36.88 | #0021
	  1999/07/09 12:45:03-<A0><A0><A0><A0><A0><A0><A0>LME-SNADS-IN(00c2) 1 22363:Sending a PROGRAM ERROR
	  condition to S10186DR on #BATCH
	  1999/07/09 12:45:03-<A0><A0><A0><A0><A0><A0><A0>LME-SNADS-IN(00c2) 4 22357:Conversation with
	  S10186DR on #BATCH has been terminated
	  1999/07/09 12:45:03-<A0><A0><A0><A0><A0><A0><A0>LME-SNADS-IN(00c2) 1 22385:SNADS code: 4 (Syntax
	  Error) Exception code: c279 (Req. not processed Syntax Error, Operand
	  Value=>Data not found)
	  1999/07/09 12:45:03-<A0><A0><A0><A0><A0><A0><A0>LME-SNADS-IN(00c2) 1 22386:Exception data (+0):
	  E2F1F0F1F8F6C4D9C2D9C9C1D5C3D340
	
	CAUSE
	=====
	
	The following commands send a distribution from the AS/400 that is rejected by
	the Exchange Connector for SNADS:
	
	- The sndnetf command.
	
	- The sndnetmsg command.
	
	- The sndnetsplf command.
	
	The Exchange Connector for SNADS cannot process these distributions because the
	AS/400 doesn't generate a DIA header for these commands.
	
	The Exchange Connector for SNADS generates a SNADS Code 0004 (Syntax Error) when
	it rejects these distributions.
	
	WORKAROUND
	==========
	
	Use the Send Message option in OfficeVision/400.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
