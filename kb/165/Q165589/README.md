---
layout: page
title: "Q165589: SMS: &quot;Unable To Locate &lt;machine name&gt;&quot; w/Remote Control in WAN"
permalink: /kb/165/Q165589/
---

## Q165589: SMS: &quot;Unable To Locate &lt;machine name&gt;&quot; w/Remote Control in WAN

	Article: Q165589
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to remote control a Systems Management Server client in a wide area
	network (WAN) environment, the following error messages may occur in sequence:
	
	  
	
	- Attempting To Locate <machine name>
	
	- Trying Additional Protocols
	
	- Unable To Locate <machine name>
	
	CAUSE
	=====
	
	On a TCP/IP WAN, communication over some routes may fail if intermediate network
	segments have packet sizes smaller than the communicating hosts, and routers do
	not send appropriate ICMP responses to this condition. A router that causes this
	condition is sometimes known as a "black hole" router.
	
	The Windows NT Server PING utility is a great diagnostics tool that can help you
	find those "black hole" routers. Use the following PING command:
	
	     PING -t -l 64000 <machine name>.
	
	If the request times out, it is an indication that the router between those two
	computers may be a "black hole" router, and may cause Remote Control to fail.
	
	To resolve this problem, correct the configuration of the appropriate router.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the following registry key.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     SYSTEM\CurrentControlSet\Services\<adapter name and number>
	     \Parameters\Tcpip
	
	3. On the Edit menu, click Add Value.
	
	4. Add the following values:
	
	        Value Name: MTU
	        Data Type:  REG_DWORD
	        Data: <1500 or Ethernet segment's MTU size>
	
	5. Click OK.
	
	6. Quit Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	Additional query words: prodsms sms timeout
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
