---
layout: page
title: "Q115197: BUG: Double-Clicking .VUE File in Finder Won't Restore View"
permalink: /kb/115/Q115197/
---

## Q115197: BUG: Double-Clicking .VUE File in Finder Won't Restore View

{% raw %}

	Article: Q115197
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 03-AUG-2000
	
	2.50b 2.50c 3.00b
	MACINTOSH
	kbtool  kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Double-clicking a view file (.vue) in Finder starts FoxPro but does not restore
	the environment saved by that view file.
	
	NOTE: If the Distribution Kit has been installed, when FoxPro starts it displays
	a dialog box asking for a program file to DO. If you choose Cancel, FoxPro then
	quits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	NOTE: In FoxBASE+ for Macintosh, double-clicking a view file in the Finder
	starts FoxBASE+ and then restores the environment settings stored in the view
	file.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start FoxPro.
	
	2. From the Window menu, choose View.
	
	3. Choose Open. Select the Customer.dbf database from the TUTORIAL subfolder in
	  the main FoxPro folder. Choose the Open button.
	
	4. From the File menu, choose Save As.
	
	5. In the Save View As text box, type "TEST" (without the quotation marks).
	  Choose Save.
	
	6. Quit FoxPro.
	
	7. Using Finder, double-click the Test.vue file.
	
	Additional query words: vFoxmac FoxMac 3.00 buglist2.50b buglist2.50c doubleclick 3.00b 2.50b akz
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
