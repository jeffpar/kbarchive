---
layout: page
title: "Q142284: HOWTO: Use gaErrors&#91;&#93; to Find Out Why a Trigger Failed"
permalink: /kb/142/Q142284/
---

## Q142284: HOWTO: Use gaErrors&#91;&#93; to Find Out Why a Trigger Failed

	Article: Q142284
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A trigger fails when its expression or function returns False. When this occurs
	the "Trigger Failed" error message appears. However, this does not explain why
	it failed. The Referential Integrity Builder code is no different in this
	respect. However, the RI Builder does provide a means of finding out exactly why
	it did fail. This is done through the Public array gaErrors[].
	
	MORE INFORMATION
	================
	
	gaErrors[] is a public array defined by the Trigger code created by the RI
	Builder. The RI Builder also creates its own ON ERROR routine. When an error
	occurs, the Trigger's RIERROR routine is called. Look in the Stored Procedures
	of a Database where the RI Builder has been run, this is where the RIERROR
	routine can be found. The RIERROR routine is passed four arguments:
	
	  Error Number: tnError - ERROR()
	  Error Message: tcMessage - MESSAGE()
	  line of code that caused the error: tcCode - MESSAGE(1)
	  program name in which the error occurred: tcProgram - PROGRAM()
	
	The first three are stored into the gaErrors[] array, in columns one through
	three. The fourth column does not solely hold tcProgram; it holds the Program
	Chain from which the error occurred. For example, it may contain a string like
	this one:
	
	     ",FORM1.COMMAND1.CLICK,__RI_INSERT_ParentTable,RIERROR".
	
	The gaErrors[] array also holds the following information:
	
	  Parent Table's Name - pcParentDBF
	  current record of the Parent Table when the error occurred - pnParentRec
	  Parent's Primary Key value at the time of the error - pcParentID
	  The Field name the Primary Key index is based on - pcParentExpr
	
	The equivalent Child Table's information is also added to gaErrors[]:
	
	  Child Table's Name - pcChildDBF
	  current record of the Child Table when the error occurred - pnChildRec
	  Child's Primary Key value at the time of the error - pcChildID
	  The Field name the Primary Key index is based on - pcChildExpr
	
	Use this information within a custom ON ERROR routine to allow an application to
	better handle failed triggers and present users with better choices to resolve
	the conflict. The code in a "SAVE" button where the triggers would be invoked
	may look something like this:
	
	   IF .NOT. TABLEUPDATE(.T.,.T.)
	        =TABLEREVERT(.T.) &&Revert the change
	        IF TYPE('gaErrors[1,1]') <> 'L'
	           =MESSAGEBOX('Trigger Failed - '+gaErrors[1,2],0,;
	             'Data Entry Error/Trigger Failed')
	        ENDIF
	        GO TOP
	     ENDIF
	     THISFORM.REFRESH
	
	The array gaErrors[] can be seen by setting up some Referential Integrity Rules
	with the RI Builder and then performing some operation on those tables that
	would violate the rules. After the operation fails, type the following commands
	in the Command window:
	
	     _SCREEN.SHOW()
	     DISPLAY MEMORY LIKE gaErrors
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
