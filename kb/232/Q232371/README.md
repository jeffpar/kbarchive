---
layout: page
title: "Q232371: Gray Text Prints Black When Using the LaserJet 6L Printer"
permalink: /kb/232/Q232371/
---

## Q232371: Gray Text Prints Black When Using the LaserJet 6L Printer

{% raw %}

	Article: Q232371
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print a gray font from your Hewlett-Packard LaserJet 6L printer,
	the font may print black instead.
	
	CAUSE
	=====
	
	This issue can occur if you are using the driver that is supplied by
	Hewlett-Packard for Windows NT-based computers. This driver is based on the
	Microsoft Mini Driver specification, and so it does not provide the ability to
	print colored fonts as grayscale.
	
	RESOLUTION
	==========
	
	To work around this issue, obtain and install the Hewlett-Packard LaserJet 1100
	printer driver to provide the ability to print colored fonts as grayscale.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
