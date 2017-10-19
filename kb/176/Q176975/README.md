---
layout: page
title: "Q176975: Creating Internal Root Servers Using Cache.dns"
permalink: /kb/176/Q176975/
---

## Q176975: Creating Internal Root Servers Using Cache.dns

	Article: Q176975
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbhowto
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be beneficial for you to create your own Domain Name System within your
	corporate environment with no interaction with the Internet. This article
	discusses how to configure your Microsoft Windows NT Domain Name Service (DNS)
	server to refer to internal root servers instead of the Internet root servers.
	
	MORE INFORMATION
	================
	
	To configure your Windows NT DNS server to query internal root servers instead
	of the Internet root servers, follow these steps:
	
	1. Stop the Microsoft DNS server using one of the following methods:
	
	   - Use the Services tool in Control Panel.
	
	     -or-
	
	   - Type the following at a command prompt and press ENTER:
	
	     "net stop DNS" (without the quotation marks)
	
	2. Use a text editor (Notepad.exe) to open the Cache.dns file, which is located
	  in the %Systemroot%\System32\DNS folder.
	
	3. Delete the Internet root server entries and add your internal root servers.
	
	4. Save the file as Cache.dns and close the editor.
	
	5. Restart the Microsoft DNS server service.
	
	When you run DNS Manager and drill down into the Cache object of your DNS server,
	you will see the internal root servers listed. DNS Manager may show duplicate
	entries for the same record even though the zone file only contains the record
	once. This will not affect functionality.
	
	======================================================================
	Keywords          : kbnetwork kbhowto 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
