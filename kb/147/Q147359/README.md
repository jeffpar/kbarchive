---
layout: page
title: "Q147359: XCLN: How to Activate URLs by Default"
permalink: /kb/147/Q147359/
---

## Q147359: XCLN: How to Activate URLs by Default

	Article: Q147359
	Product(s): Microsoft Exchange
	Version(s): 3.1,3.11,4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Exchange Client, versions 4.0, 5.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For performance reasons, the Windows 16-bit Microsoft Exchange client does not
	activate URLs by default. This can be changed by adding an [Options] section to
	the Windows\Exchng.ini file to contain this line:
	
	  browser=c:\path\iexplore.exe
	
	The browser line should point to the preferred browser. After this has been done,
	you will need to restart your computer.
	
	MORE INFORMATION
	================
	
	You might notice that URLs appear hot even though the browser line is not
	present in their Exchng.Ini file. The action of reading a message with a URL
	enclosed is what activates the URL. If another client has previously read the
	message and forwarded it to the Microsoft Exchange Win16 client, the link will
	be hot but the client will still be unable to jump to the URL because a browser
	has not been configured.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : :3.1,3.11,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
