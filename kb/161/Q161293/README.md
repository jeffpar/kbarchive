---
layout: page
title: "Q161293: SMS: NET TIME May Cause the Login Script to Fail"
permalink: kb/161/Q161293/
---

## Q161293: SMS: NET TIME May Cause the Login Script to Fail

	Article: Q161293
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	kbnetwork
	1.00 1.10 1.20
	WINDOWS
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server login script runs, you may receive an error
	message similar to one of the following:
	
	  
	
	- Invalid drive request.
	
	- This device does not exist on the network.
	
	- Drive not ready.
	
	CAUSE
	=====
	
	On some network adapters the "NET TIME" command may cause the computer to drop
	the network connection to the validating server. This causes the Systems
	Management Server batch file to fail with one of the errors described above when
	"NET TIME" is placed before the SMSLS or RUNSMS portion of the login script.
	
	WORKAROUND
	==========
	
	To work around this problem, place the "NET TIME" command after the Systems
	Management Server batch file entry in the login script.
	
	Additional query words: prodsms Abort retry fail work
	
	======================================================================
	Keywords          : kbInventory smsinv smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
