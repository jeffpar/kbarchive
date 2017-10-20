---
layout: page
title: "Q115285: New Auditing Feature for FTP Server"
permalink: /kb/115/Q115285/
---

## Q115285: New Auditing Feature for FTP Server

{% raw %}

	Article: Q115285
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is a new registry value "LogFileAccess" in Windows NT Workstation and
	Windows NT Server version 3.5 that enables the FTP server's creation of a LOG
	file. When this setting is enabled the FTP server will create a text file called
	FTPSVC.LOG located in the services current directory (usually
	%SystemRoot%\System32).
	
	The LOG file will contain three types of entries:
	
	  ************** FTP SERVER SERVICE STARTING <date/time>
	  ************** FTP SERVER SERVICE STOPPING <date/time>
	  <IP_Address> <User> <Action> <Path> <date/time>
	
	where:
	
	  <date/time> is the current date/time, such as "Fri Feb 13 17:49:21
	  1995"
	  <ip_address> is the user's host IP address, such as "22.101.3.212"
	  <user> is the name of the user (or anonymous ID), such as "janedoe"
	  <action> is the action taken, either "opened", "created", or "appended"
	  <path> is the full path and filename, such as
	  "e:\users\default\file.txt"
	
	Following is an example of what a FTPSVC.LOG file's contents might look like:
	
	  ************** FTP SERVER SERVICE STARTING Fri Feb 13 15:50:25 1995
	  22.101.3.212 janedoe opened e:\nt.555\mstools\api32wh.ind Fri Feb 13 15:50:40
	  1995
	
	  22.101.34.22 johndoe created c:\users\johndoe\report.txt Sat Feb 14
	  12:20:05 1995
	
	  ************** FTP SERVER SERVICE STOPPING Sun Feb 15 15:54:31 1995
	
	MORE INFORMATION
	================
	
	In order to enable the logging feature follow the steps outlined below:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start REGEDT32.EXE and locate the following Registry subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet \Services\FTPSVC\Parameters
	
	2. From the Edit menu, choose Add Value. Enter LogFileAccess in the Value Name
	  field. Select REG_DWORD for the Data Type. Enter 1 in the String field. Save
	  your changes.
	
	3. Exit REGEDT32.
	
	4. Exit Windows NT and turn off your computer.
	
	5. Restart your computer and Windows NT. The new FTP server logging should now
	  be enabled.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
