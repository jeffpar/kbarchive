---
layout: page
title: "Q104471: ERR: Not Enough Room for Scroll Bars"
permalink: /kb/104/Q104471/
---

## Q104471: ERR: Not Enough Room for Scroll Bars

{% raw %}

	Article: Q104471
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a text region is defined with three or fewer lines vertically, the error
	message
	
	  Not enough room for scroll bars
	
	will occur.
	
	RESOLUTION
	==========
	
	Resize the text region to contain at least four lines vertically and regenerate
	the format file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create or use a database that contains a memo field.
	
	2. From the File menu, choose New, and select Form.
	
	3. Select the text region tool. Create a text region approximately 2 inches wide
	  and 2 lines high.
	
	4. From the Program menu, choose Generate. Choose the Format File button, and
	  then choose OK. Name the file SCROLBAR and then choose OK.
	
	5. In the Command window, type the following commands:
	
	  " SET FORMAT TO scrolbar
	  READ " (without the quotation marks)
	
	The
	
	  Not enough room for scroll bars
	
	error will occur.
	
	Additional query words: 2.01 foxbase+/mac errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
