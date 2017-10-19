---
layout: page
title: "Q231223: SMS: Remote Tools Command Line Tool Fails with Valid IPX No."
permalink: /kb/231/Q231223/
---

## Q231223: SMS: Remote Tools Command Line Tool Fails with Valid IPX No.

	Article: Q231223
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You use the Remote.exe command line tool to try to start a remote control
	session with an IPX client, and you receive the following error message:
	
	  Security rights to run Remote Tools on this client have been denied.
	
	CAUSE
	=====
	
	You have omitted the extraneous zeroes that appear as the first part of the
	client?s IPX network address.
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, you must supply all of the leading zeroes for the
	client's IPX network address. You should take note of the network address, which
	will be similar to "00000000:0050BAD49253."
	
	Type the following command but replace the network address with that of your
	client computer.
	
	  "remote.exe 1 00000000:0050BAD49253" (without the quotation marks)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q201793 Version 2.0 Remote Control Command Line Options
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
