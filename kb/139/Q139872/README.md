---
layout: page
title: "Q139872: PRB: &quot;Expand is not an array&quot; Error When Using Outline Control"
permalink: /kb/139/Q139872/
---

## Q139872: PRB: &quot;Expand is not an array&quot; Error When Using Outline Control

	Article: Q139872
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Outline control has an Expand property and an Expand event. According to
	Visual FoxPro Help, you can expand an item of an Outline control (Outline1) by
	using this code:
	
	     THISFORM.Outline1.Expand(<Item#>) = .T.
	
	However, this code produces this error:
	
	  'Expand' is not an array
	
	CAUSE
	=====
	
	Visual FoxPro is interpreting Expand as a property of the Outline container
	object. The syntax is similar to referencing Expand as an array. That is why
	Visual FoxPro reports this error. You need to tell Visual FoxPro that this is a
	property of the OLE control that the container is holding. The Help
	documentation is incomplete.
	
	RESOLUTION
	==========
	
	The Object property provides access to the OLE server properties and methods for
	an OLE object. Therefore, to expand an item, you can use this code:
	
	     THISFORM.Outline1.Object.Expand(<Item#>) = .T.
	
	This assumes that the <item#> of the Outline control contains subordinate
	items and that it is currently collapsed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Outline control (Msoutl32.ocx) is a special type of list box that you can
	use to display items in a list hierarchically. This is useful for showing
	directories and files in a file system; it is the technique used by the Windows
	File Manager.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Debug window, and enter this line:
	
	     _SCREEN.ACTIVEFORM.ACTIVECONTROL.ListIndex
	
	2. Use the DO FORM command to run the Outline1.scx form in the Samples\Ole
	  directory.
	
	3. Click the Select a Database button, and select the Testdata.dbc (from the
	  Samples\Data directory)
	
	4. Click different lines on the Outline Sample form to see that the ListIndex
	  changes. Make sure the Customer line (ListIndex 0) is selected but not
	  expanded (collapsed) before you perform the next step.
	
	5. To expand the Customer item programmatically, type the following command in
	  the Command window:
	
	     _SCREEN.ACTIVEFORM.OLEControl1.Expand(0) = .T.
	
	  This will return the error noted above: "'Expand' is not an array."
	
	6. To get the correct behavior, use the following line of code instead:
	
	     _SCREEN.ACTIVEFORM.OLEControl1.Object.Expand(0) = .T.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
