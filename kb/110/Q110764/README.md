---
layout: page
title: "Q110764: BUG: Scrollable List Box Displays Blank Line at Bottom"
permalink: /kb/110/Q110764/
---

## Q110764: BUG: Scrollable List Box Displays Blank Line at Bottom

{% raw %}

	Article: Q110764
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The bottom of a list box appears to contain a blank line when the list box is
	displayed.
	
	CAUSE
	=====
	
	List boxes are created from Macintosh standard controls and may not align
	correctly with a particular font.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Resize the list box until the white space is removed.
	
	-or-
	
	- Change the size and type of the font until the white space is removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro version 2.5b for
	Macintosh. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the File menu, choose New.
	
	2. In the New dialog box, click Label, and then click New.
	
	The New Label dialog box appears, displaying the Avery label definitions. Note
	the empty space following the last item in the list box.
	
	Additional query words: VFoxMac FoxMac buglist2.50b get extra additional buglist3.00b
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
