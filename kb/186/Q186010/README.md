---
layout: page
title: "Q186010: HOWTO: Calling the Splash Screen Foundation Class From Code"
permalink: kb/186/Q186010/
---

## Q186010: HOWTO: Calling the Splash Screen Foundation Class From Code

	Article: Q186010
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Splash Screen Foundation Class included in Visual FoxPro for Windows 6.0
	provides a simple Splash screen for use in applications.
	
	This article demonstrates how to call the Splash Screen using program code.
	
	MORE INFORMATION
	================
	
	The Splash Foundation class has properties that you can change at run-time. The
	properties that you will most likely use the most include picture, label
	caption, and duration.
	
	The Picture property is the background picture that displays like wallpaper on
	the form. The Caption property of the label is the message presented to the
	user, and Duration property determines how long, in seconds, the form appears to
	the user. If you do not want a picture, do not set this property.
	
	Sample Code
	-----------
	
	     * Calls _Splash from _Dialogs and set properties for form.
	     * Adjust the path to the class library and picture as needed.
	     osplash=Newobject("_splash",Home()+'ffc\_dialogs')
	     osplash.Caption="Splash Screen Test"
	     osplash.Autocenter=.T.
	     osplash.Picture="d:\vfp98\ffc\graphics\clock.bmp"
	     osplash.Label1.Fontname="arial"
	     osplash.Label1.Fontsize=24
	     osplash.Label1.Width=150
	     osplash.Label1.Backstyle=1
	     osplash.Label1.Forecolor=RGB(255,0,0)
	     osplash.Label1.Backcolor=RGB(0,0,128)
	     osplash.Label1.Top=100
	     osplash.Label1.Left=120
	     osplash.Label1.Caption="Welcome"
	     osplash.nduration=2 && Set the duration.
	     osplash.Show
	
	REFERENCES
	==========
	
	Visual FoxPro Online Help, version 6.0; Search on "Visual FoxPro Foundation
	Classes"; Topics: Visual FoxPro Foundation Classes and Foundation Classes
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Robert Dean Christopher, Microsoft Corporation
	
	
	Additional query words: FxprgGeneral kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
