---
layout: page
title: "Q186727: WD97: Light Blue Background Prints on Graphics"
permalink: /kb/186/Q186727/
---

## Q186727: WD97: Light Blue Background Prints on Graphics

{% raw %}

	Article: Q186727
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document containing graphics to a color printer, the graphics
	print with a light blue background.
	
	CAUSE
	=====
	
	In the Microsoft Windows 95 printer driver Spool Settings, you may have Spool
	data format set to a value other than RAW.
	
	RESOLUTION
	==========
	
	To resolve this problem, change the spool data format to RAW.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Select the printer you are using to print your document.
	
	3. On the File menu, click Properties.
	
	4. On the Details tab, click Spool Settings.
	
	5. In the Spool Data Format list, click RAW. Click OK twice.
	
	Additional query words: printing shade shaded
	
	======================================================================
	Keywords          : kbprint kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
