---
layout: page
title: "Q185847: XFOR: Message Conversion Fails If Fixed Font Setting Is Enabled"
permalink: kb/185/Q185847/
---

## Q185847: XFOR: Message Conversion Fails If Fixed Font Setting Is Enabled

	Article: Q185847
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Internet Mail Connector or Internet Mail Service is configured so that
	all inbound messages are displayed in a fixed-width font, the Microsoft Exchange
	Server computer may be unable to verify the full fidelity of some messages sent
	through the Internet Mail Connector or Internet Mail Service. After the message
	is converted to Hypertext Markup Language (HTML), it may contain extra <FONT
	Face=Courier> tags.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: imc ims round trip roundtrip rich text format rtf inbound
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
