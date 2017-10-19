---
layout: page
title: "Q250600: WD97: Err Msg: &quot;Compile Error in Hidden Module ModMain&quot;"
permalink: /kb/250/Q250600/
---

## Q250600: WD97: Err Msg: &quot;Compile Error in Hidden Module ModMain&quot;

	Article: Q250600
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Word 97 for Windows, the following error message may
	appear:
	
	  Compile error in hidden module: modMain
	
	CAUSE
	=====
	
	A third-party program called Voice Xpress may have installed some add-in files
	in the Word startup folder. These add-in files are not compatible with Microsoft
	Word.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Voice Xpress add-in files from the
	Office Startup folder. To do this, follow these steps:
	
	NOTE: Word has the ability to automatically load templates, WLLs (Word
	libraries), and COM add-ins at startup. These files give Word added
	functionality.
	
	1. Quit all Microsoft Office applications.
	
	2. Using the Windows Explorer or My Computer, go to the Office Startup folder.
	
	  The default location for the Office Startup folder is:
	
	  C:\Program Files\Microsoft Office\Office\Startup
	
	3. Drag the following three files from the Office startup folder to another
	  location, such as your Windows Desktop:
	
	   - Wordai.wll
	   - Ezpwll32.wll
	   - Kword97.wll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For more information about Voice Xpress, please see the Lernout & Hauspie Web
	site at
	
	  http://www.lhs.com (http://www.lhs.com)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord700Search
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
