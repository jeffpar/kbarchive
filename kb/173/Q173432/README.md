---
layout: page
title: "Q173432: WD97: Web Page Wizard Creates Unnecessary Copies of Image Files"
permalink: /kb/173/Q173432/
---

## Q173432: WD97: Web Page Wizard Creates Unnecessary Copies of Image Files

	Article: Q173432
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create and save a new document using the Web Page Wizard, Word copies
	the images it uses for bullets and horizontal lines to the directory containing
	your Web page. Word names these files Image1.gif, Image2.gif, and so on. This
	behavior is by design.
	
	However, when you add a new bullet or horizontal line, Word creates another copy
	of the image file in the directory containing your Web page, even though the
	Image<x>.gif copy already exists.
	
	CAUSE
	=====
	
	This behavior occurs because the Web Page Wizard uses a converter to save the
	document as HTML. The HTML converter automatically saves each image in the
	document in graphics interchange format (GIF), thus creating the
	Image<x>.gif files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	The following example exhibits this behavior.
	
	Using the Web Page Wizard, choose Simple Layout for the Type of Web Page, and
	then choose Outdoors for the Visual Style. Word uses three images for this
	style: Pebble.gif for bullets, "Row of Pebbles.gif" for horizontal lines, and
	"Leaves on the Side.gif" for the background image.
	
	When you save the Web page, Word creates an image file for each of these images.
	They are sequentially numbered, for example:
	
	  image8.gif
	  image9.gif
	  image10.gif
	
	To insert a horizontal line, click Horizontal Line on the Web Formatting toolbar.
	Word copies the "Row of Pebbles.gif" file to the directory containing your Web
	page, even though image10.gif (for example) is already a copy of "Row of
	Pebbles.gif."
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
