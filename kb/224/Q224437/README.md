---
layout: page
title: "Q224437: Problems Installing Exchange Server to Long Folder Name"
permalink: /kb/224/Q224437/
---

## Q224437: Problems Installing Exchange Server to Long Folder Name

	Article: Q224437
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0,4.0a,4.5,5.0,5.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbui
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Exchange Server, you may receive one or more of the
	following error messages:
	
	   - Error - Cannot access folder name of folder.
	
	   - A fatal error has occurred. Check that you have sufficient memory and disk
	  space.
	
	   - Setup was interrupted.
	
	Also, some services may not start after Setup finishes.
	
	CAUSE
	=====
	
	This problem can occur because Exchange Server must be installed to a folder
	with a name of less than 50 characters.
	
	RESOLUTION
	==========
	
	To work around this problem, install Exchange Server to a folder with a name of
	less than 50 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz bof 4.00 4.50
	
	======================================================================
	Keywords          : kbenv kberrmsg kbui 
	Technology        : kbOSWinSearch kbOSWinNT400 kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : winnt:4.0,4.0a,4.5,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
