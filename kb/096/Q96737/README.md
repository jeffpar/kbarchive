---
layout: page
title: "Q96737: FTADMIN Incorrectly Shows Phantom Drives or Problems"
permalink: kb/096/Q96737/
---

## Q96737: FTADMIN Incorrectly Shows Phantom Drives or Problems

	Article: Q96737
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	At times FTADMIN will incorrectly show phantom drives and/or phantom errors.
	These problems, though surprising, are easily correctable.
	
	PROBLEM ID: BUG# 406
	
	SYMPTOMS
	========
	
	  At times FTADMIN will report drives as being cracked, displaying a question
	  mark (?) where the drive letter should be. Viewing information about the
	  drive will show a code ???, critical level, a disk block with a ridiculous
	  number (4291035135, 4294967295 and 4294905600 have been seen, even if the
	  block size was 512 bytes [these figures represent a location of just under 2
	  terabytes]) and a drive type unknown. This can occur on "raw" drives (not
	  partitioned) or it can be a truly "phantom" (non- existent) drive. When
	  <Correct all errors on drive> is selected a Net 2533 will be produced.
	  Choosing OK at this point will cause the cracked drive to go away.
	
	CAUSE
	=====
	
	  There are at least two known ways to produce this problem. The first is to go
	  into FDISKPM, create a partition on a "raw" drive, and exit the program
	  without saving the changes. Making a change and exiting FTSETUP without
	  saving the changes will produce the same result. This problem appears to
	  persist through system shutdowns and reboots, but not through a power down
	  and reboot. The other known way to produce this problem is to attempt to run
	  the Verify option of FTADMIN (locally) and WFTADMIN (remotely) at the same
	  time (see related article on concurrency).
	
	RESOLUTION
	==========
	
	  As mentioned earlier, choosing OK after receiving the Net 2533 message will
	  cause the cracked drive to go away.
	
	  Attempting to correct the phantom drive by selecting <Correct> then
	  <All errors on all drives> may not work. The phantom drive itself may
	  have to be selected and then use <Correct>, <All errors on selected
	  drive>.
	
	Additional query words: 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
