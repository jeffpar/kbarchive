---
layout: page
title: "Q189601: PRB: Numeric Values Shift in Grid Column Containing NULL Values"
permalink: /kb/189/Q189601/
---

## Q189601: PRB: Numeric Values Shift in Grid Column Containing NULL Values

{% raw %}

	Article: Q189601
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A grid column that has its Sparse property set to .F. is bound to a numeric
	field that allows NULL values. When values in that column are edited and the
	grid is scrolled, values in that column may shift from left to right and back.
	
	CAUSE
	=====
	
	The default column Alignment setting is "3 [ASCII 150] Automatic". The column
	does not know whether to format the NULL values as character or numeric.
	
	RESOLUTION
	==========
	
	Change the grid column Alignment property to "1 - Middle Right". To demonstrate
	this behavior, place the following code in the Init event of the form:
	
	     THIS.GRD1.COLUMN1.ALIGNMENT = 1
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        PUBLIC OFORM1
	        CREA TABLE NULLTEST (F1 N(5,2) NULL)
	        FOR LNI = 1 TO 5
	           INSERT INTO NULLTEST VALUES (NULL)
	        ENDFOR
	        USE NULLTEST
	
	        OFORM1=CREATEOBJECT("form1")
	        OFORM1.SHOW
	        RETURN
	
	        DEFINE CLASS FORM1 AS FORM
	
	           AUTOCENTER = .T.
	           HEIGHT = 268
	           WIDTH = 378
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           PROC INIT
	              THIS.GRD1.COLUMN1.TEXT1.NULLDISPLAY = "0"
	           ENDPROC
	
	           ADD OBJECT GRD1 AS GRID WITH ;
	              COLUMNCOUNT = 1, ;
	              LEFT = 33, ;
	              RECORDSOURCE = "nulltest", ;
	              RECORDSOURCETYPE = 1, ;
	              TOP = 28, ;
	              NAME = "grd1", ;
	              COLUMN1.SPARSE = .F., ;
	              COLUMN1.NAME = "Column1"
	        ENDDEFINE
	
	2. Type the number 2 in the grid cell in the first row.
	
	3. Press the DOWN ARROW key. The 0 in the second row shifts left.
	
	4. Press the DOWN ARROW key again. The 0 in the second row shifts right.
	
	5. Press the UP ARROW key twice. The 0 in the second row shifts left again.
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
