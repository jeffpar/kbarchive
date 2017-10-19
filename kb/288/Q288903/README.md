---
layout: page
title: "Q288903: 0203 Error Message When You Start the Windows Installer Service"
permalink: /kb/288/Q288903/
---

## Q288903: 0203 Error Message When You Start the Windows Installer Service

	Article: Q288903
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Windows Installer service on a Windows NT
	4.0-based computer that is installed on an NTFS file system (NTFS) volume, you
	may receive the following error message:
	
	  Could not start the Windows Installer service on <Computer Name>
	
	  Error 0203: The system could not find the environment option that was entered.
	
	CAUSE
	=====
	
	This issue can occur if you modify the default access control list (ACL) on the
	%SystemRoot%\Installer working folder. The Windows Installer service operates
	under the context of the System security account, and this account must have
	Full Control permissions to the Installer folder. The default permission for the
	Installer folder is Full Control for the Everyone group.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the ACL for the %SystemRoot%\Installer folder so
	that the System account has Full Control permissions:
	
	1. Start Microsoft Windows NT Explorer from the Start menu.
	
	2. Right-click the %SystemRoot%\Installer folder and click Properties.
	
	3. Click the Security tab, and then click Permissions.
	
	4. Click Add, locate the System account (the operating system), and then click
	  Add.
	
	5. In the "Type of access" box, click Full Control, and then click OK.
	
	6. Verify that the System account is added to the ACL list, click "Replace
	  permissions on subdirectories" check box, and then click OK.
	
	7. When you are prompted to replace permissions on all subdirectories, click
	  Yes.
	
	8. Click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
