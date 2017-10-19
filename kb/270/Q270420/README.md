---
layout: page
title: "Q270420: MB_SERVICE_NOTIFICATION Message Box May Not Exit the Process"
permalink: /kb/270/Q270420/
---

## Q270420: MB_SERVICE_NOTIFICATION Message Box May Not Exit the Process

	Article: Q270420
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbKernBase kbOSWin2000 kbSDKWin32 kbService kbDSupport kbGrpDSKernBase kbWinNT400PreSP7
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If any thread in a process has displayed a message box by using the
	MB_SERVICE_NOTIFICATION flag and that message box is still visible, the process
	object will not be released even after the process exits. This problem occurs
	whether the process exits normally through a call to the ExitProcess function or
	abnormally through a call to the TerminateProcess function or as the result of
	an exception. However, the process object is eventually released when the
	message box is dismissed.
	
	This behavior occurs in Windows NT 4.0 with Service Pack 6 (SP6) and Service Pack
	6A (SP6A). With Service Pack 5 (SP5) and earlier, the process object is released
	immediately after the process exits, as expected.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  09/13/2000  04:02p             955,328 Ntkrnlmp.exe  Intel
	  09/13/2000  04:02p             934,848 Ntoskrnl.exe  Intel
	  09/13/2000  04:03p           1,407,424 Ntkrnlmp.exe  Alpha
	  09/13/2000  04:03p           1,383,488 Ntoskrnl.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 with Service Pack
	6 and Service Pack 6A.
	
	MORE INFORMATION
	================
	
	This problem also occurs in Microsoft Windows 2000. For additional information
	about a fix for Windows 2000, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q270610 Message Box Using MB_SERVICE_NOTIFICATION May Not Exit the Process
	
	Additional query words: Ntkrnlmp Ntoskrnl
	
	======================================================================
	Keywords          : kbKernBase kbOSWin2000 kbSDKWin32 kbService kbDSupport kbGrpDSKernBase kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
