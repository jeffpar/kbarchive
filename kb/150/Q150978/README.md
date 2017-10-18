---
layout: page
title: "Q150978: SFM: Optimizing Polling Rate for Macintosh Clients for PCMail"
permalink: kb/150/Q150978/
---

## Q150978: SFM: Optimizing Polling Rate for Macintosh Clients for PCMail

	Article: Q150978
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail for PC Networks ships with a client designed to run on Macintosh
	workstations. By default that client checks the postoffice Inbox every 30
	seconds. Administrators may want to adjust the polling rate to optimize it for
	the number of users and bandwidth of the server.
	
	MORE INFORMATION
	================
	
	Adjusting the Inbox polling value can ease server and network overhead in large
	installations. When considering a new polling rate, administrators should
	consider several factors:
	
	1. Total number of users connected to the postoffice.
	
	2. Total network traffic.
	
	3. The overhead of providing multiple server services.
	
	4. Processor utilization (Windows NT; for more detailed information on
	  optimizing your Windows NT Server, please see the book "Optimizing Windows
	  NT" in the Windows NT Resource Kit).
	
	Users can adjust the polling rate by performing the following procedure:
	
	1. Open the Macintosh client. If you need to locate it, press Command+F to open
	  the Apple File Finder. Type Microsoft Mail in the search field and choose
	  Find.
	
	2. Sign in and select the Inbox.
	
	3. Select the File menubar item and choose Get Info or type Command+I.
	
	4. Look for Check New Mail (Secs) and enter a new number for the polling rate.
	
	Adjusting the value for refreshing the inbox for mail will benefit not only the
	Macintosh user but also the mail server you are using. When considering a new
	polling rate, the user or administrator must consider several factors, such as
	how busy the traffic is on the network, whether the server providing other
	services such as File and Print sharing resources, and whether the processor
	time is close to 100 percent utilization.
	
	The default polling rate for a Microsoft Windows user using PCMail is every five
	minutes.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
