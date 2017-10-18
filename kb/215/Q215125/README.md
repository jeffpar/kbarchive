---
layout: page
title: "Q215125: SMS: Migration from 1.2 to 2.0 Causes PGC &amp; PCM Warning Dialogs"
permalink: kb/215/Q215125/
---

## Q215125: SMS: Migration from 1.2 to 2.0 Causes PGC &amp; PCM Warning Dialogs

	Article: Q215125
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When migrating Windows clients from Systems Management Server (SMS) version 1.2
	to SMS version 2.0, the clients may get "Cannot reach server Error" error
	messages from the Package Command Manager (PCM) and/or the Program Group Control
	(PGC) that state the following:
	
	  Program Group Control is unable to connect to any servers. Your computer may
	  not be logged on to the network, or you may be logging in to a different
	  domain.
	
	  -or-
	
	  Package Command Manager is unable to connect to any servers. Your computer
	  may not be logged on to the network, or you may be logging in to a different
	  domain.
	
	This error occurs only once during the client migration process and these
	messages do not indicate if the user has ever received the warnings and selected
	the "Don't display this message again" check box.
	
	MORE INFORMATION
	================
	
	To disable the message boxes during the migration, add the following lines to
	the client computers Sms.ini file under the [Local] section:
	
	  ShowPGCCantreachServersDialog=False
	  ShowPCMCantReachServersDialog=False
	
	These changes are only recommended for use during an SMS 1.2 to SMS version 2.0
	migration, as they are valuable for troubleshooting client issues.
	
	Additional query words: prodsms pcm pgc cannot find server error interop
	
	======================================================================
	Keywords          : kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
