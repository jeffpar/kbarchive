---
layout: page
title: "Q288240: XADM: Header Line of Message Autoforwarded by Rule Is Too Long"
permalink: /kb/288/Q288240/
---

## Q288240: XADM: Header Line of Message Autoforwarded by Rule Is Too Long

	Article: Q288240
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A foreign Simple Mail Transfer Protocol (SMTP) system may reject a message from
	an Exchange Server 5.5 computer that was sent by means of the Internet Mail
	Service. The errors that the receiving system reports are:
	
	- 500 Line too long.
	
	- 501 Path too long.
	
	- 552 Too many recipients.
	
	- 552 Too much mail data.
	
	The message is then rejected by the receiving system.
	
	CAUSE
	=====
	
	This problem can occur if the rejected message was originally sent to another
	Exchange recipient and a number of other external addresses, and the Exchange
	recipient has a rule that forwards the message to an Internet recipient; the
	resulting message contains a line that is too long. The message that is sent is
	similar to the following message:
	
	  > ----------
	  > From: ServerA Admin[SMTP:SERVERA@SERVERA.MICROSOFTUK.COM]
	  > Sent: Tuesday, January 16, 2001 11:21:34 AM
	  > To: ServerB Admin; 'user1@microsoft.com'; 'user2@microsoft.com';
	  'user3@microsoft.com'; 'user4@microsoft.com'; 'user5@microsoft.com';
	  'user6@microsoft.com'; 'user7@microsoft.com'; 'user8@microsoft.com';
	  'user9@microsoft.com'; 'user10@microsoft.com'; 'user11@microsoft.com';
	  'user12@microsoft.com'
	  > Subject: Testing
	  > Auto forwarded by a Rule
	  >
	  0123456789012345678901234567890123456789012345678901234567890123456789012345
	  6789012345678901234567890123456789012345678901234567890123456789012345678901
	  2345678901234567890123456789012345678901234567890123456789012345678901234567
	  8901234567890123456789012345678901234567890123456789012345678901234567890123
	  4567890123456789012345678901234567890123456789012345678901234567890123456789
	  0123456789012345678901234567890123456789012345678901234567890123456789012345
	  6789012345678901234567890123456789012345678901234567890123456789012345678901
	  2345678901234567890123456789012345678901234567890123456789012345678901234567
	  89012345678901234567890123456789012345678901234567890123456789
	
	Note that the "To" line in the forwarded message is not folded as the body of the
	message is (in this case, every 76 characters).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.66 | 
	+-------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: imc
	
	======================================================================
	Keywords          : kberrmsg kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
