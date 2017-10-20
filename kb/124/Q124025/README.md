---
layout: page
title: "Q124025: BUG: Context Sensitve Help Fails in Table Structure Dialog"
permalink: /kb/124/Q124025/
---

## Q124025: BUG: Context Sensitve Help Fails in Table Structure Dialog

{% raw %}

	Article: Q124025
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Online help fails to operate in the Table Structure dialog box when attempting
	to activate it by pointing to the '?' menu option and selecting 'Microsoft
	FoxPro Help' from the popup menu.
	
	WORKAROUND
	==========
	
	Press the F1 key or hold down the 'Command+Shift+?' keys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The online Help should be available for any FoxPro system dialog and can be
	activated in a variety of ways. You should be able to press the F1 key, hold
	down the 'Command+Shift+?' keys, or point to the help balloon on the upper-right
	corner of the Apple Macintosh System Menu bar to activate the online Help
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Choose New from the File menu.
	
	2. Make sure the Type of file radio button is pointing to Table/DBF.
	
	3. Click the New push button.
	
	4. With the Table Structure dialog active, choose the '?' option from the
	  upper-right corner of the screen.
	
	5. Select 'Microsoft FoxPro Help' from the popup menu.
	
	No help appears. However, you can press the F1 key or Command+Shift+? to bring up
	the appropriate help topic.
	
	Additional query words: FoxMac buglist2.60a vFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
