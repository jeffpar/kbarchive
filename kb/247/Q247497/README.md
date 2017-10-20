---
layout: page
title: "Q247497: &quot;System Registry&quot; Error Message When Running Setup Program"
permalink: /kb/247/Q247497/
---

## Q247497: &quot;System Registry&quot; Error Message When Running Setup Program

{% raw %}

	Article: Q247497
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry. Before you edit the registry, make sure you understand how to restore it if a problem occurs. For information about how to do this, view the "Restoring the Registry" Help topic in Regedit.exe.
	
	SYMPTOMS
	========
	
	When you run a Setup program that is created using the Application Setup Wizard,
	you may receive the following error message:
	
	  Failure writing to the system registry. The registry may be corrupt, or you
	  may not have the required permissions to write to the registry.
	
	CAUSE
	=====
	
	This behavior can occur on computers running Windows 95 when the Setup program
	tries to add an entry to a registry key and the key size exceeds 64 KB as a
	result.
	
	The size of a registry key is limited to 64 KB in Windows 95. If the behavior
	occurs on a computer running Windows 95, it usually happens when Setup tries to
	add entries to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDLLs
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe). Note that you should back
	up the registry before you edit it. If you are running Windows NT, you should
	also update your Emergency Repair Disk (ERD).
	
	To determine if the SharedDLLs key is approaching the 64-KB limit, use the
	following steps to export the key to the desktop and look at the size of the
	exported file:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. On the Edit menu, click Find.
	
	4. In the Find What box, type "shareddlls" (without the quotation marks).
	
	5. In the "Look at" section, click to select only the Keys check box, and then
	  click Find Next.
	
	6. On the Registry menu, click Export Registry File.
	
	7. In the Save In list, click Desktop.
	
	8. In the File Name box, type "myshareddlls" (without the quotation marks), and
	  then click Save. This saves a copy of the SharedDLLs registry key to a file
	  called MySharedDLLs.reg on the desktop.
	
	9. On the desktop, right-click MySharedDLLs.reg, and then click Properties.
	
	10. Note the size of the file. If the file size is approximately 64 KB, the
	  error message is being caused by the size limitation in Windows 95.
	  To work around the 64-KB limit, open the MySharedDLLs.reg file you created in
	  step 8 using Notepad or WordPad. Find programs that have entries in the
	  SharedDLLs key. If you see file names from programs that you are no longer
	  using, you may want to remove (uninstall) these programs to free up space in
	  the registry key. If you have entries for files that no longer exist on the
	  hard disk, you can directly remove the entries.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
