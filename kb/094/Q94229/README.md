---
layout: page
title: "Q94229: HPFS.386 Returns Wrong Error for File Creation"
permalink: /kb/094/Q94229/
---

## Q94229: HPFS.386 Returns Wrong Error for File Creation

	Article: Q94229
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Many applications use Int 21 to create unique temporary files. However, a
	problem has been discovered with HPFS.386 that can result in an infinite loop
	within this process.
	
	PROBLEM ID: PR9301001
	
	SYMPTOMS
	========
	
	If you attempt to create a new file in an HPFS386 directory that is read-only,
	the error returned is "file exists." If Int 21 is trying to create a temporary
	file and it receives that error, it will increment the temporary file name by
	one and repeat the request.
	
	There are two symptoms this creates. First, the client PC will hang or go into
	"beeping death." Second, the server will slow down as it is processing repeated
	attempts to create the file. Typically the disk light will stay on, and you will
	notice performance degradation with other clients until the offending client PC
	is rebooted. This behavior has been observed by users of Microsoft Word and
	PowerPoint, but the potential for problems extends to any application that
	creates temporary files on LAN Manager 2.1 servers.
	
	CAUSE
	=====
	
	This problem is caused by an incorrect return code from HPFS.386.
	
	RESOLUTION
	==========
	
	HPFS.386 should return extended error 65 (access denied). It has been modified
	to correct this problem. If you are hanging while attempting to save documents
	to read-only directories, replace HPFS.386. Replace
	<lanroot>\NETPROG\HPFS.386 with a patched version dated 7/23/92, available
	from Microsoft PSS (CSD00.050).
	
	Additional query words: 2.10 hang
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
