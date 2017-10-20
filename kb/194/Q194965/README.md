---
layout: page
title: "Q194965: Desktop Update Lost by Running Windows NT 4.0 SP4 Uninstall"
permalink: /kb/194/Q194965/
---

## Q194965: Desktop Update Lost by Running Windows NT 4.0 SP4 Uninstall

{% raw %}

	Article: Q194965
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The desktop update and the Internet Explorer icon will be lost after running the
	uninstall for Windows NT 4.0 Service Pack 4 (SP4) if the Internet Explorer 4.x
	Browser was installed previous to applying SP4 as browser only, and the desktop
	update was not installed until after SP4.
	
	CAUSE
	=====
	
	The Service Pack 4 installation creates an uninstall folder by default that will
	contain the current system files including Shell32.dll and Explorer.exe. When
	the Internet Explorer desktop update is installed, it will replace these files
	but will not update the files in the SP4 uninstall folder. If SP4 is
	uninstalled, the files that were on the system when SP4 was installed will be
	restored.
	
	RESOLUTION
	==========
	
	To work around this problem, reapply the desktop update:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Select Microsoft Internet Explorer 4.0 and click Add/Remove.
	
	3. Select Add the Windows Desktop Update Component from Web Site.
	
	MORE INFORMATION
	================
	
	This will be an issue with any software installed after Service Pack 4 that
	replaces Windows NT system files.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
