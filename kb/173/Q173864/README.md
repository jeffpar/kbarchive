---
layout: page
title: "Q173864: WD97: Batch Conversion Wizard Document Open After Dialog Closed"
permalink: /kb/173/Q173864/
---

## Q173864: WD97: Batch Conversion Wizard Document Open After Dialog Closed

	Article: Q173864
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Batch Conversion Wizard (open the Convert8.wiz file in the
	Microsoft Office\Office\Macros folder), the Convert8 document remains open when
	you click Cancel or when you close the Conversion Wizard dialog box.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Manually Close the Convert8 Document
	----------------------------------------------
	
	Close the Convert8 document by clicking Close on the File menu.
	
	Method 2: Add Convert8.wiz as an Add-In
	---------------------------------------
	
	To prevent this problem from occurring, include the Convert8.wiz file as a
	template add-in. This allows you to run the macros found in the Conversion
	Wizard without opening the Convert8.Wiz file.
	
	To include Convert8.wiz as a Word add-in, follow these steps:
	
	1. On the Tools menu, click Templates and Add-ins.
	
	2. Under "Global templates and add-ins," click Add.
	
	3. Go to the following default Office Macros folder:
	
	  \Program Files\Microsoft Office\Office\Macros
	
	4. In the Files Of Type list, click to select All Files.
	
	5. In the file list, click to select the Convert8 icon, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Word 97 Web Authoring Tools August 97 Update installs an updated
	Convert8.wiz file in the Office 97 Macros directory. It also installs an updated
	Conversion Wizard (Conversion Wizard.wiz) in the Web Pages folder of the
	Templates directory.
	
	Method 2 does not work for Conversion Wizard.wiz. If you include Conversion
	Wizard.wiz as an add-in, you still have to close the file manually, as described
	in method 1.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
