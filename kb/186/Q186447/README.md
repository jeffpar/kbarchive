---
layout: page
title: "Q186447: FP: Image Size Incorrect After Cropping/Enlarging"
permalink: /kb/186/Q186447/
---

## Q186447: FP: Image Size Incorrect After Cropping/Enlarging

	Article: Q186447
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q196580.
	
	For a Microsoft FrontPage 98 version of this article, see Q194055.
	
	SYMPTOMS
	========
	
	If you insert an image and then crop or enlarge the image in an image-editing
	program, such as Microsoft Image Composer, the image will appear to be a
	different size in FrontPage Editor than it does in the image-editing program.
	
	CAUSE
	=====
	
	When you insert an image on your page, FrontPage uses the WIDTH and HEIGHT
	attributes to define the size of the image. Even though you cropped or enlarged
	the image in an external program, FrontPage retains these attributes. Hence, in
	FrontPage, the image is sized according to those dimensions.
	
	RESOLUTION
	==========
	
	Remove the Image Size property for the image. To do this, follow these steps:
	
	1. Select the image.
	
	2. On the Edit menu, click Image Properties.
	
	3. In the Image Properties dialog box, click the Appearance tab.
	
	4. Click to clear the Specify Size check box.
	
	5. Click OK.
	
	
	For more information about inserting images, click the Index tab in FrontPage
	Help, type the following text
	
	  "inserting, image" (without the quotation marks)
	
	and then double-click the selected text to go to the "To insert an image from the
	current FrontPage Web" topic.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
