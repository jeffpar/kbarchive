---
layout: page
title: "Q105810: HPPCL5E.DRV Does Not Save Paper Tray Selection"
permalink: /kb/105/Q105810/
---

## Q105810: HPPCL5E.DRV Does Not Save Paper Tray Selection

	Article: Q105810
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Hewlett-Packard LaserJet 4 printer driver, HPPCL5E.DRV, does not save paper
	tray selections.
	
	
	MORE INFORMATION
	================
	
	The HPPCL5E.DRV printer driver supports the Hewlett-Packard LaserJet 4, 4M, 4SI,
	and 4SI MX printers. If you change the Paper Source setting for your printer in
	the Setup dialog box in Control Panel, the selection remains for that Windows
	session but reverts back to the default Auto Select option when you reenter
	Windows.
	
	WORKAROUND
	==========
	
	To work around this situation, edit the WIN.INI file and manually change the
	"tray" selection in the [HP LaserJet 4/4M or 4SI/4SI MX] driver section to one
	of the following:
	
	  1  MP Tray
	  2  Paper Cassette
	  4  Manual Feed
	  5  Envelope Feeder
	  7  Auto Select
	  11 Lower Cassette
	
	For example:
	
	     [HP LaserJet 4/4M,LPTx]
	     paper=1
	     prtcaps=-5240
	     prtcps2=4561
	     tray=1
	
	The products included here are manufactured by Hewlett-Packard, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.10 3.1 3.11 win not saving won't save lose lost disappear hewlet packard IV LJ4 LJIV
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
