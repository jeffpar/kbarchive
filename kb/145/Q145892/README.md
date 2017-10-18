---
layout: page
title: "Q145892: PRB: OCX Visible on All Pageframe Pages After Modal Form Runs"
permalink: kb/145/Q145892/
---

## Q145892: PRB: OCX Visible on All Pageframe Pages After Modal Form Runs

	Article: Q145892
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a modal form is brought up over a form that contains an OLE Container Control
	on a page of a pageframe, when the modal form is closed, the OLE Container
	Control will be visible even when the page that contains it is not active.
	
	WORKAROUND
	==========
	
	For the form that runs atop the form with the OLE Container Control, set the
	WindowType property to 0 - Modeless.
	
	-or-
	
	In the Deactivate code for the pages that contain OLE Container Controls, move
	the OLE Container Control object off the page by setting its Left property to a
	high value. Move the object back to its proper position in the Activate code of
	the page.
	
	Workaround One
	--------------
	
	Set the WindowType to 0 - Modeless for any forms brought up over forms that have
	OLE Container Controls on inactive pages.
	
	Workaround Two
	--------------
	
	The following workaround moves the OLE Container Controls that are on inactive
	pages to a place outside the form boundaries, so modal forms can be used.
	
	For the form that holds the pageframe with pages containing OLE Container Control
	objects, perform these steps:
	
	1. In the Init code of each of the OLE Container Controls, place:
	
	     THIS.Left=3500             && Some artificially high value
	
	2. In the Activate code of each page, place:
	
	     THIS.Olecontrol1.Left=35   && desired placement when on active page
	
	3. In the Deactivate code of each page, place:
	
	     THIS.Olecontrol1.Left=3500   && artificially high value
	
	Each OLE Container Control will now be visible only when it is on the active
	page.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Mainform.
	
	2. Add a command button and place the following code in its Click event:
	
	     DO FORM Modalfrm.
	
	3. Add a Pageframe.
	
	4. Add an OLE Container Control (such as Outline.ocx) to each of the two pages
	  of the Pageframe.
	
	5. Save the form.
	
	6. Create a form called Modalfrm, and set its WindowType property to 1 - Modal.
	  Save the form.
	
	7. Run Mainform, and press the command button to bring up Modalfrm over
	  Mainform.
	
	8. Exit the modal form.
	
	9. Both of the Outline controls will be visible on the active page of the
	  pageframe.
	
	Notes
	-----
	
	1. If each of the pages are activated, the OLE Container Controls will again be
	  visible only when the page that contains them is active.
	
	2. This does not occur if the form brought on top is not modal.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
