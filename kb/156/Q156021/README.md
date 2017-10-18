---
layout: page
title: "Q156021: HOWTO: Use the FillColor vs. BackColor Properties of a Shape"
permalink: kb/156/Q156021/
---

## Q156021: HOWTO: Use the FillColor vs. BackColor Properties of a Shape

	Article: Q156021
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FillColor and BackColor properties provide control over the colors of an
	object. The FillColor property controls the pen color that fills an object and
	works in conjunction with the FillStyle property. Because the FillStyle property
	is transparent by default, the effects of changing the FillColor property may
	not appear immediately. By changing the FillStyle property to Solid or to
	another fill pattern, the effects of the FillColor property become apparent.
	
	The BackColor property colors areas of the shape that the FillColor property
	leaves unchanged. For example, if the FillColor property is set to blue and the
	FillStyle property is set to 3 - Vertical Lines, the BackColor property fills in
	areas between the vertical blue lines. However, if the BackStyle property is set
	to Transparent, the BackColor property is ignored.
	
	MORE INFORMATION
	================
	
	To specify a shape with a blue background and red stripes, perform the following
	steps:
	
	1. Create a form.
	
	2. Place a shape on the form using the Form Controls toolbar.
	
	3. Set the following properties of the shape:
	
	  BackColor = 0,0,255
	  BackStyle = 1 - Opaque (Default)
	  FillColor = 255,0,0
	  FillStyle = 3 - Vertical Line
	
	4. Run the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
