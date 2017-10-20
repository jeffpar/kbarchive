---
layout: page
title: "Q244833: XCLN: Synchronization Interval Displayed As Large Number"
permalink: /kb/244/Q244833/
---

## Q244833: XCLN: Synchronization Interval Displayed As Large Number

{% raw %}

	Article: Q244833
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtshoot kbdtatshoot
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use an .ost file for offline storage, you can set the synchronization
	interval. In some cases, if you enable your .ost file and then view the
	synchronization interval, the interval is set to a number from 15,000,000 to
	999,999,999. If you change the number and then quit and log off of the client,
	when you log back on, the interval value is set to a new number different from
	the number you specified.
	
	Even if you change this interval in the registry, a new large number is put in
	the place of the default (60) minutes.
	
	CAUSE
	=====
	
	The registry key used to store this value is either incorrect or damaged.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Quit and log off of Outlook.
	
	2. Start Registry Editor, and delete the following key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook\Options\General\AutoSyncInt
	
	3. Restart Outlook.
	
	After you restart Outlook, the registry key is recreated and the interval is set
	to the default.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbdtatshoot 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
