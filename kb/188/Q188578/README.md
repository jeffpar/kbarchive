---
layout: page
title: "Q188578: SMS: PCMWin Exits at Startup If No SMS Logon Server Is Available"
permalink: /kb/188/Q188578/
---

## Q188578: SMS: PCMWin Exits at Startup If No SMS Logon Server Is Available

{% raw %}

	Article: Q188578
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Package Command Manager for Windows (PCMWin) starts, one of its first tasks
	is to locate a Systems Management Server logon server. If no Systems Management
	Server logon server is available, PCMWin exits. PCMWin does not restart until
	the user logs off and then logs back on, restarts Windows, or manually restarts
	PCMWin. Below is a sample output from the Pcmwin.log:
	
	     Package Command Manager ==> Initializing .....
	     Package Command Manager ==> PCM executed on 06/19/1998 10:39:28
	     Package Command Manager ==> The PCM History file was created on
	     06/11/1998 15:12:23
	     Package Command Manager ==> Failed to connect to SMS Logon Server.
	     Package Command Manager ==> Exiting .........
	
	WORKAROUND
	==========
	
	To work around this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	This fix should have the following time stamp:
	
	     6/23/98   4:27pm        465,312 Pcmwin32.exe (Intel)
	     6/23/98   4:28pm        451,888 Pcmwin16.exe (Intel)
	     6/23/98   4:26pm      1,168,144 Pcmwin32.exe (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: prodsms pcm
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
