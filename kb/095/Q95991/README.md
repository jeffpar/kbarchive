---
layout: page
title: "Q95991: Printing PostScript Takes Longer in Windows 3.1 and WFWG"
permalink: /kb/095/Q95991/
---

## Q95991: Printing PostScript Takes Longer in Windows 3.1 and WFWG

{% raw %}

	Article: Q95991
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 and Windows for Workgroups version 3.1 print to
	PostScript printers slightly slower than Windows 3.0 does because they must
	convert TrueType fonts to Type 1 fonts as the document is printing. This slowing
	can be avoided by disabling TrueType fonts in Control Panel, but it is not
	recommended.
	
	In addition, Windows 3.1 Print Manager holds the whole print job until it has all
	the data. It then sends the job to the printer in the background.
	
	MORE INFORMATION
	================
	
	Windows 3.0 Print Manager does not function as a true print spooler. In Windows
	3.0, part of the print job is sent to Print Manager. After Print Manager has
	printed that portion of the print job, it then returns to Windows to get another
	piece.
	
	In Windows 3.1 and Windows for Workgroups, you get control of your machine back
	more quickly; however, as a trade-off, it takes longer to complete the print job
	because it is being spooled out in the background.
	
	
	Additional query words: 3.1 3.10 3.11 win31 fast faster print wfwg prints speed difference
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
