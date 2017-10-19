---
layout: page
title: "Q146423: How to Change the .BMP Picture On a Command Button at Run Time"
permalink: /kb/146/Q146423/
---

## Q146423: How to Change the .BMP Picture On a Command Button at Run Time

	Article: Q146423
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Command Button control has a Picture property that can be assigned a bitmap
	(a graphic file with a .bmp extension), which allows the bitmap to be displayed
	on the face of the command button. This article shows by example how the Picture
	property can be changed at run time to change the bitmap displayed on the
	button.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following example demonstrates how to change the Picture property of a
	command button at run time.
	
	1. Create a new form.
	
	2. In the Form Designer, right-click the form, and select Data Environment.
	  Right-click within the Data Environment window, and select Add. Select Other
	  in the "Add Table or View" dialog box, and select the Customer table from the
	  Testdata database located in the \Vfp\Samples\Data directory.
	
	3. Add a command button (Command1) to the form. Remove Command1 from the Caption
	  property by highlighting the Caption property in the Property Sheet and
	  pressing the DELETE key. Set the command button's Height property to 50 and
	  Width property to 50.
	
	4. Place the following code in the command button's Init event code:
	
	     THIS.Picture = 'C:\VFP\SAMPLES\CONTROLS\GRAPHICS\Arw08dn.bmp'
	
	5. Place the following code in the command button's Click event:
	
	     IF THIS.parent.List1.Height = 23
	          THIS.parent.List1.Height = 170
	          THIS.Picture = HOME() + 'SAMPLES\CONTROLS\GRAPHICS\Arw08up.bmp'
	     ELSE
	          THIS.parent.List1.Height = 23
	          THIS.Picture = HOME() + 'SAMPLES\CONTROLS\GRAPHICS\Arw08dn.bmp'
	     ENDIF
	
	6. Place a list box on the form. Set its Height property to 23, its
	  RowSourceType property to 2-Alias, and its RowSource property to
	  Customer.Contact.
	
	7. Save and run the form.
	
	8. Press the command button to toggle the Height of the list box and toggle the
	  bitmap that displays on the command button.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
