---
layout: page
title: "Q175794: SMSINST: ODBC Driver Path Is Incorrectly Set on Win95 Client"
permalink: /kb/175/Q175794/
---

## Q175794: SMSINST: ODBC Driver Path Is Incorrectly Set on Win95 Client

	Article: Q175794
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.2
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ODBC Administrator reports that the setup routines could not be loaded,
	following the installation of ODBC drivers on a Windows 95 client using a
	package created by SMS Installer.
	
	CAUSE
	=====
	
	The Install ODBC Driver option assumes that the driver and setup DLLs are always
	placed in the Windows\System directory on Windows 95 clients. Consequently, it
	prepends this path to the Driver Attributes on the Windows 95 client computer.
	
	Some ODBC Driver Installation routines create a new application directory
	structure and copy the setup and driver DLLs to it. This results in a mismatch
	between the path that the registry reports in
	HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Applicationname\ and the actual
	location of the setup and driver DLLs. Other drivers added to the Driver
	Attributes do not have the Windows\System path prepended.
	
	Some ODBC Driver Installation routines copy the setup and driver DLLs to a
	newly-created application directory structure, consequently there may be a
	mismatch between the path that the registry reports in
	HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\<Applicationname>\ and the
	actual location of the setup and driver DLLs. Other drivers that are added to
	the Driver Attributes do not have the Windows\System path prepended.
	
	
	WORKAROUND
	==========
	
	To work around this problem, copy the driver and setup DLL files to the
	Windows\System directory on the Windows 95 client computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server, version 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms SMS Installer
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : :1.0,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
