---
layout: page
title: "Q187962: HOWTO: Add Images to the CE ImageList Control"
permalink: /kb/187/Q187962/
---

## Q187962: HOWTO: Add Images to the CE ImageList Control

	Article: Q187962
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft CE ImageList Control allows a Visual Basic developer to store
	images in an ImageList and to give other controls, such as the TreeView,
	ListView and TabStrip controls, a way to refer to that collection of images.
	
	This article demonstrates how to add images to the ImageList control.
	
	MORE INFORMATION
	================
	
	The ImageList Control is significantly different from the standard Win32 Visual
	Basic ImageList control, having been optimized for size and speed for the
	Windows CE operating system. For this version of the ImageList control:
	
	- Images can only be added at run time.
	
	- Images can be .bmp, .dib, or .2bp format.
	
	- There is no ListImage object or ListImages collection.
	
	- The Add method takes a file name rather than using LoadPicture.
	
	The following sample shows how to use the Add method and the hImageList property
	to add images to the ImageList control and use it with the ListView control.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Select Components from the Project menu, and then select both the "Microsoft
	  CE ImageList Control" and "Microsoft CE ListView Control" options.
	
	3. Place an ImageList control (ImageList1) and a ListView control
	  (ListViewCtrl1) on Form1.
	
	4. Place two CommandButtons named cmdLeftArrow and cmdRightArrow on Form1.
	
	5. Change the captions of cmdLeftArrow and cmdRightArrow to "Left Arrow" and
	  "Right Arrow" respectively.
	
	6. Copy and paste the following code into the Code window for Form1:
	
	        Option Explicit
	
	        Private Sub cmdLeftArrow_Click()
	           Dim l
	           Set l = ListViewCtrl1.ListItems.Add(, , "Left Arrow", 1)
	        End Sub
	
	        Private Sub cmdRightArrow_Click()
	           Dim r
	           Set r = ListViewCtrl1.ListItems.Add(, , "Right Arrow", 2)
	        End Sub
	
	        Private Sub Form_Load()
	           'Add Images to ImageList
	           ImageList1.Add ("\Windows\arrowl.2bp")
	           ImageList1.Add ("\Windows\arrowr.2bp")
	           'Make the images in ImageList control available for
	           'the ListView control
	           ListViewCtrl1.Icons = ImageList1.hImageList
	       End Sub
	
	7. Run the project in emulation. The necessary bitmap files are included in the
	  emulator's \Windows folder.
	
	NOTE: You can also add multiple images of the same height from one file
	containing one wider image. To see an example using the code above, replace the
	line:
	
	  Imagelist1.Add ("\windows\arrowl.2bp")
	
	with the lines:
	
	  ImageList1.ImageWidth = 109
	     ImageList1.Add "\windows\wincelgo.bmp"
	
	When adding images, if the width of the image is not evenly divisible by the
	ImageWidth set above, it may appear distorted as the Imagelist control attempts
	to re-scale it.
	
	Additional query words: vbce wince vbce6 eVB bmp 2bp
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
