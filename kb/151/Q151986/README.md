---
layout: page
title: "Q151986: Unable to Remote Control a Client on a Token-Ring Network"
permalink: /kb/151/Q151986/
---

## Q151986: Unable to Remote Control a Client on a Token-Ring Network

{% raw %}

	Article: Q151986
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Remote Control (Help Desk) to access a Systems Management
	Server client on a token ring network with rings bridged together with
	source-routing bridges (Loop Configuration), the following error message appears
	in SMS Administrator (the SMS Admin UI):
	
	  The remote workstation did not respond
	
	CAUSE
	=====
	
	The Token-Ring "Loop Configuration" provides an alternate path if a bridge fails
	and increases the network availability for the communication between segments
	(the traffic between two segments can flow through multiple routes), but the SMS
	Administrator is unable to manage unexpected packets (multiple copies of the
	same packet).
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Systems Management Server 1.2.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	

{% endraw %}
