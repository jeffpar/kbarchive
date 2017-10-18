---
layout: page
title: "Q168738: XCON: HP Openmail Users Cannot Reply to SMTP Mail"
permalink: kb/168/Q168738/
---

## Q168738: XCON: HP Openmail Users Cannot Reply to SMTP Mail

	Article: Q168738
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If mail is sent from an Internet user to an X.400 Mail system through the
	following path
	
	  Exchange IMC -> Exchange -> Exchange X.400 Connector
	
	the reply is returned as non-deliverable. In other words, you receive a non-
	delivery report (NDR).
	
	CAUSE
	=====
	
	Because the recipient on the X.400 system is not in the Microsoft Exchange
	Server global address list, the Internet Mail Connector (IMC) encapsulates the
	recipient's address. This encapsulation is normally stripped by another IMC
	later in the message path. However, in this particular scenario, there is no
	other IMC. Thus, the Microsoft Exchange Server message transfer agent (MTA)
	passes the encapsulation through as an additional Domain Defined Attribute (DDA)
	attribute. On the reply, the IMC does not recognize the DDA attribute, and
	returns the reply as non-deliverable.
	
	WORKAROUND
	==========
	
	Add the users on the receiving X.400 mail system to the global address list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The X.400 Mail System recipient can look at details of the Internet message for
	the sender and will see an additional DDA attribute of MSXENCAP:SMTP. The DDA
	type is MSXENCAP and the DDA value is SMTP. This issue is resolved by stripping
	off this DDA information. The recipient might also notice that the NDR from the
	reply is generated from the IMC, and that details on the To: line resolve to a
	correct SMTP address. This occurs because the IMC uses the P2 header information
	in the NDR, but uses the P1 information to actually try to process the message.
	
	Additional query words: OpenMail Hewlett-Packard HP
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
