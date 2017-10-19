---
layout: page
title: "Q138436: PRB: BorderColor Property Doesn't Change Color of Border"
permalink: /kb/138/Q138436/
---

## Q138436: PRB: BorderColor Property Doesn't Change Color of Border

	Article: Q138436
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The BorderColor Property does not change the color of an object's border color
	unless other properties of the object are set to specific values. The properties
	that must be set before the BorderColor Property becomes effective differ for
	each object.
	
	RESOLUTION
	==========
	
	Set the appropriate other properties for the object to a setting that will allow
	the BorderColor Property to be effective.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following is a list of properties and the values that must be set to for the
	BorderColor Property of each object to be effective.
	
	Combo Box
	---------
	
	  SpecialEffect Property
	     0-3D            Only the down arrow will have a border color.
	
	  -or-
	
	     1-Plain         The whole object will have a border color.
	
	Command Group
	-------------
	
	  BorderStyle Property
	     1-Fixed Single
	
	  -and-
	
	  SpecialEffect Property
	     1-Plain
	
	Container
	---------
	
	  This object inherits BorderColor from its SpecialEffect Property
	  parent class.
	     2-Flat
	
	Control
	-------
	
	  This object inherits BorderColor from its SpecialEffect Property
	  parent class.
	     2-Flat
	
	Image
	-----
	
	  BorderStyle Property
	     1-Fixed Single
	
	Line
	----
	
	  BorderStyle Property
	     1-Solid OR 2-Dash OR 3-Dot OR 4-Dash-Dot OR 5-Dash-Dot-Dot OR
	     6-Inside Solid
	
	List Box
	--------
	
	  SpecialEffect Property
	     1-Plain
	
	Option Group
	------------
	
	  BorderStyle Property
	     1-Fixed Single
	
	  -and-
	
	  SpecialEffect Property
	     1-Plain
	
	Page Frame
	----------
	
	  Tabs Property      This must be set first to make the SpecialEffect
	     .F.-False      and BorderColor Properties editable.
	        AND
	  SpecialEffect Property
	     2-Flat
	
	Shape
	-----
	
	  BorderStyle Property
	     2-Dash OR 3-Dot OR 4-Dash-Dot OR 5-Dash-Dot-Dot OR 6-Inside Solid
	
	  -and-
	
	  SpecialEffect Property
	     0-3D
	
	-or-
	
	  BorderStyle Property
	
	     1-Solid or 2-Dash or 3-Dot or 4-Dash-Dot or 5-Dash-Dot-Dot or
	     6-Inside Solid
	
	  -and-
	
	  SpecialEffect Property
	     1-Plain
	
	Text Box
	--------
	
	  BorderStyle Property
	     1-Fixed Single
	
	  -and-
	
	  SpecialEffect Property
	     1-Plain
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
