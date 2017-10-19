---
layout: page
title: "Q154936: SMS Displays # When Attempting to Create SMS Client"
permalink: /kb/154/Q154936/
---

## Q154936: SMS Displays # When Attempting to Create SMS Client

	Article: Q154936
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbInventory smssetup smsinv
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run either Runsms.bat or Smsls.bat for the first time on a client
	computer, the client computer must take ownership of the UID file in the SMSID
	directory. If the default permissions of that directory or SMS_SHR have been
	changed, a row of approximately 30 # signs appear on the screen. If you set the
	output of Runsms.bat or Smsls.bat in verbose mode, the following error message
	appears approximately 30 times:
	
	  Unable to rename UID file... trying next UID
	
	In addition, the "Please contact your system administrator" message appears, or
	you might get the following error:
	
	  Unexpected error creating the Unique ID file.
	  Please contact your System Administrator for assistance.
	
	CAUSE
	=====
	
	By default, Systems Management Server assigns Full Control permissions to
	SMS_SHR. This share contains the SMSID directory and the *.UID file. During the
	initial setup of a client computer, the client must take control of the UID
	file, assign itself the current SMSID, and then increment the file to the next
	value. If the client computer is unable to do this, then an SMSID is not
	assigned to the client and inventory fails.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q127052 SMS Unique ID (SMSID) Allocation
	
	Additional query words: prodsms setup install logon server
	
	======================================================================
	Keywords          : kbsetup kbInventory smssetup smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
