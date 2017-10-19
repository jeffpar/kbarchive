---
layout: page
title: "Q226814: SMS: &quot;Remote Execute&quot; Doesn't Open Files Associated with Program"
permalink: /kb/226/Q226814/
---

## Q226814: SMS: &quot;Remote Execute&quot; Doesn't Open Files Associated with Program

	Article: Q226814
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a command line containing an associated file from a Remote Execute
	window, the given program is successfully started, but the associated file
	specified in the command line is not opened.
	
	WORKAROUND
	==========
	
	To successfully run associated files in a remote session, do either of the
	following:
	
	- In the Remote Tools window, initiate a Remote Control window to allow you to
	  run the command from the client desktop.
	
	-or-
	
	- In the Remote Tools window, click Tools, click Remote Execute, and type the
	  command line including the following executable:
	
	  Mspaint.exe c:\winnt\squares.bmp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
