---
layout: page
title: "Q99273: An Exercise in Setting/Checking File Permissions"
permalink: /kb/099/Q99273/
---

## Q99273: An Exercise in Setting/Checking File Permissions

{% raw %}

	Article: Q99273
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If the tree structure on the source and destination match, you can save
	permissions from a FAT server and apply them to an HPFS drive and vice versa.
	
	MORE INFORMATION
	================
	
	Here is an exercise that demonstates command line use of LAN Manager utilities
	related to saving and restoring file permissions.
	
	Perform a BACKACC (saving permissions) to a floppy disk in Drive A from a FAT
	hard disk C, then a RESTACC (to restore permissions) from a floppy disk A to
	both an HPFS and FAT hard drive C. Use the same BACKACC and RESTACC commands
	when applying permissions to either a FAT or an HPFS drive.
	
	The exercise demonstrates these commands:
	
	net access     (see LAN Manager "Administrator's Reference," p. 23)
	net access /add
	net access /grant
	net access /change
	net access /tree
	
	backacc     (see LAN Manager "Administrator's Reference," p.154)
	restacc     (see LAN Manager "Administrator's Reference," p.185)
	
	Using LAN Manager Permissions Utilities--An Exercise
	----------------------------------------------------
	
	1. Set up the initial directory on the server.
	
	  Create directories: c:\test and c:\test2. Create a file test.doc by typing:
	
	  " c:\test directory:
	
	  copy con test.doc" (without the quotation marks)
	
	  Verify no permissions are associated currently with c:\TEST file.
	
	  To add an ACL for the directory, type:
	
	  " net access c:\test /add" (without the quotation marks)
	
	  To view the permissions, type:
	
	  " net access c:\test /tree" (without the quotation marks)
	
	  Add permissions of "raxd" to the directory and "rax" to the file TEST.DOC. To
	  grant initial permissions, type:
	
	  " net access c:\test /grant guest:raxd" (without the quotation marks)
	
	  To change to override, type:
	
	  " net access c:\test\test.doc /change guest:rax" (without the quotation
	  marks)
	
	  Verify they were added to the c:\test tree.
	
	  net access c:\test /tree
	
	2. Backup the FAT permissions to a disk in drive A. Create the file
	  A:\CTEST.ACL, by typing:
	
	  " backacc c:\test /f:c:\ctest /s" (without the quotation marks)
	
	  Notice the /f: parameter designates the target on BACKACC and the source on
	  RESTACC. You may want to reduce the possibility of an overwrite by
	  designating the name of the ACL file explicitly as opposed to the default
	  name ACKBAKX.ACL. (You can use "X" to distinguish drive).
	
	3. Restore permissions to the FAT drive destination. Type:
	
	  " c:\test2" (without the quotation marks)
	
	  Simulate a restore from a tape. Type:
	
	  " copy c:\test c:\test2" (without the quotation marks)
	
	  Verify no permissions are associated currently with c:\test2 directory. Type:
	
	  " net access c:\test2 /add /tree" (without the quotation marks)
	
	  Then type:
	
	  " net access c:\test2 /tree" (without the quotation marks)
	
	  Restore the permissions to c:\TEST2 (could be a FAT destination). Type:
	
	  " restacc c:\test c:\test2 /f:a:\ctest.acl /s" (without the quotation marks)
	
	  Notice:
	
	  c:\TEST specifies what directory tree to retrieve from the CTEST.ACL
	  permissions file; c:\TEST2 is the destination directory; a:\CTEST.ACL is the
	  file containing (ACLs) file permissions.
	
	  Verify the permissions were restored to the FAT destination c:\TEST2 by
	  typing:
	
	  " net access c:\test2 /tree" (without the quotation marks)
	
	4. Restore the FAT permissions to an HPFS 386 drive.
	
	  Create a c:\test2 directory on an HPFS volume and use COPY CON to create
	  TEST.DOC (or copy the original directory). Verify there are no permissions
	  currently. Type:
	
	  " net access c:\test2 /add /tree
	  net access c:\test2 /tree" (without the quotation marks)
	
	  Restore the permissions to c:\TEST2 (HPFS386). Type:
	
	  " * net access c:\test c:\test2 /f:a:\ctest.acl /s" (without the quotation
	  marks)
	
	  Verify that permissions were restored to c:\TEST2. Type:
	
	  " net access c:\test2 /tree" (without the quotation marks)
	
	REFERENCES
	==========
	
	LAN Manager "Administrator's Reference," version 2.2.
	
	Additional query words: 2.20 2.2 filepermissions
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
