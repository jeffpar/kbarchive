---
layout: page
title: "Q184826: Symbol Checksum Error Reported When Kernel Debugging"
permalink: kb/184/Q184826/
---

## Q184826: Symbol Checksum Error Reported When Kernel Debugging

	Article: Q184826
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4feakbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are loading symbols for a kernel debug against a computer running
	Windows NT 4.0 Service Pack 4 (SP4), the debugger reports a checksum error,
	symbol mismatch, against the following components:
	
	  Win32k.sys
	  Ntdll.dll
	  Kernel32.dll
	  Winsrv.dll
	
	The symbols that are being used are correct, and should not report this error.
	
	
	MORE INFORMATION
	================
	
	This behavior is by design, assuming you are debugging a computer with a single
	processor.
	
	If you install SP4 on a computer with a single processor, you smash the lock
	prefix instructions. This matches the behavior of Windows NT setup. This
	behavior is new to SP4 and did not occur with Service Pack 3, so lock prefixes
	were left intact even on computers with a single processor.
	
	The lock x86 instruction only comes into play on multiprocessor computers. When
	SP4 is installed on a computer with a single processor, we replace the lock
	instruction (0xF0) with a NOOP instruction (0x90).
	
	Newer versions of Windbg know about this behavior and don't display the warning
	for these files. Click the link belwo to download the most recent version of
	Windbg from the Microsoft Web site:
	
	  http://www.microsoft.com/ddk/debugger
	
	Additional query words: debugref
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
