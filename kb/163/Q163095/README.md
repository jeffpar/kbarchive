---
layout: page
title: "Q163095: WD97: Pictures Lost Saving a Web Page in Word"
permalink: /kb/163/Q163095/
---

## Q163095: WD97: Pictures Lost Saving a Web Page in Word

	Article: Q163095
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbusage kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Web page in Word as either HTML or as a Word document, the
	pictures are missing when you reopen the document.
	
	CAUSE
	=====
	
	Word saves the text information for the linked images; Word does not save the
	images.
	
	WORKAROUND
	==========
	
	NOTE: If you already opened the web page in the current Word session, exit and
	restart Word before using these steps.
	
	1. Start Word.
	
	2. On the File menu, click Open.
	
	3. In the File name box, type the Uniform Resource Locator (URL) to the web
	  page, and then click Open.
	
	  Word converts the Web page when you open it.
	
	4. On the Edit menu, click Links.
	
	5. Select the first link and then click Break Link.
	
	6. Click Yes when you are asked if you want to break the selected links.
	
	7. Repeat steps 5 and 6 for each link.
	
	8. On the File menu, click Save As.
	
	9. In the File Name box, type the document name. In the Save As Type box, select
	  either HTML Document or Word Document, and then click OK.
	
	Word will now save the pictures in the document.
	
	NOTE: The hyperlinks are invalid since they were created for the original Web
	page and they are no longer available to you.
	
	Edit the Invalid Hyperlinks
	---------------------------
	
	To edit the invalid hyperlinks, do the following:
	
	1. Right-click the picture or link, point to Hyperlink, and then click Edit
	  Hyperlink.
	
	2. In the Edit Hyperlink dialog box, type a valid path or URL in the "Link to
	  file or URL" box, and then click OK. Or, to remove the link, click Remove
	  Link and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q157637 Placeholder Replaces Image After Adding Hyperlink
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraphic kbusage kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
