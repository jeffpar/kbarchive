---
layout: page
title: "Q98463: Set PROTOCOL.INI Params for DLC Protocol 3270 Emulation"
permalink: /kb/098/Q98463/
---

## Q98463: Set PROTOCOL.INI Params for DLC Protocol 3270 Emulation

{% raw %}

	Article: Q98463
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you have Ethernet and the IBM 3270 Personal Communication product, running
	token ring adapters on a LAN Manager file server, and you want to use the IBM
	LAN Support Program and DLC protocol to obtain a 3270 emulation, you must first
	correctly set several PROTOCOL.INI parameters.
	
	Failure to set these can cause communication errors, and a configuration on which
	this occurred is described at the end of this article.
	
	MORE INFORMATION
	================
	
	On a workstation currently running with the IBM PCLP, open the CONFIG.SYS file
	and find DXME0MOD.SYS. There are normally two parameters. The first, immediately
	following the driver, is the 12-digit address (enclosed in double quotation
	marks) of a locally administered address (LAA). If this is present, set it to
	the same address by using the NETADDRESS parameter in the ELNK section of
	PROTOCOL.INI.
	
	The next DXME parameter to be considered is the 'xmit_swap0 parameter. It is the
	third parameter following the drivername and determines whether destination
	address bits are swapped, and whether 802.3 or Ethernet DIX 2.0 frames are sent.
	It has four settings:
	
	  IBM LAN Support
	     0 - transmit 803.2 frames and swap address bits (default)
	     1 - transmit Ethernet DIX frames and swap address bits
	     2 - transmit 802.3 frames and don't swap address bits
	     3 - transmit Ethernet DIX frames and don't swap address bits
	
	You can achieve the same combinations by using the SWAP and USEDIX parameters in
	the MSDLC section.
	
	The following is a sample configuration on which failure to set these parameters
	after inserting 3Com adapters causes communications errors 690 and 510:
	
	Server:      IBM 9595 and EtherLink II MC
	            LAN Manager 2.1
	
	Workstation: IBM PSVP with MS-DOS 5.0
	            Windows operating system 3.1
	            LAN Manager 2.1 enhanced workstation
	
	Protocols:   NetBEUI and DLC (Beta 5 March 93)
	
	Gateway:     MS-DOS 5.0 with Personal Communication V3 IBM
	
	Additional query words: 2.10a 2.1a 2.20 2.2 dlc psvp
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
