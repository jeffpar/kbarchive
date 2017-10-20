---
layout: page
title: "Q161364: SMS: Description of Remote Control Event Log Codes"
permalink: /kb/161/Q161364/
---

## Q161364: SMS: Description of Remote Control Event Log Codes

{% raw %}

	Article: Q161364
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot kbusage smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes messages that may be logged by the Systems Management
	Server Remote Control Agent service in the Security event log of a client
	computer running Windows NT. These messages will only appear on the client
	computer, not the computer running the Systems Management Server Administrator
	or the Site server.
	
	Code   Description
	----   -----------
	
	1     Remotely restarted by <user name> from <domain name>.
	
	2     Began Chat session with <user name> from <domain name>.
	
	3     Began file transfer session with <user name> from <domain name>.
	
	4     <User name> from <domain name> remotely ran <file name>.
	
	5     Remote control session started by <user name> from <domain name>.
	
	6     Remote control session with <user name> from <domain name> ended.
	
	7     The local user granted remote user <user name> from <domain name>
	      permission to <action> (such as remote control your computer).
	
	8     The local user refused to allow remote user <user name> from
	      <domain name> to <action> (such as restart your computer).
	
	9     Remote user <user name> from <domain name> is permitted to access
	      this computer.
	
	10     Remote user <user name> from <domain name> is not permitted to
	      access this computer.
	
	Additional query words: prodsms wuser32 winnt
	
	======================================================================
	Keywords          : kbnetwork kbtshoot kbusage smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	

{% endraw %}
