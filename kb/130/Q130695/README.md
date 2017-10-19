---
layout: page
title: "Q130695: ACLCONV Fails when Trying to Read ACL File"
permalink: /kb/130/Q130695/
---

## Q130695: ACLCONV Fails when Trying to Read ACL File

	Article: Q130695
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ACLCONV reads a LAN Manager ACL file and re-applies the permissions on the same
	directory tree under Windows NT. When you run ACLCONV the following error
	message may appear:
	
	  error encountered reading data file.
	
	
	CAUSE
	=====
	
	ACLCONV is unable to read ACL files that are modified using the append option.
	
	MORE INFORMATION
	================
	
	In LAM Manager, the ACL file is created using BACKACC. There are two command
	line options to BACCACC:
	
	  /S  Recursively backup permissions for all the subdirectories & files.
	
	  /A  Appends access permissions to existing backup file.
	
	It is possible to collect permissions for just few directories. For example:
	
	  BACKACC C:\DATA1 /F:C:\FILE.ACL /S
	
	The FILE.ACL file is created, and permissions for DATA1 are stored.
	
	If you the run BACKACC C:\DATA2 /F:C:\FILE.ACL /S /A, permissions for C:\DATA2
	are appended to FILE.ACL file
	
	When the system is upgraded to Windows NT, or if the directory trees are copied
	to another computer running Windows NT, ACLCONV is used to reapply the
	permissions. This only apples to an Windows NT file system (NTFS) formatted
	partition.
	
	Following the above example, running ACLCONV /DATA:FILE.ACL /LOG:FILE.LOG will
	cause the following error message to appear:
	
	  Error Encountered reading data file.
	
	RESOLUTION
	==========
	
	To work around this problem, run BACKACC to create separate ACL files and then
	run ACLCONV to restore permissions, or run BACKACC to collect ACLs for the
	entire drive and then restore them. For example, on a LAN Manager system, run:
	
	  BACKACC C:\DATA1 /F:C:\FILE1.ACL /S
	  BACKACC C:\DATA2 /F:C:\FILE2.ACL /S
	
	On an Windows NT system, run:
	
	  ACLCONV /DATA:FILE1.ACL /LOG:FILE1.LOG
	  ACLCONV /DATA:FILE2.ACL /LOG:FILE2.LOG
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt cheetah tools
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
