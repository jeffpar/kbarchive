---
layout: page
title: "Q128206: PRB: Function Requires Row or Table Buffering Mode"
permalink: kb/128/Q128206/
---

## Q128206: PRB: Function Requires Row or Table Buffering Mode

	Article: Q128206
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a command or function that requires buffering, without enabling
	buffering first, causes the following error to occur:
	
	  Error number 1586 "Function requires row or table buffering mode"
	
	CAUSE
	=====
	
	A command or function, such as TABLEUPDATE() or TABLEREVERT(), that requires
	buffering to be enabled has been issued.
	
	RESOLUTION
	==========
	
	Enable buffering to resolve this problem. The on error routine listed below can
	be used to set the default buffering mode programatically if this error occurs:
	
	     ON ERROR DO errhandler
	   
	     PROCEDURE errhandler
	   
	        =aerror(aLastError)
	        DO CASE
	           CASE aLastError(1) = 1586
	              SET MULTILOCKS ON
	              =Cursorsetprop("Buffering",5)
	              RETRY
	        ENDCASE
	
	MORE INFORMATION
	================
	
	An on error routine can handle a variety of errors that may occur during
	processing. Include an OTHERWISE section within the DO CASE construct to handle
	errors that are not specifically included in the on error routine.
	
	REFERENCES
	==========
	
	Refer to the Visual FoxPro Developer's Guide, or to the online Help, for a
	complete listing of Visual FoxPro system errors that may occur in your
	application.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
