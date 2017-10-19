---
layout: page
title: "Q138497: How to Create a Startup Screen in Visual FoxPro"
permalink: /kb/138/Q138497/
---

## Q138497: How to Create a Startup Screen in Visual FoxPro

	Article: Q138497
	Product(s): Microsoft FoxPro
	Version(s): 3.00 | 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many Windows-based applications display a startup screen or splash screen during
	the initialization phase of the application. This startup screen provides a
	means of displaying information such as product name, product logo, product
	version information, company name, and so on. In addition, it gives the user the
	perception of quicker application startup time.
	
	This article gives the steps for creating a custom application startup screen
	that will display for a specified interval of time during application
	initialization. This form will not supress the FoxPro system menu or the FoxPro
	title bar when run within an executable file.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure for Creating a Custom Startup Screen
	-----------------------------------------------------------
	
	You can use the Visual FoxPro Forms Designer to create the custom application
	startup screen.
	
	1. Create a new form.
	
	2. Set the following properties of the form:
	
	     AutoCenter=.T.
	     BorderStyle=1
	     Caption=<set the caption to be blank>
	     Closable=.F.
	     ControlBox=.F.
	     MaxButton=.F.
	     MinButton=.F.
	     Movable=.F.
	     WindowType=1
	
	3. Add a timer control to the form.
	
	4. Set the timer's Interval property to the length of time (in milliseconds)
	  that the startup screen should display. For example, if the startup screen
	  should display for 3 seconds, set the timer's Interval property to 3000.
	
	5. Place the following code in the timer's Timer event:
	
	     ThisForm.Release
	
	6. Add image, label, and other controls to customize the form as needed.
	
	7. Save and run the form.
	
	The form should display for the amount of time specified in the timer's Interval
	property and then disappear.
	
	To incorporate this startup screen into an application, add the following code to
	the beginning of the applications main program:
	
	     DO FORM <startup screen form name>
	
	Now when the application is run, the startup screen should display for the amount
	of time specified in the timer's Interval property.
	
	Additional query words: VFoxMac VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300
	Version           : 3.00 | 3.00b
	
	=============================================================================
	
