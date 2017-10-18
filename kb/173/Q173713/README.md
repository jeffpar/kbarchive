---
layout: page
title: "Q173713: XFOR: CR Receives Rich Text Format Information Unexpectedly"
permalink: kb/173/Q173713/
---

## Q173713: XFOR: CR Receives Rich Text Format Information Unexpectedly

	Article: Q173713
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Custom Recipient (CR) receives a message that includes Rich Text Format (RTF)
	information. This occurs even if Allow Rich Text Format is not selected in the
	Advanced tab of Properties for the CR. If the original message sent contained an
	attachment, the attachment may be received by non-Microsoft mail clients as an
	unreadable RTF attachment.
	
	CAUSE
	=====
	
	While expanding Distribution Lists and processing alternate recipients, the
	Microsoft Exchange Message Transfer Agent (MTA) did not preserve the CR property
	indicating whether it should receive RTF.
	
	WORKAROUND
	==========
	
	In the Microsoft Exchange Administrator program, change the Send Microsoft
	Exchange Rich Text Formatting option to "NEVER" (without the quotation marks) in
	the Interoperability dialog box of the IMC Internet Mail property page (use the
	Specify Message Content by E-Mail Domain option if you want to restrict this
	option to individual domains).
	
	For additional information about a client-side fix for this problem, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q169666 XADM: POP3 Users may not Receive an Attachment if Part of DL
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	What the non-Microsoft client actually receives depends on:
	
	- The Client software being used
	
	  -and-
	
	- The settings in Properties for IMS/Internet Mail.
	
	Various clients will see inconsistent (in other words, this can vary when using
	the same client) results in their mail. If IMS/Internet Mail is set to MIME, a
	separate attachment is received at the client. If IMS/Internet Mail is set to
	UUENCODE, the attachment file may merge with the mail message body.
	
	For additional information regarding RTF, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q136204 XCLN: Sending Messages In Rich-Text Format
	
	Upon inspection, it can be seen that these messages correspond to messages sent
	to a distribution list in which the CR is a member, or as a result of the CR
	being defined as an alternate recipient for a Microsoft Exchange Server mailbox.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
