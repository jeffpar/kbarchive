---
layout: page
title: "Q214624: STOP 0xA When Using SPX"
permalink: /kb/214/Q214624/
---

## Q214624: STOP 0xA When Using SPX

	Article: Q214624
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the SPX protocol is used with a network adapter driver that is NDIS 4.0
	compliant, a STOP 0xA error message may be displayed in Ndis.sys.
	
	CAUSE
	=====
	
	This problem occurs because the Nwlnkspx.sys driver allocates its own NDIS
	packets. It does not call the NDIS library routines that allocate NDIS packets
	for protocol drivers. Because Nwlnkspx.sys allocates its own packets, it does
	not initialize reserved fields in the NDIS packet structure used primarily by
	NDIS 4.0-compliant adapter drivers.
	
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the latest driver from the vendor of your
	network adapter.
	
	-or-
	
	Revert to the NDIS 3.0 driver provided by the vendor of your network adapter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	
	Additional query words: n100nt.sys, hptxnt.sys, stop 0x0000000a, 4.0, e100b.sys, ndis, intel etherexpress IRQL_NOT_LESS_OR_EQUAL
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
