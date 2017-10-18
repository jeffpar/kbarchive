---
layout: page
title: "Q61859: Access Control Lists in OS/2 LAN Manager 2.x HPFS386"
permalink: kb/061/Q61859/
---

## Q61859: Access Control Lists in OS/2 LAN Manager 2.x HPFS386

	Article: Q61859
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following questions and answers describe the use of access control lists
	(ACLs) in OS/2 LAN Manager versions 2.0, 2.1, 2.1a, and 2.2.
	
	1. Are ACLs part of the standard OS/2 or do you need a special LAN Manager
	  version or Windows/386 version?
	
	  ACLs are not directly implemented by OS/2, they are a feature of LAN Manager.
	  For FAT or standard OS/2 HPFS partitions, the ACLs are kept in a private LAN
	  Manager database (the NET.ACC file). However, with the LAN Manager 2.0
	  version of HPFS (HPFS386), the ACLs are integrated into the file system and
	  stored in a manner similar to other file-related information (such as
	  extended attributes, disk space allocations).
	
	2. Can both files and directories have an ACL?
	
	  Yes. ACLs protect objects, such as files or directories (both are considered
	  unique objects).
	
	3. Can a file or directory have both an ACL and an extended attribute(EA)?
	
	  Yes. ACLs have no relationship to EAs.
	
	4. What is the format of an ACL? How large can it be?
	
	  The structure of an ACL is proprietary and Microsoft currently does not
	  publish this information.
	
	  A single ACL is not very large. However, the total amount of space occupied by
	  ACLs for a file or directory will vary with the number of different
	  permissions set against the object.
	
	5. How are ACLs manipulated (that is, how can you get information out of them or
	  put information into them)?
	
	  Currently, the only programmatic access to ACLs is by means of the OS/2 LAN
	  Manager NetAccess API calls.
	
	6. Is ACL information documented anywhere?
	
	  No; again, the structure is proprietary.
	
	7. I need to access both FAT and HPFS files with various versions of OS/2. Which
	  versions of OS/2 support which features (that is, ACLs and/or EAs)?
	
	  The following table summarizes the differences and similarities:
	
	                                                   Enhanced
	  Product                      EAs       ACLs      Dates
	  -------                      ---       ----      --------
	
	  OS/2 1.1                     no        no        no
	  OS/2 1.2 (and later) FAT     yes       no*       no
	  OS/2 1.2 (and later) HPFS    yes       no*       yes
	  LM 2.0 HPFS386               yes       yes       yes
	
	  * ACL support for FAT and standard HPFS is provided by LAN Manager; however,
	  the ACLs are not integrated into the file system.
	
	  "No" means the capability does not exist, and "yes" means that the capability
	  does exist in that particular file system.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2 1.10 1.1 1.20 1.2 1.30 1.3
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
