---
layout: page
title: "Q190491: PRB: Access/Assign Not Called by DIMENSION, ADEL or AINS"
permalink: kb/190/Q190491/
---

## Q190491: PRB: Access/Assign Not Called by DIMENSION, ADEL or AINS

	Article: Q190491
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an array that is a property of an object, you can also add
	Access or Assign methods to the array property. If you DIMENSION the array, or
	add or remove elements, rows, or columns with the AINS() or ADEL() functions,
	the Access and Assign methods are not called.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Access and Assign methods are new in Visual FoxPro 6.0. In effect, they
	allow you to attach events to properties. When the property's value(s) are
	queried (Access method), or when the property's values are set (Assign method),
	you can execute user code. Because of the nature of arrays and their
	manipulation, the Access and Assign methods associated with the array properties
	behave differently than with non-array properties.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following program instantiates a form from a form class definition. The form
	contains an array property. The array is populated in the form's Load method. A
	row is deleted from the array, the array is redimensioned, and a row is added
	back into the array.
	
	1. Run the following code from a program (.prg) file:
	
	        Clear
	        DEBUG
	        _SCREEN.Show()
	        DEBUGOUT " "
	        DEBUGOUT " "
	        oform1=NEWOBJECT("form1")
	        DEBUGOUT " "
	        oform1.PrintToScreen      && Output contents of array to screen
	        =adel(oform1.atest,2)     && Deletes 2nd row
	        DIME oform1.atest[alen(oform1.atest,1)-1,alen(oform1.atest,2)]
	        DEBUGOUT " "
	        oform1.PrintToScreen
	        DIME oform1.atest[alen(oform1.atest,1)+1,alen(oform1.atest,2)]
	        =ains(oform1.atest,2)     && insert before 2nd row
	        DEBUGOUT " "
	        oform1.PrintToScreen
	
	        DEFINE CLASS form1 AS form
	
	           Caption = "Form1"
	           Name = "Form1"
	           DIMENSION atest[3,2]
	
	           PROCEDURE atest_access
	              LPARAMETERS m.nIndex1,m.nIndex2
	              * Echo current program and calling program to
	              * Debug Output window
	              DEBUGOUT "In " + PROGRAM()+", called from " ;
	                 + PROGRAM(PROGRAM(-1)-1)
	              RETURN THIS.atest[m.nIndex1,m.nIndex2]
	           ENDPROC
	
	           PROCEDURE atest_assign
	              LPARAMETERS vNewVal,m.nIndex1,m.nIndex2
	              * Echo current PROGRAM and calling PROGRAM to
	              * Debug Output window
	              DEBUGOUT "In "+PROGRAM()+", called from " ;
	                 + PROGRAM(PROGRAM(-1)-1)
	              this.atest[m.nIndex1,m.nIndex2] = m.vNewVal
	           ENDPROC
	
	        PROC PrintToScreen
	           ?'    Column 1   Column 2'
	           * Iterate through array and print each element
	           FOR lnRow = 1 to alen(this.atest, 1)
	              ?
	              FOR lnCol = 1 to alen(this.atest, 2)
	                 ??this.atest[lnRow, lnCol]
	              ENDFOR
	           ENDFOR
	           ?
	        PROCEDURE Load
	           * Populate the array
	           FOR lnRow = 1 to alen(this.atest, 1)
	              FOR lnCol = 1 to alen(this.atest, 2)
	                 this.atest[lnRow, lnCol] = 100 * lnRow + lnCol
	              ENDFOR
	           ENDFOR
	
	          ENDPROC
	        ENDDEFINE
	   
	
	2. The contents of the array is printed to the Visual FoxPro desktop three times
	  by the PrintToScreen method. The first printing is the original contents. The
	  second printing contains the contents after the second row is deleted and the
	  third row is removed by the DIMENSION command. The third printing is the
	  contents after a third row is added with DIMENSION and a new second row is
	  inserted.
	
	3. The DEBUGOUT command is used to output information to the Debug Output
	  Window. The current program echos (either the Access or Assign method) and
	  the calling program, one program back in the call stack, is returned by
	  PROGRAM(PROGRAM(-1)-1)). Here you see that the atest_assign was called six
	  times from the form Load method. The Atest_access was called six times, then
	  four times, then six times as the three calls to PrintToScreen are executed.
	
	REFERENCES
	==========
	
	Visual FoxPro Help file; search on: "Access and Assign methods" (without the
	quotation marks); "DIMENSION" (without the quotation marks); "AINS()" (without
	the quotation marks); "ADEL()" (without the quotation marks)
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
