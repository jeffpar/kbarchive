---
layout: page
title: "Q241764: No Terminal Server Uninstall Compatibility Script for Outlook 98"
permalink: /kb/241/Q241764/
---

## Q241764: No Terminal Server Uninstall Compatibility Script for Outlook 98

{% raw %}

	Article: Q241764
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you uninstall Microsoft Outlook 98, the "Call Olk98Usr.cmd" entry still
	exists in the Usrlogn2.cmd file.
	
	CAUSE
	=====
	
	This problem occurs because there is no uninstallation compatibility script for
	Outlook 98 in Windows NT Server, Terminal Server Edition. Note that this would
	normally be located in %WINDIR%\application compatibility scripts\uninstall
	folder.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain and install the latest Service Pack for Windows
	NT 4.0 Terminal Server Edition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
