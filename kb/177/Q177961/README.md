---
layout: page
title: "Q177961: XFOR: Fail to Decode Inbound Messages with 1522 UTF Encoding"
permalink: /kb/177/Q177961/
---

## Q177961: XFOR: Fail to Decode Inbound Messages with 1522 UTF Encoding

	Article: Q177961
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on as a user to a computer running Exchange Server 5.5 (server A)
	with Outlook client and send a message with MIME and RTFHTML to a user on a
	computer running Exchange 5.0 with Service Pack 1 (server B), the recipient may
	see garbled symbols and characters in the message body when the message is
	opened.
	
	The two Exchange Server computers are connected through the Internet. The
	Internet Mail Service on the sending and receiving Exchange Server computers is
	set for both MIME and non-MIME.
	
	CAUSE
	=====
	
	This garbled text appears in the received message due to content conversion
	failure. This content conversion failure may be due to interoperability issues
	between Exchange 5.0 schema and Exchange 5.5 schema.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
