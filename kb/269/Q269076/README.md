---
layout: page
title: "Q269076: XADM: Information Store Access Violation on LAST, NEXT Command"
permalink: kb/269/Q269076/
---

## Q269076: XADM: Information Store Access Violation on LAST, NEXT Command

	Article: Q269076
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Network News Transfer Protocol (NNTP) client logs on to an Exchange
	Server computer that is configured as an NNTP server and the client issues a
	"LAST" or "NEXT" command, the information store service may stop unexpectedly
	because an access violation occurs. The Dr.Watson log or the User.dmp file
	contains a stack dump that is similar to the following:
	
	  
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  1143f984  78021646  1143f99c 011315b7 1143fdf0 0x7801031c
	  1143f9bc  006172b5  1143f9e0 00000400 01131598 0x78021646
	  1143fdd4  00613d86  01131598 00613df0 14c4f608 STORE!NNTPCON::HrSendStatusResponse
	  1143fecc  00616633  00000015 00000001 14c4bfd8 STORE!NNTPCON::EcLast
	  1143fef8  006162f4  0111af68 0000000c 0000000c STORE!NNTPCON::EcOnCmd
	  1143fef8  006162f4  0111af68 0000000c 0000000c STORE!NNTPCON::EcOnCmd+0x332
	
	CAUSE
	=====
	
	The issue can occur if the information store sends a message in response to the
	client that issued the LAST or NEXT command. Because the related message has a
	percent sign in the message ID, the information store incorrectly processes the
	character as a type field character when the response message is composed, which
	results in an access violation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
