---
layout: page
title: "Q153303: Deinstal.bat Does Not Always Set Setup Phase to Deinstal"
permalink: kb/153/Q153303/
---

## Q153303: Deinstal.bat Does Not Always Set Setup Phase to Deinstal

	Article: Q153303
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Deinstal.bat does not always set SetupPhase to "deinstal" in the Sms.ini.
	
	The deinstal command window shows:
	
	  Running cli_nt  /r
	  The name is not recognized as a command
	  Phase 1 of client deinstal is complete
	
	The Sms.ini file shows that SetupPhase is still "installed" instead of being
	changed to "deinstal."
	
	MORE INFORMATION
	================
	
	This seems to occur only when you map a drive (for example, F) to
	\\servername\sms_shr, then type "f:\deinstal" (without the quotation marks). The
	problem does not occur if you first switch to the drive and run "deinstal".
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
