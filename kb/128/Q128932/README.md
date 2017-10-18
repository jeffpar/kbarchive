---
layout: page
title: "Q128932: How Windows 95 Resolves Shortcut Links"
permalink: kb/128/Q128932/
---

## Q128932: How Windows 95 Resolves Shortcut Links

	Article: Q128932
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A shortcut is a link to a Windows Explorer shell object that is used to access
	that shell object without creating an actual copy of the object. You can create
	shortcuts for any items that you use often, including files, folders, disk
	drives, other computers, or printers.
	
	If you create a shortcut to an object and the name or location of that object
	then changes, Windows 95 automatically attempts to update, or resolve, the
	shortcut the next time you try to use it. The process of resolving a shortcut
	works for shortcuts that reference an object on your local computer, as well as
	for shortcuts that reference an object on another computer on the network,
	although resolution of a network shortcut may be restricted by the access rights
	that you have on the remote computer.
	
	This article describes the process that Windows 95 uses to resolve local and
	network shortcuts.
	
	MORE INFORMATION
	================
	
	Local Shortcuts
	---------------
	
	Windows 95 uses the following process to resolve local shortcuts:
	
	1. Windows 95 looks for the object in the static location specified in the
	  shortcut. This location, along with all the other properties for that
	  shortcut, are stored in a corresponding .LNK file and can be viewed by using
	  the right mouse button to click the shortcut and then clicking Properties on
	  the menu that appears.
	
	  The static location is specified using the standard drive and directory path
	  naming convention. For example,
	
	  C:\WINDOWS\FILENAME.EXT
	
	2. If the object is not found in the static location, Windows 95 looks in the
	  same target directory for an object that has the same creation time and
	  attributes as the original object, but a different name. This logic allows
	  Windows 95 to find the object if it is in the same location as it was
	  originally, but has been renamed.
	
	3. Windows 95 then searches the subdirectories of the original target directory
	  for an object with the same name or creation time as the original object. If
	  no such object is found, Windows 95 proceeds with a recursive search of the
	  original target drive for an object that meets one of these criteria. If a
	  matching object is found, a dialog box is displayed, allowing you to verify
	  that the found object is in fact the correct object.
	
	  NOTE: Only the original target drive is searched. For example, if the shortcut
	  originally referenced an object on local drive C, only drive C is searched
	  for an object with the same name or creation time as the original object. No
	  other local drives are searched.
	
	4. Finally, if Windows 95 is unable to find the object using the methods
	  described above, a dialog box is displayed in which you must enter the
	  correct location and name of the object.
	
	Network Shortcuts
	-----------------
	
	If you attempt to open a shortcut that references an object on another computer
	on the network, and that object cannot be found at the static location specified
	in the shortcut, Windows 95 attempts to resolve that shortcut using a process
	similar to that described above. However, the following additional
	considerations should be taken into account when Windows 95 attempts to resolve
	a network shortcut:
	
	
	- For network shortcuts, the static location may be specified using a Universal
	  Naming Convention (UNC) name, rather than the standard drive and directory
	  path naming convention. For example, the location might look like
	  "\\REMOTE_COMPUTER\WINDOWS\FILENAME.EXT."
	
	- Windows 95 searches the subdirectories of the original target directory only
	  if you have access to those subdirectories. If the target computer uses
	  share-level security, you have access to all the subdirectories of the target
	  directory, assuming that you have access to the target directory itself. If
	  the target computer uses user-level security, you may not have access to
	  subdirectories of the target directory.
	
	- When it is performing a recursive search of the original target drive,
	  Windows 95 starts from the original target directory and moves up the
	  directory tree to the highest parent directory that it has access to. This
	  parent directory essentially becomes the root directory of the recursive
	  search, as Windows 95 searches all subdirectories of this directory that you
	  have access to.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
