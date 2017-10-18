---
layout: page
title: "Q157665: WD97: Print to PostScript File Cuts Off Top of Picture"
permalink: kb/157/Q157665/
---

## Q157665: WD97: Print to PostScript File Cuts Off Top of Picture

	Article: Q157665
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print to a PostScript file, Word cuts off the top 1 point of your
	picture.
	
	WORKAROUND
	==========
	
	Crop the picture to a negative one point. Use the following steps to crop the
	image:
	
	1. Select the image.
	
	2. On the Format menu, click Object.
	
	3. On the Picture tab, under Crop From, change the Top value to -1 point.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	
	MORE INFORMATION
	================
	
	In Microsoft Word 97 for Windows, if you print a document containing an EPS
	picture to a PostScript file and then send the file to a PostScript printer, the
	picture is cut off at the top by 1 point.
	
	This problem is not easily seen if the picture has white space at the top of the
	picture. It is seen if the image extends to the top of the picture.
	
	This problem does not occur if the document is printed directly from Word 97 for
	Windows.
	
	Additional query words: 8.0 word8 word97 clipped cropped chopped
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
