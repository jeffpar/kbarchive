---
layout: page
title: "Q147672: HOWTO: How to specify 32x32 and 16x16 Icons for Win95 Logo Compl"
permalink: /kb/147/Q147672/
---

## Q147672: HOWTO: How to specify 32x32 and 16x16 Icons for Win95 Logo Compl

{% raw %}

	Article: Q147672
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVB kbDSupport kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 Logo program requires that an application provide 32x32 and 16x16
	icons for use by the operating system. This article shows how to accomplish this
	in Visual Basic 4.0.
	
	MORE INFORMATION
	================
	
	Specifying an icon in the Make EXE Options dialog that includes both 16x16 and
	32x32 icon images is all that is necessary to accomplish this functionality. If
	this is done, Visual Basic will generate an EXE that allows Windows 95 (and
	Windows NT 4.0) to find and use the correct icon.
	
	Icon resource files (files with a .ICO extension) can contain more than one
	image. The ImageEdit utility, which ships with Visual Basic 4.0, can be used to
	create icon resources that include multiple icons. It is located in the
	Tools\Imagedit directory on the VB4 CD. The steps below demonstrate how to
	create icons of both sizes with Imagedit program and then specify them correctly
	in Visual Basic. The Imagedit program is a 32-bit program, and will not run on
	16-bit operating systems. The Windows 3.1 SDK and QuickC for Windows include a
	16-bit version of Imagedit.Exe.
	
	How to create an .ICO file with 32x32 and 16x16 images
	------------------------------------------------------
	
	1. Start the Imagedit application. Select File New and specify Icon when asked
	  for the type of resource. Click OK to select the default 32x32 icon image.
	
	2. Draw your icon utilizing the abilities of the Image Editor application.
	
	3. When this icon is complete, select 'New Image...' from the Edit menu. This
	  time select the 'Small Icon 16x16' option and click OK. You now have two icon
	  images that will be saved to the same .ICO file. The Icon Image drop-down
	  combo box can be used to switch between all icon images.
	
	4. Draw the 16x16 version of your icon.
	
	5. When complete, select Save from the File menu. You now have an icon resource
	  file that contains both 16x16 and 32x32 icon images. The following steps show
	  how to use this .ICO file in Visual Basic.
	
	Note: The Imagedit application supports standard Windows cut/copy/paste
	operations. This makes it easy to copy an existing image and paste it into
	Imagedit. If the image being pasted is of a different size than the currently
	selected image, Imagedit will ask to either shrink or enlarge the image, or to
	crop it so that it will fit in the area specified.
	
	How to Use a Multiple Image .ICO file in Visual Basic 4.0
	---------------------------------------------------------
	
	1. Start Visual Basic 4.0. Form1 is created by default.
	
	2. In the Properties dialog, change the Icon property to the .ICO file
	  containing the images you would like to display.
	
	3. Select Make EXE from the File menu, and then choose the Options button to
	  display the EXE options dialog. The 'Application' Frame contains a drop-down
	  combo box that allows the selection of any of the icons specified in the Icon
	  property of a form. In this case, the only existing form is Form1, and the
	  icon specified in Form1 is used. Click OK to dismiss the Options dialog.
	
	4. Click OK to make an EXE. Open Explorer and view the file listing for the new
	  executable, noticing that the icon used by Explorer is the 16x16 icon image.
	  If the application is started, the image used for the control box will be
	  32x32.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVB kbDSupport kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
