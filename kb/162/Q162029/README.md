---
layout: page
title: "Q162029: Token Leak Caused by LPC Port Connection to DHCP Service"
permalink: /kb/162/Q162029/
---

## Q162029: Token Leak Caused by LPC Port Connection to DHCP Service

{% raw %}

	Article: Q162029
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 3.5 or 3.51 Server computer running the DHCP service may stop
	responding or lock up due to a memory leak. This problem may not be specific to
	DHCP.
	
	An additional symptom included the logging of numerous SRV.SYS 2020 Event Log
	errors.
	
	CAUSE
	=====
	
	A security token is created during an local procedure call (LPC) port connection
	to the DHCP Service. When the port is deleted, the security token is not
	deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	This problem does not exist in Windows NT 4.0.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
