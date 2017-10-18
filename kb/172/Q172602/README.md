---
layout: page
title: "Q172602: Event ID 3 Logged After Application Exception in Snaservr.exe"
permalink: kb/172/Q172602/
---

## Q172602: Event ID 3 Logged After Application Exception in Snaservr.exe

	Article: Q172602
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A connection is configured for independent LU6.2 sessions between SNA Server and
	a mainframe computer. When activating this connection, the SNAServer service
	(Snaservr.exe) may terminate unexpectedly, generating a Drwtsn32.log file in the
	Windows NT directory.
	
	The Drwtsn32.log file may show information similar to the following:
	
	  
	
	  Application exception occurred:
	     App: exe\snaservr.DBG (pid=280)
	     When: 4/23/1997 @ 10:43:17.118
	     Exception number: 80000003 (hardcoded breakpoint)
	
	In addition, SNA Server will log an Event ID 3 Qualifier 1106 in the Windows NT
	Application Event Log:
	
	  
	
	  Event ID: 3
	  Source: SNA Server
	  Description: (1106)node configuration error
	  Explanation: The SNA server (node) detected a configuration file problem
	  caused by a logic error in the configuration program. These subcodes
	  should not occur during normal operation.
	  Sub Code Information: "X'1106'  Configuration file is corrupted".
	
	CAUSE
	=====
	
	This problem occurs when SNA Server receives a BIND from the mainframe that does
	not contain a Network-Qualified PLU Network Name Structured Data Subfield. The
	BIND does contain a fully-qualified Network Services Primary LU Name Field, but
	SNA Server ignores this. SNA Server tries to process the BIND but fails because
	a remote LU data structure that is expected to be present for the
	Network-Qualified PLU Network Name Structured Data Subfield is absent.
	
	NOTE: A BIND that does not contain a Network-Qualified PLU Network Name
	Structured Data Subfield is valid.
	
	Please refer to the IBM SNA Formats Guide (GA27-3136) for more information on the
	BIND.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, SNA Server functions properly when it encounters a BIND
	without a Network-Qualified PLU Network Name Structured Data Subfield.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
