---
layout: page
title: "Q273755: Access Violation in Mmc.exe Starting Server Certificate Wizard"
permalink: /kb/273/Q273755/
---

## Q273755: Access Violation in Mmc.exe Starting Server Certificate Wizard

	Article: Q273755
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbiis500prod2web kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Web Server Certificate Wizard in the Internet
	Information Services (IIS) 5.0 snap-in, the following error message occurs in
	Mmc.exe:
	
	  Program Error
	  Mmc.exe has generated errors and will be closed by Windows. You will need to
	  restart the program. An error log is being created.
	
	CAUSE
	=====
	
	The Xenroll.dll file is unregistered.
	
	RESOLUTION
	==========
	
	To register the Xenroll.dll file, type the following from the command line:
	
	  "regsvr32 xenroll.dll" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	Additional query words: IIS 5 MMC Access Violation Server Certificate Wizard
	
	======================================================================
	Keywords          : kbiis500prod2web kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
