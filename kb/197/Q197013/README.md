---
layout: page
title: "Q197013: XADM: RTF Message Appears Incorrectly After Being Forwarded"
permalink: /kb/197/Q197013/
---

## Q197013: XADM: RTF Message Appears Incorrectly After Being Forwarded

	Article: Q197013
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send a message to one or more recipients, and then a rule causes the
	message to be forwarded to another recipient, the forwarded message may not
	appear correctly when the recipient opens it in an e-mail client. Specifically,
	the recipient may experience either of the following symptoms:
	
	- If the original message contains a picture at the very beginning of the
	  message, the "Auto forwarded by a Rule" text may appear after the picture
	  instead of at the beginning of the forwarded message.
	
	- If the original message contains a Rich Text Format (RTF) object or field at
	  the very beginning of the message, the "Auto forwarded by a Rule" text may
	  appear in the wrong RTF section in the forwarded message or may not appear at
	  all.
	
	CAUSE
	=====
	
	The information store normally attempts to locate the beginning of the RTF body
	by locating the first printable character. However, if the message contains a
	picture or another RTF object at the very beginning of the message, then the RTF
	body starts with that object instead of a printable character. Similarly, if the
	message contains an RTF field at the very beginning of the message, then the RTF
	field must be processed before the first printable character can be located.
	Under these conditions, the information store may be unable to locate the
	beginning of the RTF body.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2425.0
	  Mdbmsg.dll   5.5.2425.0
	  Store.exe    5.5.2425.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
