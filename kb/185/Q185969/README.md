---
layout: page
title: "Q185969: Domain Controller on Slow Link May Be Used for Domain Validation"
permalink: /kb/185/Q185969/
---

## Q185969: Domain Controller on Slow Link May Be Used for Domain Validation

{% raw %}

	Article: Q185969
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr2 win95kbfixlist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under certain circumstances, it may be necessary to specify which domain
	controller should be used for domain validation. For example, a domain
	controller across a wide area network (WAN) link may respond first to a Windows
	95 NETLOGON broadcast before a slower but topographically closer domain
	controller.
	
	CAUSE
	=====
	
	Windows 95 uses a NETLOGON broadcast to locate available domain controllers.
	Because a domain controller across a slow link could respond more quickly than a
	local domain controller, login script processing could be handled over the slow
	link, resulting in a longer logon process.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. This
	problem no longer occurs in Windows 98. To resolve this problem, install the
	current version of Windows. For information about the current version of
	Windows, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
