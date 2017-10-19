---
layout: page
title: "Q126546: Problems Running SNA Server 5250 Applet (Autoconnect Enabled)"
permalink: /kb/126/Q126546/
---

## Q126546: Problems Running SNA Server 5250 Applet (Autoconnect Enabled)

	Article: Q126546
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run the SNA Server 2.1 5250 applet, and the 5250 Session/Autoconnect
	switch is enabled, the following problems can occur:
	
	- When connecting over any SNA Server client-server interface that requires a
	  user logon (TCP/IP sockets, NetWare IPX/SPX, or Banyan IP):
	
	   - The session does not automatically activate.
	
	   - Connecting the session resulting in the Interface Not Found" error
	     message.
	
	   - The following error message appears when you quit the 5250 applet:
	
	  SNASRV caused a General Protection Fault in module SNASRV.EXE at 0001:0589
	
	   - When the SNA client login fails and you select Close, the client machine
	     stops responding (hang).
	
	- When connecting over the SNA Server client-server named pipes interface, if
	  WNAP fails to start due to a 629 or 546 error (where the client cannot find
	  or connect to an SNA Server), the following error appears:
	
	  TP Started verb has completed with primary
	  return code Unexpected DOS Error:
	
	  Primary Return Code = F011
	  Secondary Return Code = 08000000
	
	
	CAUSE
	=====
	
	The SNA Server 5250 applet does not wait long enough for the underlying SNA
	client module (WNAP) to initialize, and then fails to work properly when WNAP
	fails to initialize.
	
	RESOLUTION
	==========
	
	To workaround this problem in SNA Server version 2.1, configure WNAP to start
	before the 5250 applet is started. To do this, add a WNAP.EXE icon to the
	Windows or Windows for Workgroups Startup group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.1. This
	problem was corrected in SNA Server version 2.11.
	
	Additional query words: prodsna 2.10 5250 F011 snasrv autoconnect wfw wfwg Windows 3.x 3.10 3.11 application auto connect automatically
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
