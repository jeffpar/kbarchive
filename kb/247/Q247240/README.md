---
layout: page
title: "Q247240: Attempting to Destroy an Object Twice Causes &quot;Stop 0x1e&quot;"
permalink: kb/247/Q247240/
---

## Q247240: Attempting to Destroy an Object Twice Causes &quot;Stop 0x1e&quot;

	Article: Q247240
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a high-stress environment, you may receive a "Stop 0x1e in Win32k.sys" error
	message with the following call stack:
	
	kd>!kv
	ChildEBP RetAddr  Args to Child
	fb172dd8 a01178ca e1d54f48 00000467 a01934d4 win32k!HMMarkObjectDestroy+0x18
	fb172dec a0075bdc e1d54f48 e1ae0848 a00392b4 win32k!FreeDdeConv+0xc6
	fb172df8 a00392b4 a01934d4 e1ae08e8 e1ae0848 win32k!HMDestroyUnlockedObject_162+0x7
	fb172e0c a0039448 fb172e38 80628d10 00000000 win32k!DestroyThreadsObjects+0x8f
	fb172e24 a0038258 80628d10 00000001 a003830a win32k!xxxDestroyThreadInfo+0xbd
	fb172e38 a00381ed e1ae0848 00000001 e1ae0848 win32k!UserThreadCallout+0x58
	fb172e4c 80196993 e1ae0848 00000001 8061b970 win32k!W32pThreadCallout+0x1d
	fb172ed0 8019652c 00000000 fb172f04 0012fe64 ntoskrnl!PspExitThread+0x24f
	fb172ef4 8013dc14 ffffffff 00000000 00000000 ntoskrnl!NtTerminateProcess+0x13c
	fb172ef4 77f681bf ffffffff 00000000 00000000 ntoskrnl!KiSystemService+0xc4
	0012ff1c 00000000 00000000 00000000 00000000 ntdll!NtTerminateProcess+0xb
	
	CAUSE
	=====
	
	This error occurs if the Window property is deleted while the pointer to the
	property list is set to Null. This behavior occurs only in a high-stress
	environment.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date         Time         Size     File name    Platform
	  --------------------------------------------------------
	  11/02/1999   1:56 pm   1,250,896   Win32k.sys   x86
	  11/02/1999   1:55 pm   2,049,904   Win32k.sys   Alpha
	  10/18/1999   6:54 pm     166,110   Gdi32.dll    x86
	  10/18/1999   6:52 pm     307,984   Gdi32.dll    Alpha
	  10/18/1999   6:54 pm     335,120   User32.dll   x86
	  10/18/1999   6:52 pm     577,296   User32.dll   Alpha
	  10/25/1999   4:14 pm     175,376   Winsrv.dll   x86
	  10/25/1999   4:13 pm     314,128   Winsrv.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Rockwell VB application DDE bugcheck
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
