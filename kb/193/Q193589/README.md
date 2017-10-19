---
layout: page
title: "Q193589: HOWTO: Create Transparent Images From Bitmaps"
permalink: /kb/193/Q193589/
---

## Q193589: HOWTO: Create Transparent Images From Bitmaps

	Article: Q193589
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In previous versions of Visual Basic, creating transparent bitmaps required
	extensive use of the Windows API. The problem was that Visual Basic controls
	could not use graphic file types (such as GIF) that support transparency. Visual
	Basic for Windows versions 5.0 and 6.0 controls can use files in a much wider
	range of formats than previous versions.
	
	MORE INFORMATION
	================
	
	While it is still possible to handle transparent bitmaps programmatically, this
	article presents a solution that requires no code. This approach requires the
	use of a graphics editor such as the Microsoft Photo Editor that ships with
	Office 97, but any graphic editor that can set a transparent color will
	suffice.
	
	Steps To Create a Transparent Image From a Bitmap
	-------------------------------------------------
	
	1. Open the bitmap in Microsoft Photo Editor.
	
	2. Click the "Select Transparent Color" button on the toolbar.
	
	3. Click on the bitmap background to select the color (Photo Editor selects by
	  color - not area). It should "hatch" the selected color. Click OK on the
	  "Change Color to Transparent" dialog that appears.
	
	4. Use File...SaveAs to save the bitmap as a .GIF image.
	
	5. Specify the .GIF file as the Image property in any control that supports this
	  file type.
	
	REFERENCES
	==========
	
	For additional information on creating bitmaps via code, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q187568 HOWTO: Create Your Own Bitmap Object Class
	
	For additional information on converting to GIF files, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q193543 INFO: Unisys GIF and LZW Technology License Information
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp500 kbVBp600 kbBitmap
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
