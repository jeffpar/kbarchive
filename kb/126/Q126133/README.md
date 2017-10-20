---
layout: page
title: "Q126133: Windows NT Setup Hangs when Upgrading a Compaq Proliant"
permalink: /kb/126/Q126133/
---

## Q126133: Windows NT Setup Hangs when Upgrading a Compaq Proliant

{% raw %}

	Article: Q126133
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
	
	When you upgrade a Compaq Proliant from Windows NT 3.1 to Windows NT 3.5, Setup
	stops responding (hangs).
	
	CAUSE
	=====
	
	Before you upgrade a Compaq Proliant from Windows NT 3.1 to Windows NT 3.5, you
	must install COMPAQ Support Software Diskette (SSD) 1.05b.
	
	You can obtain SSD 1.05b from Compaq, or you can download it (SP0959.ZIP) from
	the Compaq forum on CompuServe. To use this SSD, you must have already installed
	Microsoft Windows NT U.S Service Pack 2.
	
	RESOLUTION
	==========
	
	If you attempted to install Windows NT 3.5 without first installing COMPAQ
	Support Software Diskette (SSD) 1.05b:
	
	1. Reinstall Windows NT 3.1.
	
	2. Restore a copy of the registry.
	
	3. Install Microsoft Windows NT U.S Service Pack 2.
	
	4. Install COMPAQ Support Software Diskette (SSD) 1.05b.
	
	Additional query words: prodnt 3.10 compaq cssd upgrade
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
