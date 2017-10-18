---
layout: page
title: "Q105659: ADT: How to Direct DDE to a Specific Instance of a Server"
permalink: kb/105/Q105659/
---

## Q105659: ADT: How to Direct DDE to a Specific Instance of a Server

	Article: Q105659
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0,1.1,2.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access versions 1.0, 1.1, 2.0 
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	You can run multiple instances of the same application under Microsoft Windows.
	When you communicate with an application using DDE, it may be important to be
	able to identify which instance of an application should respond to your DDE
	commands.
	
	You can initiate a DDE conversation with a specific instance of an application by
	appending the application's Task ID number to the application name argument in
	the DDE initiate command.
	
	This article assumes that you are familiar with Access Basic and with creating
	Microsoft Access applications using the programming tools provided with
	Microsoft Access. For more information about Access Basic, please refer to the
	"Introduction to Programming" manual in Microsoft Access version 1.x, or the
	"Building Applications" manual, Chapter 3, "Introducing Access Basic" in version
	2.0.
	
	MORE INFORMATION
	================
	
	Each instance of each application started in Windows is assigned a unique number
	called a Task ID. This number can be used to distinguish among multiple
	instances of an application.
	
	To initiate a DDE conversation using the System topic with an instance of
	Microsoft Excel that has a Task ID of 34567, you could use the following sample
	command:
	
	  Chan = DDEInitiate("excel34567", "System")
	
	If you do not specify a Task ID number, you will initiate a conversation with the
	first instance of the application that Windows finds. Note that the order in
	which Windows finds instances of an application does not always correspond to
	the order in which the applications were started.
	
	How to Get the Task ID of an Application
	----------------------------------------
	
	You can get the Task ID of an application by doing one of the following:
	
	- Use the Access Basic shell command to launch the application. The shell
	  command will return the application's Task ID if the application is launched
	  successfully.
	
	-or-
	
	- Use an Access Basic function to find the Task ID. The following sample
	  function can be used to find an application's Task ID:
	
	Notes
	-----
	
	- In the following sample code, an underscore (_) is used as a line-
	  continuation character. Remove the underscore from the end of the line when
	  re-creating this code in Access Basic.
	
	- You may have some Microsoft Windows API functions defined in an existing
	  Microsoft Access library; therefore, your declarations may be duplicates. If
	  you receive a duplicate procedure name error message, remove or comment out
	  the declarations statement in your code.
	
	        Option Explicit
	
	        Declare Function GetActiveWindow Lib "User" () As Integer
	        Declare Function GetWindowWORD Lib "User" (ByVal hWnd As Integer, _
	           ByVal nIndex As Integer) As Integer
	        Const GWW_HINSTANCE = (-6)
	
	        Function GetActiveTaskID ()
	           GetActiveTaskID = GetWindowWORD(GetActiveWindow(), _
	              GWW_HINSTANCE)
	        End Function
	
	The following Access Basic code demonstrates the use of both of these techniques
	in getting the Task ID:
	
	     Function TestTaskID()
	        Dim TaskID
	        TaskID = Shell("excel", 1)
	        MsgBox TaskID & " and " & GetActiveTaskID()
	     End Function
	
	How to Use an Application's Task ID in a DDE Conversation
	---------------------------------------------------------
	
	The following example demonstrates how to use Task IDs to indicate which instance
	of an application should be used in a DDE conversation. This sample code will
	launch two instances of Microsoft Excel, start a DDE conversation with each
	instance, and poke data to Sheet1 of each instance:
	
	     Function DDEWithTwoInstances ()
	        Dim TaskID1, TaskID2
	        Dim Chan1, Chan2
	
	        ' Start 2 instances of Microsoft Excel and record Task ID numbers.
	        TaskID1 = Shell("excel.exe", 1)
	        TaskID2 = Shell("excel.exe", 1)
	
	        ' Initiate DDE conversations with both instances using
	        ' the Task ID numbers. Trap an error that may happen
	        ' if we try to initiate a conversation and the copy of
	        ' Microsoft Excel is still trying to start from the shell command.
	
	        On Error GoTo ExcelNotYetReady
	        Chan1 = DDEInitiate("excel" & TaskID1, "Sheet1")
	        On Error GoTo 0
	
	        On Error GoTo ExcelNotYetReady
	        Chan2 = DDEInitiate("excel" & TaskID2, "Sheet1")
	        On Error GoTo 0
	
	        ' Poke information into each instance of Microsoft Excel.
	
	        DDEPoke Chan1, "R1C1", "This is Task1!"
	        DDEPoke Chan2, "R1C1", "This is Task2!"
	
	        DDETerminateAll
	
	        Exit Function
	
	     ExcelNotYetReady:
	        DoEvents
	        Resume
	
	     End Function
	
	REFERENCES
	==========
	
	Microsoft Access "Introduction to Programming," version 1.1, pages 139-147
	
	Additional query words: dynamic data exchange adk
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbAccessSearch kbAccess110 kbAccess200 kbAccess100 kbAccessDevTK200 kbZNotKeyword3 kbAccessDistKit110
	Version           : WINDOWS:1.0,1.1,2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
