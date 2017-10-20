---
layout: page
title: "Q181694: XCLN: How to Upgrade Shared Workstation Installations of Exchang"
permalink: /kb/181/Q181694/
---

## Q181694: XCLN: How to Upgrade Shared Workstation Installations of Exchang

{% raw %}

	Article: Q181694
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0 MS-DOS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to update shared-workstation installations of the
	Microsoft Exchange Client. These procedures apply to both local and shared
	versions of Microsoft Windows.
	
	MORE INFORMATION
	================
	
	To upgrade the Microsoft Exchange Client to Service Pack 2 (SP2), you can either
	keep the current installation share point or create a new one. In either case,
	you should perform the following steps:
	
	1. From the SP2 directory, run the Setup program for the appropriate platform
	  (Win95, WinNT, Win16, DOS) with the following command line:
	
	  SETUP /a
	
	  NOTE: If you plan to keep the same installation share point, delete all files
	  from that share point directory before running Setup.
	
	2. During the setup process, specify the location of the installation share
	  point. This is the location from which your users will install the Microsoft
	  Exchange Client.
	
	3. From each user's workstation, connect to the shared network location created
	  in Step 2 and run Setup.exe.
	
	To upgrade the Microsoft Exchange SP2 client to Service Pack 3 (SP3), just run
	the Update.exe program for the appropriate platform for each client. You can
	either create a shared network location from which to run the SP3 update, or you
	can run the update from the SP3 compact disc.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0 MS-DOS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
