---
layout: page
title: "Q146965: GetAdmin Utility Grants Users Administrative Rights"
permalink: /kb/146/Q146965/
---

## Q146965: GetAdmin Utility Grants Users Administrative Rights

	Article: Q146965
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A utility, Getadmin.exe, is being circulated on the Internet that grants normal
	users administrative rights by adding them to the Administrators group. This
	utility can be run from any user context except Guest and grants a local user
	account administrative rights.
	
	
	This problem does not occur on Windows NT 3.51.
	
	CAUSE
	=====
	
	Getadmin.exe works because of a problem in a low-level kernel routine that
	causes a global flag to be set which allows calls to NtOpenProcessToken to
	succeed regardless of the current users permissions. This in turn allows a user
	to attach to any process running on the system, including a process running in
	the system's security context, such as WinLogon. Once attached to such a
	process, a thread can be started in the security context of the process.
	
	In the specific case of GetAdmin, it attaches to the WinLogon process, which is
	running in the system's security context, and makes standard API calls that add
	the specified user to the administrators group.
	
	It is important to note that any account which has been granted the rights to
	"Debug Programs" will always be able to run Getadmin.exe successfully, even
	after the application of the hotfix. This is because the "Debug Programs" right
	allows a user to attach to any process. The "Debug Programs" right is initially
	granted to Administrators and should be only granted to fully trusted users.
	
	Also, if Getadmin.exe is run with an account that is already a member of the
	administrators local group, it will still work (even after applying the hotfix).
	This is by design. Members of the administrators group always have the rights to
	make the calls GetAdmin needs in order to succeed.
	
	
	RESOLUTION
	==========
	
	A fix to the Windows NT Kernel routine, which was being used to set the global
	flag, has been developed by Microsoft. This fix prevents an application, such as
	Getadmin.exe, from attaching to WinLogon (or any other process not owned by the
	user) and from granting administrative rights to users.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/
	  hotfixes-postSP3/getadmin-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	
	MORE INFORMATION
	================
	
	Getadmin.exe must be executed locally and works for accounts on a workstation or
	member server and for domain accounts on a primary domain controller (PDC). The
	utility does not function on a backup domain controller (BDC) because the
	account database on a BDC is read only. The only way to use GetAdmin to modify a
	domain account database is to log on to a primary domain controller and run the
	utility locally on the PDC.
	
	For more information on Windows NT security, please see the following Internet
	sites:
	
	  http://www.microsoft.com/security/
	  http://www.microsoft.com/ntserver/security/default.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	http://www.microsoft.com/
	
	Additional query words: 4.00 security hole breach
	
	======================================================================
	Keywords          : kbfile kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
