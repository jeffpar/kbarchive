---
layout: page
title: "Q169461: Access Violation in Dns.exe Caused by Malicious Telnet Attack"
permalink: /kb/169/Q169461/
---

## Q169461: Access Violation in Dns.exe Caused by Malicious Telnet Attack

{% raw %}

	Article: Q169461
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive an Access Violation in Dns.exe. This is most often occurs on
	computers connected to public networks, such as the Internet, where deliberate
	attacks are common.
	
	CAUSE
	=====
	
	This particular attack is usually generated maliciously by typing the following
	command on the attacking system:
	
	  telnet <mycomputer> 19 | telnet <mycomputer> 53
	
	This command causes a telnet connection to be established to port 19 (the chargen
	service, which generates a string of characters) with the output redirected to a
	telnet connection to port 53 (the DNS service.) This flood of characters causes
	an Access Violation in the DNS service, which is terminated, disrupting name
	resolution services.
	
	RESOLUTION
	==========
	
	The Microsoft DNS Server has been modified to correct this problem.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/dns-fix
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q162927 Telnetting to Port 53 May Crash DNS Service
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	
	Additional query words: 4.00 denial of service dns telnet port 53
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
