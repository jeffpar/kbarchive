---
layout: page
title: "Q199237: SMS: SMS 1.2 Clients Visiting SMS 2.0 Sites"
permalink: /kb/199/Q199237/
---

## Q199237: SMS: SMS 1.2 Clients Visiting SMS 2.0 Sites

	Article: Q199237
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedure on how to prevent Systems Management Server
	1.2 clients from being upgraded by Systems Management 2.0 sites that they visit.
	
	MORE INFORMATION
	================
	
	When a Systems Management Server 1.2 client visits a Systems Management Server
	2.0 site, you must prevent the Systems Management Server 2.0 site from claiming
	the client and replacing the Systems Management Server 1.2 client software with
	Systems Management Server 2.0 client software. Use the following procedure to
	prevent Systems Management Server 1.2 clients from being automatically upgraded
	by Systems Management Server 2.0 sites they visit:
	
	1. Create a file in the root directory (c:\) of the visiting computer. The file
	  name, the file type, and the content of the file are not important, although
	  you should document the use of the file within the file itself. For example,
	  you might create a file called KeepIt12.txt with the following content:
	
	     The presence of this file prevents Systems Management Server 1.2
	     client software from being overwritten with Systems Management 
	     Server 2.0 software, provided that the logon script at the Systems 
	     Management Server 2.0 site has been modified to look for this file 
	     and exit if it is found, and also provided that client setup methods 
	     other than Windows NT Logon have not been enabled at that site.
	
	2. Distribute the file (in this example, KeepIt12.txt) to the Systems Management
	  Server 1.2 client computers that are likely to visit the Systems Management
	  Server 2.0 sites.
	
	3. At each of these Systems Management Server 2.0 sites, go to the
	  Winnt\System32\Repl\Import\Scripts directory of the logon servers and edit
	  the Smsls.bat file so that it detects the file you created and exits if that
	  file is found. For example, add the following line to the Smsls.bat file:
	
	     if exist c:\KeepIt12.txt goto end
	
	4. If you expect the visiting computers to be running Windows NT, make sure the
	  Windows NT Remote Client Installation method is disabled. (This method is a
	  site configuration setting, which you can find under Client Installation
	  Methods in the Systems Management Server Administrator console.)
	
	Additional query words: prodsms smsinterop login
	
	======================================================================
	Keywords          : kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
