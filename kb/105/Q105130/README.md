---
layout: page
title: "Q105130: SMTP: Err Msg: WARNING Incoming SMTP Mail From Unknown Host"
permalink: /kb/105/Q105130/
---

## Q105130: SMTP: Err Msg: WARNING Incoming SMTP Mail From Unknown Host

{% raw %}

	Article: Q105130
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 2.1 and 3.0 of Microsoft Mail Gateway to SMTP may display the following
	message in the SMTPGATE.LOG file, and/or the Gateway PC screen:
	
	  [rx] HELO
	  <time> WARNING Incoming SMTP mail from unknown host
	
	  Note: Using the undocumented switch -CD with the SMTP gateway provides debug
	  information on the gateway screen and log file when full logging is turned on
	  with -GACSY and -LACSY command line options.
	
	CAUSE
	=====
	
	This warning indicates that section 3.5 of RFC 821 (the "HELO" command is used
	to identify the sending host) has been violated. The correct syntax should be:
	
	  [rx] HELO hostname.domain
	
	RESOLUTION
	==========
	
	No action is required. The SMTP Gateway will continue to process mail. The
	message is merely for your information.
	
	For more information refer to RFC 821.
	
	Additional query words: 2.10 3.00 smtp warning helo
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
