---
layout: page
title: "Q182581: Runtime Error: Attempt to Initialize Tagen.dll Fails"
permalink: kb/182/Q182581/
---

## Q182581: Runtime Error: Attempt to Initialize Tagen.dll Fails

	Article: Q182581
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When a COMTI application method is invoked, COMTI displays a message box with
	the title "mtx.exe - DLL Initialization Failed" and the text:
	
	  Initialization of the dynamic link library C:\program
	  files\sna\COMTI\tagen.dll failed.
	  The process is terminating abnormally.
	
	When you click OK, another message box is displayed with the title "Object
	Creation Failed" and the text:
	
	  ActiveX component can't create object.
	
	The Windows NT event log contains the following entry:
	
	  Event ID: 4128
	  Source: Transaction Server
	  Type: Error
	  Category: Class Factory Wrapper
	  The run-time environment was unable to load an application component due to
	  either an error obtaining its properties from the catalog, loading the DLL,
	  or getting the procedure address of DllGetClassObject. This error caused the
	  process to terminate.
	  C:\program files\sna\COMTI\tagen.dll
	  (Package: CedarBank)
	  (Microsoft Transaction Server Internals Information: File:
	  d:\viper\src\runtime\cfw\ccomdll.cpp, Line: 151)
	
	CAUSE
	=====
	
	At run time, Tagen.dll must have access to the Windows NT registry key that
	identifies the location of a message DLL needed for writing an informative
	message to the Windows NT event log. However, Tagen.dll attempts to get Write
	access to the registry key, when only Read access is required. The default user
	profile does not have that right, only Administrators do.
	
	WORKAROUND
	==========
	
	Method 1
	--------
	
	Start User Manager for domains and assign the Windows NT User (...of the identity
	under which the Microsoft Transaction Server package component is to execute) to
	the Windows NT Administrators Group.
	
	Method 2
	--------
	
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
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key and select it:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog
	  \Application\COMTI
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click Permissions on the Security menu.
	
	4. Confirm that the Windows NT Group, Everyone, has either Read or Special
	  Access permission for this registry key.
	
	5. Select the Name, Everyone. Click Full Control on the Type of Access menu.
	
	6. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator
	version 1.0, which is shipped as a component of Microsoft SNA Server version
	4.0. This problem has been corrected in the SNA Server version 4.0 Service Pack
	1. For information about obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100 kbCOMTI100SP1
	Version           : WINDOWS:1.0,1.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
