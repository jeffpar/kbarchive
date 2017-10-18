---
layout: page
title: "Q185090: HOWTO: Create Multicolored Items in a Combo Box"
permalink: kb/185/Q185090/
---

## Q185090: HOWTO: Create Multicolored Items in a Combo Box

	Article: Q185090
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can create multicolored items in a combo box
	using Visual FoxPro versions 3.x and 5.x.
	
	MORE INFORMATION
	================
	
	To create multicolored items in a combo box, the setting of the combo box
	RowSourceType has to be 9-popup and the RowSource property has to be set to the
	name of the popup.
	
	The following steps illustrate how to accomplish this:
	
	1. Create a form.
	
	2. Place in the following code in the INIT event of the form:
	
	        #DEFINE RedBar ,RGB(150,0,0)
	        #DEFINE GreenBar ,RGB(0,150,0)
	        #DEFINE BlueBar ,RGB(0,0,255)
	        #DEFINE YellowBar ,RGB(255,255,0)
	
	        DEFINE POPUP MultiColor
	
	        DEFINE BAR 1 of MultiColor ;
	           Prompt "Red" COLOR RedBar
	
	        DEFINE BAR 2 of MultiColor ;
	           Prompt "Green" COLOR GreenBar
	
	        DEFINE BAR 3 of MultiColor ;
	           Prompt "Blue" COLOR BlueBar
	
	        DEFINE BAR 4 of MultiColor ;
	           Prompt "Yellow" COLOR YellowBar
	
	3. Add a Combo box object to the form and set the following properties:
	
	        RowSourceType = 9 - popup
	        RowSource = "MultiColor" (without quote)
	
	4. In the InteractiveChange event of the combo box, place the following code:
	
	        DO CASE
	           CASE This.Value = "Red"
	              This.Forecolor = RGB(150,0,0)
	           CASE This.Value = "Green"
	              This.Forecolor = RGB(0,150,0)
	           CASE This.Value = "Blue"
	              This.Forecolor = RGB(0,0,255)
	           CASE This.Value = "Yellow"
	              This.Forecolor = RGB(255,255,0)
	        ENDCASE
	
	5. Save and run the form.
	
	When the form is run, click the combo box drop-down list. The items in the
	drop-down list appear in their respective colors.
	
	Additional query words: popup
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
