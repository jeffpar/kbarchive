---
layout: page
title: "Q130421: Windows NT 3.5 SNMP Agent Responds to Incorrect Communities"
permalink: /kb/130/Q130421/
---

## Q130421: Windows NT 3.5 SNMP Agent Responds to Incorrect Communities

{% raw %}

	Article: Q130421
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNMP managers can get information from Windows NT 3.5 SNMP agents only if the
	community name of the SNMP manager matches the community name of the SNMP agent,
	or if the community name of the SNMP manager is empty (no community name).
	However, if an SNMP agent matches the first part of the name sent from the SNMP
	manager, the SNMP agent incorrectly accepts the SNMP request.
	
	For example, if the community name of the agent and manager are public and
	public12345 respectively, the SNMP agent incorrectly accepts and responds to the
	SNMP request.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
