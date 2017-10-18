---
layout: page
title: "Q262167: WD97: Prompt to Save Normal Template When You Quit Word"
permalink: kb/262/Q262167/
---

## Q262167: WD97: Prompt to Save Normal Template When You Quit Word

	Article: Q262167
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you quit Word, the following prompt appears:
	
	  Changes have been made that affect the global template, Normal.dot. Do you
	  want to save those changes?
	
	CAUSE
	=====
	
	This prompt appears for the following reasons:
	
	- Stamps.com Internet Postage add-in is installed.
	
	  -and-
	
	- The option to prompt to save changes to the Normal template is turned on.
	
	  NOTE: If the prompt to save changes to the Normal template is not turned on,
	  Word automatically saves your Normal.dot template each time you quit Word.
	
	WORKAROUND
	==========
	
	Use one of the following methods appropriate for your situation to work around
	this problem.
	
	Method 1: Turn Off the Save Prompt
	----------------------------------
	
	Use the following steps to turn off the prompt to save the changes to your
	Normal.dot template.
	
	NOTE: Even if you turn this prompt off to prevent Word from asking to save the
	changes, Word still automatically saves the changes each time you quit Word.
	
	1. On the Tools menu, click Options.
	
	2. Click the Save tab.
	
	3. Clear the "Prompt to save Normal template" check box.
	
	Method 2: Remove the Stamps.com Internet Postage Add-in
	-------------------------------------------------------
	
	Use the following steps to remove the Stamps.com Internet Postage add-in files
	from Microsoft Word:
	
	NOTE: If you remove the Stamps.com Internet Postage add-in, you will remove the
	Stamps.com Internet Postage functionality from Microsoft Word.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Stamps.com Internet Postage, and then
	  click Add/Remove.
	
	  NOTE: In Microsoft Windows 2000, click Change/Remove.
	
	4. Follow the messages to remove.
	
	For more information about Stamps.com, please refer to the following Web
	address:
	
	  http://www.stamps.com/
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
