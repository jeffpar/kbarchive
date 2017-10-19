---
layout: page
title: "Q98462: Switch Codes for &#91;TCPIP_XIF&#93; Section of PROTOCOL.INI"
permalink: /kb/098/Q98462/
---

## Q98462: Switch Codes for &#91;TCPIP_XIF&#93; Section of PROTOCOL.INI

	Article: Q98462
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	These lines are in the [TCPIP_XIF] section of PROTOCOL.INI:
	
	  LOAD=TCPTSR[C], TINYRFC[C], EMSBFP[C],TELNET[C], BAPI[CR]
	  UNLOAD="UNLOADT /NOTSR[DC]"
	
	Switch codes:
	
	  U - On load: load into upper memory if possible
	      on unload: unload from memory
	  C - Do not load into upper memory
	  B - Bind protocol to hardware
	  R - Register protocol with redirector
	  D - Deregister protocol with redirector
	
	These switches are not specific to TCP/IP: they are valid for any demand loadable
	protocol. The lines for other protocols are very similar to the ones shown
	above.
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
