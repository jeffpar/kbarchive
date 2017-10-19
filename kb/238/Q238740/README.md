---
layout: page
title: "Q238740: XCLN: Error Starting Exchange Client &quot;The information store cann"
permalink: /kb/238/Q238740/
---

## Q238740: XCLN: Error Starting Exchange Client &quot;The information store cann

	Article: Q238740
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After uninstalling Microsoft Internet Explorer 4.01, you may be unable to
	connect to your Microsoft Exchange Server using the Exchange client. The
	following error is displayed when attempting to log in:
	
	  The information store cannot be opened.
	
	The following error is displayed when attempting to resolve the user name using
	Check Names in the Exchange Server services properties.
	
	  The name could not be resolved.
	
	CAUSE
	=====
	
	Uninstalling Internet Explorer 4.01 removes the Secur32.dll file.
	
	RESOLUTION
	==========
	
	Copy the Secur32.dll file from another computer, into the \Windows\System
	folder, or expand the file from a Microsoft Windows 95 or Windows 98 CD, using
	the Extract utility.
	
	For additional information about using the Extract utility, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
