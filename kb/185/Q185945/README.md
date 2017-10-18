---
layout: page
title: "Q185945: AV in win32k!HMMarkObjectDestroy in Japanese and Korean WinNT"
permalink: kb/185/Q185945/
---

## Q185945: AV in win32k!HMMarkObjectDestroy in Japanese and Korean WinNT

	Article: Q185945
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Japanese or Korean versions of Windows NT 4.0, the system
	displays a blue screen error message. When you examine the call stack, you see
	an access violation in either of the following:
	
	  win32k!HMMarkObjectDestroy
	
	  win32k!HMAllocObject
	
	The blue screen error message would be displayed as a STOP 0x1E in Win32k.sys
	
	  STOP: 0x0000001E ( 0xC00000005, 0xA0036FC2, 0x00000000, 0x00000004)
	  K_MODE_EXCEPTION_NOT_HANDLED address 0xA0036FC2 in Win32K.sys
	
	CAUSE
	=====
	
	HMAllocObject() is not supposed to run in parallel, but it was being called
	simultaneously from multiple threads:
	
	HMAllocObject() <- GetCPD() <- _GetClassInfo() <- NtUserGetClassInfo()
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	Two call stacks have been seen in stress testing, both of which are caused by
	the same problem.
	
	Stack for access violation in win32k!HMMarkObjectDestroy:
	
	  win32k!HMMarkObjectDestroy+0x17
	  win32k!HMDestroyUnlockedObject+0x88
	  win32k!DestroyThreadsObjects+0x85
	  win32k!xxxDestroyThreadInfo+0xbd
	  win32k!UserThreadCallout+0x58
	  win32k!W32pThreadCallout+0x1d
	  ntkrnlmp!PspExitThread+0x24f
	  ntkrnlmp!NtTerminateProcess+0x13c
	  ntkrnlmp!KiSystemService+0xc9
	  NTDLL!ZwTerminateProcess+0xb
	
	Stack for access violation in win32k!HMAllocObject:
	
	  febec540 a002c77f e13d9e88 ff6a6d28 00000001 win32k!HMAllocObject+0x1da
	  febec61c a002d3ee 00000000 febec674 febec680
	  win32k!xxxCreateWindowExWOW+0x111
	  febec6c0 8013bb59 80000000 febec674 febec680
	  win32k!NtUserCreateWindowEx+0x1aa
	  febec6c0 77eb0257 80000000 febec674 febec680
	  ntoskrnl!KiSystemService+0xb9
	  0012f864 77e77470 80000000 00144e98 00144e98 0x77eb0257
	
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
