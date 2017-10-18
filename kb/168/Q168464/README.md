---
layout: page
title: "Q168464: Directory Replication Fails with Event ID 3216"
permalink: kb/168/Q168464/
---

## Q168464: Directory Replication Fails with Event ID 3216

	Article: Q168464
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore it if an issue occurs. For information on how to do this, view the "Restoring the Registry" online Help topic in Regedit.exe or the "Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Directory Replication fails to replicate to import servers. An export server
	will successfully replicate to itself, even though it may report errors.
	
	The Windows NT Event Log on the export server records the following event:
	
	  Event ID: 3216
	  Source: REPLICATOR
	  System error 5 has occurred.
	
	The Windows NT Event Log on the import server may record one or both of the
	following events:
	
	  Event ID: 3216
	  Source: REPLICATOR
	  System error 2116 has occurred.
	
	  Event ID: 3208
	  Source: REPLICATOR
	  The replication service could not update directory <name> from source on
	  <export server name> due to error <error number>.
	
	CAUSE
	=====
	
	In Windows NT 4.0, a new feature was introduced to restrict remote users from
	accessing a computer's registry unless the administrator of that computer
	explicitly grants the remote user access by setting the permission on a new
	registry key. This can prevent directory replication.
	
	When the replication interval passes, the import computer reads the registry of
	the export server to determine replication parameters. By default, only the
	Administrators group has permission to remotely access the registry. If no other
	groups or users were specified in the access control list, or if the registry
	path is not specified as an allowed path, the account used for replication is
	denied access and replication fails.
	
	WORKAROUND
	==========
	
	For Directory Replication to work properly, an explicit user account must be
	used. Using the System account will fail. For more information on how to create
	an explicit user account for Directory Replication, see the following article in
	the Microsoft Knowledge Base:
	
	  Q132522 Quick Directory Replication Troubleshooting Tip
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that issues
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start the Windows NT Registry Editor (Regedt32.exe) on the export server.
	
	2. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	     \SecurePipeServers\winreg\AllowedPaths
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Double-click the Machine:REG_MULTI_SZ value and add the following string
	  under that last entry:
	
	     System\CurrentControlSet\Services\Replicator
	
	4. Restart the computer.
	
	An alternative solution is to give Read permission to the Replicator local group
	for the following key (read or write for Windows 4.0):
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	\SecurePipeServers\winreg\ 
	
	Verify that the Replicator group has at least Read permissions to the above key.
	
	NOTE: The above registry key is one path; it has been wrapped for readability. It
	may also be neccessary to delete the Tmpfile.re$ from the Import directory on
	each backup domain controller (BDC).
	
	
	Windows NT 4.0 SP3 updates the AllowedPaths key.
	
	For additional information about the purpose and function of the winreg and
	AllowedPaths keys, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q143474 Information Available to Anonymous Logon Users
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	
	=============================================================================
	
