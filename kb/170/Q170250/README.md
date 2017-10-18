---
layout: page
title: "Q170250: Msmask32.ocx Control Displays Text Right Aligned"
permalink: kb/170/Q170250/
---

## Q170250: Msmask32.ocx Control Displays Text Right Aligned

	Article: Q170250
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you upgrade to Windows NT 4.0 Service Pack 3, text you enter in an
	Msmask32.ocx control displays right aligned. Prior to Service Pack 3, text
	displays left aligned.
	
	CAUSE
	=====
	
	This behavior can occur because the OCX passes ES_RIGHT edit style when creating
	the edit control window. Service Pack 3 supports right aligned single-line edit
	controls, where previously only right-aligned multi-line edit controls were
	supported.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Visual Basic 4.0. This problem
	was corrected in the latest Microsoft Visual Basic 4.0 Service Pack.
	
	
	MORE INFORMATION
	================
	
	There are no properties available for the Msmask32.ocx control to adjust text
	alignment.
	
	Additional query words: prodnt 4.00 vbwin vb
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
