---
layout: page
title: "Q85396: Okidata Microline 93-IBM Improperly Advances Paper Feed"
permalink: /kb/085/Q85396/
---

## Q85396: Okidata Microline 93-IBM Improperly Advances Paper Feed

{% raw %}

	Article: Q85396
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a document is printed from Microsoft Windows operating system version 3.1
	using the Okidata Microline (ML) 93-IBM driver (OKI9IBM.DRV) version 1.0 at
	240-by-216 resolution, the top and bottom margins creep down. This problem does
	not occur in all applications. For example, Notepad is not affected by this
	problem.
	
	CAUSE
	=====
	
	This problem is caused by a hardware limitation in the printer that restricts
	the advance of paper to multiples of 1/144 of an inch. To print 240-by-216
	correctly, you need to be able to advance paper in multiples of 1/216 of an
	inch.
	
	WORKAROUND
	==========
	
	To work around this problem, set the printer resolution to 120-by-72 resolution,
	as follows:
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Select the appropriate printer, then choose the Setup button.
	
	3. Change the Resolution setting to 120 x 72.
	
	MORE INFORMATION
	================
	
	Okidata Technical Support no longer supports this printer because it has not
	been made for over five years.
	
	
	The products included here are manufactured by Okidata, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 3.10 move jump micro line 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
