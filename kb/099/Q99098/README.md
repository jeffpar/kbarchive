---
layout: page
title: "Q99098: Erratic Printing with HP IIIsi PostScript and LMSFM"
permalink: kb/099/Q99098/
---

## Q99098: Erratic Printing with HP IIIsi PostScript and LMSFM

	Article: Q99098
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When Macintosh clients use the MACPRINT service to send PostScript jobs to a
	PC-attached HP IIIsi, some jobs may print partially, and some jobs may not be
	printed at all.
	
	CAUSE
	=====
	
	There is a problem with the PostScript implementation contained in the HP IIIsi.
	Testing at Microsoft determined that the problem occurred with printers that
	have a firmware datecode of V5.1, an internal font datecode of V2.14, and a
	PostScript device specific revision of 213. The problem did not occur on
	printers with a firmware datecode of V6.4R, an internal font datecode of V3.01,
	and a PostScript device specific revision of 300.
	
	RESOLUTION
	==========
	
	Obtain updated printer firmware from HP.
	
	To print out your version numbers from the HP IIIsi test page, take the printer
	offline, then press and hold the button marked "test" until the LCD indicates
	the test page is being printed.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
