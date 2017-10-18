---
layout: page
title: "Q237879: Custom Forms Not Available for Selection with HP LaserJet 5Si MX"
permalink: kb/237/Q237879/
---

## Q237879: Custom Forms Not Available for Selection with HP LaserJet 5Si MX

	Article: Q237879
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create and save a custom form for a Hewlett-Packard (HP) LaserJet 5Si
	MX printer using a raster driver in Windows NT, the form may not be available in
	the list of form names.
	
	CAUSE
	=====
	
	Custom forms that are not within the following specified limits do not appear in
	the list of paper sizes:
	
	- Minimum: 3.67 X 7.5 inches (93 X 191 mm)
	
	- Maximum: 11.7 X 17.7 inches (297 X 450 mm)
	
	The raster driver was built with these limitations.
	
	These limitations are recommended by Hewlett-Packard and are documented at the
	following Hewlett-Packard Web site:
	
	  http://www.hp.com/cposupport/printers/support_doc/bpl05258.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	RESOLUTION
	==========
	
	To use custom forms that are smaller or larger than the above limitations,
	install and use a PostScript printer driver. The PostScript driver may require
	an optional hardware upgrade to the printer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
