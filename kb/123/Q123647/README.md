---
layout: page
title: "Q123647: CACLS Directory Output Defined"
permalink: kb/123/Q123647/
---

## Q123647: CACLS Directory Output Defined

	Article: Q123647
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	Administrators and users with the Change Permissions enabled, can use the
	CACLS command to show or modify Access Control Lists (ACLs) for directories
	and files.
	
	If you query ACLs for directories the output is a listing of the
	permissions on the directory and the files inside the directory.
	
	Under File Manager in the Directory Permissions dialog box, the first set
	of parentheses contain directory permissions and the second set contain
	file permissions. However, for CACLS it is nearly backwards; the first
	listing of a group or user contains the file permissions while the second
	listing contains the directory permissions. The letters in parentheses
	represent the access control entry (ACE) header inheritance flags set for
	the object and container:
	
	File Permissions:
	
	  OI = MSG_CACLS_OBJECT_INHERIT
	
	  References permissions for files copied to or created in this directory.
	  This ACE is inherited by noncontainer objects, such as files created
	  within the container object to which the ACE is assigned.
	
	  IO = MSG_CACLS_INHERIT_ONLY
	
	  References permissions for files copied to or created in this directory.
	  This ACE does not apply to the container object, but to objects
	  contained by it.
	
	Normally both references are displayed.
	
	Directory Permissions:
	
	  CI = MSG_CACLS_CONTAINER_INHERIT
	
	  References permissions for the directory and directories copied to or
	  created in this directory. This ACE is inherited by container objects,
	  such as directories.
	
	  NP = MSG_CACLS_NO_PROPAGATE_INHERIT
	
	  Displayed when a permission is not to be inherited. The
	  MSG_CACLS_OBJECT_INHERIT and MSG_CACLS_CONTAINER_INHERIT bits are not
	  propagated to an inherited ACE.
	
	A directory's ACL will normally contain at least two ACEs. If CACLS output
	only contains one ACE, then permissions for the other ACE have not been
	specified. File Manager in this case will display the ACE as "(Not
	Specified)".
	
	REFERENCES
	==========
	
	If special access ACE's have been specified, standard and specific access mask
	types are displayed. References for these masks can be found in the Windows NT
	Resource Kit, Chapter 2.
	
	Additional references can be found in the Windows NT SDK, chapter 49 Programmer's
	Reference Volume 3.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
