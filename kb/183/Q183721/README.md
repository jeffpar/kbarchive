---
layout: page
title: "Q183721: How To Preload DLL Files With Internet Information Server 4.0"
permalink: /kb/183/Q183721/
---

## Q183721: How To Preload DLL Files With Internet Information Server 4.0

{% raw %}

	Article: Q183721
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
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
	
	If you have a .dll file with special dependencies that require these files to be
	loaded before other Web server processes, you can create a registry- defined
	list of those .dll files that are to be preloaded into the Inetinfo.exe program
	before any other Web server services start up.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To preload .dll files, create a new registry key called PreloadDlls in the
	following registry path:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Inetinfo\Parameters
	
	Set this entry as type multi-sz, with data consisting of the names of the .dll
	files that you want to preload (separated by carriage returns). If the files
	reside in the same path, you can type just the name of the .dll file. If the
	.dll file resides in another directory, type the file name and its full path.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
