---
layout: page
title: "Q157838: SMS: NetWare Client32 for Windows 95 Stops Responding on Logon"
permalink: /kb/157/Q157838/
---

## Q157838: SMS: NetWare Client32 for Windows 95 Stops Responding on Logon

{% raw %}

	Article: Q157838
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbsetup kbsms120 smssetup smshowto
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 95 clients using the Novell Client 32 (the Client32.nlm file,
	which has a size of 452,648 bytes) stop responding during the NetWare system
	login script.
	
	CAUSE
	=====
	
	There is a known problem with running external commands from Client 32, as
	documented in the Novell Technical Information Document (TID) 2906860. This
	article can be obtained from the Novell web site at http://www.novell.com.
	
	WORKAROUND
	==========
	
	A solution is documented in the Novell TID noted above, to allow you to run
	external login script commands. If the # command within the login script is not
	given an executable file name with an extension (for example, #DOSVER instead of
	#DOSVER.COM), the problem will occur.
	
	By modifying the Smsls.scr script, the problem can be alleviated until a newer
	version of Client 32 is released.
	
	Modifying Smsls.scr
	-------------------
	
	To modify the Smsls.scr file, find it in the Systems Management Server site
	server's Sms\Site.srv\Maincfg.box\Client.src directory, and then use the
	following steps:
	
	1. Make a backup copy of the Smsls.scr file.
	
	2. Edit the file with any text editor that has a search function, such as
	  Notepad.
	
	3. Search the Smsls.scr file for instances of the number sign (#).
	
	4. Change the following instances of "#" to their respective modified entries:
	
	     #%<SMS_LOGON>\dosver
	     to:
	     #%<SMS_LOGON>\dosver.com
	
	     #%<SMS_LOGON>\netspeed
	     to:
	     #%<SMS_LOGON>\netspeed.com
	
	     #%<SMS_LOGON>\x86.bin\NLSMSG16 6 /C YN /T Y,30 /M "Slow network detected. Continue"
	     to:
	     #%<SMS_LOGON>\x86.bin\NLSMSG16.EXE 6 /C YN /T Y,30 /M "Slow network detected. Continue"
	
	     #%<SMS_LOGON>\x86.bin\CLI_DOS /p:%<SMS_LOGON>\%<SMS_VERBOSE>
	     to:
	     #%<SMS_LOGON>\x86.bin\CLI_DOS.EXE /p:<SMS_LOGON>\%<SMS_VERBOSE>
	
	     #%<SMS_LOGON>\x86.bin\INVDOS /i /l:%<SMS_LOGON>\%<SMS_VERBOSE>
	     to:
	     #%<SMS_LOGON>\x86.bin\INVDOS.EXE /i /l:%<SMS_LOGON>\%<SMS_VERBOSE>
	
	     #%<SMS_LOGON>\x86.bin\NLSMSG16 11 /M "This version of SMS does not support Windows NT workstations"
	     to:
	     #%<SMS_LOGON>\x86.bin\NLSMSG16.EXE 11 /M "This version of SMS does not support Windows NT workstations"
	
	     #%<SMS_LOGON>\x86.bin\NLSMSG16 12 /M "that are clients to a Novell NetWare server."
	     to:
	     #%<SMS_LOGON>\x86.bin\NLSMSG16.EXE 12 /M "that are clients to a Novell NetWare server."
	
	     #%<SMS_LOGON>\clrlevel
	     to:
	     #%<SMS_LOGON>\clrlevel.com
	
	5. Save the file.
	
	The Systems Management Server Maintenance Manager service will then copy the
	updated file to your NetWare logon servers.
	
	NOTE: During the execution of the login script, the Client 32 Logon Results
	window will display two errors in the form: "Error returned from Dosver &
	Cli_dos". These errors can be safely ignored; unfortunately, they cannot be
	prevented.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: prodsms Novell NLM Client32 hang hangs hung
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbsetup kbsms120 smssetup smshowto 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
