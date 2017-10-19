---
layout: page
title: "Q172092: WD97: Right-aligned Graphic Deletes HTML Code When Saved"
permalink: /kb/172/Q172092/
---

## Q172092: WD97: Right-aligned Graphic Deletes HTML Code When Saved

	Article: Q172092
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
	
	If you insert an image into an HTML document and use the ALIGN property of the
	IMG tag to right align it, all HTML code after the image is removed from the
	saved HTML file.
	
	WORKAROUND
	==========
	
	To work around this problem, right align the paragraph that contains the image,
	instead of aligning the image. To do this, view the HTML source by saving your
	document, and then clicking HTML Source on the View menu.
	
	Locate the line that contains ALIGN=RIGHT as part of the IMG SRC tag, and change
	it to align the paragraph. For example, if your file contains the following
	line
	
	  <P><A HREF="INDEX.HTML"><IMG SRC="IMAGE.JPG"
	  ALIGN=RIGHT></A></P>
	
	change it to this
	
	  <P ALIGN="RIGHT"><A HREF="INDEX.HTML"><IMG
	  SRC="IMAGE.JPG"></A></P>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem most likely occurs with files originally created in Microsoft
	FrontPage 97.
	
	Additional query words: 8.00 8.0 cut blank delete missing drop dropped
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
