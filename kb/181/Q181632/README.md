---
layout: page
title: "Q181632: XCLN: Exchange Client for Macintosh Cannot Attach Macintosh Alia"
permalink: kb/181/Q181632/
---

## Q181632: XCLN: Exchange Client for Macintosh Cannot Attach Macintosh Alia

	Article: Q181632
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:4.0,5.0,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Client or Outlook Client for Macintosh and attempt to
	insert a Mac alias into a message, the dialog jumps to the file associated with
	the alias. Rather than inserting the alias into the message, the file is
	inserted instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	From the Insert menu, click File. If you select an alias in the Browse window,
	one of the following will occur:
	
	1. If the alias points to a location such as a folder, hard disk, or file
	  server, then the browser jumps to the location of the alias and does not
	  attach it.
	
	2. If the alias points to a file or application, then the actual file or
	  application that the alias points to is attached to the message.
	
	Microsoft has determined this to be a function of the Macintosh software. The
	operating system will present the "Open" dialog box and resolve an alias to the
	filename, rather than leaving it as a link to the file.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac
	Version           : MACINTOSH:4.0,5.0,8.0
	Issue type        : kbbug
	
	=============================================================================
	
