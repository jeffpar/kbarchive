---
layout: page
title: "Q183054: Taking Ownership Remotely May Set Owner Incorrectly"
permalink: /kb/183/Q183054/
---

## Q183054: Taking Ownership Remotely May Set Owner Incorrectly

	Article: Q183054
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you take ownership of a file or directory remotely, it is possible that the
	new owner of the object may not be the user that you would expect it to be. To
	illustrate the issue, consider the following scenario:
	
	You have two domains, DOMAINA and DOMAINB. There is no trust relationship between
	them. You log on interactively to a Windows NT client in DOMAINA as a regular
	domain user, for example, DOMAINA\Fred. You then connect to a shared folder on a
	server in DOMAINB, using the DOMAINB\Administrator credentials. At the client,
	take ownership of a shared file or folder on the computer in DOMAINB.
	
	When you check ownership of the file at the remote server, you see that the owner
	is recorded as DOMAINA\Fred. Note that, in order to reproduce this behavior, you
	must know the administrator account name and password for DOMAINB.
	
	-or-
	
	If the user attempting to take ownership of the file or folder is a member of the
	local administrator's group, you will receive the following error:
	
	  The following error occurred applying security information to
	  \\server\share\directory. This security ID may not be assigned as the
	  owner of this object. Do you wish to continue.
	
	CAUSE
	=====
	
	The client computer does not look up the user name that was used to connect to
	the remote system. This behavior is inconsistent with file creation; for
	example, when you create a file on a remote system having connected in the
	manner described above, ownership of the file is set to the account with whose
	credentials you connected.
	
	Note that this inconsistency is only made possible by the fact that, by default,
	administrators have the Restore Files and Directories (SE_RESTORE_NAME)
	privilege. Having this privilege allows a process to set the ownership of the
	file or folder in this way.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Alternatively, if the user was a member of the local administrators group, remove
	him from the local admin group or obtain the above hotfix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: wrong acl restore
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
