---
layout: page
title: "Q249650: Error Message While Installing Year 2000 Resource CD-ROM"
permalink: /kb/249/Q249650/
---

## Q249650: Error Message While Installing Year 2000 Resource CD-ROM

	Article: Q249650
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Windows 95 Year 2000 Update from the
	Microsoft Year 2000 Resource CD-ROM, you may receive the following error
	message:
	
	  An error has occurred copying command.w95.
	
	  Ensure that the location specified below is correct, or change it and insert
	  '(Unknown)' in the device you specify.
	
	  Copy files from:
	  C:\WINDOWS\TEMP\IXP000.TMP
	
	If you click Details, you receive the following error message:
	
	  The following error occurred: "The directory name is invalid."(error #267).
	
	  Source File: C:\WINDOWS\TEMP\IXP000.TMP\COMMAND.W95
	  Destination file: C:\WINDOWS\OPTIONS\CABS\COMMAND.COM
	
	If you click OK, the messages are repeated. If you click Cancel, Setup continues.
	
	CAUSE
	=====
	
	This error message can occur if the C:\Windows\Options folder contains a file
	named Cabs.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Rename the Cabs file in the C:\Windows\Options folder to "Cab".
	
	  For information about how to rename files, click Start, click Help, click the
	  Index tab, type "renaming" (without the quotation marks), and then
	  double-click the Renaming Files topic.
	
	2. Create a new folder named Cabs in the C:\Windows\Options folder.
	
	  For information about how to create a new folder, click Start, click Help,
	  click the Index tab, type "create" (without the quotation marks), and then
	  double-click the "Creating a Folder" topic.
	
	3. Reinstall the Windows 95 Year 2000 Update.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
