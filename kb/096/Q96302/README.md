---
layout: page
title: "Q96302: PRB: Line in Group Header/Footer Ignores Data Grouping"
permalink: /kb/096/Q96302/
---

## Q96302: PRB: Line in Group Header/Footer Ignores Data Grouping

{% raw %}

	Article: Q96302
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing a report in FoxBASE+/Mac that has a line or lines in
	either the group header or group footer, the line may print for only the first
	data group that is printed on the page. On subsequent pages, the line will print
	in the same position as it did on the first page regardless of where the other
	data groups start or stop. This behavior occurs if one (or both) ends of the
	line is positioned outside the boundaries of the report.
	
	RESOLUTION
	==========
	
	Using the mouse to draw a line on a report normally keeps the ends of the line
	within the boundaries of the report. However, it is possible to position one or
	both ends of the line outside the report boundaries. Below are the steps to
	accomplish this. To get the line inside the boundaries of the report, you can
	reverse these same steps, or you can delete the line and draw it again.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Draw a line in a group header or group footer report band. The report needs
	  to have a data grouping.
	
	2. Make sure the line is selected. It will have little black squares at both
	  ends if it is selected.
	
	3. Use the LEFT ARROW or RIGHT ARROW key to move one end of the line off the
	  edge of the report.
	
	4. Using the mouse, grab the end of the line that is still on the report and
	  make the line longer.
	
	5. Preview the report.
	
	The line will appear only once on the first page and then in the same position on
	subsequent pages.
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
