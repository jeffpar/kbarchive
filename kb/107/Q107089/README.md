---
layout: page
title: "Q107089: SMTP: Err Msg"
permalink: kb/107/Q107089/
---

## Q107089: SMTP: Err Msg

	Article: Q107089
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail Gateway to SMTP sometimes displays this message in the
	SMTPGATE.LOG file and/or the Gateway PC screen:
	
	  ERROR <mailbox name> is an invalid Courier Mailbox
	  [tx] 550 Addressee unknown
	
	CAUSE
	=====
	
	The <mailbox name> in the first error line may be invalid because it is
	longer than 10 characters or includes characters not allowed under MS Mail.
	These lines appear only if you have started the Gateway with these options:
	
	- cd -lacsy -gacsy
	
	or,
	
	- ci -lacsy -gacsy
	
	RESOLUTION
	==========
	
	Inform sender of the correct mailbox name.
	
	Additional query words: 2.10 2.1 3.00 3.0 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	
