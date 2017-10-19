---
layout: page
title: "Q135768: SMS: ResultSharePoint Entry Incorrectly Documented"
permalink: /kb/135/Q135768/
---

## Q135768: SMS: ResultSharePoint Entry Incorrectly Documented

	Article: Q135768
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbdocerr kbPCM smsdocerr smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	The "System Management Server Administrator's Guide" incorrectly states the
	following in Appendix C in the "Detecting Status for Run Command On Workstation
	Jobs" section, paragraph one:
	
	  The Package Command Manager places the file in the DESPOOLER.BOX directory
	  specified by the 'ResultsSharePoint' entry in the Logon server's SMS.INI
	  file.
	
	There is no SMS.INI file on the logon server. The file name should be DOMAIN.INI.
	The entry should be ResultSharePoint not ResultsSharePoint. Inventory Agent or
	Client Setup copies the ResultSharePoint from the Systems Management Server
	section in DOMAIN.INI file to the ResultSharePoint in the "Package Command
	Manager" section in the SMS.INI file. PCM reads the local SMS.INI file to
	determine where to write the .SNI file.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbdocerr kbPCM smsdocerr smspcm 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
