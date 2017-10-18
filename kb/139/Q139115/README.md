---
layout: page
title: "Q139115: SNA Server Support for FNA and HNA"
permalink: kb/139/Q139115/
---

## Q139115: SNA Server Support for FNA and HNA

	Article: Q139115
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server version 2.11 supports the "Fujitsu Network Architecture" (FNA) and
	"Hitachi Network Architecture" (HNA) variants to IBM SNA. Support for these
	alternate SNA protocols is enabled adding the following registry keys:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/SnaServr/Parameters
	
	     FNA_SUPPORT: REG_SZ: <value>   (to enable FNA)
	
	  -or-
	
	     HNA_SUPPORT: REG_SZ: <value>   (to enable HNA)
	
	where <value> can be set to anything. The presence of this registry key
	enables this support.
	
	MORE INFORMATION
	================
	
	If SNA Server is communicating to a host system which is running Fujitsu Network
	Architecture (FNA) protocol, the following sense code errors may occur if
	FNA_SUPPORT is not enabled:
	
	  80050001: No session: SNA Server received a request other than
	  session control request when no LU-LU session was active
	
	If SNA Server is communicating to a host system which is running Hitachi Network
	Architecture (HNA) protocol and HNA_SUPPORT is not enabled, an out- of-chain
	CANCEL message sent to a type 3 Printer LU will be rejected by SNA Server rather
	than being sent to the printer application.
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbenv kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : WINDOWS:2.11,3.0,4.0
	
	=============================================================================
	
