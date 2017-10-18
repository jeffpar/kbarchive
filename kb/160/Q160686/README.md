---
layout: page
title: "Q160686: WD97: No Macro Warning Opening File in Template Folder"
permalink: kb/160/Q160686/
---

## Q160686: WD97: No Macro Warning Opening File in Template Folder

	Article: Q160686
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbvirus kbtemplate word97
	Last Modified: 19-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The macro warning message does not appear when you attempt to open a document or
	template that contains macros.
	
	CAUSE
	=====
	
	By design, when you open a document or template that is located in the user
	templates or workgroup templates folder, the macro warning message is not
	displayed.
	
	Microsoft Word considers documents and templates that are stored in either the
	user templates or workgroup templates folder to be "trustworthy" or free of
	unwanted macro viruses.
	
	NOTE: Do not place documents or templates in the user or workgroup templates
	folder unless you are absolutely certain that they are free of macro virus code.
	You should scan your documents and templates regularly using a third-party virus
	detection program that is capable of detecting Word macro viruses. For
	additional information about third-party virus protection programs, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q49500 List of Antivirus Software Vendors
	
	To determine where Word is storing your templates, click Options on the Tools
	menu, and then click the File Locations tab.
	
	MORE INFORMATION
	================
	
	When the document or template you are opening contains macros, the following
	warning appears:
	
	  The document you are opening contains macros or customizations. Some macros
	  may contain viruses that could harm your computer.
	
	If you are sure this document is from a trusted source, click Enable Macros. If
	you are not sure and want to prevent any macros from running, click Disable
	Macros.
	
	Macro virus protection is turned on by default when you install Word. If you have
	disabled this warning message, you can reset it using the following steps:
	
	1. On the Tools menu, click Options, and then click the General tab.
	
	2. Click to select the Macro Virus Protection check box, and then click OK.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q163932 WD97: Frequently Asked Questions About Word Macro Viruses
	
	  Q181079 WD97: What to Do If You Have a Macro Virus
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbvirus kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
