---
layout: page
title: "Q196086: PRB:ControlSource Variables not Visible until Text Box Selected"
permalink: /kb/196/Q196086/
---

## Q196086: PRB:ControlSource Variables not Visible until Text Box Selected

{% raw %}

	Article: Q196086
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you base the ControlSource of a text box on a private or local memory
	variable and is the text box is populated before the form runs, then the
	variable is not visible to the methods or events of the form and its components
	until you select the text box by either clicking the text box or tabbing to the
	text box.
	
	CAUSE
	=====
	
	When the form is first instantiated, the memvars are still in scope. After the
	form has fully instantiated, the .prg file continues and ends, releasing the
	memvars. You can still see the values in the text boxes because the values were
	read before the memvars went out of scope. When you click the text box, it tries
	to refresh from the Controlsource. However, the Controlsource memvar does not
	exist, so the text box creates the memvar, and stores the current text box value
	in that memvar.
	
	RESOLUTION
	==========
	
	Following are two workarounds:
	
	- Place a READ EVENTS after calling the form as follows:
	
	        CLEAR ALL
	        USE MyTbl
	        SELECT MyTbl
	        SCATTER MEMVAR
	        DO FORM MyFrm
	        READ EVENTS
	
	  -or-
	
	- Declare the memory variable as public.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and populate a table as follows:
	
	        CREATE TABLE MyTbl (Fld1 C(2), Fld2 n(2), Fld3 n(2), Fld4 n(2))
	        INSERT INTO MyTbl Values ("aa",1,1,1)
	        INSERT INTO MyTbl Values ("bb",2,2,2)
	
	2. Create a form, MyFrm, and add a command button to it with the following code
	  in the Click event:
	
	        M.Fld4 = M.Fld2 + M.Fld3
	
	3. Add four (4) text boxes Text1, Text2, Text3, and Text4 to the form. Set the
	  ControlSource for each of the text box controls to M.Fld1, M.Fld2, M.Fld3,
	  and M.Fld4 respectively. Save the form.
	
	4. Create a program file (.prg) with the following code:
	
	        CLEAR ALL
	        USE MyTbl
	        SELECT MyTbl
	        SCATTER MEMVAR
	        DO FORM MyFrm
	
	5. Run the program created in step 4.
	
	6. When the form opens, note that all the values for the text boxes display
	  correctly.
	
	7. Click the command button, and you the following error occurs:
	
	  Variable Fld2 is not found.
	
	8. Select Ignore and then close the form.
	
	9. Repeat step 5 and click Text2 when the form opens. Clicking the command
	  button does not produce any errors for Fdl2 but you now get this error:
	
	  Variable Fld3 is not found.
	
	10. Select ignore and close the form.
	
	11. Repeat step 5. When the form displays, click Text2 and then click Text3.
	  Now, clicking the command button does not produce the error(s).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
