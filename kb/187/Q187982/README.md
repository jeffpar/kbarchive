---
layout: page
title: "Q187982: HOWTO: Change Default Properties for Genhtml"
permalink: /kb/187/Q187982/
---

## Q187982: HOWTO: Change Default Properties for Genhtml

{% raw %}

	Article: Q187982
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you do not like the default color and font that the Genhtml program uses when
	you save a form or report to HTML, you can change the color and font in the
	Genhtml.dbf file.
	
	MORE INFORMATION
	================
	
	By default, if you do not call Genhtml programmatically with the style parameter
	to create a Web page, Genhtml creates the page(s) with a silver background and a
	standard font. To change the default color and font try using the following
	sample code:
	
	     USE HOME()+"GENHTML.DBF"
	     LOCATE FOR ID = 'VFPDefault'
	     REPLACE Style WITH 'table{color:red; font-size:18pt;
	     font-family:Arial}', prescript WITH '_oHTML.body.bgColor="blue"'
	     USE
	
	This code changes the default color and text to an 18 point Arial font with red
	text and a blue background. The next time you save an item as HTML, the program
	uses the new color and font.
	
	NOTE: If you cannot find your Genhtml.dbf file, you must run the Genhtml.prg
	program once. The easiest way to do this is to browse a table and from the File
	menu, select "Save As HTML".
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help; search on: "Samples"; topic: "Utilities"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by David Botzenhart, Microsoft Corporation
	
	
	Additional query words: kbVFp600 kbInternet
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
