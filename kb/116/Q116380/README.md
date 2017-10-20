---
layout: page
title: "Q116380: BUG: Semicolon in a Table Name Displays as Underscore"
permalink: /kb/116/Q116380/
---

## Q116380: BUG: Semicolon in a Table Name Displays as Underscore

{% raw %}

	Article: Q116380
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A semicolon (;) in a table/.DBF name displays as an underscore (_) in the
	Browse, Edit, and View windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Table names with a semicolon appear normally in other components of FoxPro, such
	as the File Open dialog box.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type the following:
	
	        CREATE TABLE a;b (charfld C(10))
	        BROWSE
	
	2. Note that the name in the title bar of the Browse window is "A_b." Close the
	  Browse window.
	
	3. Type "EDIT" (without the quotation marks) in the Command window. Note that
	  the name in the title bar of the Edit window is "A_b." Close the Edit window.
	
	4. Type SET in the Command window to open the View window. Note that the table
	  name under Work Area is "A_b."
	
	Additional query words: vFoxmac FoxMac 3.00 buglist2.50b buglist2.50c semi-colon under-score underline under-line akz
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	

{% endraw %}
