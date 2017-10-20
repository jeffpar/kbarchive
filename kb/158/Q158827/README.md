---
layout: page
title: "Q158827: BUG: PageFrame on Toolbar Causes System Error 11"
permalink: /kb/158/Q158827/
---

## Q158827: BUG: PageFrame on Toolbar Causes System Error 11

{% raw %}

	Article: Q158827
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Placing a PageFrame on a Toolbar in Visual FoxPro for the Macintosh causes a
	System Error 11 and crashes the system. While it is possible to place a
	PageFrame in a Toolbar in the Windows version of Visual FoxPro, it is not
	recommended.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Execute the following command in the Command window:
	
	  " CREATE CLASS mytoolbar AS toolbar OF mytoolbar " (without the quotation
	  marks)
	
	2. Add a PageFrame to the toolbar, and save the class.
	
	3. Execute the following commands in the Command window:
	
	        SET CLASSLIB TO mytoolbar
	        x = CREATE("mytoolbar")
	        x.show
	
	4. Click on page 2 of the PageFrame.
	
	Additional query words: VFOXMAC kbdse
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
