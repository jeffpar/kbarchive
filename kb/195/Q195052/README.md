---
layout: page
title: "Q195052: Removing or Renaming Directory C:&#92;Program Breaks Applications"
permalink: /kb/195/Q195052/
---

## Q195052: Removing or Renaming Directory C:&#92;Program Breaks Applications

{% raw %}

	Article: Q195052
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create a folder called "Program" in the root of the volume hosting the
	Windows NT installation (boot partition). When you delete or rename it later, a
	dialog box comes up:
	
	  This change may impact one or more registered programs. Do you want to
	  continue?
	
	This message appears even though no applications are installed in this folder.
	
	If you click Yes, applications installed under the Program Files folder may not
	be usable anymore because the registry location will point to the Recycle Bin
	instead of the correct location. The application will not load for registered
	extensions and it cannot be started as an OLE or COM server anymore. You can
	still start the application through a shortcut to the executable or by
	double-clicking it in Explorer. The problem will happen with any path where the
	folder name matches the directory containing an application. For example, on the
	German version of Windows NT, the folder C:\Programme\Windows can cause this
	problem in conjunction with the folder C:\Programme\Windows NT.
	
	Another symptom of the same problem occurs when the root folder contains a file
	named Program or an executable file with a base name of Program (such as
	C:\Program.exe). If this is the case, all the programs under the C:\Program
	Files folder with paths that do not contain quotation marks stop working.
	
	CAUSE
	=====
	
	On all Rename and Delete operations, the shell checks the files involved against
	the registry of all installed applications. If the path to the application
	executables contains spaces, the entry should be placed into the registry with
	double quotation marks around it because these entries can also contain
	command-line parameters.
	
	However, many applications do not use quotation marks when adding the registry
	entries during installation. The parser, on the other hand, relies on those
	quotation marks to work correctly.
	
	This means that the parser will read the string "C:\Program Files\Windows
	NT\Accessories\Wordpad.exe" as if it were the application C:\Program with the
	parameters Files\Windows and NT\Accessories\Wordpad.exe. Hence, it will display
	this warning when you try to delete or rename the C:\Program folder. It will
	also later change the path in the registry to the Recycle Bin or the new name
	for C:\Program.
	
	If you have a file named C:\Program, the problem occurs when the shell tries to
	start a program with a path that does not contain quotation marks because the
	file produces a match against C:\Program, which is the first part of the full
	file name.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time    Version     File name     Platform
	  -----------------------------------------------------
	  11/12/99   00:16   1.854.736   Shell32.dll   Alpha
	  11/12/99   00:18   1.279.248   Shell32.dll   Intel
	
	
	
	After you apply this fix, the rename operation problems described in the "Cause"
	section no longer occur. The parser has been improved to check for these
	conditions.
	
	However, because of the ambiguity of the path name, the second issue (having a
	C:\Program.exe or C:\Program file on the on the disk), cannot be solved. The
	only solution is to change the program in one of the following ways:
	
	- When you register the program, make sure to include quotation marks if the
	  path contains spaces.
	
	- Instead of registering the long path name, use the shortened path name. For
	  example, use "c:\progra~1" for "c:\program files." Note that short file names
	  might not be enabled on all computers and that they might change after
	  restore operations.
	
	WORKAROUND
	==========
	
	You can prevent the problem before it occurs with either of the following
	approaches:
	
	- Turn off the Recycle Bin through its properties. This workaround does not
	  help with renames.
	
	- Use File Manager (Winfile.exe) for graphical file system management instead
	  of Explorer. Install Microsoft Internet Explorer 4.01 Service Pack 1 or
	  later. It does not have the problem with deletions and only affects the keys
	  below the following path:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App
	
	After the problem has happened, there are several approaches to correcting the
	problem:
	
	- Undo the delete operation by restoring the directory from the recycle bin and
	  then delete it through the command line. This workaround is not feasible with
	  a rename operation.
	
	- Restore a recent backup of the registry, especially the SOFTWARE hive. Do
	  this restore through an emergency repair.
	
	- Reinstall (remove may be required) all affected applications. If you have not
	  deleted the folder yet, delete it through the command line instead of
	  Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
