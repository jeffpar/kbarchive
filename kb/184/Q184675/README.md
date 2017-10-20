---
layout: page
title: "Q184675: BUG: PictureBox Prints Incorrectly with PrintForm"
permalink: /kb/184/Q184675/
---

## Q184675: BUG: PictureBox Prints Incorrectly with PrintForm

{% raw %}

	Article: Q184675
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a form from the IDE or you use the PrintForm method to print a
	form containing a PictureBox with its Picture property set to a metafile (.wmf,
	.emf), the picture in the PictureBox does not print correctly. The picture may
	appear offset from its original location or may not appear at all.
	
	CAUSE
	=====
	
	The greater the Top and Left properties of the PictureBox control are from
	(0,0), the greater the offset of the actual picture in the printed output. The
	actual offset of the picture is relative to the size of the form.
	
	RESOLUTION
	==========
	
	The following are three different methods you can use to work around this
	problem:
	
	- Use an Image control rather than a PictureBox control.
	
	- Set the Picture property of the PictureBox control to a file in another
	  graphics format. In addition to metafiles, the Picture property for a
	  PictureBox also supports the bitmap (.bmp), icon (.ico), GIF, and JPEG file
	  formats.
	
	- Use another technique to print the form instead of the PrintForm method. The
	  following articles in the Microsoft Knowledge Base discuss techniques you can
	  implement to print your form with Visual Basic:
	
	  Q161299 : HOWTO: Capture and Print the Screen, a Form, or any Window
	
	  Q178076 : HOWTO: Use a PictureBox to Control Orientation Printing a Form
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Draw a PictureBox control in the upper-left corner of Form1. Set the Picture
	  property to any metafile.
	
	  NOTE: You can find some metafiles in the Graphics\Metafile of your Visual
	  Basic directory.
	
	3. Add the following code to the Click event of Form1:
	
	        PrintForm
	        Picture1.Move 2000
	        PrintForm
	
	4. Press the F5 key to run the project.
	
	5. Click Form1.
	
	RESULTS: Notice that the first PrintForm prints the image correctly. However, the
	second PrintForm, which executes after the Picture control is moved, prints the
	image incorrectly. Depending on the picture you selected, and the size of the
	form, the picture may appear off-center or not appear at all.
	
	Additional query words: move left top meta file picture box kbPrinting kbVBp500 kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
