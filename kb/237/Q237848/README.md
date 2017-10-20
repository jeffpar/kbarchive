---
layout: page
title: "Q237848: WD97: File Not Registered in ROT After Being Opened in ODMA"
permalink: /kb/237/Q237848/
---

## Q237848: WD97: File Not Registered in ROT After Being Opened in ODMA

{% raw %}

	Article: Q237848
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Word does not register a file in the Running Object Table (ROT) after you open a
	document that is controlled by PC Docs when using the DOCS Linking (moniker)
	feature. This results in COM code being unable to bind to the Word document file
	when the file has been opened through ODMA.
	
	NOTE: There are no visible symptoms either in Microsoft Word or in the ODMA
	application. This problem is only apparent when you are working with Object
	Linking and Embedding (OLE) code.
	
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
	listed at the beginning of this article.This problem was corrected in Microsoft
	Office 2000 SR-1/SR-1a.
	
	Additional query words: qfe
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
