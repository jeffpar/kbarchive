---
layout: page
title: "Q149794: STOP Msg: &quot;0x0000001E&quot; Debugging a Visual C++ Application"
permalink: /kb/149/Q149794/
---

## Q149794: STOP Msg: &quot;0x0000001E&quot; Debugging a Visual C++ Application

	Article: Q149794
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are debugging an application in Visual C++ and some of the required
	DLLs for the application are located on a remote server, the following STOP
	error message appears:
	
	  STOP: 0000001E : (C0000005, 8019935D, 00000000, 0000000C)
	
	  KMODE_EXCEPTION_NOT_HANDLED
	
	The STOP error occurs whenever a breakpoint is set and it is necessary for
	Windows NT to access a DLL on the remote machine.
	
	NOTE: This failure occurs with Visual C++ 4.0, but this is potentially a problem
	with any software development environment.
	
	WORKAROUND
	==========
	
	To work around this problem, relocate the remote DLLs to the local computer that
	is running and debugging the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.50 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt trap 0x1E ntblue
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
