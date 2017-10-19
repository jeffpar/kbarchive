---
layout: page
title: "Q142831: PRB: DBList Shrinks When Toggling Appearance Property"
permalink: /kb/142/Q142831/
---

## Q142831: PRB: DBList Shrinks When Toggling Appearance Property

	Article: Q142831
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the DBList's IntegralHeight property set to True (the default) switching
	back and forth between the 3D and flat versions of the DBList control (via the
	Appearance property) causes the DBList control to shrink vertically, possibly
	all the way to a single horizontal line.
	
	CAUSE
	=====
	
	When the control's Appearance property is Flat, the control has a certain number
	of pixels X for a certain number of rows N, as well as two extra pixels for the
	border. When switched to a 3D view, the control still only uses a maximum of X+2
	pixels total but now uses 4 pixels for the border, and it doesn't have enough
	space left over for all N rows of data. To remedy this, the control reduces the
	number of rows shown by one. Repeating this numerous times causes row after row
	to be lost, until no rows are left, and the control appears as a flat line.
	
	RESOLUTION
	==========
	
	After setting the Appearance property to the desired value, resize the control
	to the desired proportions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic, or if it is already running, choose New Project from the
	  File menu.
	
	2. Click and drag a single DBList control onto the form. The IntegralHeight
	  property of the control is set to True by default.
	
	3. Repeatedly double-click on the DBList's Appearance property in the Properties
	  window to toggle between the flat and 3D views of the DBList control. The
	  control will shrink in size vertically, until it remains as just a single
	  line on the form.
	
	Additional query words: 4.00 3-d vb4win vb4all
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
