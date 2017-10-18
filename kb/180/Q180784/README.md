---
layout: page
title: "Q180784: Error Message: The File Does Not Exist"
permalink: kb/180/Q180784/
---

## Q180784: Error Message: The File Does Not Exist

	Article: Q180784
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print a document to Microsoft Fax, the Compose New Fax
	wizard may not start, and you may receive the following error message:
	
	Microsoft Exchange
	------------------
	
	  The file does not exist.
	
	Microsoft Windows Messaging
	---------------------------
	
	  The personal address book could not be found.
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Exchange or Windows Messaging profile
	in which Microsoft Fax is installed does not include a personal address book
	(PAB).
	
	RESOLUTION
	==========
	
	To resolve this behavior, use either of the following methods:
	
	Method 1
	--------
	
	Locate an existing personal address book on your hard disk. To do so, follow
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Mail And Fax.
	
	3. Click Show Profiles.
	
	4. In the list of installed profiles, click MS Exchange Settings or Windows
	  Messaging Settings, and then click Properties.
	
	5. In the list of installed services, click Personal Address Book, and then
	  click Properties.
	
	6. On the Personal Address Book tab, click Browse, locate and click the personal
	  address book you want, and then click Open.
	
	7. Click OK, click OK again, and then click Close.
	
	Method 2
	--------
	
	Create a new Microsoft Exchange or Windows Messaging profile that includes
	Microsoft Fax. For information about how to do so, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152196 How to Install and Use Microsoft Fax
	
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
