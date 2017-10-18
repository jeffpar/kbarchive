---
layout: page
title: "Q164688: WD97: Background Image Reference Changed Saving As HTML"
permalink: kb/164/Q164688/
---

## Q164688: WD97: Background Image Reference Changed Saving As HTML

	Article: Q164688
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Word 97 to edit an HTML document in Microsoft Word 97, the
	background may not be displayed.
	
	This problem occurs when all of the following are true:
	
	- You opened your web page directly in Word.
	
	  -and-
	
	- You saved the page to your local drive.
	
	  -and-
	
	- You re-posted the saved page to your Internet site.
	
	CAUSE
	=====
	
	When you save the Web page locally from Word, Word saves the background image
	with a different name than the original background image. The new background
	image name is saved in the HTML code of the local document.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps:
	
	1. Open the document in Word.
	
	2. On the View menu, click HTML Source.
	
	3. Find the source code that resembles the following line
	
	        <BODY TEXT = "xxxxxx" BACKGROUND= "ImageX.jpg">
	
	  where <ImageX.jpg> is the name of the background graphic file you are
	  using for your Web page.
	
	4. Change the <ImageX.jpg> name to the correct image file name.
	
	5. On the View menu, click Exit HTML Source.
	
	6. On the File menu, click Save and then Close.
	
	7. Post the Web page to your Internet site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
