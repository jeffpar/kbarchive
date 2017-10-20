---
layout: page
title: "Q199989: XFOR: Completely Removing LinkAge V3.2 Connector Software"
permalink: /kb/199/Q199989/
---

## Q199989: XFOR: Completely Removing LinkAge V3.2 Connector Software

{% raw %}

	Article: Q199989
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	This article will describe the steps required to completely remove the LinkAge
	Software programs from a server.
	
	MORE INFORMATION
	================
	
	In order to completely remove the LinkAge product, follow these steps:
	
	1. Run LinkAge Setup, and select Uninstall LinkAge Software.
	
	2. Manually delete the LinkAge directory (either using Windows Explorer or from
	  a command prompt).
	
	3. In the registry, remove the LinkAge entries from these hives:
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	   - HKEY_LOCAL_MACHINE\Software\Linkage
	   - HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LME-*
	   - HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LDE
	   - HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LSIControl
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
