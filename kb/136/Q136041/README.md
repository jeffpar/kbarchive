---
layout: page
title: "Q136041: SMTP: Err Msg: This Device Does Not Exist on the Network"
permalink: /kb/136/Q136041/
---

## Q136041: SMTP: Err Msg: This Device Does Not Exist on the Network

{% raw %}

	Article: Q136041
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error message when your connection to the postoffice
	is lost:
	
	  This device does not exist on the network. reading drive M Abort, Retry Fail?
	
	CAUSE
	=====
	
	Network problems can cause an unstable connection to the postoffice and generate
	the above error.
	
	RESOLUTION
	==========
	
	The gateway will continue to process when you enter A, R, or F (abort, retry, or
	fail, respectively). Once the drive connection is re-established, the gateway
	will function again if you select retry.
	
	You can eliminate having to enter A, R, or F by running SMTPGATE.EXE in an
	instance of COMMAND.COM with the following option:
	
	  c:\dos\command.com /f
	
	The /f option on COMMAND.COM causes an automatic fail on INT 24. In this case,
	the gateway will be able to continue processing once the connection is
	re-established without you manually entering a command.
	
	Additional query words: 3.00 parameter
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
