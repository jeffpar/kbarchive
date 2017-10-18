---
layout: page
title: "Q174645: SNA Manager Fails With Access Violation in MFC40!Ordinal1375"
permalink: kb/174/Q174645/
---

## Q174645: SNA Manager Fails With Access Violation in MFC40!Ordinal1375

	Article: Q174645
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server Manager program (SNAEXP.EXE) fails with an access violation after
	it's started. This failure may start occurring after a preceding failure in the
	TN3270 service, and may continue to occur until the SNA Server being
	administered is restarted.
	
	When the failure occurs, the following entry may be logged in the
	<ntroot>\DRWTSN32.LOG file:
	
	  Application exception occurred:
	       App: exe\snaexp.DBG <process ID>
	       Exception number: c0000005 (access violation)
	
	  [...]
	
	State Dump for Thread Id 0x11b
	
	eax=0000000a ebx=00327880 ecx=0000004c edx=ffffffff esi=0000004c edi=0000004c
	eip=762b32db esp=0012fdb4 ebp=0012fdb8 iopl=0         nv up ei pl zr na po nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000             efl=00000246
	
	function: Ordinal1375
	       762b32d5 55               push    ebp
	       762b32d6 8bec             mov     ebp,esp
	       762b32d8 56               push    esi
	       762b32d9 8bf1             mov     esi,ecx
	FAULT ->762b32db 8b09             mov     ecx,[ecx]    ds:0000004c=????????
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0012fdb8 762b328e 0000000a 0000004c 04860160 762b32ce mfc40!Ordinal1375
	0012fe10 6098b207 0012fe20 ffffffff 00325274 0000002b mfc40!Ordinal1421
	0012fe2c 6098b0e9 00311600 003155d0 00000000 6108ff7d mngbase!CNotifyQueue::Dispatch
	0012fe3c 6108ff7d ffffffff 65026bef 6502f9d7 00000000 mngbase!CNotifyQueue::ProcessWait
	0012fe44 65026bef 6502f9d7 00000000 00000000 762b9d2f snaadmin!CRootItem::ProcessQueue 
	0012fe48 6502f9d7 00000000 00000000 762b9d2f 000f006c snaole!CSnaApplication::DoVerb  
	0012fe70 01014173 00315600 00000000 00000000 01015c20 snaole!CSnaObject::XSnaObject::DoVerb 
	0012fe80 01015c20 00000000 00000000 762b304e 00000000 snaexp!CSnaOleObj::DoVerb 
	0012fe8c 762b304e 00000000 010250f8 00000000 0012feb8 snaexp!CSnaDoc::OnIdle
	0012fea0 762b2bd0 00000001 010250f8 00000001 003116e0 mfc40!Ordinal4162
	0012feb8 01007dbd 00000000 010250f8 762be30d 00000000 mfc40!Ordinal4165
	0012fec4 762be30d 00000000 0012fefc 010250f8 010250f8 snaexp!CExporerApp::OnIdle  
	0012fedc 0100779c 762be2ca ffffffff 762bd2b1 77f7e3ac mfc40!Ordinal5054
	01001f0c 01006e80 01006980 01006990 010069a0 0101ebcc snaexp!CExporerApp::InitInstance 
	
	If the MFC40.DBG symbol file is installed on the Windows NT computer, the failing
	routine is reported to be MFC40!CString__AllocBeforeWrite.
	
	CAUSE
	=====
	
	This problem can occur when the SNA Server Manager program receives TN3270
	status information for an LU name that is invalid or does not exist in the
	configuration file. The exact reproduction scenario for this problem is not
	known.
	
	RESOLUTION
	==========
	
	An update to SNAADMIN.DLL is available to correct this problem. With this update
	applied, the SNA Server Manager now checks for this condition and avoids using a
	bad pointer which can lead to an access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server for Windows NT version
	3.0 U.S. Service Pack. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
