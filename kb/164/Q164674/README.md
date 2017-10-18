---
layout: page
title: "Q164674: How to Use a .CMD or .BAT File as a CGI Script"
permalink: kb/164/Q164674/
---

## Q164674: How to Use a .CMD or .BAT File as a CGI Script

	Article: Q164674
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Internet Information Server 1.0 (IIS) can use .cmd or .bat files as CGI scripts.
	In IIS 2.0 and 3.0, this capability has been removed by default.
	
	MORE INFORMATION
	================
	
	You can enable the use of .cmd and .bat files with IIS by adding a script
	mapping to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	     \SYSTEM\CurrentControlSet\Services\W3SVC\Parameters\Script Map
	
	2. On the Edit menu, click Add Value.
	
	3. Enter the following for .cmd files:
	
	     Value Name: .CMD
	     Data Type: REG_SZ
	     String:
	    "\Winnt\system32\cmd.exe /c %s %s" (Leave off the quotation marks)
	
	  For .BAT files, repeat this process and substitute .BAT for .CMD in the value
	  name.
	
	Sample Script
	-------------
	
	Use any text editor to create the following script and save it as myscript.cmd.
	
	     @echo off
	     echo Content-Type: text/plain
	     echo.
	     echo Hello World!!
	     echo.
	     echo.
	
	The above test script can be placed in the IIS server \scripts directory. You can
	run this script from the following URL, for example:
	
	  http://servername/scripts/myscript.cmd
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
