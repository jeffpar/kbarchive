---
layout: page
title: "Q130544: How to Place Values Containing Commas in a Combo Box"
permalink: kb/130/Q130544/
---

## Q130544: How to Place Values Containing Commas in a Combo Box

	Article: Q130544
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro doesn't allow values containing commas in the RowSource property
	when creating a list box based on static values because commas are used as
	separators. This article shows you how to handle values that do contain commas.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, you can create a combo box or popup list box based on static
	values by following these steps:
	
	1. Add a Combo box to an existing form.
	
	2. Change the RowSourceType property to 1 - Value.
	
	3. Create a list of items seperated by commas in the RowSource property.
	
	Visual FoxPro treats the RowSource as a text string. It searches for commas,
	using the items seperated by commas to create a list of items. Therefore, you
	cannot create values that contain commas.
	
	If you have values that contain commas, base the Combo box on an array that
	contains the values by following these steps:
	
	1. Add an array called myarray to the form by selecting New Property from the
	  Form menu and entering Myarray(1) in the dialog box.
	
	2. In the Load event of the form, redimension and populate the array with the
	  values that have embedded commas.
	
	3. Change the RowSource property to the name of the array.
	
	4. Change the RowSourceType property to 5 - Array.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
