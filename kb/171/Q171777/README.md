---
layout: page
title: "Q171777: Getadmin.exe Causes a STOP 0xC000021A"
permalink: /kb/171/Q171777/
---

## Q171777: Getadmin.exe Causes a STOP 0xC000021A

{% raw %}

	Article: Q171777
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the post-Service Pack 3 Getadmin hotfix and run Getadmin.exe, a
	blue screen STOP 0xC000021A error message is displayed.
	
	NOTE: The bugcheck parameters following the STOP code may be different for each
	system.
	
	CAUSE
	=====
	
	Anti-virus software running on the system at the time you install this hotfix
	may potentially cause this behavior. Some files may not be updated correctly
	because of the method in which the files are accessed by anti- virus software.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Remove or disable any anti-virus software running on your system. Check your
	  product documentation for details.
	
	2. Uninstall the Getadmin hotfix as follows:
	
	  a. From the directory the Adminfixi.exe program was downloaded to, type
	     Adminfixi -x. This extracts the files without running the hotfix
	     installation.
	
	  b. From this directory type:
	
	  HOTFIX -m -y
	
	where -m equals unattended mode and -y equals uninstall. (Using the -y switch
	requires -m or q.)
	
	  c. Reapply the Getadmin hotfix while the anti-virus is disabled or
	     uninstalled.
	
	
	MORE INFORMATION
	================
	
	For additional information about the Getadmin utility and the available hotfix,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q146965 GetAdmin Utility Grants Users Administrative Rights
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
