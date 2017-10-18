---
layout: page
title: "Q161562: Setting Up Server-Side Includes with Different Extension"
permalink: kb/161/Q161562/
---

## Q161562: Setting Up Server-Side Includes with Different Extension

	Article: Q161562
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	If you need to use server-side includes with an extension other than the default
	specified by Microsoft Internet Information Server (.stm files), you need to add
	a new mime type for the extension by editing the registry.
	
	MORE INFORMATION
	================
	
	NOTE: Remember to stop all the Internet Services and then restart the Internet
	Services after making changes to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Perform the following steps:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\InetInfo\
	  Parameters\MimeMap
	
	3. Select Edit and click Add Value. The Value Name represents the extension for
	  the new mime type. An example of a mime type for .shtml is text/html,shtml,,h
	  : REG_SZ
	
	4. Click OK. No string is required.
	
	5. Click OK.
	
	After the extension has been added, you need to change the registry entry for the
	server-side include extension.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3Svc\Parameters
	
	3. In the right pane, double-click ServerSideIncludesExtension to edit the
	  string value. Replace the current default value (.stm) with (.shtml), that
	  should be identical to the new mime mapping you created. Make sure the
	  ServerSideIncludesEnabled value is set to 1.
	
	Additional query words: IIS
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : :2.0,3.0
	
	=============================================================================
	
