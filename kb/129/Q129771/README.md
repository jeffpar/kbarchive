---
layout: page
title: "Q129771: PC Win: Err Msg: A TPL File Is Missing from Your Server..."
permalink: kb/129/Q129771/
---

## Q129771: PC Win: Err Msg: A TPL File Is Missing from Your Server...

	Article: Q129771
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail for Windows, when you add a gateway address to your Personal
	Address Book, the following error may occur:
	
	  A TPL file is missing from your server - contact your administrator.
	
	NOTE: To select the Address Book, do the following:
	
	1. From the Mail menu, choose Address Book.
	
	2. Click the Custom Address icon. (It looks like a note card.)
	
	3. Select the desired gateway, and click OK.
	
	CAUSE
	=====
	
	The TPL file that corresponds with the selected gateway is either missing from
	the TPL directory on the postoffice or is damaged. Each gateway has a
	corresponding TPL file; for example, the SMTP gateway has a SMTP.TPL file.
	
	RESOLUTION
	==========
	
	Restore the correct TPL file from another postoffice, the original installation
	diskettes, or a backup of your postoffice.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
