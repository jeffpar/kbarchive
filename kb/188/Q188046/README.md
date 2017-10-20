---
layout: page
title: "Q188046: SMS: Program Group Control Logs &quot;Fatal error!&quot; Message"
permalink: /kb/188/Q188046/
---

## Q188046: SMS: Program Group Control Logs &quot;Fatal error!&quot; Message

{% raw %}

	Article: Q188046
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Program Group Control reports the following error in the Pgc.log file of a
	client:
	
	  Program Group Control ==> Fatal error! NNP Not running
	
	CAUSE
	=====
	
	Program Group Control requires that the Network Naming Provider (Nnp.exe) be
	loaded on a Systems Management Server Windows 95 client.
	
	WORKAROUND
	==========
	
	Check the registry entry on the Win95 machine under the
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\RunServices
	  \<drive>:\Ms\Sms\Bin\Nnp.exe
	
	registry key that loads this executable file. Also ensure that this file exists
	in the specified path.
	
	MORE INFORMATION
	================
	
	Systems Management Server Client installation creates this registry entry. You
	may have to restart the client computer for this to be loaded.
	
	Network Naming Provider (NNP) is a system application (running at Ring 3) that
	provides the non-real time component of the Systems Management Server Router.
	NNP loads at boot time, reads the system registry for Systems Management Server
	information, formats that information, and passes it to the Logical Network
	Redirector (LNR). In addition, NNP verifies server and share status as needed,
	and updates the information for LNR.
	
	In Systems Management Server 1.2, Windows 95 introduced the NNP to dynamically
	choose a distribution server. If the distribution server is unavailable, another
	distribution server is chosen.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q168599 SMS: Brief Overview of PGC for Windows 95 Clients in SMS 1.2
	
	  Q177466 SMS: NNP Stays on Windows 95 Taskbar After Login
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
