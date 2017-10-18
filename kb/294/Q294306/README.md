---
layout: page
title: "Q294306: Windows NT 4.0 May Hang During Process Shutdown"
permalink: kb/294/Q294306/
---

## Q294306: Windows NT 4.0 May Hang During Process Shutdown

	Article: Q294306
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fixkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer that is running Windows NT 4.0 may stop responding (hang) when a
	process is terminated. When the hang occurs, the user interface will quickly
	degrade until a reboot is required.
	
	CAUSE
	=====
	
	Windows NT 4.0 may hang if a process allows a file handle to be inherited by a
	child process and the parent process (the original owner of the handle) is shut
	down unexpectedly. If the child process has initiated a synchronous read on the
	inherited file handle at the same time that the parent process is terminated,
	the file handle cannot be destroyed. This causes a deadlock in Object Manager
	and eventually results in a hang.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size       File name     Platform
	  -----------------------------------------------------
	  04/03/2001  06:13a    953,920  Ntkrnlmp.exe  Intel
	  04/03/2001  06:13a    933,568  Ntoskrnl.exe  Intel
	  04/03/2001  06:12a  1,401,472  Ntkrnlmp.exe  Alpha
	  04/03/2001  06:12a  1,373,312  Ntoskrnl.exe  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbbuglist kbfixlist
	Component         : DDK Kernel
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
