---
layout: page
title: "Q245697: Domain User Can Avoid a Remote Shutdown"
permalink: /kb/245/Q245697/
---

## Q245697: Domain User Can Avoid a Remote Shutdown

{% raw %}

	Article: Q245697
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an administrator on your domain attempts to remotely shut down a computer
	on the network, the user may be able avoid the shut down process.
	
	CAUSE
	=====
	
	This issue can occur if the user logs off, and then quickly logs on again to the
	domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0.
	
	MORE INFORMATION
	================
	
	This issue is a problem in the API or how the resource kit code is coded, it is
	not an issue in the security design of Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
