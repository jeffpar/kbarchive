---
layout: page
title: "Q197178: Passing Environment Variables to Applications Started by SRVANY"
permalink: /kb/197/Q197178/
---

## Q197178: Passing Environment Variables to Applications Started by SRVANY

	Article: Q197178
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Resource Kit 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Some applications you want to launch using SRVANY from the Windows NT Resource
	Kit may require specific environment variables that you may not want to set as,
	or set differently than system variables.
	
	You can launch a batch file from SRVANY, do the modifications to the environment
	there, and then start the application. But there is a drawback: SRVANY will not
	terminate the application when you stop the service. Instead, it will terminate
	Cmd.exe. This makes it hard to administrate this service, especially remotely.
	
	MORE INFORMATION
	================
	
	There is a new version of Srvany.exe that supports setting the environment for
	the application. After you have stopped all SRVANY-based services and copied the
	new version into the location used by the services, follow these steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Start the Registry Editor (Regedt32.exe) and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	     \<service name>\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Click Add Value from the Edit menu.
	
	3. In the Value Name box, type AppEnvironment, select REG_MULTI_SZ as the
	
	Data Type, and click OK.
	
	1. In the Multi-String Editor, enter environment variables using the syntax
	  <variable name>=<value>.
	
	  For example:
	
	     app_setting1=27
	     temp=c:\tempfiles
	
	  Do not forget to add a new line after the last line, or the value will be
	  ignored.
	
	2. Click OK in the dialog box.
	
	The next time you start the service it will receive the environment the same way
	as you specified it.
	
	NOTE: Only the settings in this registry entry will be passed to the service, so
	make sure to include all core entries like PATH, TEMP, OS, and so on, in the
	registry entry.
	
	You can find the new file at the following locations:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40
	
	  Intel:
	  i386/srvany_x86.exe
	
	  Alpha:
	  alpha/srvany_axp.com
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbPTNotAssigned kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
