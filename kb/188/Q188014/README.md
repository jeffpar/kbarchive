---
layout: page
title: "Q188014: WD97: HTML File Opens into Online Layout View Not as HTML Tags"
permalink: /kb/188/Q188014/
---

## Q188014: WD97: HTML File Opens into Online Layout View Not as HTML Tags

	Article: Q188014
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open an HTML file, Microsoft Word opens the file into online
	layout view, instead of opening the file as text and displaying the HTML tags.
	
	In addition, the "HTML Source" choice may be missing from the View menu in Word.
	
	CAUSE
	=====
	
	This behavior occurs if you did not install the Web Page Authoring (HTML)
	component with Word, and you then install Microsoft Internet Explorer 4.0x.
	
	NOTE: If you did install the Web Page Authoring (HTML) component with Word, Word
	opens HTML files into online layout view by default. This behavior is by design.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods.
	
	Method 1: Open the File as Text Only
	------------------------------------
	
	You can bypass the HTML converter and open the HTML file as text only, by
	confirming its method of conversion. To do this, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Click to select the "Confirm conversion at Open" check box, and then click
	  OK.
	
	4. On the File menu, click Open.
	
	5. Click to select the HTML file that you want to open, and then click Open.
	
	6. In the Convert File From list, click Text Only, and then click OK.
	
	Method 2: Install the Web Page Authoring (HTML) Component in Office 97
	----------------------------------------------------------------------
	
	This method adds HTML authoring features to Word that allow you view the HTML
	source. To do this, follow these steps:
	
	1. Quit all Office programs.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. In Control Panel, double-click the Add/Remove Programs icon.
	
	4. On the Install/Uninstall tab, click to select Microsoft Office 97. (If you
	  are using a stand-alone version of one of the Office programs, click to
	  select the appropriate product in the list.) Then, click Add/Remove.
	
	5. Click to select the Web Page Authoring (HTML) check box and then click
	  Continue.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	MORE INFORMATION
	================
	
	Microsoft Internet Explorer 4.0x installs a shared HTML (Html32.cnv) converter
	into the folder:
	
	  C:\Program Files\Common Files\Microsoft Shared\TEXTCONV
	
	When you install Word without the Web Page Authoring (HTML) component, Word
	ordinarily opens an HTML file as plain text. However, Word will check the
	TEXTCONV folder and utilize the HTML converter automatically when opening the
	file.
	
	
	Additional query words: IE
	
	======================================================================
	Keywords          : kbenv kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
