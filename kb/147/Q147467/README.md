---
layout: page
title: "Q147467: Using the Migration Tool for NetWare to Migrate Login Scripts"
permalink: /kb/147/Q147467/
---

## Q147467: Using the Migration Tool for NetWare to Migrate Login Scripts

{% raw %}

	Article: Q147467
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to migrate personal login scripts from a Novell
	NetWare server to a computer running Microsoft Windows NT Server using the
	Migration Tool for NetWare (Nwconv.exe). It also discusses how personal login
	scripts can be implemented on an FPNW-enabled Windows NT server.
	
	MORE INFORMATION
	================
	
	To use the Migration Tool for NetWare to migrate login scripts or the
	information contained in a user's MAIL directory, from a NetWare server to an
	FPNW-enabled Windows NT server computer, follow these steps:
	
	1. Verify your selection of source and destination server in the Migration Tool
	  for NetWare.
	
	2. Click File Options, and then select the NetWare server's SYS volume.
	
	3. Click Files, and then enable the transfer of the Mail subdirectory.
	
	For clients who will be running logon scripts on the FPNW-enabled Windows NT
	Server, the next step is to be sure that the corresponding user subdirectories
	in the Mail folder were migrated to the same location (SYS volume and Mail
	folder) of the Windows NT Server computer.
	
	To find which subdirectory is associated with a user, go to User Manager for
	Domains, open the User Properties, and click the NW Compatible button. The
	resulting dialog box will include a user Object ID that corresponds to the
	user's script directory in the Mail folder. The Edit Logon Script button will
	modify the LOGON text file in the user's home directory.
	
	If you need to create a system logon script, you will need to create and/or
	modify the file Net$log.dat that will be found in the SYS:\PUBLIC directory.
	During the logon process, the system logon script runs first followed by the
	personal logon script.
	
	For additional information about the migration of user and group data from a
	Novell NetWare 4.x server, see the following article in the Microsoft Knowledge
	Base.
	
	  ARTICLE-ID: Q173669
	  TITLE : NetWare Users or Groups Not Migrated
	
	Additional query words: fpnw novell NWCONV migrate login script netware
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbServicesNetwareSearch kbFPNW400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
