---
layout: page
title: "Q137308: SNA Server Windows 3.x APPC Display Call May Cause GP Fault"
permalink: /kb/137/Q137308/
---

## Q137308: SNA Server Windows 3.x APPC Display Call May Cause GP Fault

	Article: Q137308
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Windows 3.x program calls the APPC DISPLAY verb and uses the
	CSEXTNIDCSLISTND option to return a list of active SNA Servers in the domain,
	the program may encounter an application exception in WINMGT.DLL, WDMOD.DLL,
	application DLL, or may cause the computer to stop responding (hang). For
	backwards compatibility, SNA Server included the APPC Display verb
	CSEXTNIDCSLISTND for applications written to talk to IBM ES for OS/2 version
	1.0.
	
	This problem occurs only if there are no SNA Servers in the domain that are
	configured to support a Netview connection.
	
	CAUSE
	=====
	
	The winmgt calls the SNAReleaseBuffer with a random memory address and releases
	a random memory segment (stack, dgroup or code).
	
	RESOLUTION
	==========
	
	Microsoft has updated the file WINMGT.DLL to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna 2.11 gpf general protection fault gp
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
