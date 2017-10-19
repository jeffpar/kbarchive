---
layout: page
title: "Q192745: HOWTO: Use CreateObject with Visual C++ COM Objects"
permalink: /kb/192/Q192745/
---

## Q192745: HOWTO: Use CreateObject with Visual C++ COM Objects

	Article: Q192745
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use CreateObject with COM/ActiveX components
	created in Visual C++. The CreateObject programming syntax used to create an
	instance of a component created in Visual Basic may not work with a VC++
	component, even though the object can be created using the New method. For
	example, assume you have an component named "neuLib" referenced in a Visual
	Basic project. The component has one createable object (Interface) named
	"myclass." The following code will work if the ActiveX component was created
	using either Visual Basic or Visual C++:
	
	     Dim objNeu as neuLib.myclass
	     Set objNeu =  New neuLib.myclass
	
	However, the code below will work only for a component created using Visual
	Basic:
	
	     Dim objNeu as neuLib.myclass
	     Set objNeu = CreateObject("neuLib.myclass")
	
	If this is a VC++-created component, you will receive the error message:
	
	  "Error 429. ActiveX component can't create object."
	
	The reason CreateObject works with a Visual Basic component and not with a Visual
	C++ component can be explained and resolved by examining the different way in
	which Visual Basic and Visual C++ create program IDs (ProgID.) When you use
	CreateObject, the argument you provide is a ProgID. Visual Basic and Visual C++
	assign a name to the ProgID differently. Visual Basic uses the original name,
	Visual C++ does not. In a Visual Basic component, the ProgID for this example is
	"neuLib.myclass." In a Visual C++ component, the ProgID would be
	"myclass.myclass.1," which requires the (correct) syntax:
	
	     Dim objNeu as neuLib.myclass
	     Set objNeu = CreateObject("myclass.myclass.1")
	
	MORE INFORMATION
	================
	
	There are two ways to determine the ProgID that you need to specify when using
	CreateObject for the VC object.
	
	
	1. Use the OLE/Com Viewer. If you have this utility installed, start it and open
	  the Visual C++ component. From the View menu, select Expert Mode. Select "All
	  Objects" from the list in the left portion of the window. Scroll until you
	  find the name of the class, then and click it. The detail window on the right
	  should display the information about the class; the ProgID will be listed
	  with this information, and will look like:
	
	        ProgID = myclass.myclass.1
	
	2. Use the Registry Editor (Regedit.exe). Click on the Start button and select
	  Run. Type "Regedit" and click OK. From the Edit menu in Regedit, choose Find.
	  Enter the name of the class, and make sure that "Data" is the only check box
	  selected. Click OK.
	
	  It is difficult to provide exact instructions for searching the Registry. The
	  entry you are looking for will probably be the second one that is found
	  (press the F3 key to resume searching.) When the data for the key is found,
	  look in the window on the left half of the Regedit screen. If the tree node
	  that is open says "ProgID," and the data in the window on the right contains
	  the class name, then this is the value you want to use as the argument for
	  CreateObject.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbCtrl kbActiveX kbCOMt
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
