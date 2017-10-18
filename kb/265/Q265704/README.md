---
layout: page
title: "Q265704: How to Retain NTFS File System File and Share Permissions"
permalink: kb/265/Q265704/
---

## Q265704: How to Retain NTFS File System File and Share Permissions

	Article: Q265704
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to copy files from one share to another while
	preserving the original NTFS file system file permissions and replacing the
	share permissions on the destination share with the permissions of the source
	share.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can move files from one share to another and retain the original NTFS file
	permissions by using the Scopy.exe utility, which is included in the Windows NT
	Server 4.0 Resource Kit.
	
	To transfer share permissions from a share on one server to a share of the same
	name on a different server, you must save the Shares registry key on the source
	server, and then restore this key on the destination server. Transferring share
	permissions from one server to another replaces the existing share permissions,
	which will be lost.
	
	1. To copy files from one share to another, preserving the original NTFS file
	  permissions, run the SCOPY command at the command line with the following
	  syntax:
	
	  " SCOPY source_path destination_path /O /A /S" (without the quotation marks)
	
	  where the /O option is used to copy owner security information, the /A option
	  is used to copy auditing information, and the /S option is used to copy all
	  files in subdirectories.
	
	2. Save the Shares registry key on the source server to a floppy disk:
	
	  a. Start Registry Editor on the source server.
	
	  b. Locate the following registry key:
	
	     HKEY_LOCAL_MACHINE\System\ControlSet\Services\LanmanServer\Shares\sharename
	
	  c. On the Registry menu, click Save Key.
	
	  d. Save the key to a floppy disk.
	
	  e. Quit Registry Editor.
	
	3. On the destination server, back up the Shares registry key, and then restore
	  the saved registry key from the source server to the destination server:
	
	  NOTE: Performing this procedure replaces the existing permissions on the
	  destination share.
	
	  a. Start Registry Editor on the destination server.
	
	  b. Locate the following registry key:
	
	     HKEY_LOCAL_MACHINE\System\ControlSet\Services\LanmanServer\Shares\sharename
	
	  c. To back up this registry key, on the Registry menu, click Save Key. In the
	     Save Key dialog box, specify where you want to back up the key, and then
	     click Save. Backing up the registry key allows you to restore the original
	     share permissions if you choose to do so later.
	
	  d. To replace the share permissions on the destination share with those from
	     the source share, restore the key you previously saved to the floppy disk.
	     On the destination server, on the Registry menu, click Restore. Select the
	     saved key, and then click Open.
	
	  e. Quit Registry Editor, and then restart the destination server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
