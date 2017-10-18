---
layout: page
title: "Q128966: SNA Server X.25 PVC incoming calls."
permalink: kb/128/Q128966/
---

## Q128966: SNA Server X.25 PVC incoming calls.

	Article: Q128966
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an SNA Server X.25 Permanent Virtual Circuit (PVC) connection is configured
	for incoming calls only, the connection is never established.
	
	
	CAUSE
	=====
	
	Outgoing calls should always be configured for PVC connections.
	
	WORKAROUND
	==========
	
	To work around this problem, always configure an X.25 PVC connection to support
	outgoing calls.
	
	STATUS
	======
	
	
	Additional query words: prodsna 2.00 2.10 admin x.25 pvc
	
	======================================================================
	Keywords          : kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
