---
layout: page
title: "Q150843: FPNW: Event IDs 2635 and 2748"
permalink: kb/150/Q150843/
---

## Q150843: FPNW: Event IDs 2635 and 2748

	Article: Q150843
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you set up File and Print Services for NetWare (FPNW) on your Windows NT
	server, two warning event IDs, 2635 and 2748, appear in the application event
	log. They do not indicate any problems with the FPNW setup process.
	
	MORE INFORMATION
	================
	
	The two warning event IDs are as follows:
	
	Event ID 2635: The BINDERY data file directory name was not in the directory. The
	BINDERY will use 'C:\WINNT35\NWSPOOL' as the default.
	
	Event ID 2748: The QMS registry key 'DefaultQueueName' does not exist. No default
	print queue assigned.
	
	Both of these messages are generated in the application event log when FPNW is
	set up with default settings.
	
	Additional query words: prodnt fpnw event viewer
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
