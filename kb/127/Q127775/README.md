---
layout: page
title: "Q127775: STOP 0x0A in STREAMS.SYS with DEC Pathworks Loaded"
permalink: kb/127/Q127775/
---

## Q127775: STOP 0x0A in STREAMS.SYS with DEC Pathworks Loaded

	Article: Q127775
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT version 3.5 DEC Pathworks drivers, the following
	STOP message may appear:
	
	  STOP: 0x0000000A
	
	
	CAUSE
	-----
	
	STREAMS.SYS does not behave correctly when the transport takes longer to complete
	a connect request than the redirector allows. In this case, the redirector first
	cancels the connect IRP, then later issues a disconnect. STREAMS.SYS erroneously
	accepts the disconnect and crashes.
	
	The disconnect should be rejected since the cancel issued a disconnect to the
	transport.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 prodnt trap blue screen 0x0a crash
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
