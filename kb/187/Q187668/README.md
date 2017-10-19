---
layout: page
title: "Q187668: XFOR: Internet Mail Service Sets Text Color to &quot;Black&quot;"
permalink: /kb/187/Q187668/
---

## Q187668: XFOR: Internet Mail Service Sets Text Color to &quot;Black&quot;

	Article: Q187668
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector's behavior changed between
	Exchange Server version 4.0 and Exchange Server versions 5.0 and 5.5. (In
	addition to the behavior change, the connector's name was changed to the
	Internet Mail Service.) The text color was set to "auto" for the messages coming
	from the Exchange Server version 4.0 Internet Mail Connector, but the text color
	is now set to "black" for messages coming from the Exchange Server versions 5.0
	and 5.5 Internet Mail Service.
	
	CAUSE
	=====
	
	Text-to-RTF and HTML-RTF conversions now force the RTF text to be black instead
	of using default Windows colors in Exchange Server versions 5.0 and 5.5.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Exchange
	service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	Additional query words: IMC IMS
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
