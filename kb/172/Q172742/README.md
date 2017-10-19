---
layout: page
title: "Q172742: WD97: Batch Converter Not Restored on AutoUpdate Uninstall"
permalink: /kb/172/Q172742/
---

## Q172742: WD97: Batch Converter Not Restored on AutoUpdate Uninstall

	Article: Q172742
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbsetup winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Web Authoring Tools Update includes an updated version of the Batch
	Conversion Wizard. However, if you remove the Web Authoring Tools Update, the
	original Convert8.wiz file is not restored.
	
	WORKAROUND
	==========
	
	To work around this problem, run Word Setup to remove and then reinstall the
	Macro Templates that shipped with Word 97. To do this, follow these steps.
	
	Remove the Macro Templates
	--------------------------
	
	1. Click the Start button, point to Settings and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon.
	
	3. In the list of installed programs, select Microsoft Office 97 or Microsoft
	  Word 97 and then click Add/Remove.
	
	4. In the Setup dialog box, click Add/Remove.
	
	5. If you are using Microsoft Office Setup, click to select Microsoft Word in
	  the Options list, and then click Change Option. If you are using Microsoft
	  Word Setup, skip to step 6.
	
	6. Click to select Wizards and Templates (do not clear the check box), and then
	  click Change Option.
	
	7. Click to clear the Macro Templates check box, and then click OK.
	
	8. If you are using Microsoft Office Setup, click OK and then click Continue. If
	  you are using Microsoft Word Setup, click Continue.
	
	9. Setup displays the following message:
	
	  You have chosen to remove 1 component. Are you sure you want to remove it?
	
	  Click Yes to confirm component removal.
	
	Reinstall the Macro Templates
	-----------------------------
	
	1. Repeat steps 1 through 6 of the "Remove the Macro Templates" section of this
	  article.
	
	2. Click to select the Macro Templates check box, and then click OK.
	
	3. If you are using Microsoft Office Setup, click OK and then click Continue. If
	  you are using Microsoft Word Setup, click Continue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	
	MORE INFORMATION
	================
	
	The Word 97 Web Authoring Tools Update includes an updated version of the
	Conversion Wizard, a tool for converting multiple files from one format to
	another. The updated Conversion Wizard provides new options for converting
	multiple Word documents to Web pages. For example, you can easily give all your
	Web pages a consistent look by using a common background. You can also add a
	title area or navigation bar of related links to the top and bottom of your Web
	pages.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172747 WD97: What's New in the Web Page Authoring Tools Update
	
	  Q162490 WD97: How to Access Sample Macros for Word 97
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbsetup winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
