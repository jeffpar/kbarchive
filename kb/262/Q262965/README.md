---
layout: page
title: "Q262965: How UNIX Permissions Are Approximated by Server for NFS"
permalink: /kb/262/Q262965/
---

## Q262965: How UNIX Permissions Are Approximated by Server for NFS

{% raw %}

	Article: Q262965
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using Server for NFS, file permissions from a UNIX client may
	appear incorrectly. This article describes how UNIX file permissions are
	approximated from Microsoft Windows NT or Microsoft Windows 2000 Discretionary
	Access Control Lists (DACLs) when you are using Windows Services for UNIX.
	
	MORE INFORMATION
	================
	
	Each file in UNIX has an associated owner and group. File permissions are then
	assigned to the owner of the file, the file's group, and then to all others. For
	example, the following sample output is the output from running the "ls -l"
	command:
	
	  -rwxrw-r--  1 user1 staff          64 May 15 19:01 letter.txt
	
	The owner of the Letter.txt file is user1; the group is staff. The following
	rights are assigned:
	
	  user1 has Read, Write, and Execute permissions.
	  staff has Read and Write permissions.
	  All others have Read permissions.
	
	In the Windows NT and Windows 2000 NTFS file system, each file also has an owner
	and a primary group. The primary group of a file is not used by the Win32
	subsystem, but is present for programs that make use of the POSIX subsystem.
	When a file is created, the user who created the file becomes its owner and that
	user's primary group becomes the file's primary group. Access Control Entries
	(ACEs) are then added to the DACLs to assign permissions.
	
	Server for NFS approximates NTFS file permissions to UNIX file permissions by
	using User Name Mapping Server. User Name Mapping Server allows an administrator
	to map users and groups in Windows NT and Windows 2000 to corresponding users
	and groups on a UNIX server or an NIS domain (for more information about User
	Name Mapping Server, please see the online Help). ACEs for the owner of the file
	and for the primary group of the file are then translated into the appropriate
	UNIX permissions for owner and group. The ACE for the built-in Everyone group is
	then translated into the appropriate UNIX permissions for all others. Consider
	the following example:
	
	  File name: letter.doc
	  Owner: user1
	  Primary group: Users
	
	The permissions are:
	
	  user1 has Full Control permissions on the file.
	  The Users group has Read and Write permissions.
	  The built-in Everyone group has Read permissions.
	
	User1 is mapped to a UNIX user also named user1. The Users group is mapped to the
	UNIX group named staff. A UNIX client sees the following permissions with the
	"ls -l" command:
	
	  -rwxrw-r--  1  user1 staff          512 May 9 15:42 letter.doc
	
	
	Additional query words: sfu
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
