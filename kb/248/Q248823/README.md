---
layout: page
title: "Q248823: &quot;Connection Failed&quot; Attempting to Use Remote SMS Admin Console"
permalink: /kb/248/Q248823/
---

## Q248823: &quot;Connection Failed&quot; Attempting to Use Remote SMS Admin Console

{% raw %}

	Article: Q248823
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsms200
	Last Modified: 04-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use a remote Microsoft Windows NT 4.0-based server or
	workstation as an Administrator console to manage a Systems Management Server
	(SMS) site without the distributed version of Component Object Model (COM)
	enabled on the computer, the following error message occurs when you attempt to
	connect:
	
	  Connection Failed
	
	You can identify this behavior by examining the Wbemprox.log file and searching
	for the following text:
	
	  Error loading module {F7CE2E13-8C90-11D1-9E7B-00C04FC324A8}, return code is
	  0x80070005(Fri Dec 17 14:21:41 1999) :
	  ConnectViaDCOM, CoCreateInstanceEx resulted in hr = 0x80070005(Fri Dec 17
	  14:21:41 1999) :
	
	CAUSE
	=====
	
	This behavior occurs if COM is disabled on the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start Dcomcnfg.exe in the %SystemRoot%\System32 folder.
	
	2. If the COM components have not been registered, you receive two prompts to
	  register them. Click Yes for both prompts.
	
	3. On the Default Properties tab, verify that "Enable Distributed COM for this
	  computer" is selected.
	
	4. Click OK.
	
	After you make this change, start the SMS Administrator console again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms unable WBEM DCOM connection
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
