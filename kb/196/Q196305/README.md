---
layout: page
title: "Q196305: XFOR: Error Installing Notes, SNADS, OVVM, GroupWise Connector"
permalink: /kb/196/Q196305/
---

## Q196305: XFOR: Error Installing Notes, SNADS, OVVM, GroupWise Connector

{% raw %}

	Article: Q196305
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	
	SYMPTOMS
	========
	
	The Microsoft Connector for Lotus Notes, SNADS, OVVM, or GroupWise may fail to
	install after a fresh installation of Exchange Server. An error may be displayed
	indicating that the service has already been installed and setup can not
	continue.
	
	CAUSE
	=====
	
	The Notes, SNADS, OVVM, or GroupWise connector was not properly uninstalled
	before Exchange Server was reinstalled. The "Remove All" action for Exchange
	Server does not clean up these connectors from the registry.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the Notes, SNADS, OVVM, or GroupWise connectors
	before removing the Exchange Server installation.
	
	Or, manually delete the following registry keys:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Lotus Notes Connector:
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services
	  \LME-NOTES
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\MSExchangeCoCo
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services                        \<server name>-LME-NOTES
	  HKEY_LOCAL_MACHINE\software\Microsoft\Exchange\Setup\Exchconn
	
	SNADS Connector:
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\LME-SNADS
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\MSExchangeCoCo
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services                        \<server name>-LME-SNADS
	  HKEY_LOCAL_MACHINE\software\Microsoft\Exchange\Setup\Exchconn
	
	OV/VM Connector:
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\LME-PROFS
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\MSExchangeCoCo
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services
	  \<server name>-LME-PROFS
	  HKEY_LOCAL_MACHINE\software\Microsoft\Exchange\Setup\Exchconn
	
	GroupWise Connector:
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\LME-GWISE
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\MSExchangeCoCo
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services
	  \<server name>-LME-GWISE
	  HKEY_LOCAL_MACHINE\system\currentcontrolset\services\MSExchangeGWRtr
	  HKEY_LOCAL_MACHINE\software\Microsoft\Exchange\Setup\Exchconn
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	There are additional complications that cause the installation of the Notes
	connector to fail in overriding previous installations. This will remain a
	problem until the Exchange Server setup includes all the connectors in the
	remove all process.
	
	Additional query words: error, setup, notes, failing to install
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
