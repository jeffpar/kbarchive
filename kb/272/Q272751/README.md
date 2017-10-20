---
layout: page
title: "Q272751: WD97: Macros Are Enabled When Word Automatically Opens ASD Files"
permalink: /kb/272/Q272751/
---

## Q272751: WD97: Macros Are Enabled When Word Automatically Opens ASD Files

{% raw %}

	Article: Q272751
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta wd2000
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Word automatically recovers a document from a previous session of Microsoft
	Word, macros contained in the document are enabled, and no macro warning message
	is displayed.
	
	
	CAUSE
	=====
	
	When Microsoft Word starts, it checks the following locations for AutoRecover
	(*.asd) files, but it does not check the files for macros:
	
	- Word always checks the TEMP folder, as specified by your TEMP environment. To
	  determine your TEMP folder, follow these steps:
	
	  1. In Word, click About Microsoft Word on the Help menu.
	
	  2. Click System Info.
	
	  3. On the Tree tab, click to expand the Software Environment folder.
	
	  4. Click to select Environment Variables.
	
	-and-
	
	- Word checks the "AutoRecover files" path, as specified on the File Locations
	  tab (on the Tools menu, click Options).
	
	RESOLUTION
	==========
	
	To resolve the problem described in this article, obtain and install the latest
	Microsoft Word 97 update from the following Microsoft Web site:
	
	  http://office.microsoft.com/downloads/9798/Wd97mcrs.aspx
	
	IMPORTANT NOTE: Microsoft Word 97 post-service release fixes are cumulative. The
	latest update contains all of the fixes since Service Release 2. If you install
	the latest update for Word 97, you do not need to install any other updates
	after Service Release 2.
	
	For additional information about the fixes included in the latest update for Word
	97, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q265374 WD97: Post Service Release Fixes for Word 97
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about how Word 97 uses temporary files, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q89247 WD97: How Word for Windows Uses Temporary Files
	
	Additional query words: wdac97 exe wrdac97 mailmerge mail merge wd97 security update
	
	======================================================================
	Keywords          : kbdta wd2000 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
