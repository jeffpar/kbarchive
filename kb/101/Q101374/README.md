---
layout: page
title: "Q101374: ADT/ODE: How to Create a Custom Startup &quot;Splash&quot; Screen"
permalink: kb/101/Q101374/
---

## Q101374: ADT/ODE: How to Create a Custom Startup &quot;Splash&quot; Screen

	Article: Q101374
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0,7.0,97
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	This article explains how to create a custom startup "splash" screen (title
	screen) for your Microsoft Access application.
	
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
	
	A startup "splash" screen is used by programmers to display important
	information about a program during startup and to give the user something
	colorful to look at and read while waiting for the program to complete its
	initial processing, such as reading and setting up user-defined preferences.
	
	A typical splash screen contains the following information:
	
	- The program name and version number
	- The registered user's name and company
	- Copyright information
	- The developer's company name and logo
	
	This article contains two sample user-defined functions to implement splash
	functionality.
	
	Creating a New Splash Module
	----------------------------
	
	To create the functions, follow these steps:
	
	1. Create a new module, and type the following functions.
	
	  NOTE: In the following code, an underscore (_) is used as a line- continuation
	  character. Remove the underscore from the end of the line when re-creating
	  this code in Access Basic.
	
	         '******************************************************************
	         ' MODULE NAME: Splash
	         ' DECLARATION SECTION
	         '******************************************************************
	         Option Explicit
	
	         Dim gSplashStart     ' The time when the splash screen opened.
	         Dim gSplashInterval  ' The minimum time to leave the splash screen
	                              ' up.
	         Dim gSplashForm      ' The name of the splash screen form.
	
	         '******************************************************************
	         ' FUNCTION: SplashStart()
	         '
	         ' PURPOSE: Used to invoke the splash screen form specified by the
	         '    SplashForm argument.
	         '
	         ' ARGUMENTS:
	         '    SplashForm     - The name of the form to use as the splash
	         '                     screen.
	         '    SplashInterval - The minimum time, in seconds, that the splash
	         '                     screen must remain active on the screen.
	         '
	         '******************************************************************
	         Function SplashStart (ByVal SplashForm As String, ByVal _
	                SplashInterval As Integer)
	             ' Open the splash form.
	             DoCmd.OpenForm SplashForm  ' In Microsoft Access 97 and 7.0.
	             'DoCmd OpenForm SplashForm ' In versions 1.x and 2.0 only.
	
	             ' Set the starting time.
	             gSplashStart = Timer
	
	             ' Record the global information.
	             gSplashInterval = SplashInterval
	             gSplashForm = SplashForm
	         End Function
	
	         '******************************************************************
	         ' FUNCTION: SplashEnd()
	         '
	         ' PURPOSE: Used to close the splash screen form opened by the
	         '    SplashStart() function. This function checks to ensure that
	         '    the splash screen remains active until the user-specified
	         '    interval has expired.
	         '
	         '******************************************************************
	         Function SplashEnd ()
	            Dim RetVal
	
	            ' Loop until the splash screen has been active for
	            ' the desired interval.
	            Do Until Timer - gSplashStart > gSplashInterval
	               ' Yield control so other applications can process.
	               RetVal = DoEvents()
	            Loop
	
	            ' Close the splash screen.
	            DoCmd.Close acForm, gSplashForm ' In Microsoft Access 97 and 7.0.
	           'DoCmd Close A_FORM, gSplashForm ' In version 1.x and 2.0 only.
	
	         End Function
	
	2. Save the new module as Splash.
	
	Using the SplashStart() and SplashEnd() Functions
	-------------------------------------------------
	
	To use the SplashStart() and SplashEnd() functions, follow these steps:
	
	1. Create a form not based on any table or query with the text and graphics you
	  want to display on the splash screen. For more information, see the "Setting
	  Form Properties" section later in this article.
	
	2. In the Database window, click the Macros tab and then click New.
	
	3. Create a macro with the following actions and save it as AutoExec:
	
	         Macro Name   Action
	         -----------------------------------------------------------------
	         AutoExec     RunCode
	                      <any startup macro actions required by your program>
	                      RunCode
	
	         AutoExec Actions
	         ----------------------------------------------------------------
	         RunCode
	
	            Function Name: SplashStart("YourSplashFormNameHere", 5)
	         <any startup macro actions required by your program .. optional>
	         RunCode
	            Function Name: SplashEnd()
	
	Setting Form Properties
	-----------------------
	
	For best results, the splash form should have its form properties set as
	follows:
	
	  ScrollBars: Neither
	  PopUp: Yes
	  Modal: Yes
	  RecordSelectors: No
	
	Suppressing the Default Splash Screen
	-------------------------------------
	
	To prevent the default Microsoft Access splash screen from appearing in versions
	of Microsoft Access earlier than version 7.0, you can use the run-time version
	of Microsoft Access provided with the Microsoft Access Developer's Toolkit for
	version 2.0, or the Microsoft Access Distribution Kit (ADK) for version 1.1.
	
	REFERENCES
	==========
	
	For more information about running an AutoExec macro in Microsoft Access, search
	the Help Index for "AutoExec macros," or ask the Microsoft Access 97 Office
	Assistant.
	
	Additional query words: title intro
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbAccessDistKit110 kbOffice97DevSearch
	Version           : WINDOWS:1.1,2.0,7.0,97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
