---
layout: page
title: "Q157171: Complex Filled Shapes Near Bottom of Page Print Incorrectly"
permalink: kb/157/Q157171/
---

## Q157171: Complex Filled Shapes Near Bottom of Page Print Incorrectly

	Article: Q157171
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Complex filled shapes that are near the bottom of a page may not print correctly
	to some Postscript printers.
	
	
	Any non-rectangular shapes with a complex fill (gradient, texture, pattern,
	picture, or semitransparent fill) in a WMF file that crosses page boundaries
	will not print correctly to PostScript printers; the fill will be missing.
	
	
	RESOLUTION
	==========
	
	Use the appropriate method below to resolve this symptom.
	
	Windows NT 4.0
	--------------
	
	Apply the latest service pack for Windows NT 4.0.
	
	Windows NT 3.51
	---------------
	
	This problem is corrected by an updated version (hotfix) of Pscript.dll for
	Windows NT version 3.51. Pscript.dll is available for the Alpha, i386 (Intel),
	MIPS, and Power PC platforms:
	
	  Platform   Pscript.dll Date   Pscript.dll Size   File to Download
	  -----------------------------------------------------------------
	  Alpha      10/14/96           283,920            Ps7-351a.exe
	  i386       10/14/96           222,256            Ps7-351i.exe
	  MIPS       10/14/96           265,488            Ps7-351m.exe
	  PPC        10/14/96           276,240            Ps7-351p.exe
	
	To correct this problem, perform the following steps:
	
	1. Download the appropriate self-extracting file from the list above to an empty
	  temporary folder. You can download any of these self-extracting files from
	  the following service:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/pscript-fix/
	
	2. In File Manager, double-click the file to extract its contents.
	
	3. In File Manager, double-click the Readme.txt file for complete installation
	  instructions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
