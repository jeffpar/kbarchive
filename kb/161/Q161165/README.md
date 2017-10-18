---
layout: page
title: "Q161165: Domain User Cannot Add a Local Printer"
permalink: kb/161/Q161165/
---

## Q161165: Domain User Cannot Add a Local Printer

	Article: Q161165
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user that has logged on to the domain may not be able to create a printer
	driver for a locally attached printer. When you run Print Manager in Windows NT
	3.51, the Create Printer option will be unavailable. When you use the Add
	Printer Wizard in Windows NT 4.0, the Local Printer option will be unavailable
	but the Network Printer option will be available.
	
	RESOLUTION
	==========
	
	At a Windows NT 4.0 computer, your domain user account must have access to
	administer your local computer if you wish to create a printer for a locally
	attached printer.
	
	To administer your local computer, perform the following steps to add a domain
	user account:
	
	1. Log on to the local computer with an account that has local administrator
	  rights.
	
	2. Click Start, point to Programs, point to Administrative Tools, and then click
	  User Manager.
	
	3. Double-click the local "Administrators" or "Power Users" group.
	
	4. Click Add.
	
	5. In the List Names From box, select the domain you usually log on to.
	
	6. Find your user name in the list and select it.
	
	7. Click the Add button, the DOMAINNAME\USERNAME should appear in the lower list
	  box now.
	
	8. Click OK.
	
	9. Click OK again then log off and back on to the domain.
	
	You will now be able to add a local printer to your computer when you are using
	your domain login.
	
	MORE INFORMATION
	================
	
	In a default installation, any member of the Power Users group can add a
	printer. This includes installation of the printer driver. However, a member of
	the Power Users group cannot add a port for the printer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
