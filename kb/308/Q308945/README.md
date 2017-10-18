---
layout: page
title: "Q308945: SMS: An Exception Is Created in the Wnremote.log File"
permalink: kb/308/Q308945/
---

## Q308945: SMS: An Exception Is Created in the Wnremote.log File

	Article: Q308945
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbtool kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Systems Management Server (SMS) 2.0 client on a Windows XP
	Professional-based computer by using a remote installation method such as a
	Microsoft Windows NT Remote Client installation, the Wnremote.log file may
	contain an exception that is similar to the following exception:
	
	  
	
	  ** Service Thread is ending **  $$<C:\WINDOWS\sms_temp\CCMBtLdr.exe>
	  <Thu Jul 26 14:22:53.512 2001 Pacific Standard Time><thread=1600 (0x640)>
	  <<<<<<<<<<<<< EXCEPTION EXCEPTION EXCEPTION >>>>>>>>>>>>>
	  $$<C:\WINDOWS\sms_temp\CCMBtLdr.exe>
	  <Thu Jul 26 14:22:53.512 2001 Pacific Standard Time><thread=1600 (0x640)>
	  <<CLIEXCEPT>> (Logged to all threads) An exception was raised in the 
	  application '<unknown>', thread 0x640 (<unknown>) 
	  $$<C:\WINDOWS\sms_temp\CCMBtLdr.exe>
	  <Thu Jul 26 14:22:53.512 2001 Pacific Standard Time><thread=1600 (0x640)>
	  <<CLIEXCEPT>> A fatal exception occurred in THIS THREAD. Information 
	  follows:  $$<C:\WINDOWS\sms_temp\CCMBtLdr.exe>
	  <Thu Jul 26 14:22:53.512 2001 Pacific Standard Time><thread=1600 (0x640)>
	  <<CLIEXCEPT>> The exception was not an MFC Exception. A detailed 
	  information dump will follow...  $$<C:\WINDOWS\sms_temp\CCMBtLdr.exe>
	  <Thu Jul 26 14:22:53.512 2001 Pacific Standard Time><thread=1600 (0x640)>
	
	CAUSE
	=====
	
	This problem can occur while Ccmbtldr.exe is shutting down its service main
	thread after it completes its boot loading cycle.
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	There are no known side effects of this exception. The client installs and
	operates correctly after the exception has been logged.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbtool kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP3
	Version           : :2.0,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
