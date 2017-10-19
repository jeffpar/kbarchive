---
layout: page
title: "Q176374: FP: Broken Hyperlink after Creating Corporate Presence Web"
permalink: /kb/176/Q176374/
---

## Q176374: FP: Broken Hyperlink after Creating Corporate Presence Web

	Article: Q176374
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage Explorer, when you verify hyperlinks for a new Corporate Presence
	Web, the Verify Hyperlinks dialog box indicates there is a broken internal
	hyperlink to the Search.htm page. And, in a web browser, when you click the
	Search hyperlink on the News.htm page, you receive the following error message:
	
	  HTTP/1.0 404 Object Not Found.
	
	CAUSE
	=====
	
	This problem occurs because the FrontPage Corporate Presence Wizard creates a
	"What's New" page (News.htm) that contains a link to the Search.htm page
	regardless of which options you select in the Corporate Presence Wizard. The
	News.htm page should not contain a hyperlink to the Search.htm page.
	
	RESOLUTION
	==========
	
	Delete the broken hyperlink by following these steps:
	
	hyperlink, the sentence "You may want to search for topics by keyword." on the
	News Page(News.htm) should be deleted.
	
	1. On the Windows Start menu, point to Programs, and then click Microsoft
	  FrontPage.
	
	2. Click Open Existing FrontPage Web. Click OK.
	
	3. In the Web Server or File Location box, type the location of your Corporate
	  Presence Web page.
	
	4. Click List Webs.
	
	5. Select the Corporate Presence Web. Click OK.
	
	6. On the Tools menu, click Show FrontPage Editor.
	
	7. In FrontPage Editor, click Open on the File menu.
	
	8. Select News.htm, and then click OK.
	
	9. On the Edit menu, click Replace.
	
	10. In the Find box, type "You may want to search for topics by keyword"
	  (without the quotation marks). Do not type anything in the Replace With box.
	  Click Replace All.
	
	11. Click Cancel.
	
	12. On the File menu, click Save.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
