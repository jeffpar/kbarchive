---
layout: page
title: "Q178662: Package Command Manager Service Fails to Start on Remote Servers"
permalink: kb/178/Q178662/
---

## Q178662: Package Command Manager Service Fails to Start on Remote Servers

	Article: Q178662
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Site Configuration Manager is unable to start the Package Command Manager
	(PCM) service on remote servers separated from the Systems Management Server
	site server by slow wide area network (WAN) links. A Systems Management Server
	event 225 is logged. Attempting to start the service manually yields the
	following error:
	
	  Error 2186 - The service is not responding to the control function.
	
	WORKAROUND
	==========
	
	To work around this problem, do any one of the following:
	
	- Configure the remote servers so that they are a part of a local Systems
	  Management Server site.
	
	- Obtain the hotfix mentioned in the STATUS section of this article. This fix
	  should have the following timestamp:
	
	     12/5/97  9:01pm      257,904 Pcmsvc32.exe
	
	- Wait for and apply Systems Management Server 1.2 Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: smspcm prodsms
	
	======================================================================
	Keywords          : kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
