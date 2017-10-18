---
layout: page
title: "Q135994: PRB: Visual SourceSafe Explorer Checks Out .FRM Without .FRX"
permalink: kb/135/Q135994/
---

## Q135994: PRB: Visual SourceSafe Explorer Checks Out .FRM Without .FRX

	Article: Q135994
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic, when you check out a form by using the SourceSafe Add-In, you
	automatically check out both the .frm and .frx file for that form.
	
	However, in the Visual SourceSafe Explorer, you can check out the .frm file
	without the .frx file and vice versa. If the .frx file is checked out without
	the .frm, the Visual Basic form is considered to be not checked out (read only).
	If the .frm file is checked out without the .frx file, the Visual Basic form is
	considered to be checked out, so modifications can be made to that form. This
	can cause problems when trying to save the form if you make graphical changes to
	the form. The following error is displayed:
	
	  Path/File access error: '<path to .frx file>'
	
	None of the changes are saved to either the .frm or the .frx file. However, the
	changes are still available in Visual Basic.
	
	CAUSE
	=====
	
	Changes were not saved to either the .frm or the .frx file because the .frx file
	is read-only. The .frx file is read-only because the file was never checked out.
	
	RESOLUTION
	==========
	
	To save the changes, switch to the Visual SourceSafe Explorer and check out the
	.frx file. Then switch to Visual Basic and save the project once again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	It is always important to keep the Visual Basic .frx and .frm files in sync with
	each other in every way.
	
	Functions that Keep the .frm and .frx Files in Sync Automatically
	-----------------------------------------------------------------
	
	The following functions automatically keep the .frm and .frx files in sync:
	
	  "Add File" from inside Visual Basic
	  "Delete File" from inside Visual Basic
	  "Get" from inside Visual Basic
	  "Check Out" from inside Visual Basic
	  "Check In" from inside Visual Basic
	  "Undo Check Out" from inside Visual Basic
	  "Save As" from inside Visual Basic
	
	Situations Where You Need to Keep the .frm and .frx Files in Sync Manually
	--------------------------------------------------------------------------
	
	The following operations don't keep the .frm and .frx files in sync unless you do
	it manually:
	
	  Any SourceSafe Explorer command
	  Any SourceSafe command line command
	
	This includes (but is not limited to) Add, Delete, Get, Check Out, Check In, Undo
	Check out, and Share. In all these cases, you need to ensure that the action is
	taken on both the .frm and .frx file.
	
	Any actions inside the History dialog box (for example, Get, Pin, and Rollback)
	must be taken from inside Visual Basic. However, the .frx still does not tag
	along. Therefore, Microsoft recommends that you take these actions only for .bas
	and .cls files, or for .frm files that do not have an .frx file. For a .frm and
	.frx file pair, use the SourceSafe Explorer or command line to operate on both
	files (one at a time, in the Explorer).
	
	A Share action, even if taken from Visual Basic, doesn't include the .frx file
	automatically. However, in this case, you don't need to start SourceSafe; just
	make sure to choose both the .frm and .frx files in the Share dialog box inside
	Visual Basic.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic, open the Controls sample project, and place it under
	  SourceSafe control.
	
	2. In the Visual SourceSafe Explorer, check out the Button.frm file but not the
	  .frx file.
	
	3. In Visual Basic, on the Add-Ins menu, click SourceSafe, and then click
	  Refresh File Status to get in sync with the Visual SourceSafe Explorer.
	
	4. In Visual Basic, open the Button form, and click the traffic light picture
	  box. Change the Picture property to some other bitmap picture.
	
	5. In Visual Basic, save the project. At this point, you'll see this error
	  message:
	
	  Path/File access error: '<path to .frx file>'
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbVBp400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	
