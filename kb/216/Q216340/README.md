---
layout: page
title: "Q216340: XFOR: Cannot Install 5.5 SP2 Connectors after GroupWise"
permalink: /kb/216/Q216340/
---

## Q216340: XFOR: Cannot Install 5.5 SP2 Connectors after GroupWise

{% raw %}

	Article: Q216340
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When administrators attempt to install the Exchange Server 5.5 Service Pack 2
	(SP2) version of the Notes, SNADS, and OV/VM (PROFS) connectors after previously
	installing the Web 3 GroupWise connector, Setup may stop with the following
	error message:
	
	  Installation Warning
	
	  Setup has detected that you have a newer version of this connector already
	  installed on your Exchange Server. If you wish to install this older version,
	  you must uninstall the newer one.
	
	  Setup is exiting.
	
	CAUSE
	=====
	
	The Setup program will look for a version number in the registry of the latest
	connector. When the GroupWise connector is installed the first time, it will
	update the version number to 2521.0. However, the version number for the SP2
	connectors is 2448.8, resulting in this conflict.
	
	WORKAROUND
	==========
	
	Uninstall the GroupWise Connector, then install any needed connectors before
	reinstalling the GroupWise Connector from Exchange Server 5.5 SP2.
	
	Additional query words: notes, snads, profs, error, warning
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
