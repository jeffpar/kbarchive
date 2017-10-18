---
layout: page
title: "Q172560: HOWTO: Switch Focus to a Visual FoxPro Application"
permalink: kb/172/Q172560/
---

## Q172560: HOWTO: Switch Focus to a Visual FoxPro Application

	Article: Q172560
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbole kbvfp500 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create a local Visual FoxPro OLE Automation Server that displays a user
	interface (UI), the UI may not have focus when initiated. To force the Visual
	FoxPro OLE server to have focus you can call the SetForegroundWindow API from
	the client and pass the window handle of the Visual FoxPro OLE Server.
	
	MORE INFORMATION
	================
	
	When calling the Show Method of a Visual FoxPro OLE Server from a client
	application, such as a Visual Basic executable, the Visual FoxPro UI may not
	receive focus.
	
	Here is a method of forcing the Visual FoxPro OLE Server to have focus and
	control:
	
	1. In the Visual FoxPro Class Designer, create a class with a property to hold
	  the window handle. Call the property "myHwind."
	
	2. In the Show Method of the Visual FoxPro Class, add the following code:
	
	        SET LIBRARY TO HOME()+"\foxtools.fll" && If FoxTools is in the Home
	                                              && directory.
	        Thisform.myHwind = mainhwnd()
	        SET LIBRARY TO
	
	  This code loads the Foxtools library and calls mainhwnd, which returns the
	  window handle for the main Visual FoxPro window, in this case it would be
	  your OLE Server Form. The code places the window handle into the class
	  property myHwind and then releases the Foxtools library.
	
	3. In the client, add the following code:
	
	        DECLARE Integer SetForegroundWindow in WIN32API long whnd
	        ox.Show()
	        whnd = ox.myHwind
	        x = SetForegroundWindow(whnd)
	
	This code assumes that the Visual FoxPro OLE server was instantiated elsewhere in
	the program using the Createobject command. This code uses the DECLARE as you
	would in Visual FoxPro; the syntax would be different in Visual Basic. The code
	then calls the Show Method. At this point, the UI for the OLE Server appears,
	but it does not have focus. Next get the window handle that was stored in as a
	class property, call SetForegroundWindow, and pass the window handle of the
	application to get focus.
	
	REFERENCES
	==========
	
	For more information about the SetForegroundWindow, please refer to the Win32
	SDK
	
	For more information about the Mainhwnd function, please refer to the
	Foxtools.hlp in the tools directory that is installed with Visual FoxPro.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	
	Additional query words: OLE
	
	======================================================================
	Keywords          : kbole kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
