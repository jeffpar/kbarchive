---
layout: page
title: "Q99149: Updating LAN Manager Redirector After Upgrading from MS-DOS 3"
permalink: /kb/099/Q99149/
---

## Q99149: Updating LAN Manager Redirector After Upgrading from MS-DOS 3

	Article: Q99149
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.2c,3.0,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 11-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you upgrade to MS-DOS 6.0 or later from MS-DOS version 3.x and you are using
	Microsoft LAN Manager version 2.1 or 2.2, you must copy the correct redirector
	to your LAN Manager directory. If you use the incorrect redirector, you receive
	an error message stating that you are using an incorrect version of MS-DOS. To
	correct this error, use the procedure below appropriate to your version of LAN
	Manager.
	
	MORE INFORMATION
	================
	
	LAN Manager 2.1 or 2.2 Enhanced
	-------------------------------
	
	To correct this situation, copy and rename the NETWKSTA.500 redirector. For
	example, if you are using the default LANMAN.DOS directory, type the following
	on one line at the MS-DOS command prompt and then press ENTER:
	
	  copy c:\lanman.dos\netwksta\netwksta.500 c:\lanman.dos\netprog
	  \netwksta.exe
	
	This copies (and renames) the MS-DOS 5 NETWKSTA redirector (which works correctly
	for MS-DOS 6) over the NETWKSTA redirector you are currently using.
	
	You should not need SETVER for the network; if you have NETWKSTA in the SETVER
	table, you may want to remove it.
	
	LAN Manager 2.1 or 2.2 Basic
	----------------------------
	
	The above information is true for LAN Manager 2.1 and 2.2 Basic except that you
	need to copy REDIR.500 instead of NETWKSTA.500. For example, if you are using
	the default LANMAN.DOS directory, type the following at the MS-DOS command
	prompt and then press ENTER:
	
	  copy c:\lanman.dos\redir\redir.500 c:\lanman.dos\basic\redir.exe
	
	LAN Manager Version 2.0
	-----------------------
	
	If you are using LAN Manager version 2.0 and are upgrading from MS-DOS version
	3.x, you need to obtain the MS-DOS Supplemental disks. For more information,
	refer to the coupon in the back of your "User's Guide."
	
	Additional query words: 6.22 6.00 6.20 lanman "Error 2"
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : :2.2c,3.0,6.0,6.2,6.21,6.22
	
	=============================================================================
	
