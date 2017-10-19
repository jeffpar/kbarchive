---
layout: page
title: "Q39300: Mac DOS: No Error Message if Invalid Value in MAIL.INI"
permalink: /kb/039/Q39300/
---

## Q39300: Mac DOS: No Error Message if Invalid Value in MAIL.INI

	Article: Q39300
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 1.37
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, MS-DOS workstation, version 1.37 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you modify the MAIL.INI file for Microsoft Mail (PC Client) to change the
	default settings for starting a Mail session, and you enter an invalid value for
	an option, no appropriate error message will be displayed upon starting Mail.
	
	NOTE: This article applies only to Mail version 1.37. An invalid character in the
	MAIL.INI file for Mail version 2.00 or 3.00 will generate an error message.
	
	To avoid this problem, do not change the MAIL.INI file using a text-editor
	program like the DOS line-editor program Edlin. Instead, change your AppleTalk
	network zone, network server, and color display settings by rerunning the Setup
	program. Print options (margins, printer port, etc.) can be changed within Mail
	from the File menu using the Print Options selection. Do not change the default
	file types for file attachments.
	
	MORE INFORMATION
	================
	
	For more information on Edlin, see your MS-DOS manual. For information on
	changing the zone= and server= statements of the MAIL.INI file, read the section
	titled "Installing a Microsoft Mail PC Workstation" on Page 4 of the "Microsoft
	Mail User's Guide."
	
	Additional query words: 1.37
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailATN137DOS
	Version           : :1.37
	
	=============================================================================
	
