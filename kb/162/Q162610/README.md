---
layout: page
title: "Q162610: SNARAS Cannot Connect to Heavily Loaded Server"
permalink: /kb/162/Q162610/
---

## Q162610: SNARAS Cannot Connect to Heavily Loaded Server

	Article: Q162610
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to establish an SNARAS connection to an SNARAS server that is
	heavily loaded over a LAN, the SNARAS client may fail and receive an error
	message 629:
	
	  Port was disconnected by remote machine.
	
	At this point you have the option to cancel or retry. If you click Retry, after
	about 5 seconds, there is an error message concerning Windows NT RAS Error 651:
	
	  Your modem or other device-connecting device has reported an error.
	
	Subsequent attempts by the SNARAS client to establish a connection to the SNARAS
	server will fail with Windows NT RAS error 651.
	
	CAUSE
	=====
	
	SNARAS has two external interfaces: one to AsyncMac and one to APPC. The APPC
	side of the SNARAS server detects an incoming client and commences the
	initialization of the AsyncMac side (including creation of a port connected to
	the AsyncMac device driver). The AsyncMac connection setup is multiphase and, on
	a heavily loaded server, data arrives from the APPC side before the AsyncMac
	port initialization has completed. Forwarding this data across the SRI
	(interface from APPC to SNARAS) and attempting to send it on to AsyncMac fails
	because the AsyncMac port initialization is not yet complete.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. The updated modules are Snaras.dll and
	Rassna.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 2.11 and
	2.11 Service Pack 1 (SP1).
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. The fix is
	already included in SNA Server 3.0. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next service pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	
	=============================================================================
	
