---
layout: page
title: "Q266627: Copying and Moving Files and Folders"
permalink: kb/266/Q266627/
---

## Q266627: Copying and Moving Files and Folders

	Article: Q266627
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): w2000acl kbACL
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The procedures for copying and moving files are the same for Microsoft Windows
	2000 Server and Microsoft Windows 2000 Professional as they are for Microsoft
	Windows NT 4.0 and earlier versions. The main difference is the automatic
	inheritance of permissions in Microsoft Windows 2000.
	
	When a file is copied from one location to another location, whether on the same
	or different volume, a new file is created in the destination location. The file
	inherits the permissions, the Access Control List (ACL), from its parent
	folder.
	
	When a file is moved from one location to another on the same volume, the file
	retains its security descriptor. Only the pointer to the resource is modified.
	
	When a file is moved from one location to another on a different volume, it acts
	similar to the copy, except the file is deleted from the source location. The
	moved file inherits the permission from the parent folder.
	
	RESOLUTION
	==========
	
	To move a file within the same volume and have it inherit from the parent
	folder, follow these steps:
	
	1. Prior to moving the file, clear the "Allow inheritable permissions from the
	  parent to propagate to this object" check box.
	
	2. Click Copy to copy the current permissions to the object.
	
	3. Move the file or folder to a different location on the same volume.
	
	4. Click "Allow inheritable permissions from the parent to propagate to this
	  object".
	
	5. Click Apply.
	
	  The permissions from the parent folder are added to the security descriptor of
	  this object.
	
	MORE INFORMATION
	================
	
	Files and folders are security objects. Every security object has a security
	descriptor attached to it. The Master File Table (MFT) record that defines the
	contents of the file or folder has a pointer to a $Security_Descriptor
	attribute.
	
	A security descriptor contains a Discretionary Access Control List (DACL),
	consisting of a list of access control entries (ACE). Each ACE consists of a
	Security Identification Number (SID), together with a list of accesses that the
	security principal, referred to by the SID, has to the resource.
	
	Additional query words:
	
	======================================================================
	Keywords          : w2000acl kbACL 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search
	Version           : :2000,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
