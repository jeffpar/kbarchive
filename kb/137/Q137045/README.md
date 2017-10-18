---
layout: page
title: "Q137045: X400: Using a 3Com Etherlink II Network Card for TP4/CLNS"
permalink: kb/137/Q137045/
---

## Q137045: X400: Using a 3Com Etherlink II Network Card for TP4/CLNS

	Article: Q137045
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure the Mail Gateway to X.400 using TP4/CLNS over a 3Com
	Etherlink II (assy 2227-04 rev.F) or 3Com Etherlink II TP (assy 8782- 01
	rev.d1), the gateway may hang while initializing.
	
	WORKAROUND
	==========
	
	Try to run the GETMAC.EXE utility (C:\TP4\UTIL\), included with the X.400
	Gateway. If this utility also hangs, then remove the 3Com card and substitute a
	different card.
	
	NOTE: At this time, the above cards are the only ones known to have this
	conflict.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
