---
layout: page
title: "Q76923: The Control Menu in Write Works Incorrectly in Windows"
permalink: /kb/076/Q76923/
---

## Q76923: The Control Menu in Write Works Incorrectly in Windows

{% raw %}

	Article: Q76923
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Write program, the control menu (press
	ALT+SPACEBAR+C) in Document Page Layout does not work properly. The control menu
	also does not work within the Network icon under the Control Panel.
	
	WORKAROUND
	==========
	
	The Choose OK option works properly. Use this option to exit the program.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem in Write
	-----------------------------------
	
	1. Open Write and select the Document menu item.
	
	2. Choose Header, Footer, or Page Layout.
	
	  a. If you choose Header, put a 0 (zero) in Distance from Top and click Return
	     to Document.
	
	  b. If you choose Footer, put a 0 (zero) in Distance from Bottom and click
	     Return to Document.
	
	  c. If you choose Page Layout, put a 0 (zero) under Margins in any of the text
	     boxes (left, right, top, bottom) and click OK.
	
	3. The following warning message is displayed: Current printer cannot print
	  outside these margins.
	
	4. Instead of choosing OK, press ALT+SPACEBAR+C (for Close). This does not work.
	
	Steps to Reproduce Problem in Control Panel
	-------------------------------------------
	
	Only if a network is installed:
	
	1. Open the Control Panel Network option.
	
	2. Choose About Networks from the Help menu.
	
	3. Instead of choosing OK, press ALT+SPACEBAR+ C (for Close). Again, this does
	  not work.
	
	Additional query words: 3.00 3.00a 3.0a 3.0 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
