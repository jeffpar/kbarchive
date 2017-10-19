---
layout: page
title: "Q149457: On-line Help Unavailable for Attachmate SDLC Cards in Setup"
permalink: /kb/149/Q149457/
---

## Q149457: On-line Help Unavailable for Attachmate SDLC Cards in Setup

	Article: Q149457
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the SNA Server Setup program for adding a link service, and you
	choose either the Attachmate Advanced or Attachmate SDLC card, and you select
	the on-line help icon, no help is displayed.
	
	WORKAROUND
	==========
	
	As a workaround, use either the Atmsdlc.hlp or Advsdlc.hlp file from the
	following locations:
	
	  Local Hard Drive - <snaroot>\system\hwsetup
	  SNA 2.11 CD - \i386\system\hwsetup
	  SNA 2.11 SP1 CD - \winnt\i386\server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.11 and 2.11.sp1. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: connection
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
