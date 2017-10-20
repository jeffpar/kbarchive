---
layout: page
title: "Q157659: SMS: Remote Control Doesn't Connect to 16-Bit SMS Clients"
permalink: /kb/157/Q157659/
---

## Q157659: SMS: Remote Control Doesn't Connect to 16-Bit SMS Clients

{% raw %}

	Article: Q157659
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbtshoot kbusage smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Remote Control utilities and Remote Diagnostics will fail to connect to 16- bit
	SMS clients if the machine name contains extended characters. Extended
	characters are those beyond the first 127 in the ASCII character set.
	
	NOTE: This problem does not occur on Windows NT clients.
	
	CAUSE
	=====
	
	When a client has extended characters in its name, it registers the name on the
	network as an OEM string. The Windows NT NetBIOS interface expects an ANSI
	string, and Sightnt.dll uses ANSI strings for remote control.
	
	WORKAROUND
	==========
	
	Change the machine name. NetBIOS names can contain characters between ASCII 33
	and 126 inclusive except for the MS-DOS reserved characters such as the backward
	and forward slashes, braces ({}), the greater than and less than signs, and so
	forth.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms helpdesk RC win16 win95 msdos
	
	======================================================================
	Keywords          : kbtshoot kbusage smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
