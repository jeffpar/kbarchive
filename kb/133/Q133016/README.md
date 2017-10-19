---
layout: page
title: "Q133016: PRB: Dynamically Changing Buffering Mode Doesn't Work"
permalink: /kb/133/Q133016/
---

## Q133016: PRB: Dynamically Changing Buffering Mode Doesn't Work

	Article: Q133016
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dynamically changing the BufferModeOverride property of the Data environment
	changes the property, but not the behavior of the buffering. A dialog box
	reporting "Property setting will not take effect until data environment
	reloaded" also appears.
	
	CAUSE
	=====
	
	Visual FoxPro does not change the behavior of the BufferModeOverride property
	dynamically while the tables are open. However, you can resolve the issue by
	closing the tables with the CloseTables method. Then change the property, and
	then open the tables again with the OpenTables method. The new setting of the
	buffering will then take effect.
	
	RESOLUTION
	==========
	
	The following steps show you how to create a form that contains a combo box that
	allows you to change the BufferModeOverride property dynamically.
	
	1. Create a new form. Set the DataSession property to 2 and the Caption property
	  to Customer. In the ACTIVATE method of the form, enter the following code:
	
	     THISFORM.Refresh
	
	2. Using the right mouse button, click the form, and choose Data Environment.
	  Then Using the right mouse button again, click the Data Environment window,
	  and choose Add.
	
	  Add the CUSTOMER.DBF table located in the C:\VFP\SAMPLES\DATA or equivalent
	  directory. Drag the first three fields in this table (Cust_Id, Company and
	  Contact) onto the form.
	
	3. Create a combo box and set the RowSourceType property to 1. Enter the
	  following value into the RowSource property: "1- Use Form Setting,2 -
	  Pessimistic Row,3 - Optimistic Row,4 - Pessimistic Table,5 - Optimistic
	  Table"
	
	4. In the Valid method of the combo box, enter this code:
	
	        THISFORM.Dataenvironment.CloseTables
	        THISFORM.Dataenvironment.Cursor1.BufferModeOverride = THIS.ListIndex
	        THISFORM.Dataenvironment.OpenTables
	
	  In the Init method of the combo box, enter this code:
	
	        THIS.ListIndex=1
	
	5. Add a command button to the form, and enter Next in the Caption property.
	  Enter the following code in the Click method:
	
	     SKIP
	     THISFORM.Refresh
	
	6. Add another command button with Previous as the Caption with the following
	  code in the Click method:
	
	     SKIP - 1
	     THISFORM.Refresh
	
	7. Add another command button with Exit as the Caption, and enter the following
	  code in the Click method:
	
	     RELEASE THISFORM
	
	8. Add a final command button with Write as the Caption, and enter the following
	  code in the Click method:
	
	     IF TABLEUPDATE(.T.,.F.)
	        =MESSAGEBOX("SUCCESS",64)
	     ELSE
	        nAnswer=MESSAGEBOX("FAILURE - Write this New data ?",52)
	        IF nAnswer=6
	           =TABLEUPDATE(.T.,.T.)
	        ELSE
	           =TABLEREVERT(.T.)
	           THISFORM.Refresh
	        ENDIF
	     ENDIF
	
	9. Save the form, and create two instances of the form. You can now change the
	  buffering dynamically with the combo box.
	
	NOTE: Instead of changing the BufferModeOverride property, you can use the
	CURSORSETPROP() function to do the same thing. This method does not require you
	to open and close the tables. To use Table Buffering, ensure that MULTILOCKS is
	set ON. Below is a code example using the CURSORSETPROP() function:
	
	     =CURSORSETPROP('Buffering',THIS.ListIndex)
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
