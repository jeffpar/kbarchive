---
layout: page
title: "Q120080: BUG: CTRL+Q Doesn't Exit from a READ"
permalink: /kb/120/Q120080/
---

## Q120080: BUG: CTRL+Q Doesn't Exit from a READ

{% raw %}

	Article: Q120080
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	FoxPro does not exit from a READ when the CTRL+Q key combination is pressed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	In other FoxPro products, the CTRL+Q key combination exits from a READ without
	saving any changes.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following code in the Command window:
	
	        x = 'TEST'
	        @ 1,1 SAY x GET x
	        READ
	
	2. Press CTRL+Q to exit from the READ.
	
	Note that nothing happens. To exit successfully, press ESC or CTRL+W.
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c quit control key shortcuts escape buglist2.50b buglist2.50c buglist2.60a buglist3.00b akz
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
