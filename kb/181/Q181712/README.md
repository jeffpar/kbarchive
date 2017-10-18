---
layout: page
title: "Q181712: XCLN: How to Use the Universal Client Setup (Ucsetup.exe)"
permalink: kb/181/Q181712/
---

## Q181712: XCLN: How to Use the Universal Client Setup (Ucsetup.exe)

	Article: Q181712
	Product(s): Microsoft Exchange
	Version(s): 8.03; MS-DOS:5.0; WINDOWS:8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Exchange MS-DOS client, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Universal Client Setup (Ucsetup.exe) located on the Microsoft Outlook 8.03
	compact disc is used to create a shared client installation point. UCSETUP is
	not the same as performing an Administrative installation (Setup /A) to create a
	network installation. To perform a network installation, you must run the Setup
	program for each individual client.
	
	MORE INFORMATION
	================
	
	The UCSETUP program allows an administrator to more easily create and maintain a
	shared client installation point for the following clients included on the
	Outlook 8.03 compact disc:
	
	  Windows 95 or Windows NT Client (Outlook)
	  Windows 16-bit Client (Outlook)
	  DOS Client (Exchange 5.0)
	
	When you run Ucsetup.exe, you are prompted to choose a directory in which to
	create the client installation points. At the end of the setup, this directory
	will automatically be shared as \\<servername>\Outlook with the following
	default permissions:
	
	  Administrators - Full Control
	  Everyone       - Read
	
	NOTE: If a share called Outlook already exists on the server, the directory will
	not be shared.
	
	You then have the option of choosing a Complete or Custom installation. Choose
	Custom if do not want to install one or more of the client install points. After
	specifying which install type to perform, UCSETUP creates the directories for
	each client in the directory specified previously.
	
	At any time, you can run UCSETUP to add, remove, reinstall, or remove all of the
	client install point components.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.03; MS-DOS:5.0; WINDOWS:8.0
	Issue type        : kbinfo
	
	=============================================================================
	
