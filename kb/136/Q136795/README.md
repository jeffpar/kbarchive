---
layout: page
title: "Q136795: How to Change the Mouse Pointer"
permalink: kb/136/Q136795/
---

## Q136795: How to Change the Mouse Pointer

	Article: Q136795
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to change the mouse pointer when the mouse is
	over an object on a form.
	
	MORE INFORMATION
	================
	
	You can change the mouse pointer to to a different shape such as an hourglass,
	cross-hair, or I-beam to indicate that something has occurred or to inform the
	user that an action is occurring. To change the mouse pointer in Visual FoxPro,
	use the MousePointer property of an object.
	
	When the mouse pointer is over a particular object, change that object's
	MousePointer property to change the mouse pointer into a special pointer shape.
	
	Step-by-Step Example
	--------------------
	
	This example changes the mouse pointer into a cross-hair when it is over a text
	box.
	
	1. Create a new form.
	
	2. Place a text box object on the form.
	
	3. With the text box object selected, click the Layout tab of the Property
	  Sheet.
	
	4. Change the MousePointer property to 2 - Cross.
	
	5. Save and run the form.
	
	6. Move the mouse over the text box and notice the mouse pointer change to a
	  cross-hair.
	
	REFERENCES
	==========
	
	For more information on the MousePointer property, please search for
	"MousePointer Property" in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
