---
layout: page
title: "Q133475: Corrupted Directory Replicator Registry Entries"
permalink: kb/133/Q133475/
---

## Q133475: Corrupted Directory Replicator Registry Entries

	Article: Q133475
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Directory Replicator service fails to start. The Event Viewer logs error
	7023 or 7024.
	
	CAUSE
	=====
	
	The following errors can result when the registry information fails to properly
	register the settings, or from user error when inputting the desired settings in
	Server Manager while setting up Directory Replication.
	
	Errors Establishing Import and Export Paths
	-------------------------------------------
	
	If you input a nonexistent path (for example, misspell the desired path) when you
	establish the Import and Export paths for Directory Replication in the Server
	Manager properties setup screen, the following errors appear when you try to
	exit the Replication Properties dialog box as the system tries to start the
	Directory Replicator service:
	
	  The system cannot find the file specified.
	
	  -or-
	
	  The system cannot find the path specified.
	
	If you then start the Directory Replicator service from the Services in Control
	Panel, these same errors are more clearly reported:
	
	  The Directory Replicator service terminated with the following error: Error
	  0002: The system cannot find the file specified.
	
	  -or-
	
	  The Directory Replicator service terminated with the following error: Error
	  0003: The system cannot find the path specified.
	
	NOTE: Each error is logged in the system log with the following status:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  Description: The Directory Replicator service terminated with the following
	  error:
	
	  The system cannot find the file specified.
	
	Managed Directory Information Is Deleted or Corrupted
	-----------------------------------------------------
	
	If the Managed directory information is deleted or corrupted in the Registry, the
	following error occurs when you try change the Managed directory information by
	selecting the Manage button, or try to exit the Replication Properties dialog
	box as Windows NT tries to start the Directory Replicator service:
	
	  The Data is Invalid
	
	This error is reported more clearly if you try to start the Directory Replicator
	service from Services in the Control Panel:
	
	  Stop
	  Could not start the Directory Replicator Service on \\<machine name>.
	  Error 0013: The Data is Invalid
	
	In short, the data in the Registry no longer matches the data being used when
	starting the Replicator Service from within Server manager.
	
	This problem can also occur when you do not stop and restart the Server Manager
	applet after making registry entry changes to the specified paths being used for
	replication.
	
	NOTE: This error is logged in the system log with the following status:
	
	  Event ID: 7023
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  Description: The Directory Replicator service terminated with the following
	  error:
	
	  The data is invalid.
	
	Error Occurs After You Delete Subkeys
	-------------------------------------
	
	If you try to correct errors from within the registry by simply deleting the
	following subkeys from the System key under the HKEY_LOCAL_MACHINE subtree,
	additional errors occur:
	
	  CurrentControlSet
	  Services
	  Replicator
	  Imports
	  Exports
	
	If Imports and /r Exports are deleted and or corrupted, the following errors
	appear when you try to exit the Replication Properties dialog box as the system
	tries to start the Directory Replicator service:
	
	  The Specified Component could not be found in the configuration information.
	
	This error is reported more clearly if you try to start the Directory Replicator
	service from Services in the Control Panel:
	
	  Stop
	  Could not start the Directory Replicator Service on \\<machine name>.
	  Error 2146: The Specified Component could not be found in the configuration
	  information
	
	NOTE: This error is logged in the system log with the following status:
	
	  Event ID: 7024
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  Description: The Directory Replicator service terminated with service-
	  specific error 2146.
	
	RESOLUTION
	==========
	
	To properly correct corruption:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Make sure that Server Manager is not running.
	
	2. Open Control Panel, double-click the Services icon, and set the startup
	  parameter for the Replicator service to Manual.
	
	3. Stop the Directory Replicator service on the specified computer.
	
	4. Edit the following HKEY_LOCAL_MACHINE subtree Registry entries and then close
	  Registry Editor:
	
	  a. In the System\CurrentControlSet\Services\Replicator\Exports key, delete
	     all values. For example, delete Scripts and its string value.
	
	  b. In the System\CurrentControlSet\Services\Replicator\Imports key, delete
	     all values. For example, delete Scripts and its string value.
	
	  c. In the System\CurrentControlSet\Services\Replicator\Parameters key, under
	     the value ExportPath, set the string to <drive>:\.(The valid path to
	     the directories in question).
	
	  d. In the same key, under the value ImportPath, set the string to
	     <drive>:\.(The valid path to the directories in question).
	
	  e. In the same key, delete both the ImportList name and the string value.
	
	5. From the Server Manager Replication Properties setup screen:
	
	  a. Reset the appropriate Export and Import Directories, usually
	     <drive>:\Winnt35\System32\Repl\Export and
	     <drive>:\Winnt35\System32\Repl\Import.
	
	  b. Reset the Manage Export and Manage Import Directory options as needed. You
	     usually need to add the subdirectory scripts.
	
	  c. Add the appropriate Import Servers and Export Servers to the list boxes.
	
	6. Try to close the Replication Properties Setup Screen. This should start the
	  Directory Replicator service on the current computer.
	
	Make sure the Startup account is set as the Replicator, and that it is properly
	set up, and that the domain has been synchronized. Replication should begin to
	take place.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
