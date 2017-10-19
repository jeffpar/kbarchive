---
layout: page
title: "Q129456: PC MMTA: Err Msg: Mail Bag Is Locked by: F:P1&#92;&lt;hex&gt;.0LK"
permalink: /kb/129/Q129456/
---

## Q129456: PC MMTA: Err Msg: Mail Bag Is Locked by: F:P1&#92;&lt;hex&gt;.0LK

	Article: Q129456
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the OS/2 Multitasking MTA (MMTA) is used with BW-Connect NFS for Windows
	NT, it does not deliver mail between postoffices that reside on a UNIX machine.
	If the MMTA parameters "Q123" are used, the following error will occur in the
	SESSION.LOG:
	
	  Mail bag is locked by: F:P1\<hex>.0LK
	
	CAUSE
	=====
	
	Mail is not delivered because files on a UNIX system are written in lower case.
	The Microsoft Mail OS/2 MMTA expects \P1\<prefix>.0LK files to be in upper
	case. Specifically, the semaphore file is thought to be from another instance of
	External when it differs from the upper case .0LK files. As a result, mail is
	not dispatched.
	
	RESOLUTION
	==========
	
	To correct this problem, from Program Manager Main group, run the Control Panel.
	Select Network, Beame & Whiteside NFS Client, and Configure. From the
	Default Links category, choose either Upper Case or Preserve Case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Multitasking MTA. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20 MTA Beam
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	
