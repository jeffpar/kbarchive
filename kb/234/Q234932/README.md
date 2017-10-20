---
layout: page
title: "Q234932: TN3270 Access Violation When Using Unique Ports for Sessions"
permalink: /kb/234/Q234932/
---

## Q234932: TN3270 Access Violation When Using Unique Ports for Sessions

{% raw %}

	Article: Q234932
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 3.0SP4, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Attempting to start the TN3270 server may result in an access violation if it
	has more than fifty TN3270 sessions configured to use unique TCP/IP ports.
	
	If the Windows NT Server running SNA Server is configured with Drwtsn32.exe as
	the default debugger, a Drwtsn32.log will be generated when the access violation
	occurs.
	
	The Drwtsn32.log may contains entries similar to one of the following if this
	problem occurs:
	
	  
	
	  Application exception occurred:
	       App: exe\tn3servr.dbg (pid=<process ID>)
	       When: <date> @ <time>
	       Exception number: c0000008
	
	  [data omitted]
	
	  function: RtlRaiseStatus
	  [...]
	  FAULT ->77f88f29 8be5             mov     esp,ebp
	  [...]
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00efff28 77f6cf15 c0000008 00000000 77f675ad 00098e64 ntdll!RtlRaiseStatus 
	  602012a0 55536021 57c08556 0102840f 15ff0000 60201050 ntdll!RtlpUnWaitCriticalSection 
	
	  Application exception occurred:
	       App: exe\tn3servr.dbg (pid=<process ID>)
	       When: <date> @ <time>
	       Exception number: c0000005 (access violation)
	
	  [data omitted]
	
	  function: RtlpWaitForCriticalSection
	  [...]
	  FAULT ->77f6cc66 ff4010           inc     dword ptr [eax+0x10]   
	  [...]
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00d8fc18 77f67456 00095d54 01017c7e 00095d54 00084ed8 ntdll!RtlpWaitForCriticalSection 
	  00d8ffb8 77f04f2c 00000000 00000002 0000012e 00000000 ntdll!RtlEnterCriticalSection 
	  00d8ffec 00000000 00000000 00000000 00000000 00000000 kernel32!lstrcmpiW 
	  00000000 00000000 00000000 00000000 00000000 00000000 tn3servr!<nosymbols>
	
	In addition, the following events may be logged in the Windows NT Application
	Event Log:
	
	  Event ID: 902
	  Source: TN3270 Server
	  Description: Logic error in module SocketActivateEvent identified by:
	  CouldNotFindSocket
	
	  Event ID: 902
	  Source: TN3270 Server
	  Description: Logic error in module SocketAdd identified by: NoFreeSockets
	
	CAUSE
	=====
	
	The TN3270 server is not correctly handling the initialization of more than 50
	unique TCP/IP ports. This results in the access violations discussed above when
	starting a TN3270 server configured with Logical Units (LUs) using unique TCP/IP
	ports.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	In addition to correcting the access violations when initializing more than 50
	unique TCP/IP ports, the TN3270 server has been updated to listen over a maximum
	of 1,000 unique TCP/IP ports. Previously, the TN3270 server could listen over a
	maximum of 64 unique TCP/IP ports.
	
	With this update applied, the TN3270 can be configured to listen over port 23
	(the default TN3270 port) plus an additional 999 user-defined ports.
	
	Please refer to the on-line SNA Server Help for more details on how to configure
	the TN3270 server and its TN3270 LUs to use specific ports other than the
	default port of 23.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
