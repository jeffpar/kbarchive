---
layout: page
title: "Q168341: SMS: Windows 95 PCM Fails to Run UNC Path Command Lines"
permalink: /kb/168/Q168341/
---

## Q168341: SMS: Windows 95 PCM Fails to Run UNC Path Command Lines

	Article: Q168341
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 16-bit version of the Package Command Manager (Pcmwin16.exe) fails to run a
	package command line that uses a UNC path. Windows 95 attempts to run Setup.exe
	from the package directory on the distribution server instead of using the UNC
	path specified on the command line.
	
	
	WORKAROUND
	==========
	
	To work around this problem, specify a command line without using a UNC path.
	
	
	Additional query words: prodsms win95 pcmwin PCM
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
