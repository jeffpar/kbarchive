---
layout: page
title: "Q182640: Application Exception in Snaservr.exe in Function SNPUPUTI"
permalink: /kb/182/Q182640/
---

## Q182640: Application Exception in Snaservr.exe in Function SNPUPUTI

	Article: Q182640
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server 4.0 system may experience an application exception in the
	Snaservr.exe file in function SNPUPUTI when a PU PassThrough connection is
	configured to use Format 0 XIDs.
	
	When this occurs, a Drwtsn32.log file is generated in the Windows NT directory.
	The Drwtsn32.log file will contain an entry similar to the following:
	
	Application exception occurred:
	   App: snaservr.exe (pid=<process id>)
	   When: <date> @ <time>
	   Exception number: c0000005 (access violation)
	
	function: snpuputi
	   0100a65a 8d4e06       lea     ecx,[esi+0x6] ds:014aea06=????????
	   0100a65d 2bd3         sub     edx,ebx
	   0100a65f 0fbfdf       movsx   ebx,di
	   0100a662 3bda         cmp     ebx,edx
	   0100a664 7e27         jle     snpuputi+0x4d (0100a68d)
	   0100a666 85f6         test    esi,esi
	   0100a668 7427         jz      snpuputi+0x51 (0100a691)
	   0100a66a 668b00       mov     ax,[eax] ds:01d0fff7=0000
	   0100a66d 8b36         mov     esi,[esi] ds:00000000=????????
	   0100a66f 662b01       sub     ax,[ecx]  ds:01d09d76=0013
	fault ->0100a672 0fbf5604 movsx   edx,word ptr [esi+0x4] ds:014aea07=????
	   0100a676 0fbf5e06     movsx   ebx,word ptr [esi+0x6] ds:014aea07=????
	   0100a67a 8d7c07ff     lea     edi,[edi+eax-0x1] ds:031be9fe=????????
	   0100a67e 8d4604       lea     eax,[esi+0x4] ds:014aea06=????????
	   0100a681 8d4e06       lea     ecx,[esi+0x6] ds:014aea06=????????
	   0100a684 2bda         sub     ebx,edx
	   0100a686 0fbfd7       movsx   edx,di
	   0100a689 3bd3         cmp     edx,ebx
	   0100a68b 7fd9         jg      snpuputi+0x26 (0100a666)
	   0100a68d 85f6         test    esi,esi
	   0100a68f 750f         jnz     snpuputi+0x60 (0100a6a0)
	   0100a691 55           push    ebp
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4 Function Name
	00dafeec 01041647 01d09d70 0000001a 00000901 01180013 snaservr!snpuputi
	   (FPO: [EBP 0x01d09d70] [3,0,4])
	
	In addition, SNA Server logs an Event 624 in the Windows NT Application Event log
	similar to the following:
	
	  
	
	  Creating dump file C:\SNA\traces\snadump.log for Snaservr.exe
	
	  EXPLANATION
	  A process (Snaservr.exe) ended abnormally due to a protection
	  violation or similar condition and a dump file Snadump.log has been
	  created that contains information about the state of the process at
	  the time of the exception. Register information is contained in your
	  Windows NT root directory in the file Drwtsn32.log.
	
	NOTE: This can only occur when SNA Server is configured to use PU PassThrough
	connections and one of these connections is configured to use Format 0 XIDs in
	the connection properties under the System Identification tab.
	
	CAUSE
	=====
	
	The application exception is caused when SNA Server attempts to forward a Format
	3 XID received on one PU PassThrough connection to its partner PU PassThrough
	connection that is configured to use Format 0 XIDs.
	
	
	WORKAROUND
	==========
	
	To work around this problem, configure all PU PassThrough connections to use
	Format 3 XIDs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
