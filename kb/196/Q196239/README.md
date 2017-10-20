---
layout: page
title: "Q196239: SNA Client for Windows NT Hangs When Receiving PID &gt; '0x8000'"
permalink: /kb/196/Q196239/
---

## Q196239: SNA Client for Windows NT Hangs When Receiving PID &gt; '0x8000'

{% raw %}

	Article: Q196239
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 2.11 Sp2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Client for Windows NT hangs when it gets an assigned Process ID (PID)
	larger than '0x8000'. In addition, an event similar to the following may be
	logged in the Windows NT Application Event Log:
	
	  Event ID: 556
	
	  Description: A system error occurred while making a pipe connection,
	  rc=<value>
	
	CAUSE
	=====
	
	The SNA Server client for Windows NT does not correctly handle 32-bit PIDs.
	AFter the system starts using PIDs greater than '0x8000', this problem will
	occur.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Restarting the server will reset the PID values below 8000h, which fixes the
	problem until the system starts to use PID values >=8000h again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.1, 2.11,
	2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. This
	problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Below is an excerpt of the internal trace captured on a SNA Client for Windows
	NT that shows a PID of '0xFFFF8D76';
	
	New RAM pipe message, srcl=0, destl=2 Next ltab entry to look from 19 LTAB entry
	19 allocated, ltab[i]->inuse = 513 New RAM pipe, his l 1 mapped to ltab index
	19, addr 117F1008 from BK02936 running SERVERCO on SSEBASTIANAG2 Client App does
	not use Extended L-values pSPd->Pid = FFFF8D76, pSPd->pProcessHdr =
	00000180 LPd 0 is free First init Saved PID = FFFF8D76 Failed to open to remote
	process FFFF8D76, rc = 00000057 --> RAM Pipe could not be opened ltabptr
	117F1008 Secstatus = 00000002 Logging 2 chars, level = 12, msgnum = 556 pLog at
	001AC3B8, pTokenUser at 001AC3D4 Signaling the Logging thread
	CloseDmodConnection, L table entry 19, CliCount 65492
	
	Additional query words: snadmod
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11SP1,2.11SP2,3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
