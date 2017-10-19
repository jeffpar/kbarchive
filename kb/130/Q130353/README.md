---
layout: page
title: "Q130353: No Special Effect Property for the Grid"
permalink: /kb/130/Q130353/
---

## Q130353: No Special Effect Property for the Grid

	Article: Q130353
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While the Grid object allows the creation of a number of special effects by
	using the Dynamic grid properties, the Grid object itself does not support any
	special effects properties.
	
	MORE INFORMATION
	================
	
	The following information is based on the "SpecialEffect properties" topic in
	the Visual FoxPro Help menu.
	
	SpecialEffect properties apply to check box, ComboBox, CommandGroup, Container
	Object, Control Object, EditBox, list box, OptionButton, OptionGroup, PageFrame,
	Shape, Spinner, and text box objects. It is available at design time and run
	time.
	
	The syntax is:
	
	     [Form.]Control.SpecialEffect = Expr
	
	For a PageFrame control, the settings for the SpecialEffect property are:
	
	Expr   Description
	0      Raised (Default for controls and objects except Container Object)
	1      Sunken
	2      Flat (Default for the Container Object only)
	
	NOTE: For a PageFrame control, SpecialEffect is available only if the Tabs
	Property is set to false (.F.). Also, the BorderColor property for a PageFrame
	applies only when Expr is set to 2 (Flat).
	
	For all other controls, the settings for the SpecialEffect property are:
	
	Expr   Description
	0      3D
	1      Plain
	
	NOTE: If the Height property is set to a value too small, the 3D setting has no
	effect.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
