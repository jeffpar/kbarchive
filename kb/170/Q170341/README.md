---
layout: page
title: "Q170341: FIX: LoadPicture Displays 16 x 16 Icons as 32 x 32"
permalink: /kb/170/Q170341/
---

## Q170341: FIX: LoadPicture Displays 16 x 16 Icons as 32 x 32

{% raw %}

	Article: Q170341
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the LoadPicture Function to display a 16 x 16 icon in an Image
	control, or any other control that uses the LoadPicture function to store images
	into the Picture object, the icon will display at 32 x 32.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods.
	
	- Use a 16 x 16 bitmap instead of an icon.
	
	-or-
	
	- Use an Image Control and set the Height and Width to be the same as the
	  icons. For example:
	
	        Image1.Picture = LoadPicture(<path to your icon>)
	        Image1.Stretch = True 'Needed so the image does not get clipped
	        'The next two lines assume that the form's ScaleMode is Twips
	        'It changes the Image control to be 16 x 16 Pixels
	        Image1.Width = (Screen.TwipsPerPixelX * 16)
	        Image1.Height = (Screen.TwipsPerPixelY * 16)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	LoadPicture always loads a 32 x 32 icon. If the icon file being loaded contains
	a single 16 x 16 image, LoadPicture stretches it to 32 x 32 before storing it in
	the Picture object of a control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The steps below illustrate an example that displays a 16 x 16 icon in an Image
	control.
	
	NOTE: You can use IMAGEDIT.EXE that ships on the Visual Basic 5.0 CD-ROM to
	create icons. This tool is located in the Tools\Imagedit directory on the Visual
	Basic 5.0 CD-ROM.
	
	1. Create a new project. Form1 is created by default.
	
	2. Place an Image control on Form1.
	
	3. Add the following code to Form1:
	
	        Private Sub Form_Load()
	            Image1.Picture = LoadPicture(<Path to your 16 x 16 icon>)
	        End Sub
	
	4. Run the form by choosing Start from the Run menu. Note that the icon is
	  displayed as a 32 x 32 icon.
	
	REFERENCES
	==========
	
	"HardCore Visual Basic", Microsoft Press, pg. 535
	
	Additional query words: kbVBp500bug kbVBp400bug kbVBp600fix kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
