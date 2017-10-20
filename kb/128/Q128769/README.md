---
layout: page
title: "Q128769: How to Create a Screen Programatically"
permalink: /kb/128/Q128769/
---

## Q128769: How to Create a Screen Programatically

{% raw %}

	Article: Q128769
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro version 2.x for Windows the syntax for creating a QUICK SCREEN is
	CREATE SCREEN <screen name> FROM <table name>. However, this command
	is not supported in Visual FoxPro version 3.0. You can, however, use a program
	to create a QUICK FORM in Visual FoxPro by using the code listed in this artcle.
	
	MORE INFORMATION
	================
	
	Code Sample
	-----------
	
	  *******************************************************************
	  *  The following code programatically creates a Visual FoxPro
	  *  form and adds Textbox objects it. Each Textbox object has as
	  *  its ControlSource and Name the name of a corresponding field from
	  *  the customer database that ships with Visual FoxPro.
	  *
	  *  The Textbox objects use the Courier New, Size 8 regular font for
	  *  simple calculations in the placement of each object.
	  *
	  *  The new form is saved in the same directory as the selected table.
	  ********************************************************************
	  USE C:\VFP\SAMPLES\DATA\CUSTOMER.DBF IN 0
	  SELECT customer
	
	  =AFIELDS(mafield)
	  count = ALEN(mafield,1)
	
	  myForm = CREATEOBJECT('FORM')
	  myform.SCALEMODE=0
	
	  FOR i = 1 TO count STEP 1
	     STORE ALIAS()+'.'+mafield[i,1] TO mcontrol
	     myForm.ADDOBJECT(mafield[i,1],'Textbox')
	     WITH myForm.&mafield[i,1].
	       .CONTROLSOURCE = mcontrol
	       .FONTNAME = 'Courier New'
	       .FONTSIZE = 8
	       .FONTBOLD = .F.
	       .HEIGHT = 1.25
	       .TOP = (i-1) + .25
	     ENDWITH
	  ENDFOR
	
	  myForm.SAVEAS(STRTRAN(DBF(ALIAS()),'DBF','SCX'))
	
	  FLUSH
	
	  MODIFY FORM (STRTRAN(DBF(ALIAS()),'DBF','SCX')) NOWAIT SAVE
	
	  CLEAR ALL
	  RELEASE ALL
	
	  * END.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
