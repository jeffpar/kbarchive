---
layout: page
title: "Q266083: How to Migrate Objects from One Domain to Another Domain"
permalink: /kb/266/Q266083/
---

## Q266083: How to Migrate Objects from One Domain to Another Domain

{% raw %}

	Article: Q266083
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can copy domain objects from one domain to
	another by using the utilities provided in the Windows NT 4.0 Resource Kit
	Supplement, as follows:
	
	- Addusers.exe can be used to import and export user and group accounts from
	  one domain to another.
	
	- Rmtshare.exe can be used to remotely create or delete shares.
	
	- Scopy.exe can be used to copy NTFS file and folder permissions from one share
	  to another. Note that this utility does not copy share permissions.
	
	- Permcopy.exe can be used to copy share permissions from one share to another.
	
	- Subinacl.exe can be used to obtain security information on files, registry
	  keys, and services, and to transfer this information from user to user, from
	  group to group, and from domain to domain.
	
	MORE INFORMATION
	================
	
	Migrating Users and Groups to Another Domain
	
	To migrate users and groups to another domain, use the Addusers.exe utility:
	
	1. Use the following command to dump existing user and group accounts to a
	  file:
	
	  addusers \\computer_name|domain_name/dfilename
	
	  where computer_name|domain_name is the name of the primary domain controller
	  (PDC) computer that contains the user and group information for the specified
	  domain, and filename is the new file that will contain the user and group
	  account information.
	
	  When user and group information is dumped to a file, it is saved in a
	  comma-delimited format.
	
	  Dumping user account information does not save user account passwords or any
	  security information to the file. When you use this dump file to migrate
	  users to another domain, all the newly created user accounts have a blank
	  password and all the newly created users are required to change their
	  password at logon by default.
	
	2. Use the following command to add the users and groups to the new domain:
	
	  addusers \\computer_name|domain_name/c filename
	
	  where computer_name|domain_name is the name of the PDC computer and the domain
	  where the user accounts will be created, and filename is the name of the
	  comma-delimited dump file that contains the user and group information.
	
	Creating Shares Remotely
	
	To create or delete shares on a remote server, use the RMTShare.exe utility with
	the following syntax:
	
	rmtshare \\server[\sharename[=path [/printer]]] [/grant [user[:perms ]]] [/remove
	user][/users:number] [/unlimited] [/remark:"text"] /delete
	
	where:
	
	- \\server\sharename are the server and share to create, inspect, modify, or
	  delete.
	
	- /grant user:perms adds the name of a valid user or group on the server with
	  permissions or changes the user's permissions in an access control list.
	  Valid permissions are r=read, c=change (write), f=full, n=none. You can type
	  "READ", but only the first character is used.
	
	- /remove user removes the specific entry for a user; that user then inherits
	  permissions (in contrast to "/grant user:none", which denies any access at
	  all to user).
	
	- /users:number is the number of users with privileges to the server and share.
	
	- /delete deletes the share specified by \\server\sharename.
	
	Copying File and Share Permissions
	
	Two utilities are required to copy NTFS and share permissions. The Scopy.exe
	utility is used to copy NTFS file and folder permissions, and the Permcopy.exe
	utility is used to copy share permissions:
	
	1. To copy files and folders and retain their NTFS file and folder permissions,
	  use the Scopy.exe utility with the following syntax:
	
	  scopy source destination/o /a /s
	
	  where source is the path to the source directory and destination is the path
	  to the destination directory. The /o option copies owner security
	  information, /a copies auditing information, and /s includes all files in
	  subdirectories.
	
	  The Scopy.exe utility cannot copy files to or from file systems that do not
	  use security, such as FAT and HPFS. Scopy.exe copies only NTFS security
	  information, it cannot be used to copy share permissions.
	
	2. To copy share permissions from one share to another, use the Permcopy.exe
	  utility with the following syntax:
	
	  permcopy \\source_server\share_name \\destination_server\share_name
	
	  where source_server\share_name and destination_server\share_name are the UNC
	  paths to the source and destination shares.
	
	  CAUTION: You cannot use the Permcopy.exe utility to copy permissions of an
	  administrative share (sharename$, such as C$ or IPC$). Copying permissions to
	  an administrative share located on an x86 computer will cause Services.exe to
	  crash.
	
	Migrating Registry Keys, Services, and Other Objects
	
	To migrate other domain objects, use the Subinacl.exe utility. Subinacl.exe can
	be used to obtain security information on files, directories, registry keys, and
	services, and to transfer this information from user to user, from group to
	group, and from domain to domain. Subinacl.exe uses the following syntax:
	
	subinacl /object_type object_name /action=parameter /action=parameter
	
	Object types that can be manipulated by the Subinacl.exe utility include:
	
	- Registry keys and subkeys
	
	- Files
	
	- Directories
	
	- Shares
	
	- Services
	
	- Kernel objects
	
	Actions that can be performed on the above objects include:
	
	- Display
	
	- Change ownership
	
	- Replace all access control entries in the object.
	
	- Change domain name of the object
	
	- Migrate the object from one domain to another.
	
	Example: To replace the security identifiers in all access control entries that
	contain DOMAIN1\SALES with those of DOMAIN2\SALES, use the Subinacl.exe utility
	as follows:
	
	subinacl /replace=DOMAIN1\SALES=DOMAIN2\SALES
	
	For more information about the syntax and use of these tools, refer to the
	RKTools.hlp file in Windows NT Server 4.0 Resource Kit Supplement 3.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
