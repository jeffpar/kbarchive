---
layout: page
title: "Q97651: PC WRmt Win: Problems Installing with DoubleSpace"
permalink: kb/097/Q97651/
---

## Q97651: PC WRmt Win: Problems Installing with DoubleSpace

	Article: Q97651
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install both version 3.2 of Microsoft Mail Remote for Windows and
	version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows, and when you use the
	Microsoft MS-DOS version 6.0 DoubleSpace utility, if actual disk space is low,
	Mail Remote for Windows may create a corrupt (incomplete) message store file
	(MSMAIL.MMF), and Mail for Windows will not start.
	
	CAUSE
	=====
	
	When hard disk space is low, DoubleSpace incorrectly reports the amount
	available to use.
	
	RESOLUTION
	==========
	
	Microsoft MS-DOS 6 includes an item in the README.TXT file explaining that
	encrypted files, such as MSMAIL.MMF, are not compressed with utilities such as
	DoubleSpace or Stacker. However, performance can be improved if you store the
	.MMF on an uncompressed drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft MS-DOS version 6.0 and
	DoubleSpace. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b kbMailRemote320
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
