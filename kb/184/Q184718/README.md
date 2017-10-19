---
layout: page
title: "Q184718: XADM: Text Attachments Modified for Internet Mail"
permalink: /kb/184/Q184718/
---

## Q184718: XADM: Text Attachments Modified for Internet Mail

	Article: Q184718
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc55sp2fix
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A small text file attachment (140 characters or fewer) containing line-feed
	<LF> characters, but no carriage-return line-feed combinations
	<CR><LF>, will be modified during outbound delivery of the Internet
	Mail Service. The modification will be the extra insertion of a
	<CR><LF> just after the original <LF> character, resulting in
	a <LF><CR><LF> combination at the end of each line. This may
	cause problems for the receiving system.
	
	CAUSE
	=====
	
	A logic error treats the text file attachment as a text/plain body part with
	7-bit encoding. Larger attachments (those greater than 140 characters), are
	being encoded as Quoted-Printable, which correctly preserves the <LF>
	character sequences.
	
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
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Exchange Server 5.5
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	
	
	======================================================================
	Keywords          : kbusage exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
