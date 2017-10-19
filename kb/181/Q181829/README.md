---
layout: page
title: "Q181829: XADM: Err Msg: Unable to Initialize, Windows Reports Error 1815"
permalink: /kb/181/Q181829/
---

## Q181829: XADM: Err Msg: Unable to Initialize, Windows Reports Error 1815

	Article: Q181829
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	If you use the Properties command on the Exchange menu in User Manager for
	Domains to modify the properties of a mailbox, and then attempt to perform a
	directory import from the Microsoft Exchange Administrator program, you may
	receive the following error message:
	
	  Unable to initialize because Windows reports error 1815.
	
	After the error message is displayed, the directory import is not performed. This
	problem is known to occur when you run the U.S. version of Microsoft Exchange
	Server on a computer that is running a double-byte character set (DBCS) version
	of Microsoft Windows NT Server.
	
	CAUSE
	=====
	
	When you modify the properties for a mailbox from User Manager for Domains, the
	default Microsoft Exchange language ID is initialized. The language ID should be
	obtained from the User Manager for Domains add-on that is installed with
	Microsoft Exchange Server (Mailumx.dll), but may be obtained from User Manager
	for Domains instead. If you are running the U.S. version of Microsoft Exchange
	Server and a DBCS version of Windows NT Server, this may cause the language ID
	to be initialized incorrectly. When this occurs, you are unable to perform
	directory imports from the Microsoft Exchange Administrator program.
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around this problem, verify that the default Microsoft Exchange language
	ID is correct before you perform the directory import. To do so, follow these
	steps:
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Locate the following key in the registry:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Exchange\MSExchangeAdminCommon
	
	3. Verify that the following value exists under this registry key:
	
	     Value Name: AdminLangID
	     Data Type:  REG_DWORD
	     Value:      0x009 (hexidecimal)
	
	  If this registry value is not assigned a value of 0x009, modify the registry
	  value and assign it this value. Note that this value is only appropriate if
	  you are using the U.S. version of Microsoft Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in Microsoft Exchange Server version
	5.5.
	
	
	MORE INFORMATION
	================
	
	Error 1815 is a Windows NT error code. Additional information about this error
	code is listed here for reference:
	
	  Code: 1815L
	  Name: ERROR_RESOURCE_LANG_NOT_FOUND
	  Description: The specified resource language ID cannot be found in the image
	  file.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
