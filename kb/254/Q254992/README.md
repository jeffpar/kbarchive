---
layout: page
title: "Q254992: XCON: MIXER Encapsulates X.400 Addr. in the Wrong SMTP Addr."
permalink: /kb/254/Q254992/
---

## Q254992: XCON: MIXER Encapsulates X.400 Addr. in the Wrong SMTP Addr.

	Article: Q254992
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Exchange Server computer that is configured to perform MIME Internet X.400
	Enhanced Relay (MIXER) address mapping may encapsulate an unknown X.400 address
	in an SMTP address that is derived from the X.400 address, instead of from the
	SMTP address of the server. If this unknown X.400 address is the address from
	which the message was sent, then replies from the Internet are not possible.
	
	For example, if an X.400 user with an O/R address of "c=gb; a=admd; p=prmd;
	s=sender" sends a message to the Internet by using an Exchange Server MIXER
	server that has an SMTP proxy address of "mixer.org.com," the SMTP message is
	generated with the following From line:
	
	  "/S=Sender/P=prmd/A=admd/C=GB/"@prmd.admd.gb
	
	The address should be the following:
	
	  "/S=Sender/P=prmd/A=admd/C=GB/"@mixer.org.com
	
	Note that this behavior only occurs if the X.400 sender is not in the global
	address list on the MIXER server. If there is a global address list entry for
	the user, then the SMTP address from the global address list entry is correctly
	used.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, add a custom recipient for the X.400 user, with an
	SMTP Address valid for this Internet Mail Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words: gal
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
