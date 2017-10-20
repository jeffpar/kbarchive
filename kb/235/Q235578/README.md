---
layout: page
title: "Q235578: You Can Now to Add Static IP Addresses to the SNA Service Table"
permalink: /kb/235/Q235578/
---

## Q235578: You Can Now to Add Static IP Addresses to the SNA Service Table

{% raw %}

	Article: Q235578
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When the SNABase service is started on an SNA Server, it registers the IP
	addresses that are already assigned to the network adapters of that particular
	computer against its service table.
	
	If an IP address is not yet assigned to a network adapter at SNABase startup, it
	won't be added to the service table.
	
	A new feature was added to SNA Server that allows you to add static IP addresses
	for SNA Server's service table entry for the local computer. By specifying the
	addresses, you can ensure that late bound IP addresses get passed to all clients
	and servers during service table updates.
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	To enable this feature, you must add the registry value as described below:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL\System\CurrentControlSet\Services\Snabase\Parameters\SnaTcp
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: SnaServerStaticAddresses
	  Data Type: REG_MULTI_SZ
	  Value: <IP Address to be assigned, for example 191.43.101.1>
	
	4. Quit Registry Editor.
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0,4.0SP1,4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
