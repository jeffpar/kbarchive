---
layout: page
title: "Q182279: XFOR: Incorrect Cc: List When Resending or Forwarding From PROFS"
permalink: /kb/182/Q182279/
---

## Q182279: XFOR: Incorrect Cc: List When Resending or Forwarding From PROFS

	Article: Q182279
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you resend or forward a message from a PROFS E-mail System to an Exchange
	Server computer, the PROFS Connector preserves incorrect Cc: lists in the
	envelope.
	
	
	The same problem occurs when using OV/VM release version 1. The problem will also
	occur when using OV/VM release version 2 and using the Resend functionality.
	
	The only time this problem does not occur is when you use the OV/VM release
	version 2 and use the forward functionality or add new users to the Cc: list by
	using a .cc command.
	
	CAUSE
	=====
	
	This problem occurs because the PROFS E-mail System and the OV/VM E-mail System
	add the Cc: list to the envelope. When you send a message, PROFS and OV/VM do
	not put P2 recipients' information inside the message's data stream (in ZIP
	packets). Note that it is ok to PROFS and OV/VM because they do not support
	Reply All. Therefore, the only CC recipients' information is stored in the
	message content. The PROFS Connector parses the message content to retrieve CC
	recipients. The connector uses the "\n<eof>" pattern to determine whether
	the CC recipients are valid or not. However, the PROFSS E-mail System forwards
	or resends and the OV/VM Resend command uses the ending pattern "\n<eof>",
	regardless of whether there are new CC recipients or not. Therefore, the
	connector cannot distinguish real or old CC recipients in these cases.
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade your OV\VM system to release version
	
	1. The problem does not occur in the OV\VM R2 Forward functionality, as it
	
	adds the Cc: list differently to the message content than previous versions.
	
	MORE INFORMATION
	================
	
	Different versions of the OV\VM System put the list of users in the Cc: field
	differently. OV\VM Release 1 ties all the users in the Cc: list at the bottom of
	the message. OV\VM release 2 (where the problem does not occur) ties the Cc:
	list to the TO: field.
	
	
	
	Additional query words: linkage profs resend forward
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
