---
layout: page
title: "Q110685: Problems with HP Jet Direct Card and 16 Mbps Token Ring Net"
permalink: /kb/110/Q110685/
---

## Q110685: Problems with HP Jet Direct Card and 16 Mbps Token Ring Net

	Article: Q110685
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Hewlett-Packard (HP) printer connected to a 16 Mbps token
	ring network using an HP Jet Direct card, all print jobs may not print. Some
	print jobs may print okay, and others may not print at all. It is possible that
	no error message is displayed, but the printer fails to print. Other
	intermittent printing problems may also occur.
	
	CAUSE
	=====
	
	According to HP Technical Support, intermittent printing problems can occur when
	using certain HP Jet Direct cards on a 16 Mbps token ring network because only
	the newer cards (for example, the Jet Direct cards designed for the HP LaserJet
	IV printers) are supported at that data rate. Older Jet Direct cards (cards for
	the HP LaserJet IIIs), are not supported by HP at 16 Mbps. This problem is not
	specific to Windows NT.
	
	RESOLUTION
	==========
	
	If you are using an older HP Jet Direct card and are experiencing intermittent
	problems, lower the token ring speed to 4 Mbps. If you are using one of the
	newer cards that is supported at 16 Mbps, make sure that you are using either
	Type 1 cabling or a Type 3 media filter. These media requirements must be met in
	order for the card to be supported at the higher token ring data rate. For
	additional information, call HP Technical Support at (208) 323-2551.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	NOTE: For information regarding the discontinuance of JetAdmin and product
	substitutes, go to the following website:
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	
	=============================================================================
	
