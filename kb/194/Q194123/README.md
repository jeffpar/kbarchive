---
layout: page
title: "Q194123: XADM: KMS Enrollment Messages Stay in System Attendant Mailbox"
permalink: /kb/194/Q194123/
---

## Q194123: XADM: KMS Enrollment Messages Stay in System Attendant Mailbox

	Article: Q194123
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When enabling advanced security on a user mailbox on a computer running Exchange
	Server 5.5 Service Pack 1, the administrator has the option of sending an
	enrollment message to the user with the security token that allows the user to
	set up security on his or her client. This message is sent, and the user has no
	problems enabling security. However, a copy of the enrollment message containing
	the token is left in the System Attendant's mailbox in the Outbox folder.
	
	STATUS
	======
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Key Management Server
	
	  File Name     Version
	  -----------------------
	  KMSERVER.EXE  5.05.2409
	
	
	Additional query words: kms key security x509 certificates xadm
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
