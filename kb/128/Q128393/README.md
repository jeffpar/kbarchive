---
layout: page
title: "Q128393: How to Create a Private Data Session in a Form"
permalink: /kb/128/Q128393/
---

## Q128393: How to Create a Private Data Session in a Form

	Article: Q128393
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use a Private Data Session in Visual FoxPro as one of the properties of
	the form. This will allow two sessions of the same form to run with a separate
	record pointer in each instance.
	
	MORE INFORMATION
	================
	
	To create a Private Data Session in a form, follow these steps:
	
	1. Type the following command in the Command window, and press the ENTER key:
	
	     Create Form test
	
	2. Using the right mouse button, click the form, and select Data Environment.
	
	3. Using the right mouse button, click the Data Environment, and select Add.
	
	4. Select the Other option in the Add Table or View dialog box.
	
	5. Select the Customer table from the \VFP\SAMPLES\DATA directory.
	
	6. Drag the Company field from the Data Environment to the form. Note that the
	  control source property should be Customer.company.
	
	7. Choose the push button option from the form controls toolbox.
	
	8. Go to the click event of the push button and double-click. Type the command
	  Skip, and press the ENTER key. Then type the command Thisform.Refresh, and
	  press the ENTER key. Close this window.
	
	9. Go to the properties dialog, and select Form1 as the object. Then select the
	  DataSession property, and change to Private Data Session from Default Data
	  Session.
	
	10. Save the form. Then run it by typing the following command in the Command
	  window:
	
	      Do Form Test
	
	11. Execute the same command again, and use the push button to move in the
	  table. Note that the record pointer is positioned in a completely different
	  position in the separate sessions of the form.
	
	Change the DataSession property back to default and run two sessions of the same
	form and note the difference in the movement of the record pointer.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
