---
layout: page
title: "Q172957: XCLN: Creating a New Offline Folder File (OST File)"
permalink: /kb/172/Q172957/
---

## Q172957: XCLN: Creating a New Offline Folder File (OST File)

	Article: Q172957
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0; winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to create a new offline folder file (OST file) if one becomes
	damaged.
	
	MORE INFORMATION
	================
	
	To create a new OST, perform the following steps:
	
	1. Exit and log out of the Exchange Client,
	
	2. Rename any existing OST files with an "xxx" extension.
	
	3. Restart the Exchange Client online. (The profile may need to be changed if
	  the client is set to start offline.)
	
	4. When you are prompted with: "The file "C:\XXXX\XXX.OST could not be found,"
	  click OK.
	
	5. You will then be prompted with the Offline Folder File Settings dialog box.
	
	6. Click OK (or change the path and/or the OST filename if desired).
	
	7. When you are prompted with "The file c:\xxx\xxx.ost could not be found. Would
	  you like to create it," Click YES.
	
	8. The Exchange Client will start online. Select Synchronize - All folders from
	  the Tools menu.
	
	The new offline folder is now synched with the server. The client may be started
	offline at this point with the new OST file.
	
	Additional query words: OST Off-line Folder file
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0; winnt:4.0,5.0
	
	=============================================================================
	
