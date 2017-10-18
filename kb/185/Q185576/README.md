---
layout: page
title: "Q185576: XFOR: Incorrect Help For Internet Mail Service Sub Dialog Box"
permalink: kb/185/Q185576/
---

## Q185576: XFOR: Incorrect Help For Internet Mail Service Sub Dialog Box

	Article: Q185576
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
	
	When the properties of the Internet Mail Service or Internet Mail Connector sub
	windows are accessed using the F1 key, the general Internet Mail Connector Help
	screen is displayed. If the E-mail domain, Advanced options, or Notifications
	window is displayed and the F1 key is used, the Help information displayed is
	about the internet mail page.
	
	CAUSE
	=====
	
	The Help engine is being called with the incorrect parameters.
	
	WORKAROUND
	==========
	
	If the Help button is used on one of these pages, the correct Help page will be
	displayed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0 and 5.5. We
	are researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
