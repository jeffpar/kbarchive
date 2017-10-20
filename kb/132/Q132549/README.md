---
layout: page
title: "Q132549: How to Set the Color and Font of Grid Rows Conditionally"
permalink: /kb/132/Q132549/
---

## Q132549: How to Set the Color and Font of Grid Rows Conditionally

{% raw %}

	Article: Q132549
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro provides several dynamic properties that allow control over the
	appearance of information contained in grid columns. These properties are
	collectively referred to as dynamic properties.
	
	This article shows by example how to use a combination of the dynamic properties,
	the SETALL method, and an IIF statement to change the color or font of entire
	rows in the grid that meet a predetermined condition.
	
	The dynamic properties include:
	
	  DynamicForeColor
	  DynamicBackColor
	  DynamicFontName
	  DynamicFontSize
	  DynamicFontBold
	  DynamicFontItalic
	  DynamicFontStrikethru
	  DynamicUnderline
	  DynamicAlignment
	  DynamicCurrentControl
	
	MORE INFORMATION
	================
	
	The following program creates a form and places a grid on it. The grid object
	displays information from the Customer table in the Tastrade database. For only
	those customers from Washington, the code displays all of the columns with blue
	text.
	
	Code Sample
	-----------
	
	  ** Begin code example
	
	  OPEN DATABASE c:\vfp\samples\mainsamp\data\tastrade
	  #include FOXPRO.h        && used for color constants.
	  PUBLIC otheForm          && keep form live after the program is done
	  otheForm = CREATEOBJECT("theForm")      && make the form
	  otheForm.SHOW                 && show the form
	
	  DEFINE CLASS theForm AS FORM  && class definition for the form
	     SCALEMODE = 0
	     ADD OBJECT "testgrid" AS mygrid   && add the grid to the form
	
	     PROCEDURE INIT
	        THISFORM.CAPTION = "Grid with conditional color in rows"
	        THISFORM.WIDTH = 100
	        THISFORM.BACKCOLOR = RGB(192,192,192)
	     ENDPROC
	
	     PROCEDURE DESTROY
	        SET DATABASE TO tastrade
	        CLOSE DATA
	        RELEASE thisform
	     ENDPROC
	
	  ENDDEFINE
	
	  DEFINE CLASS mygrid AS GRID      && class definition for the grid
	     COLUMNCOUNT= 3
	     SCROLLBARS = 3
	     RECORDSOURCETYPE = 0        && alias
	     RECORDSOURCE = "Customer"
	     WIDTH = 83
	     TOP = 1
	     LEFT = 7
	     PROCEDURE INIT              && use the init procedure to set
	                                 && appropriate column properties
	        WITH THIS.column1
	           .header1.CAPTION = "Customer ID"
	           .WIDTH = 15
	           .CONTROLSOURCE = "customer.customer_id"
	        ENDWITH
	
	        WITH THIS.column2
	           .header1.CAPTION = "Company Name"
	           .WIDTH = 25
	           .CONTROLSOURCE = "customer.company_name"
	        ENDWITH
	        WITH THIS.column3
	           .WIDTH = 10
	           .header1.CAPTION = "Region"
	           .CONTROLSOURCE = "customer.region"
	        ENDWITH
	
	     ** The following two lines of code determine the conditional
	     ** row color for the grid:
	
	        foreexpr = 'IIF(ALLTRIM(customer.region) == "WA",' + ;
	           LTRIM(STR(COLOR_BLUE)) + ',' + LTRIM(STR(COLOR_BLACK)) +')'
	        THIS.SETALL("DynamicForeColor",foreexpr,"Column")
	     ENDPROC
	
	  ENDDEFINE
	
	  ** End code example
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
