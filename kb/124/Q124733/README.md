---
layout: page
title: "Q124733: Custom Forms Not Available for Selection in Epson LQ-850"
permalink: /kb/124/Q124733/
---

## Q124733: Custom Forms Not Available for Selection in Epson LQ-850

{% raw %}

	Article: Q124733
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a custom form (copy of Letter or Legal) for an Epson LQ- 850 or
	FX-850 printer in Windows NT, it may not be available in the list of form
	names.
	
	
	CAUSE
	=====
	
	This problem occurs if the height value of the paper size changes while the
	width value remains the same (or width value is greater than 8.00 inches).
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use the Epson LQ-1050 printer driver for printer emulation.
	
	- Change the Width value of the paper size to 8.00 inches or below if you
	  change the Height value of paper size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	The Epson products discussed here are manufactured by Seiko Epson Corporation,
	Inc., a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	
	Additional query words: prodnt prt printman fx 850 lq 850
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
