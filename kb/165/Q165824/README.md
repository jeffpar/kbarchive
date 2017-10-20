---
layout: page
title: "Q165824: ADT/ODE: End Statement in Run-Time Application Causes Error"
permalink: /kb/165/Q165824/
---

## Q165824: ADT/ODE: End Statement in Run-Time Application Causes Error

{% raw %}

	Article: Q165824
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbdta
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	If you use the End statement in Visual Basic for Applications code in a run-time
	application, when the statement is executed, you may receive the following error
	message and then the application quits:
	
	  Execution of this application has stopped due to a run-time error. The
	  application cannot continue and will be shut down.
	
	Note that this does not happen in the retail version of Microsoft Access.
	
	CAUSE
	=====
	
	The End statement causes a UserReset error in Microsoft Access, which is treated
	as a run-time error. Run-time errors in a run-time application cause the
	application to quit. Note that this happens even if your application contains
	error handling procedures.
	
	RESOLUTION
	==========
	
	Rewrite your code so it does not use the End statement. If it is appropriate,
	you can use the Exit Sub or Exit Function statement to exit the procedure. Note,
	however, that the Exit statement only exits the currently running procedure. If
	you are running a nested procedure, the main procedure continues to run after
	you issue the Exit statement, and you must provide a mechanism to exit the main
	procedure as well.
	
	MORE INFORMATION
	================
	
	If you use the feature in Microsoft Access 7.0 and 97 that allows you to convert
	macros into Visual Basic code modules, the StopAllMacros macro action will
	translate to an End statement in Visual Basic code.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Access and create a new database named RTError.mdb.
	
	2. Create a module and type the following procedure:
	
	        Sub CauseError()
	           On Error GoTo Err_Handler
	           MsgBox "Click OK to cause a run-time error"
	           End
	           Exit Sub
	           Err_Handler:
	           MsgBox Error$
	        End Sub
	
	3. Save the module as Module1, and then close it.
	
	4. Create a new form not based on any table or query in Design view:
	
	     Form: Form1
	     ------------------------
	     Caption: Startup Form
	
	     Command button:
	        Name: Command0
	        Caption: Cause Error
	        OnClick: =CauseError()
	
	5. Save the form as Form1, and then close it.
	
	6. On the Tools menu, click Startup.
	
	7. In the Startup dialog box, select Form1 in the Display Form box, and then
	  click OK.
	
	8. Start the Setup Wizard and create setup files that contain RTError.mdb, the
	  Microsoft Access Run-Time Version, and the Workgroup Administrator.
	
	9. Install the run-time application and start it. When Form1 opens, click the
	  Cause Error button. Note that you receive the error message, and then your
	  application quits.
	
	REFERENCES
	==========
	
	For more information about the End statement, search the Help Index for "End
	statement."
	
	For more information about converting macros to Visual Basic modules, search the
	Help Index for "converting macros."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
