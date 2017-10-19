---
layout: page
title: "Q153560: SMS: Cannot Distinguish Long Package Command Strings"
permalink: /kb/153/Q153560/
---

## Q153560: SMS: Cannot Distinguish Long Package Command Strings

	Article: Q153560
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbPCM kbsmsAdmin smsadmin smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When creating a 'Run Command on Workstation' package, if you enter a command name
	greater than 34 characters all characters after the 34th are hidden from view.
	
	This can be a problem for a user who imports a PDF with long strings for multiple
	commands. If a string is not unique to 34 characters you cannot tell commands
	apart without opening them individually with the 'Properties' button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. It has been fixed in Systems Management Server version
	1.2.
	
	Additional query words: prodsms 1.20 Package Creation
	
	======================================================================
	Keywords          : kbPCM kbsmsAdmin smsadmin smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
