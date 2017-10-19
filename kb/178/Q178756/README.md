---
layout: page
title: "Q178756: XCLN: Read-Write Access Required to Open .PST and PAB Files"
permalink: /kb/178/Q178756/
---

## Q178756: XCLN: Read-Write Access Required to Open .PST and PAB Files

	Article: Q178756
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Microsoft Exchange and Microsoft Outlook clients, it is not possible to
	open a read-only Personal Folder (.PST) or Personal Address Book (PAB) file.
	
	You may receive the following error message if you attempt to open a read- only
	.PST file:
	
	  Unable to display the folder. File access is denied. You do not have the
	  permission required to access the file C:\Outlook\outlook.pst
	
	You may receive the following error message if you attempt to access a read- only
	Personal Address Book (PAB) file:
	
	  Your personal address book could not be opened. The file is either not
	  accessible or is not a personal address book. Choose Retry to use your
	  personal address book, or choose Cancel to not use your personal address
	  book with this application.
	
	CAUSE
	=====
	
	This behavior is by design. Because of the way that the Microsoft Exchange and
	Microsoft Outlook clients access these files, .PST and PAB files must be opened
	for read/write access in order to function properly.
	
	WORKAROUND
	==========
	
	If possible, remove the read-only attribute of the file prior to opening it. If
	the file is located on a shared network drive or on a CD-ROM drive, copy the
	file to your local hard drive and verify that the read-only attribute is not
	set.
	
	MORE INFORMATION
	================
	
	This behavior usually occurs when a user attempts to access a .PST or PAB file
	located on a shared read-only drive or a file located on a CD-ROM drive.
	
	Additional query words: read only properties OL97 OL98 OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	
	=============================================================================
	
