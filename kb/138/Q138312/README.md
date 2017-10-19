---
layout: page
title: "Q138312: PRB: Image Editor Not Saving .Cur Files as Mono Color"
permalink: /kb/138/Q138312/
---

## Q138312: PRB: Image Editor Not Saving .Cur Files as Mono Color

	Article: Q138312
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
	
	When you use the Image Editor to edit a .cur file located in the
	\Vfp\Samples\Graphics\Cursors directory, it opens up the .cur file in "VGA-
	Color 16 Color 32x32" mode by default. If the file is saved in the VGA Color
	mode, it cannot be used in the DragIcon property of the form builder. The .cur
	file has to be saved in "VGA-Mono 2 Color 32x32" mode. The error "Cursor is
	corrupt or in wrong format" occurs if the .cur file is in VGA Color mode.
	
	WORKAROUND
	==========
	
	The only way to save it back to a Mono 2 Color mode is to copy the file to the
	clipboard. Then on the File menu, click New, and paste it back in. Save the
	untitled file as the same name of the .cur that was saved in VGA Color mode.
	Once Image Editor saves it this way in Mono 2 Color mode, it can be opened back
	up by Image Editor in Mono 2 Color mode instead of VGA Color mode from then on.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the \Vfp\Imagedit\Imagedit.exe file.
	
	2. On the File menu, click Open. Change List Files of Type to *.cur.
	
	3. Choose a .cur file from the \Vfp\Samples\Graphics\Cusrsors directory. Note
	  that it is opened in "VGA-Color 16 Color 32x32" mode. Save the .cur file.
	
	4. Create a new form, and place a text box on the form. Choose the DragIcon
	  property from the Properties box, and select the .cur file that was saved in
	  Image Editor. Note that the error "Cursor is corrupt or in wrong format"
	  doesn't appear if a different .cur files is chosen.
	
	5. Using the Image Editor, open the .cur file and copy it to the clipboard. On
	  the File menu, click New, and then click Cursor in the Resource Type Box.
	  Accept the default of "VGA-Mono 2 Color 32x32" in the New Cursor Image box,
	  and paste the icon to the untitled file.
	
	6. Save the untitled file as the name of the .cur file that was opened and saved
	  earlier.
	
	7. Go to the dragIcon property in Visual FoxPro, and choose the .cur file that
	  was just saved. Note the error does not occur and that it will work when the
	  form is run.
	
	8. In Image Editor, open the .cur file, and note that it will now open in VGA
	  Mono mode.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
