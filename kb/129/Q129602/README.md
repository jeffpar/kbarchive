---
layout: page
title: "Q129602: Functional Description of SMSWORK"
permalink: kb/129/Q129602/
---

## Q129602: Functional Description of SMSWORK

	Article: Q129602
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server uses SMSWORK to do any work that was queued by Systems
	Management Server before the computer was rebooted. This allows Systems
	Management Server to execute a program before anything else has been started.
	This is usually done to reconfigure an operating system during an upgrade, but
	could be used for anything that needs to be accomplished during start up.
	
	MORE INFORMATION
	================
	
	SMSWORK is run from CLIENT.BAT, which is called from the AUTOEXEC.BAT file (as
	setup by Systems Management Server during the SMS configuration process).
	SMSWORK looks in the C:\SMS.INI file for the PendingWork key and executes any
	command found there. Once this command is executed, the line is cleared so the
	command is not executed the next time the system is started.
	
	SMS 1.0a Release Notes on SMSWORK
	---------------------------------
	
	SMS uses a program called SMSWORK.EXE to queue work to be done after a system
	reboot. SMSWORK is used to do any general work that cannot be done at the time a
	command is executing, for instance the Operating System Setup Encapsulation
	programs use SMSWORK to remove or replace files and directories at reboot time.
	
	SMSWORK.EXE looks in the SMS.INI file for the section [SMS Work] and the key
	PendingWork. The key value is a single command line or a series of
	comma-delimited command-lines, for example:
	
	PendingWork=Echo Please wait while SMS removes an SMS created temp directory, DEL
	c:\SMSTMP SMSWORK is invoked by CLIENT.BAT on MS DOS, Windows, and OS/2 SMS
	clients. On Windows NT computers SMSRUN32 performs these functions.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
