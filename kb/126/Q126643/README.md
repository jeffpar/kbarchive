---
layout: page
title: "Q126643: PCM and PGC Cannot Connect to Servers With Long Names"
permalink: /kb/126/Q126643/
---

## Q126643: PCM and PGC Cannot Connect to Servers With Long Names

	Article: Q126643
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbother kbPCM kbPGC smspcm smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Package Command Manager (PCM) or Program Group Control (PGC) attempt to
	connect to some logon servers, they error messages indicating that they were
	unable to complete their configurations appear. Other servers work properly. PCM
	indicates that it was unable to find a server. PGC indicates that it could not
	complete updating the client; the SMSLOG.TXT shows that Error 20 occurred. Any
	connections to servers than contain 12 characters or less work correctly. When
	you run the /DEBUG switch or watch a network trace of the transaction, you see
	that the programs appear to be connecting to the server properly.
	
	CAUSE
	=====
	
	The applications are attempting to connect to a logon server with more than 12
	characters in it's server name.
	
	WORKAROUND
	==========
	
	To work around this problem, use 12 or fewer characters for the server name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbother kbPCM kbPGC smspcm smspgc 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
