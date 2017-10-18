---
layout: page
title: "Q150140: STOP Msg: 0xC000021a as Application Terminates"
permalink: kb/150/Q150140/
---

## Q150140: STOP Msg: 0xC000021a as Application Terminates

	Article: Q150140
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When starting a console application (a Windows NT Service can qualify as a
	console application) that starts another console application, an access
	violation occurs in CSRSS.EXE when the second application terminates.
	
	This results in the following error message:
	
	  STOP: c000021a {Fatal System Error}
	  The Windows SubSystem system process terminated unexpectedly with a status of
	  0xc0000037 (0x5fe625cf 0x02c1faa0).
	  The system has been shutdown.
	
	CAUSE
	=====
	
	This problem is exposed by a console application (typically a service) which has
	the following behavior:
	
	- They start new applications using LogonUser() followed by
	  CreateProcessAsUser(). The allows a child process to be started with a
	  different security context than the parent.
	
	- The parent application has a console window, and the child application is
	  started in a way as to share the same console window (i.e. when using
	  CreateProcessAsUser, the dwCreationFlags did not specify the use of
	  CREATE_NEW_CONSOLE).
	
	A change in WINSRV.DLL for Windows NT 3.51 Service Pack 4 prevents a process from
	inheriting the window station and desktop of its parent process, if the child
	process was started in a different logon context. CreateProcessAsUser is used to
	start new applications under a new logon context.
	
	As a result of this change, the application started has NO window station or
	desktop defined because it is trying to use the Console of its parent which is
	not permitted.
	
	A problem in WINSRV.DLL (used by CSRSS.EXE) assumed that a desktop would always
	be defined. This caused an Access Violation when the WINSRV.DLL attempted to
	access the desktop while cleaning up resources owned by the process, as the
	process terminated.
	
	
	RESOLUTION
	==========
	
	The problem in WINSRV.DLL has been corrected for the case where no desktop has
	been created.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt WinStation
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
