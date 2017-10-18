---
layout: page
title: "Q130741: Services for Macintosh and AppleTalk Do Not Detect 3COM 3C595"
permalink: kb/130/Q130741/
---

## Q130741: Services for Macintosh and AppleTalk Do Not Detect 3COM 3C595

	Article: Q130741
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Services for Macintosh in Windows NT Server 3.5 or
	AppleTalk protocol in Windows NT Workstation 3.5, the following error messages
	appear:
	
	  Setup cannot find any network adapter for Services for Macintosh. You will be
	  unable to use Services for Macintosh. Try adding a network adapter or enable
	  the bindings for AppleTalk protocol.
	
	  -and-
	
	  Setup cannot find any network adapter for the AppleTalk Protocol. You will be
	  unable to use AppleTalk Protocol. Try adding a network adapter or enable the
	  bindings for AppleTalk Protocol.
	
	When you select Router Configuration, the following error appears:
	
	  The AppleTalk protocol registry parameter cannot be read. One or more
	  parameters might be missing or contain invalid values.
	
	This problem occurs when you are using a 3COM 3c590 or 3C595 Fast EtherLink PCI
	10/100 network interface card (NIC).
	
	CAUSE
	=====
	
	The NIC driver is missing the media type descriptor required for Services for
	Macintosh and AppleTalk protocol.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the new 3COM 3C595 PCI NIC driver (EL59X.SYS)
	from the 3COM Bulletin Board Service (BBS) at (408) 980-8204 or from the
	AskThreeCom forum on CompuServe. The file to download is 3C59XN.EXE.
	
	The 3Com products discussed here are manufactured by 3Com Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt mac sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
