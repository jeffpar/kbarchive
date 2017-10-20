---
layout: page
title: "Q173213: FIX: JPG in Image or PictureBox Control Doesn't Display Properly"
permalink: /kb/173/Q173213/
---

## Q173213: FIX: JPG in Image or PictureBox Control Doesn't Display Properly

{% raw %}

	Article: Q173213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp500bug kbVBp600fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display a JPG file in a PictureBox or Image control, the bottom row of
	pixels is a different color. It looks like a line has been drawn across the
	bottom of the image.
	
	RESOLUTION
	==========
	
	This problem only effects JPG images. One solution is to convert the image to a
	different format. For example, you can use the Wang Imaging software that comes
	with Windows NT 4.0 or the Microsoft Photo Editor available with Microsoft
	Office 97 to convert the file format.
	
	Alternatively, you can use a control other than the PictureBox or Image to
	display the picture. The OLE Control does not exhibit this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new "Standard EXE" project in Visual Basic 5.0.
	
	2. Place a PictureBox control and an Image control on Form1.
	
	3. Set the picture property of both controls to a file in JPG format.
	
	4. Increase the size of both controls so that they are larger than the image.
	
	5. Set the Stretch property of the Image control to true. (This is not necessary
	  to reproduce the problem but it does make it easier to see.)
	
	6. Run the project.
	
	7. Notice the line that appears across the bottom of both images.
	
	
	Additional query words: jpeg
	
	======================================================================
	Keywords          : kbCtrl kbVBp500bug kbVBp600fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
