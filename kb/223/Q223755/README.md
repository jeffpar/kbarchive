---
layout: page
title: "Q223755: SMS: SMS Executive Crashes When Enumerating Non-Microsoft Server"
permalink: kb/223/Q223755/
---

## Q223755: SMS: SMS Executive Crashes When Enumerating Non-Microsoft Server

	Article: Q223755
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS_NT_LOGON_SERVER_MANAGER generates an access violation and causes the
	SMS_EXECUTIVE service to shut down if the SMS_NT_LOGON_SERVER_MANAGER attempts
	to enumerate a non-Microsoft server, such as a UNIX or VAX system running
	Advanced File and Print Services. Any non-Microsoft Windows NT server (UNIX,
	VAX, etc.) running software that emulates a Windows NT domain controller may
	cause the SMS_NT_LOGON_SERVER_MANAGER to stop responding. To workaround this
	problem, either move the third party server to a different Windows NT domain so
	that the SMS_NT_LOGON_SERVER_MANAGER does not attempt to enumerate the server or
	configure the server so that it does not emulate a Windows NT server.
	
	CAUSE
	=====
	
	If Windows NT Networking Logon Discovery or Windows NT Networking Logon Client
	Installation is enabled, Systems Management Server attempts to configure all
	Domain Controllers in the selected domains as logon points. When the
	SMS_NT_LOGON_SERVER_MANAGER attempts to install logon point components to
	anything other than a Windows NT server (For example, UNIX or VAX emulating an
	NT domain controller), the access violation is generated.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The access violation in the SMS_NT_LOGON_SERVER_MANAGER may not generate a
	visible error. The SMS_Executive may simply shut down. To better determine the
	cause of the stoppage, view the \SMS\Logs\CrashLogs directory. There should be a
	separate directory for each occurrence of the access violation.
	
	In the most recent directory view the Crash.log.
	
	The Crash.log will show information similar to the following:
	
	     ================================================
	     EXCEPTION INFORMATION
	
	     Time = 03/23/1999 16:55:47<BR/>
	     Service name = SMS_EXECUTIVE
	     Thread name = SMS_NT_LOGON_SERVER_MANAGER
	     Executable = E:\SMS\bin\i386\smsexec.exe
	     Process ID = 106
	     Thread ID = 363
	     Instruction address = 0x7800153D
	     Exception = 0xC0000005 (EXCEPTION_ACCESS_VIOLATION)
	     Description = "The thread tried to read from the virtual address           0x00000000 
	     for which it does not have the appropriate access."
	     Raised inside CService mutex = No
	     CService mutex description = ""
	
	Even if Systems Management Server logging has not been enabled, the last ten log
	messages from every thread of the service that crashed appears in the CrashLogs
	directory after the failure.
	
	View the SMS_NT_LOGON_SERVER_MANAGER entry in the CrashLogs directory. You should
	see information similar to the following log excerpt that indicates the third
	party server that the SMS_NT_LOGON_SERVER_MANAGER failed to enumerate. Note that
	there may be multiple entries for the different threads of
	SMS_NT_LOGON_SERVER_MANAGER. To determine the correct log to view, check the
	Crash.log "Thread ID" entry and open the log corresponding to this thread in the
	CrashLogs directory.
	
	     ================================================
	     ~Begin enum of NTLM volumes on server UNIX 
	     $$<SMS_NT_LOGON_SERVER_MANAGER><Tue Mar 23 18:18:22.468 1999
	     Central Standard Time><thread=300 (0x12C)>
	
	
	Additional query words: prodsms crash gpf av unix SMS20SP1FIX executive
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
