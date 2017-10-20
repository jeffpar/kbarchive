---
layout: page
title: "Q133181: Drive A Not Available in File Manager on AST Ascentia 900N"
permalink: /kb/133/Q133181/
---

## Q133181: Drive A Not Available in File Manager on AST Ascentia 900N

{% raw %}

	Article: Q133181
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	After you install or upgrade to Windows NT 3.5 on an AST Ascentia 900N 486 DX/50
	computer, the Drive A icon is not available in File Manager when the computer is
	running on AC power.
	
	CAUSE
	=====
	
	This problem occurs if the BIOS revision of the computer is lower than version
	2.5.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain 05528317.EXE and SET4NT.EXE from the AST
	Bulletin Board Service (BBS) at (714) 727-4132 (14.4K-baud modem) or (714)
	727-4723 (2400-baud modem), or contact AST Technical Support at (800) 727-1278.
	
	MORE INFORMATION
	================
	
	After you apply the fixes, the Drive A icon appears in File Manager if the
	computer uses AC power only. This is because Windows NT 3.5 does not support
	power management on the AST Ascentia 900N computer.
	
	The products discussed here are manufactured by AST Research Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: apm prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
