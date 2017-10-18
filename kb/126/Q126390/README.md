---
layout: page
title: "Q126390: Macintosh Print to Non-PostScript Printer Has Extraneous Lines"
permalink: kb/126/Q126390/
---

## Q126390: Macintosh Print to Non-PostScript Printer Has Extraneous Lines

	Article: Q126390
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Macintosh computer to a non-PostScript printer attached to
	a Microsoft Windows NT server running Microsoft Windows NT Services for
	Macintosh (SFM), some characters may print with a thin horizontal line across
	part of a character.
	
	This problem occurs with specific combinations of characters, point sizes, and
	typefaces.
	
	CAUSE
	=====
	
	The PostScript processor built into Windows NT Services for Macintosh
	incorrectly prints the extraneous line.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by using a slightly different point
	size or typeface, or by printing to an actual PostScript printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix. This is a hotfix, and
	distribution requires manager approval. To receive the hotfix, customers must be
	encountering the bug as described above. You must track the customers you send
	this to and supply them with the next Service Pack when it becomes available. To
	obtain the new file, contact the Escalation Team.
	
	Additional query words: 3.50 prodnt mac
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
