---
layout: page
title: "Q140927: L2GETNET Causes Access Violation Error on Windows 95 Clients"
permalink: /kb/140/Q140927/
---

## Q140927: L2GETNET Causes Access Violation Error on Windows 95 Clients

{% raw %}

	Article: Q140927
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	L2GETNET causes an access violation or sharing violation error on Windows 95
	clients.
	
	CAUSE
	=====
	
	L2GETNET.EXE determines the IP address of a Windows 95 client by calling
	WINIPCFG.EXE in batch mode and redirects the output to a temporary file
	(IPCONFIG.SMS). This file is then scanned for IP parameters like IP Address,
	Subnet Mask and Default Gateway. On some computers, especially slower ones, an
	access violation might occur, as it is possible that WINIPCFG.EXE hasn't
	finished storing data in IPCONFIG.SMS. So while WINIPCFG.EXE is in progress of
	writing it's data, L2GETNET.EXE attempts to read the file which results in the
	error.
	
	RESOLUTION
	==========
	
	Microsoft has modified the files, L2GETNET.EXE, WINIP95.EXE, and GETTCPIP.EXE,
	to correct this problem. INVDOS.EXE and START.EXE are also included with the
	fix. To apply the fix:
	
	1. Copy L2GETNET.EXE, INVDOS.EXE and GETTCPIP.EXE to the
	  <sms>\SITE.SRV\MAINCFG.BOX\CLIENT.SRC\X86.BIN directory. From there it
	  is distributed to all logon servers.
	
	2. Copy START.EXE and WINIP95.EXE to the client's \ms\sms\bin directory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	This problem has been corrected in Systems Management Server version 1.2.
	
	
	Additional query words: prodsms sms TCP/IP
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
