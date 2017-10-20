---
layout: page
title: "Q172745: WD97: Editing Web Browser Path Creates Duplicate Entry"
permalink: /kb/172/Q172745/
---

## Q172745: WD97: Editing Web Browser Path Creates Duplicate Entry

{% raw %}

	Article: Q172745
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
	
	When you attempt to edit the default Browser path, a duplicate entry is created
	in the Browsers list in the Web page Preview dialog box.
	
	NOTE: This problem occurs after you have installed the Web Authoring Tools
	Update. To see the problem, you must close the Web Page Preview dialog box, and
	then click Web Page Preview on the File menu.
	
	WORKAROUND
	==========
	
	In the Web Page Preview dialog box, select the browser you do not want, and then
	click Delete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	When you edit the path to your Web browser, a duplicate entry for your browser
	is created. One entry is the default original Web browser entry, and the other
	entry is the edited version.
	
	To edit the path to your Web browser, follow these steps.
	
	NOTE: When you change the path for your Web browser, you may not be able to use
	Word to preview your HTML document.
	
	1. Open an HTML document in Word.
	
	2. On the File menu, click Web Page Preview.
	
	  NOTE: If you have multiple Web browsers installed on your computer, each
	  browser will be listed in the Web Page Preview dialog box under Browser. If
	  your browser is not listed, click Add, and then click Browse to add your
	  browser to the list. If you type the path and file name for your Web browser,
	  you may receive the following error message if the path or file name is
	  incorrect.
	
	  Invalid path or filename
	
	3. Select your browser, and then click Edit.
	
	4. Click Browse, select the correct location for your browser, and then click
	  Open.
	
	5. Click OK.
	
	6. Do either of the following:
	   - Click Preview to view the HTML document in your Web browser.
	
	     -or-
	
	   - Click Close to close the Web Page Preview dialog box, and return to your
	     HTML document.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172743 WD97: Web Preview Edit\Browser Path Limited to 50 Characters
	
	  Q172747 WD97: What's New in the Web Page Authoring Tools Update
	
	  Q172746 WD97: Deleted Web Browser Reappears in Web Page Preview Dialog
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
