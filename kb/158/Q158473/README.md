---
layout: page
title: "Q158473: Upgrading the DHCP Database to Windows NT Server 4.0"
permalink: /kb/158/Q158473/
---

## Q158473: Upgrading the DHCP Database to Windows NT Server 4.0

	Article: Q158473
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When upgrading a Windows NT Server version 3.51 (or earlier) release to Windows
	NT 4.0, the DHCP database must be converted to the new database format. This
	conversion is required because the services now use an improved database engine
	that is faster and compacts automatically to prevent fragmentation and
	consequent growth of the database. The database conversion procedure happens
	automatically as part of an upgrade installation.
	
	MORE INFORMATION
	================
	
	When the DHCP service first starts after an upgrade to Windows NT 4.0, it
	detects that the database needs to be converted. It then starts a conversion
	process, Jetconv.exe. (If Jetconv.exe has already been started by another
	service, a second Jetconv.exe process is not started.) Prior to conversion, the
	user is notified that the conversion process is about to start and is asked for
	confirmation. If the user clicks OK, the DHCP service quits and the conversion
	begins. Jetconv.exe converts the databases of all the installed services (DHCP
	and, if installed, WINS and RPL) to the new Windows NT 4.0 database format.
	
	After the DHCP database is converted successfully, the DHCP server service
	automatically restarts.
	
	Before starting the conversion process, note the following guidelines:
	
	- Prior to upgrading to Windows NT Server 4.0, bring the Windows NT 3.51
	  databases for the DHCP server to a consistent state. Do this by stopping the
	  services from Control Panel\Services or by using the net stop service
	  command.
	
	- The conversion requires approximately the same amount of free diskspace as
	  the size of the original database and log files. You should have at least 5
	  MB free for the log files for each database.
	
	- The conversion process preserves the original database and log files in a
	  subdirectory named 351db under the same directory where the original database
	  and log files were located. On the DHCP server, this is the
	  %SystemRoot%\System32\Dhcp\351db\ directory.
	
	The services must not be restarted while the databases are being converted. To
	check the status of the conversion, the user should watch the Application Event
	Log of the Jetconv.exe process by using Event Viewer.
	
	In cases where this automatic procedure of converting databases fails, the
	database can be converted manually using winntdir\system32\upg351db.exe. For
	instructions, type the following at the command prompt:
	
	upg351db -?
	
	Note the following information:
	
	- You cannot convert the new database back to the previous database format.
	
	- The converted database will not work with Windows NT 3.51 or earlier
	  services.
	
	- The new database engine uses log files named by using the prefix J50.
	
	Additional query words: upgrade
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
