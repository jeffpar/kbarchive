---
layout: page
title: "Q136009: PC NTMMTA: Err Msg: ...Invalid Service Account &#91;1057&#93;"
permalink: /kb/136/Q136009/
---

## Q136009: PC NTMMTA: Err Msg: ...Invalid Service Account &#91;1057&#93;

	Article: Q136009
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new Service Instance for the Windows NT Multitasking MTA (NT
	MMTA), you may get the following error after you select OK:
	
	  Error Creating Service: Invalid Service Account [1057]
	
	CAUSE
	=====
	
	There is a problem with the Windows NT Service account you are trying to use.
	
	RESOLUTION
	==========
	
	1. Check that the NT MMTA Service Account has the Advanced Right of Log on as
	  Service.
	
	2. Verify that the NT MMTA Service Account is correct.
	
	3. Verify that the NT MMTA Service Account entry is in the format of
	  ServerName\AccountName or DomainName\AccountName.
	
	4. Verify that the password used is correct.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
