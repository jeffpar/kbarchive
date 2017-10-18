---
layout: page
title: "Q167317: WD97: Cannot Close or Save Htmlview.dot"
permalink: kb/167/Q167317/
---

## Q167317: WD97: Cannot Close or Save Htmlview.dot

	Article: Q167317
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbother kbtemplate winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you open the Htmlview.dot file, you may be unable to close the document or
	save your changes. When you click Close, Save, or Save As on the File menu, the
	following error message is displayed:
	
	  Run-time error '4633': Unable to run the specified macro.
	
	CAUSE
	=====
	
	The Close, Save, and Save As commands are mapped to macros that call HTML code
	functions; therefore, you cannot perform these actions with the Htmlview.dot
	template.
	
	WORKAROUND
	==========
	
	To close the template, use the following steps to quit Word:
	
	1. Save and close any currently open files except the Htmlview.dot template.
	
	2. On the File menu, click Exit.
	
	3. When prompted to save changes to the Htmlview.dot template, click No.
	
	MORE INFORMATION
	================
	
	The Htmlview.dot file is designed to be used for viewing Web page source HTML
	code and should not be modified. Any unsupported modifications to the
	Htmlview.dot may result in unexpected behavior.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbother kbtemplate winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
