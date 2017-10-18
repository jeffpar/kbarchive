---
layout: page
title: "Q154694: New Policy Available to Hide Go To on Tools Menu"
permalink: kb/154/Q154694/
---

## Q154694: New Policy Available to Hide Go To on Tools Menu

	Article: Q154694
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Once you remove drives from Windows NT Explorer using the NoDrives registry
	entry through a system policy or the TweakUI utility, you can still jump to the
	drives by clicking Go To on the Tools menu in Windows NT Explorer.
	
	CAUSE
	=====
	
	This problem occurs because a policy for this dialog was not created when the
	Windows NT system policies were first defined.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After you apply the hotfix, the new System Policy is called "Remove
	Tools->Goto Menu from Explorer" in the category "Windows NT
	Shell\Restrictions for Users and Groups".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
