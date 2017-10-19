---
layout: page
title: "Q186811: How To Preload DLL Files With Internet Information Server 4.0"
permalink: /kb/186/Q186811/
---

## Q186811: How To Preload DLL Files With Internet Information Server 4.0

	Article: Q186811
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	If you have .dll files with special dependencies that require these files to be
	loaded before other Web server processes, you can create a registry-defined list
	of those .dll files that are to be preloaded into Inetinfo.exe before any other
	Web Server services begin.
	
	MORE INFORMATION
	================
	
	To preload .dll files, create a new registry value called PreloadDlls using the
	following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start the Registry Editor. (From the Start menu, point to Run, and then type
	  "Regedt32.exe" {without the quotation marks.)
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Inetinfo\Parameters
	
	3. Highlight the Parameters key. From the Edit menu, choose Add Value. Enter
	  PreloadDlls as the Value Name, define the data type as MULTI_SZ, and then
	  click OK.
	
	4. In the Data box of the Multi-String Editor, add data consisting of the names
	  of the .dll files that you want to preload (separated by carriage returns).
	  If the files reside in the same path, you can type just the name of the .dll
	  file. If the .dll file resides in another directory, type the file name and
	  its full path. Finish by clicking OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
