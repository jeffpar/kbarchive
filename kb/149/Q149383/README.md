---
layout: page
title: "Q149383: HOWTO: Check for Changed Record in Grid &amp; Prompt User to Save"
permalink: /kb/149/Q149383/
---

## Q149383: HOWTO: Check for Changed Record in Grid &amp; Prompt User to Save

	Article: Q149383
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to:
	
	- How to check to see if a record has been changed when you're using a grid to
	  edit records in a table with Table Buffering.
	
	- How to prompt users to update a changed record before they move to a
	  different record.
	
	MORE INFORMATION
	================
	
	If you are not familiar with Data Buffering, please see Chapter 19 in the
	Developer's Guide. For more information on using Forms and Controls, please see
	Chapters 9 and 11 in the Developer's Guide.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form. Add the Customer table (located in Samples\Data in the
	  Visual FoxPro directory) to the form's Data Environment
	
	2. Set the BufferMode property of the form to one of the values below:
	
	  
	
	        1 - Pessimistic
	
	  -or-
	
	  
	
	        2 - Optimistic
	
	  With either of these settings, the grid, soon to be added to the form, uses
	  table buffering while any other controls, such as text boxes or edit boxes,
	  uses row buffering. Alternately, the BufferModeOverride property of the
	  cursor can be set to either of these values:
	
	  
	
	        4 - Pessimistic Table Buffering
	
	  -or-
	
	  
	
	       5 - Optimistic Table Buffering
	
	  The BufferMode property of the form can be set as desired. The code in this
	  article will not work if the BufferModeOverride property of the cursor is set
	  to either type of Row Buffering. This is because with Row Buffering on the
	  cursor in the grid, any changes to the current record will be committed when
	  moving to the next record in the grid and the GETFLDSTATE() function will not
	  detect the change.
	
	3. Add two new properties to the form, and call them nRecNum and nWhatRow. Set
	  their Value properties to 0.
	
	4. Add a grid to the form, and set the following properties for the grid:
	
	  
	
	        RecordSource = Customer
	        RecordSourceType = 1 - Alias
	
	5. Add the following code to the indicated grid events:
	
	  
	
	        Init event
	            ThisForm.nRecNum = RECNO()
	
	        BeforeRowColChange
	            ThisForm.nRecNum = RECNO()
	
	        AfterRowColChange
	            lMov = .F.
	            IF ThisForm.nWhatRow # This.ActiveRow
	                 ThisForm.nWhatRow = This.ActiveRow
	                 nHold= RECNO()
	                 GO ThisForm.nRecNum
	                 cChange = GetFldState(-1,'Customer')
	                 IF AT('2', cChange)>0
	                   This.Refresh
	                   lMov = .T.
	                   IF MessageBox("Update Record",4)= 6
	                     =TableUpdate(.T.)
	                   ELSE
	                     =TableRevert(.T.)
	                   ENDIF
	                  ENDIF
	                  GO nHold
	                  IF lMov
	                    This.Refresh
	                    lMov =.F.
	                  ENDIF
	                ENDIF
	
	6. Save and run the form.
	
	RESULT: Users are prompted to save the record when they change a value in the
	record and move to a different row in the grid. A Yes response fires a
	TableUpdate event, and a No response fires a TableRevert event.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	
	=============================================================================
	
