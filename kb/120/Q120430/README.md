---
layout: page
title: "Q120430: CA-SuperProject For Windows Crashes When Printing"
permalink: kb/120/Q120430/
---

## Q120430: CA-SuperProject For Windows Crashes When Printing

	Article: Q120430
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A "divide-by-zero" error occurs when you print to a network printer from
	CA-SuperProject if the printserver or printer name has a period (".") in it.
	
	CAUSE
	=====
	
	If the printer Universal Naming Convention (UNC) name contains a period (eg:
	\\printlab.1\bartsimp.son) and SuperProject does not accept periods in a UNC
	printer name.
	
	RESOLUTION
	==========
	
	Either rename the shared printer using a name without periods or NET USE to the
	shared printer and print from SuperProject to the redirected LPT port.
	
	STATUS
	======
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
