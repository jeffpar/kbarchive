---
layout: page
title: "Q184424: IIS ResKit: Start Menu Shortcuts Return Error Message"
permalink: /kb/184/Q184424/
---

## Q184424: IIS ResKit: Start Menu Shortcuts Return Error Message

{% raw %}

	Article: Q184424
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Internet Information Server Resource Kit ISBN 1-57231-638-1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you install the Microsoft Internet Information Server Resource Kit
	utilities, you may receive a
	
	  File Not Found
	
	or
	
	  404 Not Found
	
	error when you attempt to use the Start Menu to launch any of the utilities or
	sample Web pages.
	
	CAUSE
	=====
	
	Your copy of Microsoft Windows NT Server is set to disable 8.3 file name
	generation. This will cause the behavior described above.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Use the Registry Editor to enable 8.3 filename generation before installing the
	Internet Information Server Resource Kit. To do this, follow these steps.
	
	1. Click Start, and then click Run. Type "regedt32" (without the quotation
	  marks) and then click Enter.
	
	2. In the Registry, navigate to the following key:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\FileSystem
	     \NtfsDisable8dot3NameCreation
	
	3. Set the value of the key to 0 (zero).
	
	4. Save and close the Registry Editor.
	
	5. Insert the Internet Information Server Resource Kit CD-ROM to begin
	  installation. Follow the directions on the screen to complete the
	  installation.
	
	Additional query words: ms_press bookbug 1-57231-638-1
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
