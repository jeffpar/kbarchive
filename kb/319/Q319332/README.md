---
layout: page
title: "Q319332: Error Message: An Error Occurred Calling DllRegisterServer"
permalink: kb/319/Q319332/
---

## Q319332: Error Message: An Error Occurred Calling DllRegisterServer

	Article: Q319332
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you install Microsoft Internet Explorer 5, and then restart your computer,
	you may receive the following error message:
	
	  An error occurred calling DllRegisterServer in
	  C:\Winnt\System32\Icmfilter.dll (HResult 800700002)
	
	You may also receive the following error message:
	
	  An error has occur while setting up C:\Winnt\System32\Icmfilter.dll this
	  error has been logged, the installation will continue
	
	CAUSE
	=====
	
	This issue may occur if any of the following conditions are true:
	
	- The Icmfilter.dll file is not registered correctly.
	
	- The Icmfilter.dll file is corrupted.
	
	- You have turned off the 8.3 file naming auto-generation functionality for
	  backward compatibility with 16-bit programs.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, follow these steps in the order that they are listed:
	
	1. Re-register the Icmfilter.dll file:
	
	  a. Click Start, click Run, type "regsvr32 icmfilter.dll" (without the
	     quotation marks) in the Open box, and then click OK.
	
	     If the registration is successful, you receive the following message:
	
	  DllRegisterServer in icmfilter.dll succeeded.
	
	  b. Reinstall Internet Explorer.
	
	  If the registration is not successful or if the issue is not resolved, go to
	  step 2.
	
	2. Replace the corrupted Icmfilter.dll file:
	
	  a. Click Start, point to Find, and then click "Files or Folders".
	
	  b. Type "icmfilter.dll" (without the quotation marks) in the Named box.
	
	  c. Click your local hard disk in the "Look in" box.
	
	  d. Click Find Now to search for the files.
	
	     By default, the Icmfilter.dll file is located in the Winnt\System32 folder.
	
	  e. Right-click the file, and then click Rename.
	
	  f. Type a new name for the file (for example, "icmfilter.old" (without the
	     quotation marks)), and then press ENTER.
	
	  g. Close the Find dialog box, and then restart the computer.
	
	  h. Reinstall Internet Explorer.
	
	3. Turn on the 8.3 naming auto-generation functionality:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem:NtfsDisable8dot3NameCreation
	
	  c. On the Edit menu, click Modify, and then change the value in the "Value
	     data" box from 1 to 0.
	
	     NOTE: The default setting is 0.
	
	  d. Quit Registry Editor.
	
	  e. Restart the computer.
	
	  f. Reinstall Internet Explorer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
