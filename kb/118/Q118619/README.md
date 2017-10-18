---
layout: page
title: "Q118619: PC Ext: Err Msg: Drive in Error: &lt;Drive Letter&gt;"
permalink: kb/118/Q118619/
---

## Q118619: PC Ext: Err Msg: Drive in Error: &lt;Drive Letter&gt;

	Article: Q118619
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While the External Mail program (EXTERNAL.EXE) is running, the display window or
	SESSION.LOG file may show the following error message:
	
	  Drive in Error: <drive letter>
	
	CAUSE
	=====
	
	The External Mail program can determine, for various reasons, that a postoffice
	on a particular disk drive has an error. As a result, the External Mail program
	no longer checks the queues for mail destined for that postoffice. Although mail
	will enter the postoffice's queue, the External Mail program will not send it.
	
	
	RESOLUTION
	==========
	
	If the SESSION.LOG is enabled, determine if a drive error has occurred by
	searching for a "drive in Error:" message. Likewise, look for a "Testing
	permanent drive:" message, which may occur after a drive failure.
	
	The External Mail program may consider a drive to be in error if there are
	network or server problems. Ensure the correct network software (drivers,
	redirectors, requestors, and so forth) are being used.
	
	Several errors must occur on a drive before that drive is considered in error.
	When the External Mail program experiences a problem with a particular
	postoffice on a drive, it will test the drive again when it is finished moving
	mail.
	
	One of the most common causes of this problem is a missing or corrupted .MBG
	and/or .KEY file for an externally defined postoffice. Ensure that an .MBG and a
	.KEY file exist for each externally defined postoffice. To check for corruption,
	make sure the .MBG files are evenly divisible by 116 bytes (or 0 bytes). All
	.KEY files should be 560 bytes in size (any other size indicates corruption in
	the .KEY file).
	
	Additional query words: pcmailfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	
