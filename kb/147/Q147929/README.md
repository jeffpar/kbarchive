---
layout: page
title: "Q147929: XADM: Imcadmin.dll Should Not be Renamed or Deleted"
permalink: /kb/147/Q147929/
---

## Q147929: XADM: Imcadmin.dll Should Not be Renamed or Deleted

	Article: Q147929
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Imcadmin.dll file is required for an administrator to change the properties
	of the Exchange Server Internet Mail Connector (IMC) by using the Exchange
	Server Administrator program. This DLL file is not protected in any way and can
	be renamed or deleted even when the property page of the IMC is open.
	
	MORE INFORMATION
	================
	
	If this file is renamed or deleted, the next time that an administrator attempts
	to open the property page of the IMC, the following error message is displayed:
	
	  Extension 'SMTP' could not be loaded.
	
	  An error occurred during file replication. Unable to find the extension .DLL
	  file with the correct version number. To view details of the error, see the
	  application event log in the Windows NT Event Viewer on the Microsoft
	  Exchange Server computer.
	
	The following associated error message is logged in the application event log:
	
	  The file version of "\add-ins\SMTP\<platform>\imcadmin.dll" installed
	  on the local server is not current. Unable to locate a correct version on any
	  server in the site.
	
	This behavior is by design. Do not delete or rename this file.
	
	If the file is deleted, you can copy it from the
	Setup\<platform>\Add-ins\Smtp\<platform> folder on the Exchange
	Server CD.
	
	If this file exists on another Exchange Server computer in the same site, it is
	dynamically replicated the next time the IMC property page is opened.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
