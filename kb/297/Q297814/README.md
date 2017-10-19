---
layout: page
title: "Q297814: BUG: Constant Double Variables in a Type Library Do Not Display"
permalink: /kb/297/Q297814/
---

## Q297814: BUG: Constant Double Variables in a Type Library Do Not Display

	Article: Q297814
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbide kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a loaded type library in the Object Browser and view the value
	of a constant double variable, the Help string of the previously selected Object
	Browser item is displayed instead of the variable's constant value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Either create a new type library by using MkTypLib or MIDL, or use an
	  existing type library (.tlb) file that contains a definition for a constant
	  double value.
	
	2. Verify the value by using OLE View. To do this, follow these steps:
	
	  a. Click Start, point to Programs, point to Microsoft Visual Studio 6.0,
	     point to Microsoft Visual Studio 6.0 Tools, and then click OLE View.
	
	  b. In the OLE Viewer, click the TypeLib Viewer button that has three red
	     triangles, or click View TypeLib on the File menu. An Open dialog box
	     appears.
	
	  c. Browse to the .tlb file that you want to view and click Open.
	
	  d. Using the viewer that you just opened, locate a declared constant double
	     value in your type library. The declaration resembles the following:
	
	  [helpstring("Value of D")] const double d = 6;
	
	You will compare this value with the value that is displayed in the Object
	Browser.
	
	3. In Visual Basic, start a new project.
	
	4. On the Project menu, select References, select the .tlb file that you
	  selected previously, and click OK.
	
	  NOTE: You may have to use the Browse button in the References dialog box to
	  locate the type library.
	
	5. On the View menu, select Object Browser, or press F2. The Object Browser
	  loads.
	
	6. Filter the data by selecting the appropriate library from the <All
	  Libraries> box.
	
	7. Find the constant double value that you located by using the OLE Viewer. The
	  location of this value differs depending on the type library you are using.
	  After you have located the constant double, notice that the value that is
	  assigned to it is not the same value that was assigned to it in the OLE
	  Viewer.
	
	Select different values, including the constant double value. Note that when you
	select the constant double value, it is always equal to the Help string of the
	previously selected Object Browser item.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbide kbVBp600bug kbIDEProject kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
