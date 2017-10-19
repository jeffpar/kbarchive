---
layout: page
title: "Q98465: Word Prompts For Bookshelf CD When Starting"
permalink: /kb/098/Q98465/
---

## Q98465: Word Prompts For Bookshelf CD When Starting

	Article: Q98465
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition,2.0a,2.0b,2.0c,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Multimedia Viewer 
	- Microsoft Word for Windows, versions 2.0a, 2.0b, 2.0c, 6.0 
	- Microsoft Word for Windows and Bookshelf 1994 edition 
	- Microsoft Office Professional Edition for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Word for Windows, Word asks you to insert the Bookshelf compact
	disc.
	
	CAUSE
	=====
	
	Word and Bookshelf work together to display Bookshelf Quote Of The Day or
	Bookshelf Daily when you start Word for Windows. These features are provided to
	Word by Bookshelf. This is normal behavior, but you can disable it if you
	desire.
	
	NOTE: Bookshelf Daily is not provided by Bookshelf 1992, 1993, or the standalone
	edition of Bookshelf 1994. Also, please note that this article does not apply to
	Bookshelf 95 for Windows 95; these features are not included with the 32-bit
	version of Bookshelf 95.
	
	RESOLUTION
	==========
	
	Use one of the following methods to disable Quotation Daily or Bookshelf Daily
	from automatically starting when you launch Word.
	
	Method 1
	--------
	
	1. On the View Menu in Microsoft Word, click either Quote Of The Day, Daily
	  Update, or Bookshelf Daily. Note that to complete this task you will need to
	  insert the Bookshelf compact disc one last time.
	
	  -or-
	
	  On the Tools menu in Bookshelf 1994 (Office Professional or Word packages
	  only), click Bookshelf Daily.
	
	2. In the dialog box that opens, clear the check box next to any of the
	  following options to disable it:
	
	  - Display Quotation Daily
	  - Display Bookshelf Daily
	  - Show Bookshelf Daily At Startup
	
	3. Click OK.
	
	Method 2 - Word And Quote Of The Day
	------------------------------------
	
	To disable the Quote Of The Day function, change the [Bookshelf] section of the
	Win.ini file so that it reads as follows:
	
	  LastQuote=0
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	To enable the Quote Of The Day function, change the [Bookshelf] section of the
	Win.ini file so that it reads as follows:
	
	  LastQuote=1
	
	MORE INFORMATION
	================
	
	For detailed information on Word and Bookshelf integration features, please see
	the Bookshelf Readme file on the Bookshelf compact disc.
	
	
	Additional query words: msn_bookshelf multimedia multi media multi- 92 93 94 95 2.00a 2.00b 2.00c 1.00 usage office professional cd-rom cd prompt prompted compact disc bookshelf encarta msn_encarta last quote lastquote word 1993 1994 1995
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbOfficeSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword2 kbBookshelfSearch kbWord600 kbWord200a kbWord200b kbWord200c kbWordBookshelf94
	Version           : :1994 edition,2.0a,2.0b,2.0c,6.0
	
	=============================================================================
	
