---
layout: page
title: "Q168006: TN3270 Fails with Access Violation in ntdll!RtlFreeHeap"
permalink: kb/168/Q168006/
---

## Q168006: TN3270 Fails with Access Violation in ntdll!RtlFreeHeap

	Article: Q168006
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft SNA Server 3.0 TN3270 Server may fail unexpectedly with an access
	violation. If DRWTSN32.EXE is configured as the default Windows NT debugger, an
	entry will be logged in the <ntroot>\DRWTSN32.LOG file as follows:
	
	  Application exception occurred:
	          App: exe\tn3servr.DBG  <process ID>
	          When: <date / time >
	          Exception number: c0000005 (access violation)
	
	The following are examples of various routines and stack traces which may be
	indicated when this problem occurs (note that all failures indicate a calling
	routine of ntdll!RtlFreeHeap):
	
	  function: RtlpCoalesceFreeBlocks
	  FAULT ->77f7cf1b 8908             mov     [eax],ecx
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0c09ff14 77f64c12 01450000 0099a2e8 0c09ff40 00000000 ntdll!RtlpCoalesceFreeBlocks
	  0c09ff44 10201ba4 01450000 00000000 0099a2f0 762b1da9 ntdll!RtlFreeHeap
	
	  * or *
	
	  function: RtlDestroyHeap
	  FAULT ->77f7d0d8 8908             mov     [eax],ecx
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  0bfaff14 77f64c12 01450000 00a71638 0bfaff40 00000000 ntdll!RtlDestroyHeap
	  0bfaff44 10201ba4 01450000 00000000 00a71640 762b1da9 ntdll!RtlFreeHeap
	
	  * or *
	
	  function: RtlpInsertUnCommittedPages
	  FAULT ->77f642fb 8b4d00           mov     ecx,[ebp]
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00e5fcac 77f64ea7 00000000 00ec4000 00066000 00c50000 ntdll!RtlpInsertUnCommittedPages
	  00e5fcec 77f64c3a 00c50000 00ec3370 0000cf00 001425f8 ntdll!RtlpDeCommitFreeBlock
	  00e5fd18 0041ad47 00c50000 00000000 00ec3378 0041b22a ntdll!RtlFreeHeap
	
	With the NTSD debugger attached, the stack trace may indicate the following
	failure:
	
	  NTSD: access violation
	  eax=00000000 ebx=00000000 ecx=0ce83040 edx=01450548 esi=0099fea0 edi=01450000
	  eip=77f64cfe esp=0c09ff2c ebp=0c09ff44 iopl=0         nv up ei pl zr na po nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000 efl=00010246 ntdll!RtlFreeHeap+0x168:
	  77f64cfe 8908             mov     [eax],ecx  ds:0023:00000000=????????
	
	  0:013> kb
	  ChildEBP RetAddr  Args to Child
	  0c09ff44 10201ba4 01450000 00000000 0099fec0 ntdll!RtlFreeHeap+0x168
	  0c09ffec 00000000 0101b2c0 00000000 00000000 Image@10200000!free+0x17
	
	CAUSE
	=====
	
	This problem was caused after a mismatched version of MSVCRT40.DLL was installed
	on the Windows NT machine where the TN3270 Server was running. MSVCRT40.DLL
	supports 'C' runtime library functions which may be used and distributed by
	third party Windows NT applications developed using Microsoft Visual C++. If a
	third party application happens to install MSVCRT40.DLL and replace the version
	installed by Windows NT 4.0 (or SNA Server 3.0), this can lead to TN3270 access
	violations described above.
	
	The following Microsoft VC++ DLL's are shipped by Windows NT 4.0 (and SNA Server
	3.0). The "Base" and "File Version" can be viewed using the "DEPENDS" program,
	or by right-clicking on each DLL using the Windows NT 4.0 "My Computer"
	program:
	
	  Module        Date      Time     Size      Base        File Version
	
	  MSVCRT.DLL    10/14/96  02:38a   267,536   0x779F0000  4.20.0.6201
	  MSVCRT40.DLL  10/14/96  02:38a    65,024   0x779D0000  4.2000.0.6172
	  MFC40.DLL     10/14/96  02:38a   924,432   0x762B0000  4.1.0.6139
	  MSVCIRT.DLL   10/14/96  02:38a    74,752   0x780A0000  4.20.0.6201
	
	The TN3270 Server access violation was observed when the following MSVCRT40.DLL
	was installed on the system by a third party application (with the other DLL's
	matching the versions listed above):
	
	  Module        Date      Time     Size      Base        File Version
	
	  MSVCRT40.DLL  9/16/96   07:50a   312,832   0x10200000  4.0.0.5270
	
	RESOLUTION
	==========
	
	
	If an old version of MSVCRT40.DLL is located in the system path, this version
	should be renamed and the standard version included with Windows NT 4.0 should
	be reapplied. Here is the process to use to resolve this problem:
	
	1. Run the PATH command to check the current system path.
	
	2. Locate all instances of the above DLL's which exist in the system path (note
	  that the system path may span several drives).
	
	3. Run the DEPENDS program against these DLL's and check their versions against
	  the list documented above (which lists the versions included with Windows NT
	  4.0)
	
	4. Rename any "old" versions which may exist on the machine, and apply the
	  Windows NT 4.0 versions in their place. If multiple copies of the same DLL
	  exists in the system path, rename all duplicate copies and leave a single
	  instance in the <ntroot>\system32 directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	
	=============================================================================
	
