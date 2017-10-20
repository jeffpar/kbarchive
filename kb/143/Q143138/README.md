---
layout: page
title: "Q143138: Can No Longer Access the Registry with Null Sessions"
permalink: /kb/143/Q143138/
---

## Q143138: Can No Longer Access the Registry with Null Sessions

{% raw %}

	Article: Q143138
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply the security hotfix (Sec-fix) or Windows NT 4.0 Service Pack 3,
	which includes this hotfix, applications that use null sessions may no longer
	work properly.
	
	For example, after you apply the security hotfix to a Windows NT computer running
	Cheyenne ARCServe 6.0, you may receive the following error message when you
	attempt to schedule a job (for example, local, remote, backup, and restore):
	
	  User doesn't have enough rights to do this
	  EC=5
	
	CAUSE
	=====
	
	The updated security modules for Windows NT no longer permit null sessions to
	access the Windows NT registry.
	
	RESOLUTION
	==========
	
	Perform the following steps to resolve this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters\
	
	3. Add "winreg" (without the quotation marks) to the NullSessionPipes entry.
	
	4. Restart your computer.
	
	MORE INFORMATION
	================
	
	For more information on the security hotfix (Sec-fix,) please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q143474
	  TITLE : Restricting Information Available to Anonymous Logon Users
	
	  ARTICLE-ID: Q143475
	  TITLE : Windows NT System Key Permits Strong Encryption of the SAM
	
	  ARTICLE-ID: Q161372
	  TITLE : How to Enable SMB Signing in Service Pack 3
	
	This hotfix is also included with Windows NT 4.0 Service Pack 3.
	
	Additional query words: prodnt AS
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
