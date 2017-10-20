---
layout: page
title: "Q115618: PRB: Numeric Overflow (Data Was Lost)"
permalink: /kb/115/Q115618/
---

## Q115618: PRB: Numeric Overflow (Data Was Lost)

{% raw %}

	Article: Q115618
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5c,2.5x; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.5c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are replacing data in a numeric field with data that is greater than
	the field's width in the database, a "Numeric Overflow (data was lost)" error
	message appears. However, the data is still placed in the table, but it is in
	scientific notation format. In some cases, the data is replaced with the symbol
	"****".
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type:
	
	        CREATE test
	
	2. For the name of the field to create, type "Test" (without the quotation
	  marks), and then select the numeric field type and a width of 5.
	
	3. Choose OK.
	
	4. In the Command window, type the following commands:
	
	         x=123456
	         APPEND BLANK
	         REPLACE Test WITH x
	
	  The error "Numeric Overflow (data was lost)" is returned.
	
	5. In the Command window, type "BROWSE" (without the quotation marks).
	
	Note that the number appears in the database in scientific notation.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.60 2.60a num
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250cMac kbFoxPro200DOS kbVFP300
	Version           : MACINTOSH:2.5c,2.5x; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
