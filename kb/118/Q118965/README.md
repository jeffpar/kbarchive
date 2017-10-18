---
layout: page
title: "Q118965: Wall Data Rumba for the AS/400 GP Faults in 5250 Session"
permalink: kb/118/Q118965/
---

## Q118965: Wall Data Rumba for the AS/400 GP Faults in 5250 Session

	Article: Q118965
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kb3rdparty kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to launch a 5250 session in Wall Data Rumba for the AS/400, an
	"Interface not found" message appears followed by a general protection (GP)
	fault in the SNASRV.EXE module.
	
	CAUSE
	=====
	
	This problem occurs when the WDMICOMM.EXE file in Wall Data Rumba doesn't wait
	long enough for the SNA Server Windows client (WNAP.EXE) to initialize.
	
	STATUS
	======
	
	Wall Data has confirmed this to be a problem with Rumba. For more information,
	please call Wall Data Technical at (800) 927-8622.
	
	Wall Data Rumba is manufactured by Wall Data, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodsna third-party 3rdparty thirdparty gpf
	
	======================================================================
	Keywords          : kb3rdparty kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
