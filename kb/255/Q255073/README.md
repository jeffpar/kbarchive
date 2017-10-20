---
layout: page
title: "Q255073: XFOR: Event ID 174 from Directory Export Installing Connectors"
permalink: /kb/255/Q255073/
---

## Q255073: XFOR: Event ID 174 from Directory Export Installing Connectors

{% raw %}

	Article: Q255073
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install the Microsoft Exchange Connector for Lotus Notes, the Microsoft
	Exchange Connector for Novell GroupWise, the Microsoft Exchange Connector for
	SNADS, or the Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS), the
	installation may not work, and the following error message may be displayed in
	the Windows NT Event Viewer:
	
	  174: MSExchangeDSExp
	  The basepoint object <organization_name> does not exist in the
	  directory.
	
	Where <organization_name> is an incorrect organization name.
	
	CAUSE
	=====
	
	This problem can occur because the connectors listed in the "Symptoms" section
	of this article gather organization information from the following registry
	key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	  \Parameters\Enterprise
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This registry key may contain information that is different than the information
	that is contained in the directory. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q201164 XADM: Knowledge Consistency Checker Returns Events 2024, 1124
	
	After the connector installation wizard gathers this data, the installation
	wizard searches the Exchange Server directory for an object with the same
	(incorrect) name, and does not find any object with the same name.
	
	RESOLUTION
	==========
	
	To resolve this problem, update the organization information in the registry. To
	do this, you need to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA
	  \Parameters\Enterprise
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Change the data in this key to match the actual organization name.
	
	4. Quit Registry Editor.
	
	5. Try to install the connector again.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
