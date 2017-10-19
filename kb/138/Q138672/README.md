---
layout: page
title: "Q138672: PRB: .Msk File Not Recognized in Windows 95"
permalink: /kb/138/Q138672/
---

## Q138672: PRB: .Msk File Not Recognized in Windows 95

	Article: Q138672
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
	
	Bitmaps appear transparent when placed on a control of a form, even after
	following the directions on page 304 of the Developer's Guide to create a mask
	file.
	
	CAUSE
	=====
	
	The default extension for a bitmap is .bmp. When you save a bitmap in Paintbrush
	in Windows 95, the resulting file automatically has the .bmp extension.
	Therefore, if you save a file as either New or New.bmp will save the bitmap to a
	file named New.bmp. But if you attempt to save the file as New.msk, Windows 95
	creates a file named New.Msk.bmp. Note that the full file name might not be
	visible when examining files in Windows 95.
	
	RESOLUTION
	==========
	
	Rename the file through the Windows Explorer or by using another method.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Follow the directions on page 304 of the Developer's Guide under "Using Picture
	Masks" to create a mask for a bitmap. A sample bitmap that needs a mask file is
	New.bmp in the Samples\Controls\Events subdirectory. Before trying to reproduce
	this behavior, make sure the file New.msk does not already exist in that
	directory.
	
	1. Open the New.bmp file in Paint.
	
	2. Blacken the inside of the picture.
	
	3. Save the image as New.msk.
	
	4. Try to use the bitmap on a command button on a Visual FoxPro form. Note that
	  the bitmap is still transparent.
	
	NOTE: If the user has set Windows 95 to "Hide MS-DOS file extensions for file
	types that are registered," the file New.msk.bmp will appear as New.msk because
	Windows 95 recognizes it as a bitmap. Make sure that the user is not hiding the
	file extensions by changing the options under the View menu option on the
	Windows Explorer.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
