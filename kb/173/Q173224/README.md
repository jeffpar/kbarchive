---
layout: page
title: "Q173224: WD97: How to Turn On/Off Prompts in Word Web Authoring"
permalink: /kb/173/Q173224/
---

## Q173224: WD97: How to Turn On/Off Prompts in Word Web Authoring

{% raw %}

	Article: Q173224
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	When you work with HTML documents, you will receive a prompt to either save your
	document when changes have been made since the document was last saved, or
	remind you to refresh your picture after you edit it in an image editor.
	
	This article describes the following:
	
	- The action required to show the save or refresh prompt.
	
	- The message text of each of the prompts.
	
	- How to disable (turn off) each of the prompts.
	
	- How to re-enable (turn back on) each of the prompts.
	
	MORE INFORMATION
	================
	
	NOTE: This information applies only to the AutoUpdate version of the Web
	Authoring Tools. In the version of the Web Authoring Tools that shipped with
	Word 97, the View and Exit HTML Source and Web Page Preview prompts cannot be
	disabled and the prompt for editing pictures does not exist because pictures
	cannot be edited.
	
	Actions and Resulting Messages
	------------------------------
	
	The following lists the action required to show the prompt along with the text of
	the prompt:
	
	- On the View menu, you click HTML Source.
	
	  Do you want to save the changes you made to <filename.html> before
	  viewing HTML source?
	
	- While in HTML Source view, on the View menu, you click Exit HTML Source.
	
	  Do you want to save the changes you made to <filename.html> before
	  exiting from HTML source view?
	
	- On the File menu, you click Web Page Preview.
	
	  Do you want to save the changes you made to <filename.html> before
	  previewing in a Web browser?
	
	- You double-click to edit a Picture.
	
	  Click OK to edit this picture in your image editor.
	
	  Changes you make to this picture will not immediately appear in your Word
	  document. After closing your image editor, right-click the picture in Word
	  and choose "Refresh Picture".
	
	  NOTE: You will not receive this prompt until you have saved your HTML document
	  after inserting the picture. If you edit the picture before saving your HTML
	  document, you will not receive this prompt.
	
	How to Disable (Turn Off) Each Prompt
	-------------------------------------
	
	With each prompt, you have the option to clear a check box that that will disable
	(turn off) the prompt.
	
	- When viewing or exiting HTML Source:
	
	  Always ask before saving changes when viewing HTML source or exiting from
	  HTML source view.
	
	  NOTE: When you turn off this prompt, your changes will be saved automatically
	  and you will not be prompted to save the changes.
	
	- When choosing Web Page Preview:
	
	  Always ask before saving changes.
	
	  NOTE: When you turn off this prompt, your changes will be saved automatically
	  and you will not be prompted to save the changes.
	
	- When editing pictures:
	
	  Always display this reminder when I edit pictures on Web Pages.
	
	  NOTE: When you turn off this reminder, your changes will not automatically be
	  reflected in the picture in your HTML document. You will still need to
	  Refresh your picture after you exit from your image editor. When you make
	  changes to your picture in your image editor, your image editor will still
	  prompt to save the changes you made.
	
	How to Re-Enable (Turn On) Each Prompt
	--------------------------------------
	
	For information about how to edit the registry, see the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	There is no "built-in" feature to re-enable each of the listed prompts, you must
	edit the Registry and delete the following String Values.
	
	- For viewing or exiting HTML Source:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\HTML\ 
	     QuietHTMLSourceSave
	
	- For Web Page Preview:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\HTML\ 
	     QuietWebPagePreview
	
	- For editing pictures:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\HTML\ 
	     QuietEditPicture
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172747 WD97: What's New in the Web Page Authoring Tools Update
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
