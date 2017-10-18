---
layout: page
title: "Q256318: DNS Service Does Not Start When Notify Option Is Set"
permalink: kb/256/Q256318/
---

## Q256318: DNS Service Does Not Start When Notify Option Is Set

	Article: Q256318
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Microsoft Domain Name Service (DNS) may not start and the following error
	messages may be recorded in the Event log:
	
	  Event ID:501
	  Source:DNS
	  DNS Server zone <xxxx> has a missing or corrupt zone type in registry.
	  Fix type, or delete from registry and recreate with DnsAdmin.
	
	  Event ID: 500
	  Source: DNS
	  DNS Server zone <xxxx> has invalid or corrupt registry data. Delete it's
	  registry data and recreate with DnsAdmin.
	
	  Event ID: 7023
	  Source: Service Control Module
	  The Microsoft DNS Server Service terminated with the following error:
	  The data is invalid
	
	CAUSE
	=====
	
	The Notify option may have been used on one or more of the automatically created
	zones. This occurs if an IP address is specified in the zone properties or the
	"Only Allow Access from Secondaries Included on Notify List" option is enabled.
	The following zones are automatically created and should not have any Notify
	options selected:
	
	  0.in-addr.arpa
	  127.in-addr.arpa
	  255.in-addr.arpa
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem, delete the pertinent automatically created zone from the
	registry by using Regedt32.exe. The zones are located in the following area:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Zones
	
	Click the zone, and then click Delete on the Edit menu. Quit Regedt32.exe, and
	then type the following line at a command prompt:
	
	  net start dns
	
	The deleted zone is automatically created when the DNS service starts.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the DNS service in Windows NT
	4.0.
	
	MORE INFORMATION
	================
	
	Automatically created zones are not normally present in the registry. They are
	created when the DNS service is started. When the Notify option is set, however,
	the zone is present in the registry in location listed in the "Resolution"
	section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
