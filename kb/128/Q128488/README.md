---
layout: page
title: "Q128488: Error C0000035: The LsaCreateSecret Call Failed"
permalink: kb/128/Q128488/
---

## Q128488: Error C0000035: The LsaCreateSecret Call Failed

	Article: Q128488
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): kbOSWinNT kbRegistry
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Error 1057 is reported when the Startup Option "Log On As This Account" for a
	Windows NT Service is selected. For example, if you run Control Panel, choose
	Services, modify the startup options for the Directory Replicator Service,
	select "Log On As This Account," select a valid user account from the dialog
	box, type a valid password for the account, and then choose OK, the following
	error message appears:
	
	  Cannot set the startup parameters for the Directory Replicator Service. Error
	  1057 occurred: The account name is invalid or does not exist"
	
	The following is written to the system log:
	
	  Event ID#: 7005
	  The LsaCreateSecret call failed with the following error: C0000035""
	
	CAUSE
	=====
	
	This error occurs when the service control manager is not able to update the
	registry parameters for the service because the LSA Create Secret call failed.
	
	The error is reproducible after manual registry modifications or Emergency Repair
	has taken place. However, it has also been reported by customers on new
	installations of Windows NT where registry information has not been previously
	modified.
	
	RESOLUTION
	==========
	
	To correct this problem: WARNING: Using Registry Editor incorrectly can cause
	serious, system-wide problems that may require you to reinstall Windows NT to
	correct them. Microsoft cannot guarantee that any problems resulting from the
	use of Registry Editor can be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE) to change the replicator ObjectName:
	
	  a. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	\System\CurrentControlSet\Services\Replicator
	
	  b. Select ObjectName: REG_SZ: LocalSystem
	
	  c. From the Edit menu choose String.
	
	  d. Change ObjectName to Domain\Account.
	
	  e. Choose OK.
	
	2. Use Control Panel to change the Directory Replicator logon account:
	
	  a. Run Control Panel and choose Services.
	
	  b. Select Directory Replicator and choose Startup.
	
	  c. In the Log On As box, change This Account from Domain\Account name to
	     LocalSystem.
	
	  You should now be able to start the directory replicator service under the
	  system account security ID.
	
	3. Stop the service and modify the Startup Parameters to change to the desired
	  user account and password. Enter the desired logon account and password.
	
	The service should start without error.
	
	MORE INFORMATION
	================
	
	The NT Service Controller stores the password as a one-way-encrypted LSA secret,
	only if the ObjectName value for this service is set to Domain\Account rather
	than LocalSystem. LSA secrets reside in the Registry in an area not normally
	directly accessible (even to administrators). When you change from System
	Account to a specific account, the service controller creates the LSA secret for
	this service, and similarly it deletes the secret when you change from a
	specific account to System Account. The 0xC00000035 error usually occurs when an
	administrator manually changes ObjectName from a specific account to
	SystemAccount. As a result, the LSA secret still exists even though it should
	have been deleted. When the administrator tries to change back to a specific
	account using the Service Controller Manager interface, the Service Controller
	will try to create the LSA secret, but will display error 0xC0000035
	(STATUS_OBJECT_NAME_COLLISION "Object Name already exists") because the LSA
	secret already exists. Microsoft recommends changing ObjectName back to a value
	consistent with the LSA state, rather than to risking more extensive damage by
	manually modifying the LSA section of the registry.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbOSWinNT kbRegistry 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.5
	
	=============================================================================
	
