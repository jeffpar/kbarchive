---
layout: page
title: "Q151435: Portions of Received Fax Cover Page Missing"
permalink: kb/151/Q151435/
---

## Q151435: Portions of Received Fax Cover Page Missing

	Article: Q151435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a fax from Microsoft Exchange, the received fax cover page may
	appear off center, or part of the cover page may appear to be missing. The
	remaining fax pages are correct.
	
	CAUSE
	=====
	
	This behavior can occur if the sender of the fax opened the cover page in Cover
	Page Editor and then saved the cover page with the wrong paper size.
	
	RESOLUTION
	==========
	
	To view the cover page, open it in Cover Page Editor. Determine if the cover
	page you are using is positioned (or looks) the same as the received fax. If so,
	it is likely that the page size is set incorrectly. To verify this and correct
	the situation, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  Fax, and then click Cover Page Editor.
	
	2. Open the cover page you are using. If the cover page appears off center or
	  part of the page is missing, continue with step 3.
	
	3. On the File menu, click Page Setup.
	
	4. In the Paper Size box, click a standard size (such as Letter).
	
	5. On the File menu, click Save.
	
	6. Quit Cover Page Editor.
	
	7. Try sending a test fax.
	
	
	Additional query words: msfax garbled
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
