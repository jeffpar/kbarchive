---
layout: page
title: "Q274414: &quot;Log On As&quot; Box Is Unavailable in the Services Tool on BDC"
permalink: /kb/274/Q274414/
---

## Q274414: &quot;Log On As&quot; Box Is Unavailable in the Services Tool on BDC

{% raw %}

	Article: Q274414
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot change the "Log On As" properties for a service in the Services tool
	in Control Panel because the Log On As box is unavailable for every service that
	is running on a backup domain controller (BDC).
	
	CAUSE
	=====
	
	This situation occurs on BDCs if the primary domain controller (PDC) for the
	domain is unavailable.
	
	This could occur if the PDC is offline, there is a network problem that prevents
	communication between the BDC and PDC, or the secure channel from the BDC to the
	PDC is not working.
	
	RESOLUTION
	==========
	
	Re-establish communication between the BDC and the PDC and confirm that the
	secure channel is in place and functioning.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting secure channel problems, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q156684 How to Use NLTEST to Force a New Secure Channel
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
