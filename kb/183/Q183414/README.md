---
layout: page
title: "Q183414: XADM: Cannot View Internet Mail Service Properties"
permalink: kb/183/Q183414/
---

## Q183414: XADM: Cannot View Internet Mail Service Properties

	Article: Q183414
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the properties for the Internet Mail Service in the
	Microsoft Exchange Administrator program, the following error message may be
	displayed:
	
	  The extension [smtp] could not be loaded. The error 87 occurred while
	  formatting Windows NT error 182. Microsoft Windows NT ID No 0xc00200b6.
	
	CAUSE
	=====
	
	This problem can occur when the Mfc42.dll file in the Winnt\System32 folder is
	missing or damaged.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Rename the Mfc42.dll file in the Winnt\System32 folder, if it exists.
	
	2. Copy the Mfc42.dll file from the Server\Setup\I386 or Server\Setup\Alpha
	  folder on the Exchange Server 5.5 CD-ROM to the Winnt\System32 folder on your
	  hard disk. To do so, type the following command at a command prompt, and then
	  press ENTER:
	
	  copy <drive>:\server\setup\<platform>\mfc42.dll c:\winnt\system32
	
	  where <drive> is letter of your CD-ROM drive and <platform> is the
	  appropriate folder on the CD-ROM (I386 or Alpha).
	
	3. Quit and restart the Exchange Administrator program.
	
	4. Attempt to view the properties for the Internet Mail Service again.
	
	If this does not resolve the problem, another successful workaround has been to
	remove and reinstall the Exchange Administrator using the Exchange Setup
	program.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
