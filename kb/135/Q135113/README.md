---
layout: page
title: "Q135113: How to Create a Form that Has No Title Bar"
permalink: /kb/135/Q135113/
---

## Q135113: How to Create a Form that Has No Title Bar

	Article: Q135113
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to create a form with an empty, disabled title
	bar, no Close, no Maximize, no Minimize, no Moveable, and no Caption.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form. On the File menu, click New. Then click Form and New File.
	
	2. In the Properties window, select the Layout tab. Next, select the Caption
	  property, and press the DELETE Key (not the space bar) to remove all text for
	  this property.
	
	3. Set the following properties to false (.F.):
	
	  Closable = .F.
	  Controlbox = .F.
	  Maxbutton = .F.
	  Minbutton = .F.
	  Movable = .F.
	
	4. Set the BorderStyle Property to whatever you want it to be, such as Single
	  Line.
	
	NOTE: If the HalfHeightCaption is set to true, the title bar will still appear.
	
	REFERENCES
	==========
	
	For more information on each property, type the corresponding command from the
	list below in the Command window:
	
	  HELP CAPTION
	  HELP CLOSABLE
	  HELP CONTROLBOX
	  HELP MAXBUTTON
	  HELP MINBUTTON
	  HELP MOVABLE
	
	Additional query words: 3.00 VFoxWin closeable
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
