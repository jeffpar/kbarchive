---
layout: page
title: "Q161777: SNA Server/SnaBase Traps Receive Invalid Client Logon Message"
permalink: kb/161/Q161777/
---

## Q161777: SNA Server/SnaBase Traps Receive Invalid Client Logon Message

	Article: Q161777
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server or SnaBase process will encounter an access violation (AV) when
	receiving a badly formatted client logon challenge message. This leads to the
	following problems:
	
	- Users with active sessions may find that their computers stop responding and
	  eventually they lose their host sessions. New users will be unable to connect
	  through SNA Server until the computer running SNA Server is restarted.
	
	- The following Windows NT application event log message occurs:
	
	  Event ID: 624
	  Source: SNA Server
	  Creating dump file C:\SNA\traces\snadump.log for SNASERVR.DBG
	
	- A Drwtsn32.log entry is created that indicates an application exception error
	  occurred in Snaservr.dbg:
	
	  
	
	     Application exception occurred:
	          App: snaservr.DBG (pid=<process ID>)  (or snabase.DBG)
	          Exception number: c0000005 (access violation)
	
	     State Dump for Thread Id <thread ID>
	
	     eax=0000002a ebx=00000000 ecx=00000000 edx=00000000 esi=01213463
	     edi=0000002a
	     eip=00ab956b esp=4cd4fa14 ebp=62f5002a iopl=0         nv up ei pl nz
	     na pe nc
	     cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	     efl=00000202
	
	     function: GetSecField
	     [...]
	     FAULT ->00ab956b 0fbf4206   movsx eax,word ptr [edx+0x6]
	     ds:005de923=????
	
	The SNA Server service must be restarted to recover. If an SnaBase failure
	occurs, both the SnaBase and SNA Server services must be restarted to recover.
	
	CAUSE
	=====
	
	The cause of the improperly formatted client logon challenge message is unknown.
	The person who experienced this problem was using SNA Server 2.1 Windows 3.x
	client computers with a third-party (Korean) TCP/IP protocol stack. SNA Server
	did not expect such an invalid message to be received from a client computer,
	causing the server to attempt to process the message without validating the
	format. This led to an SNA Server access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11. This
	problem has been corrected in the latest U.S. service pack for SNA Server
	version 2.11. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	
	=============================================================================
	
