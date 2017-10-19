---
layout: page
title: "Q184457: XFOR: Cannot Reply to RTF Message Addressed to MS Mail Recipient"
permalink: /kb/184/Q184457/
---

## Q184457: XFOR: Cannot Reply to RTF Message Addressed to MS Mail Recipient

	Article: Q184457
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send message in Rich Text Format from a Microsoft Mail postoffice to a
	Microsoft Exchange Server computer through a Simple Mail Transfer Protocol
	(SMTP) gateway and the Internet Mail Service, and then reply to the message, you
	may receive a non-delivery report. This problem occurs if the original message
	is also addressed to a recipient on the Microsoft Mail postoffice, and the
	recipient on the Exchange Server postoffice includes the Microsoft Mail
	recipient in their reply.
	
	Note that if you view the properties for the Microsoft Mail recipient before you
	send the reply, the recipient's Microsoft Mail address is displayed instead of
	their SMTP address.
	
	CAUSE
	=====
	
	This problem occurs when the Request for Comments (RFC) 822 recipient
	information in the message is replaced with transport-neutral encapsulation
	format (TNEF) recipient information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Exchange Server 5.0
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	MORE INFORMATION
	================
	
	After you apply the fix, RFC 822 recipient information in messages is no longer
	replaced with TNEF recipient information when the message is converted to TNEF.
	
	Additional query words: p2 winmail.dat
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
