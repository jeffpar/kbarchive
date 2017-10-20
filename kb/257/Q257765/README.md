---
layout: page
title: "Q257765: SNA DDM Service Fails with an Access Violation Error"
permalink: /kb/257/Q257765/
---

## Q257765: SNA DDM Service Fails with an Access Violation Error

{% raw %}

	Article: Q257765
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA DDM Service (Ddmserv.exe) may fail with an Access Violation error
	message, causing the following events to be logged:
	
	  Event ID: 3
	  Source: SNA DDM Service
	  Description: DDM Requestor has encountered exception 6be at location
	  IOpenRowset::OpenRowset
	
	If the VSAM Provider is invoked from within an Active Server Page, the following
	event may also be logged:
	
	  Event ID: 5
	  Source: Active Server Pages
	  Description: Error: File (file.asp) Unexpected error
	
	A Drwtsn.log file is also created, indicating an Access Violation failure in
	Ddmserv.exe in one of the following routines:
	
	  - ddmserv!mwOpen()
	  - ddmserv!InitializeFileInfo()
	  - ddmserv!IsKeyInRange()
	  - ddmserv!mwConnect()
	
	For example:
	
	  Application exception occurred:
	  App: exe\ddmserv.dbg (pid)
	  When: date @ time
	  Exception number: c0000005 (access violation)
	
	  [...]
	
	  State Dump for Thread Id 0xa8
	  eax=00000001 ebx=015c7690 ecx=00000000 edx=00017fff esi=041919e0 edi=00000000
	  eip=01008a83 esp=05fef8e0 ebp=032b7250 iopl=0 nv up ei pl nz ac pe nc
	  cs=001b ss=0023 ds=0023 es=0023 fs=0038 gs=0000 efl=00000212
	
	  function: mwOpen
	  01008a68 5f pop edi
	  01008a69 5e pop esi
	  01008a6a 5d pop ebp
	  01008a6b 5b pop ebx
	  01008a6c 81c450020000 add esp,0x250
	  01008a72 c3 ret
	  01008a73 8b83e4000000 mov eax,[ebx+0xe4] ds:015c7774=00000001
	  01008a79 85c0 test eax,eax
	  01008a7b 7e21 jle mwOpen+0x4ee (01008a9e)
	  01008a7d 8b8bec0c0000 mov ecx,[ebx+0xcec] ds:015c837c=00000000
	  FAULT ->01008a83 8929 mov [ecx],ebp ds:00000000=????????
	
	  *---- Stack Back Trace ----*
	
	  FramePtr ReturnAd Param#1 Param#2 Param#3 Param#4 Function Name
	  05fefb3c 0100323f 0000000f 00076fbc 00076fcc 036e6a08 ddmserv!mwOpen
	  05feff28 00000010 00076fb8 0000004c 00000004 00078ad0 ddmserv!DDMAgent_mwOpen
	
	CAUSE
	=====
	
	The DDMSERV process is not properly handling new open requests when the maximum
	number of concurrent tables are open (157). Also, internal fileinfo structures
	are not being properly protected across different threads of the process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	This update also increases the maximum number of concurrently open tables
	(files) to 1024 (from 157), and increases the maximum connections to 1024 (from
	128).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
