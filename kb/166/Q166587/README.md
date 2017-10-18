---
layout: page
title: "Q166587: XCON: High Priority Mail Sent from MS Mail Changes Priority"
permalink: kb/166/Q166587/
---

## Q166587: XCON: High Priority Mail Sent from MS Mail Changes Priority

	Article: Q166587
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Internet mail messages sent as high priority (urgent) from a Microsoft Mail
	postoffice (with an SMTP access component), over the MS Mail Interchange to a
	Microsoft Exchange Server computer, and then over the Internet Mail Service, may
	change priority. The priority may also change if the message travels across an
	X.400 connector to the Internet Mail Service.
	
	You can see the change in priority by looking at the Internet Mail Service queue
	after the mail is delivered to the Microsoft Exchange Server computer. If the
	destination host is not available, the message is queued and the expiration time
	is set to 48 hours, which is the default for normal priority messages. View the
	message in the Imcdata\Out directory, and it will have X-Priority set to 1
	(normal). The MS Mail sender may not receive notification messages that the
	message is queued for delivery, but not yet delivered.
	
	CAUSE
	=====
	
	The Internet Mail Service uses the PR_PRIORITY property from the envelope (P1)
	instead of the PR_IMPORTANCE property. The Internet Mail Service bases the
	calculation of expiry times on the value in PR_IMPORTANCE of the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The message flow is as given below:
	
	The MSMI creates an X.400 P1 and a message in the form of MDB Extended Format
	(MDBEF), and then submits it to the MTA via X.400 API (XAPI). In this P1 there
	is no PR_IMPORTANCE since it is a P2 property. PR_PRIORITY is set in the P1 and
	also in the MDBEF. The information store picks this up from the delivery queue
	and creates a hybrid P1, which has all the X.400 P1 properties, plus some P2
	properties. Some of the selected P2 properties are promoted into this new P1
	envelope, but PR_IMPORTANCE is not one of them. Therefore, this envelope
	contains the PR_IMPORTANCE, but with a default value of Normal. This new
	envelope is put in the MTS-OUT queue for the Internet Mail Service. The Internet
	Mail Service picks up this envelope from the MTS-OUT and reads the properties
	from the envelope. The Internet Mail Service is reading the PR_IMPORTANCE to
	decide the priority of the message. Because the information store created this
	envelope and never promoted the real PR_IMPORTANCE, a message with priority
	Normal occurs. The PR_PRIORITY in this envelope is set to Urgent, because it was
	correctly passed through from the MSMI and the information store.
	
	For this issue, the Internet Mail Service has been changed to use the PR_PRIORITY
	from the P1 instead of PR_IMPORTANCE. PR_IMPORTANCE indicates a value to users,
	while PR_PRIORITY indicates the order or speed at which the messages are sent by
	the messaging system software. Higher priority usually indicates a higher cost.
	Higher importance usually is associated with a different display by the user
	interface.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
