---
layout: page
title: "Q169324: XADM: Gets an Error On Webcon.uns during Setup"
permalink: /kb/169/Q169324/
---

## Q169324: XADM: Gets an Error On Webcon.uns during Setup

{% raw %}

	Article: Q169324
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run setup of Microsoft Exchange 5.0 Standard Edition, the following
	error may be displayed:
	
	  Processing file e:\setup\i386\webcon.uns at or near line 16, the system
	  cannot find file specified. 0xc0020002.
	
	CAUSE
	=====
	
	One possible cause of this problem is that the active server page (ASP) is not
	installed on the computer running Windows NT Server.
	
	RESOLUTION
	==========
	
	Install ASP on the computer running Windows NT Server, and run the setup again.
	
	
	Additional query words: setup ASP active server page
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
