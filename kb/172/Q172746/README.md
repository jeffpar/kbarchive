---
layout: page
title: "Q172746: WD97: Deleted Browser Reappears in Web Page Preview Dialog Box"
permalink: /kb/172/Q172746/
---

## Q172746: WD97: Deleted Browser Reappears in Web Page Preview Dialog Box

	Article: Q172746
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
	
	When you select and delete your Web browser from the list of browsers in the Web
	Page Preview dialog box (on the File menu, click Web Page Preview) and close and
	then re-open the Web Page Preview dialog box, the browser you deleted still
	appears in the list of browsers.
	
	NOTE: The list of browsers appears after you install the update for the Web Page
	Authoring Tools when you click Web Page Preview on the File menu.
	
	CAUSE
	=====
	
	Word lists all registered Web browsers in the Web Page Preview dialog box.
	
	NOTE: A registered Web browser is a Web browser that is properly installed and
	has the correct Windows Registry entries for Word to correctly identify and use
	the browser.
	
	STATUS
	======
	
	This functionality is by design. Word automatically identifies and uses a Web
	browser that has been registered in the Windows Registry.
	
	MORE INFORMATION
	================
	
	Registration of a Web browser in the Windows Registry is a function of the setup
	of the Web browser. If your Web browser is not recognized by Word, either rerun
	the setup program for your Web browser, or contact the vendor of your Web
	browser for more information.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172747 WD97: What's New in the Web Page Authoring Tools Update
	
	  Q172746 WD97: Editing Web Browser Path Creates Duplicate Entry
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
