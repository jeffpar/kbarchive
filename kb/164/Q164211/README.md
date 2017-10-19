---
layout: page
title: "Q164211: FPNW Doesn't Convert the Long File Names Correctly"
permalink: /kb/164/Q164211/
---

## Q164211: FPNW Doesn't Convert the Long File Names Correctly

	Article: Q164211
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows 95 or Microsoft Client for NetWare Networks to connect to
	an FPNW volume that contains directories with long names on a computer running
	Windows NT 4.0 Server with Service Pack 2 and FPNW, the clients will not display
	the 4.1 directory list correctly.
	
	Below is a sample of a "dir" (directory command) issued at the command prompt.
	You can see that the first directory with fewer than 9 characters is used in
	place of the 8.3 directory name for every long directory.
	
	Volume in drive I is TESTVOL
	Directory of I:
	WWWROOT        <DIR>        01-10-97  4:19p 123456789
	WWWROOT        <DIR>        01-10-97  4:25p Document1
	WWWROOT        <DIR>        01-13-97  8:57a wwwroot
	DIR1     TXT            37  01-13-97  9:52a dir1.txt
	        1 file(s)             37 bytes
	        3 dir(s)   1,999,896,576 bytes free
	
	CAUSE
	=====
	
	This is a regression caused by Windows NT 4.0 Service Pack 2.
	
	RESOLUTION
	==========
	
	Install the updated Fpnwsrv.sys file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: NetWare Net Ware
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
