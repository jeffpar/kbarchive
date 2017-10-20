---
layout: page
title: "Q103182: ADT/ODE: Function to Determine Retail or Run-Time Version"
permalink: /kb/103/Q103182/
---

## Q103182: ADT/ODE: Function to Determine Retail or Run-Time Version

{% raw %}

	Article: Q103182
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0,7.0,97
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	This article demonstrates how to use a function to determine if your Microsoft
	Access application is running in the run-time or the retail version of Microsoft
	Access. This function can be used to prevent your application from being used in
	the retail version of Microsoft Access.
	
	The SysCmd() function, added in Microsoft Access 1.1, enables you to display a
	meter in the Microsoft Access status bar. Although SysCmd() was designed to
	display a meter, the number 6 was added to return whether the application is
	running in the run-time or the retail version of Microsoft Access.
	
	This article assumes that you are familiar with Visual Basic for Applications and
	with creating Microsoft Access applications using the programming tools provided
	with Microsoft Access. For more information about Visual Basic for Applications,
	please refer to your version of the "Building Applications with Microsoft
	Access" manual.
	
	NOTE: Visual Basic for Applications is called Access Basic in Microsoft Access
	versions 1.x and 2.0. For more information about Access Basic, please refer to
	the "Introduction to Programming" manual in Microsoft Access version 1.x or the
	"Building Applications" manual in Microsoft Access version 2.0
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to create a function called IsRunTime()
	that you can use to prevent an application from being run in the retail version
	of Microsoft Access.
	
	1. Add the following function called IsRuntime() to a new or existing module in
	  your application:
	
	        Function IsRuntime ()
	           On Error GoTo ErrIsRuntime
	           IsRuntime = SysCmd(6)
	
	        ByeIsRuntime:
	           Exit Function
	
	        ErrIsRuntime:
	           If (Err = 5) Then
	              IsRuntime = False
	           Else
	              Error Err
	           End If
	           Resume ByeIsRuntime
	        End Function
	
	     Note that it is necessary to trap for Err = 5, Illegal Function Call,
	     in case your application is being run in Microsoft Access version 1.0,
	     which does not support the SysCmd(6) call.
	
	2. Create the following macro and save it with the name AutoExec:
	
	        Macro Name   Condition   Action
	        -------------------------------------------------
	        AutoExec                 Not IsRuntime()   MsgBox
	                     ...         Quit
	
	        AutoExec Actions
	        --------------------------------------------------------------
	        MsgBox
	           Message: Invalid setup, run YourAppName setup and try again.
	           Beep: Yes
	           Type: Critical
	           Title: YourAppName
	        Quit
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbAccessDistKit110 kbOffice97DevSearch
	Version           : WINDOWS:1.1,2.0,7.0,97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
