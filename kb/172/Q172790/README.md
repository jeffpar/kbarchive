---
layout: page
title: "Q172790: SMS: How to Enable Wuser32 User Mode Debug Logging"
permalink: /kb/172/Q172790/
---

## Q172790: SMS: How to Enable Wuser32 User Mode Debug Logging

{% raw %}

	Article: Q172790
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbtshoot kbusage smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the latest version of the Remote Control Agent service for client computers
	running Windows NT, Systems Management Server now has the capability to add
	registry entries to enable the service to create a log file.
	
	MORE INFORMATION
	================
	
	To enable logging, perform the following steps:
	
	1. Open the client registry to HKLM\Software\Microsoft\SMS\Tracing.
	
	2. Create a key called HELPDESK.
	
	3. Add a value called Enabled (REG_DWORD) and set it to 0 for no logging, 1 for
	  logging, or 2 for Console Debugger.
	
	  NOTE: If either the HELPDESK key or the Enabled value does not exist, nothing
	  out of the ordinary will happen.
	
	4. Just as with other Systems Management Server services, you can also define
	  the optional values TraceFileName (REG_SZ) and MaxFileSize (REG_DWORD, # of
	  bytes).
	
	  NOTE: If these values do not exist, TraceFileName defaults to C:\Ldmdbg.log
	  and MaxFileSize will be 1 MB. When the log file reaches the value specified
	  by MaxFileSize, it will be renamed to "*.*_" and a new one will be created.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtshoot kbusage smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
