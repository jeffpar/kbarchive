---
layout: page
title: "Q177591: Service Pack Version Truncated in About Box"
permalink: /kb/177/Q177591/
---

## Q177591: Service Pack Version Truncated in About Box

{% raw %}

	Article: Q177591
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbui kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Help About box of Windows NT Explorer, the second line of text may read:
	
	  Version 4.0 (Build 1381: Service Pack 3, RC 1.
	
	The last two digits are truncated and it should read:
	
	  Version 4.0 (Build 1381: Service Pack 3, RC 1.76)
	
	You may be unable to determine which release candidate of the Service Pack is
	installed.
	
	CAUSE
	=====
	
	The number of characters in the text string exceeds the number allowed in the
	dialog box.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: missing cut off HelpAbout
	======================================================================
	Keywords          : kbdisplay kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
