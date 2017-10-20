---
layout: page
title: "Q101592: Support for the AS Clause in RQBE"
permalink: /kb/101/Q101592/
---

## Q101592: Support for the AS Clause in RQBE

{% raw %}

	Article: Q101592
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There currently is no direct support for the AS clause in RQBE. However, you can
	use the AS clause in RQBE by using the field expression builder and using the
	following syntax:
	
	  [<alias>.]<select_item> AS <column_name>
	
	NOTE: Whatever is placed in the quotation marks to the right of the AS expression
	cannot contain any spaces; otherwise, it will generate an error and/or undesired
	results. Instead of spaces, you can use underscores.
	
	Additional query words: VFoxWin FoxDos FoxWin RQBE AS SELECT SQL
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
