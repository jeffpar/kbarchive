---
layout: page
title: "Q125859: SystemDrive Environment Variable Disappears"
permalink: kb/125/Q125859/
---

## Q125859: SystemDrive Environment Variable Disappears

	Article: Q125859
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
	
	When you start Windows NT, a system variable called SystemDrive is created. This
	environment variable may removed before you log off. Batch files that depend on
	the SystemDrive variable fail.
	
	CAUSE
	=====
	
	When you run Control Panel, choose System, and change anything, the environment
	is regenerated without the SystemDrive environment variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: environment variables prodnt system drive applet
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
