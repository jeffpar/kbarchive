---
layout: page
title: "Q186255: SMS: File Corruption During File Transfer from Help Desk"
permalink: kb/186/Q186255/
---

## Q186255: SMS: File Corruption During File Transfer from Help Desk

	Article: Q186255
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the File Transfer Tool from the Help Desk utility in the Systems
	Management Server Administrator program to copy a file from a remote drive to a
	local drive, the progress bar (% copied) can extend beyond 100%. The copied file
	is corrupted because the size of the file is too big.
	
	
	CAUSE
	=====
	
	This problem can occur if the network is slow and if some retries are sent by
	the client (Wslave32.exe). This problem is random and may occur in a wide area
	network (WAN) environment where multiple copies of resent packets finally reach
	the server.
	
	WORKAROUND
	==========
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	This fix should have the following time stamp:
	
	  05/19/98  03:26am               331,968 sightnt.dll (Intel)
	  05/19/98  03:24am               648,976 sightnt.dll (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsms wslave32.exe sightnt.dll
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
