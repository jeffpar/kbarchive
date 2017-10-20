---
layout: page
title: "Q124381: WIN.INI Not Found by SETLS from DOS on LAN Manager Clients"
permalink: /kb/124/Q124381/
---

## Q124381: WIN.INI Not Found by SETLS from DOS on LAN Manager Clients

{% raw %}

	Article: Q124381
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run NET LOGON on a LAN Manager client from the AUTOEXEC.BAT file, and
	an SMSLS.BAT file exists in the client's logon script, SETLS16.EXE cannot find
	the WIN.INI file pointed to by the SMSLS.INI file on the logon server. This
	causes inventory to be reported to the logon server's Systems Management Server
	site instead of the domain/site pointed to by the [SMS] section in the WIN.INI
	file.
	
	CAUSE
	=====
	
	SETLS16 looks for the WINDIR environment variable and from that determines the
	location of WIN.INI. This fails because WINDIR doesn't exist yet when you
	execute the logon script. This is true regardless of the current directory the
	user is in. Putting WIN.INI in drive C allows this to work. Logging on to the
	domain from within Windows works.
	
	This does not affect CLI_DOS which looks in the WINDIR and also walks the PATH
	statement looking for WIN.INI.
	
	WORKAROUND
	==========
	
	Do one of the following to work around this problem:
	
	- Logon from within Windows only.
	
	-or-
	
	- Set up the AUTOEXEC.BAT file to contain the line "SET windir=C:\<windows
	  directory>". Note the variable "windir" needs to be in lowercase.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms Win16 resource master
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
