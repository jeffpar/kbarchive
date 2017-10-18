---
layout: page
title: "Q298063: WD97: No Macro Warning Opening RTF Document"
permalink: kb/298/Q298063/
---

## Q298063: WD97: No Macro Warning Opening RTF Document

	Article: Q298063
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft 2000 version of this article, see Q288266.
	
	SYMPTOMS
	========
	
	When you open a Rich Text Format (RTF) document that has a template attached
	that contains macros, Microsoft Word 97 does not prompt you with the macro
	warning message.
	
	CAUSE
	=====
	
	This problem can occur if a template that contains macros is attached to a Rich
	Text Format document and then opened. Microsoft Word trusts that the attached
	template contains safe macros.
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT: To use Wd97mcrs.exe, you must have already installed Office 97 Service
	Release 2b (SR-2b). Otherwise, if you install the update now and then install
	Office 97 SR-2b at a later date, you will have to reinstall this update. To find
	out whether you have SR-2b installed, start an Office program and then click
	About Microsoft <program name> on the Help menu. You should see Microsoft
	<program name> 97 SR-2b as your version of the program.
	
	
	WORKAROUND
	==========
	
	To temporarily work around this problem with a Rich Text Format document that
	you suspect is attached to a template that contains macros, do one of the
	following:
	
	- Hold SHIFT when you open the Rich Text Format document.
	
	  -or-
	
	- In a new blank Word document, click File on the Insert menu, and then insert
	  the Rich Text Format document. The new file is automatically attached to your
	  existing global template (Normal.dot), and the macros contained in the
	  previously attached template are not inserted into the new Word document.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem is fixed in the latest
	Microsoft Word 97 Update.
	
	
	MORE INFORMATION
	================
	
	When you have the "Macro virus protection" option turned on in Word 97, a
	warning appears whenever you open a document that might contain macro viruses.
	You are prompted with the following warning:
	
	  The document you are opening contains macros or customizations. Some macros
	  may contain viruses that could harm your computer.
	
	  If you are sure this document is from a trusted source, click Enable Macros.
	  If you are not sure and want to prevent any macros from running, click
	  Disable Macros.
	
	To set macro virus protection in Word, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Click to select the "Macro virus protection" check box, and then click OK.
	
	When the "Macro virus protection" option is selected, you can choose whether to
	run potentially unsafe macros.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q214652 WD97: Macro Warning Doesn't Appear Opening File Attached to Template
	  That Contains Macros
	
	  Q163932 WD97: Frequently Asked Questions About Word Macro Viruses
	
	  Q49500 List of Antivirus Software Vendors
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
