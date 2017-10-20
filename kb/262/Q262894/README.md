---
layout: page
title: "Q262894: SCM Is Unable to Make Updates with Read Option"
permalink: /kb/262/Q262894/
---

## Q262894: SCM Is Unable to Make Updates with Read Option

{% raw %}

	Article: Q262894
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Security Configuration Manager tool and click Read, the tool
	automatically selects Read & Execute. When you click OK or Apply, the tool
	seems to make the changes. However, when you check the values for these items on
	the tree, you can observe that no changes occurred.
	
	CAUSE
	=====
	
	This behavior can occur because there is a design problem with the Security
	Configuration Manager.
	
	RESOLUTION
	==========
	
	To work around this behavior, click Read & Execute before you click Read.
	This action can enable the Security Configuration Manager to apply the changes
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
