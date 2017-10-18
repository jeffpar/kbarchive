---
layout: page
title: "Q256312: FTP DIR Command Shows Time Created Instead of Year"
permalink: kb/256/Q256312/
---

## Q256312: FTP DIR Command Shows Time Created Instead of Year

	Article: Q256312
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you issue an FTP dir command against an IIS FTP server, one or more of the
	files listed may not display the year created. Instead, the time created is
	displayed.
	
	MORE INFORMATION
	================
	
	The IIS FTP server is configured to display UNIX-style directory listings. As
	per the UNIX specification, files created in the current year display the time
	of creation instead of the year of creation.
	
	Example:
	
	  ftp> dir
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for /bin/ls.
	  -r-xr-xr-x   1 owner    group               1 Jun  3  1999 NotCurrentYear.txt
	  -r-xr-xr-x   1 owner    group               1 Mar  6 21:11 CurrentYear.txt
	
	If you require the time and year to be displayed, change to the MS-DOS directory
	listing style. To do this, perform the following steps:
	
	1. Open the IIS Microsoft Management Console (MMC).
	
	2. Edit the properties for the FTP service.
	
	3. On the Home Directory tab, change the Directory Listing Style to MS-DOS.
	
	4. Click OK.
	
	5. Restart the FTP service.
	
	After you make this change, the directory listing appears as follows:
	
	  ftp> dir
	  200 PORT command successful.
	  150 Opening ASCII mode data connection for /bin/ls.
	  06-03-99  10:57PM                    1 NotCurrentYear.txt
	  03-06-00  09:11PM                    1 CurrentYear.txt
	
	Additional query words: FTP UNIX date time timestamp year
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200
	Version           : winnt:2.0,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
