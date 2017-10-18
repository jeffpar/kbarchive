---
layout: page
title: "Q127740: Eicon WAN Services V3R2 Problems with SNA Server"
permalink: kb/127/Q127740/
---

## Q127740: Eicon WAN Services V3R2 Problems with SNA Server

	Article: Q127740
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following problems have been observed using SNA Server 2.0 and 2.1 with an
	X.25 connection supported by Eicon WAN Services V3R2 (over an Eicon adapter):
	
	- When SNA Server is configured to autostart, it stop responding (hangs) at
	  Windows NT start up. SNA Admin may hang indefinitely with an hourglass or
	  clients may receive an XCLOCK status in their 3270 emulator when opening a
	  session.
	
	- Problems activating PUs, or random 3270 LUs configured off an X.25 connection
	  supported by the Eicon adapter may stop responding (hang) or fail to work
	  when opened by an SNA Server 3270 client.
	
	- Problems with SNA Server error recovery when an X.25 call fails.
	
	CAUSE
	=====
	
	These problems occur with Eicon WAN Services V3R2 and V3R2a.
	
	
	RESOLUTION
	==========
	
	To correct these problems, update to Eicon WAN Services V3R2a, and obtain other
	updates to the X.25 link service (ECX25.DLL) and X.25 and HDLC protocols
	(HDLC.ELM, HDLCBIOS.ELM, X25.ELM, X25BIOS.ELM) from Eicon Corporation.
	
	
	Additional query words: prodsna 2.10 HSI 3.2 3.2a lu's
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	
