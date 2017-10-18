---
layout: page
title: "Q80552: Windows 3.0 Enhanced Mode Problems with Site Lock 3.1"
permalink: kb/080/Q80552/
---

## Q80552: Windows 3.0 Enhanced Mode Problems with Site Lock 3.1

	Article: Q80552
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Windows 3.0 in enhanced mode, you may experience problems
	printing and/or problems running the MS-DOS Prompt when you use Brightworks
	Development Site Lock 3.1 with a Novell network. Symptoms include the
	following:
	
	- When you try to print from Windows in enhanced mode, Windows may not print or
	  may lock up while trying to print.
	
	- When you run the MS-DOS Prompt full-screen from Windows in enhanced mode, the
	  following error message may appear:
	
	  APPLICATION HAS VIOLATED SYSTEM INTEGRITY
	
	WORKAROUND
	==========
	
	Printing
	--------
	
	Brightworks Development suggests the following workaround:
	
	1. Run Control Panel, select Printers and choose Configure.
	
	2. Change the printer port to LPT1.OS2.
	
	3. Choose OK twice and exit the Control Panel.
	
	NOTE: When you print with the Site Lock 3.1 utility, the LPTx.OS2
	workaround/testing port is used. As a result, printouts may not be reliable when
	you print graphics to non-PostScript printers.
	
	Running the MS-DOS Prompt
	-------------------------
	
	To correct problems when you run MS-DOS Prompt, Brightworks Development suggests
	that you do the following:
	
	1. Use the PIF Editor to set up a PIF file for COMMAND.COM, as follows:
	
	   - Under Display Usage, select Full Screen, and under Execution, select
	     Exclusive.
	
	     -or-
	
	   - Under Display Usage, select Windowed, and under Execution, select
	     Background.
	
	2. Contact Novell to obtain the latest version of the file VNETWARE.386. This
	  file is also available on CompuServe in the Novell forum.
	
	MORE INFORMATION
	================
	
	Site Lock is a TSR (terminate-and-stay-resident) program that monitors software
	usage over a network. Site Lock can be installed in the network login script.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 Site Lock print application 3.0a DOS monitor 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
