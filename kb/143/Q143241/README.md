---
layout: page
title: "Q143241: XCLN: Improving the Security of PST Files"
permalink: kb/143/Q143241/
---

## Q143241: XCLN: Improving the Security of PST Files

	Article: Q143241
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,8.0,8.01,8.02
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The password protection for Microsoft personal information store (PST) files
	provides only limited security. Adopting certain practices can increase this
	security. Utilities that can remove or bypass the password on a PST have been
	posted on the Internet. None of these utilities are endorsed or supported by
	Microsoft.
	
	MORE INFORMATION
	================
	
	Limiting physical access to a PST file increases the security of the data.
	Anyone who has physical access to a PST file and has one of these utilities can
	remove or bypass the PST password. These utilities will remove or bypass the PST
	password even for PSTs created with the Compressible Encryption and Best
	Encryption options.
	
	In order to protect sensitive e-mail against unauthorized access, consider the
	following practices:
	
	- Do not use a PST file. Store all sensitive e-mail in the Exchange Server
	  Information Store. This is the default configuration for all clients that are
	  used with Exchange Server.
	
	- If you need to use a PST file that is located on a file server or is in a
	  shared directory, use file-level permissions to control which users can
	  access the PST file.
	
	- If you use a PST file that is located on your local computer, limit access to
	  the computer by using password-protected screen savers, locking the computer,
	  or locking the office where the computer resides. If you are running
	  Microsoft Windows NT, you can use the Windows NT File System (NTFS) to limit
	  access to the owner of the PST.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0,8.0,8.01,8.02
	
	=============================================================================
	
