---
layout: page
title: "Q114758: TrueType Fonts Are Randomly Dropped with Kyocera F-800"
permalink: /kb/114/Q114758/
---

## Q114758: TrueType Fonts Are Randomly Dropped with Kyocera F-800

	Article: Q114758
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Kyocera F-800 or F-800a, there will be TrueType fonts
	randomly missing throughout a document. The behavior is consistent when you
	print the same document, but characters may be dropped when you print new
	documents. You will be unable to predict which characters will drop when you
	print different documents. The problem does not seem to occur with TrueType
	fonts 12 points and greater, but consistently occurs with smaller fonts. There
	also appears to be a second problem where the first character downloaded does
	not print. The same character will not print if it appears later in the
	document. This behavior does not exist in Windows 3.1 because TrueType
	downloading is handled differently.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.5.
	
	You might be able to work around the first problem by installing more printer
	memory or printing TrueType fonts as graphics (to do this in Windows NT, do not
	select the Download TrueType fonts option in Printer Setup from within the
	specific application). You might also avoid the problem by using larger TrueType
	fonts. (greater than 11 points) or by resetting the printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT
	Workstation or Server version 3.5.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt F800 F800a
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
