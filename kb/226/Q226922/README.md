---
layout: page
title: "Q226922: SMS: Client Packages Are Not Re-advertised"
permalink: kb/226/Q226922/
---

## Q226922: SMS: Client Packages Are Not Re-advertised

	Article: Q226922
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An advertised package that is uninstalled on a client computer is not
	re-advertised.
	
	CAUSE
	=====
	
	This problem occurs because Systems Management Server checks the
	Winnt\MS\SMS\Clicomp\Apa\Data\Complete folder to see which advertised packages
	have been installed on the client. If a package appears as complete, it will not
	be re-advertised to the client.
	
	WORKAROUND
	==========
	
	The following are alternative methods you can use to readvertise a specific
	program to a client or collection:
	
	- Delete the corresponding package that is located in the
	  Winnt\MS\SMS\Clicomp\Apa\Data\Complete folder. CAUTION: This will remove all
	  installation history.
	
	- Send a new advertisement. This must occur using a new program ID. The new
	  program can launch the same .exe file, but it must be a unique program with
	  its own ID.
	
	- Set up the advertisement for a recurring job. CAUTION: If the original
	  advertisement was set to run "ASAP", this will not work. If the advertisement
	  was initially set to run under a schedule that is forward in time to begin
	  with, this will work as desired.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
