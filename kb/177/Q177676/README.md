---
layout: page
title: "Q177676: Stop 0x00000024 May Occur When Bypass Traverse Checking Disabled"
permalink: /kb/177/Q177676/
---

## Q177676: Stop 0x00000024 May Occur When Bypass Traverse Checking Disabled

{% raw %}

	Article: Q177676
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following stop message:
	
	  Stop 0x00000024 (0x001901f9, parameter, parameter, 0x80224493)
	
	CAUSE
	=====
	
	This error can occur if "Bypass traverse checking" has been disabled for the
	user. When this option is disabled and during heavy usage (for example, during a
	backup), a very seldom-used code path is run. This function uses a zeroed IRP
	from its stack and, as a result, the stop occurs.
	
	
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
	
	
	Additional query words: NtfsCreateInternalStreamCommon 0x24 NtfsNotifyTraverseCheck
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
