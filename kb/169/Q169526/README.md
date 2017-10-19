---
layout: page
title: "Q169526: WordMail Errors After Remove All of Microsoft Project"
permalink: /kb/169/Q169526/
---

## Q169526: WordMail Errors After Remove All of Microsoft Project

	Article: Q169526
	Product(s): Word 97 for Windows
	Version(s): 2000,4.0,4.1a
	Operating System(s): 
	Keyword(s): kbinterop kbusage winword word97
	Last Modified: 07-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Project for Windows 95, version 4.1a 
	- Microsoft Project 2000 
	- Microsoft Exchange, version 4.0 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you perform a Remove All in Microsoft Project Setup, you may receive the
	following error messages when you try to open a mail message with Microsoft Word
	set as your e-mail editor:
	
	In Microsoft Outlook
	--------------------
	
	  This form requires Word as your e-mail editor, but Word is either busy or
	  cannot be found. The form will be opened in the Outlook editor instead.
	
	In Microsoft Exchange
	---------------------
	
	  The command you specified could not be carried out. MAPI Error.
	
	CAUSE
	=====
	
	The Microsoft Project Setup program removes some registry entries that are
	needed for WordMail.
	
	WORKAROUND
	==========
	
	Re-install Microsoft Word 97 for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q162970 Installing Project 4.x Breaks Office 97 Spell Check
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbinterop kbusage winword word97 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbPTNotAssigned kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbProjectSearch kbProject2000 kbOutlook97Search kbOutlook98Search kbProject2000Search kbZNotKeyword3 kbProject410a kbProject95Search
	Version           : :2000,4.0,4.1a
	Issue type        : kbprb
	
	=============================================================================
	
