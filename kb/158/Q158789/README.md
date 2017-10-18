---
layout: page
title: "Q158789: Unexpected DRDA Reply Codepoint X.'220'C"
permalink: kb/158/Q158789/
---

## Q158789: Unexpected DRDA Reply Codepoint X.'220'C

	Article: Q158789
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This symptom occurs when you are running Office 95 on Windows NT 3.51. When you
	set up the ODBC Demo using the AS400 demo link service, the following message
	appears:
	
	  Unexpected DRDA reply codepoint X.'220'c"
	  Please update \SNA\SYSTEM\demoobdc.scr file
	  from \\truth\public\win95\demoodbc\new\demoodbc.scr.
	
	CAUSE
	=====
	
	The original script file supported only Office 4.0 and not Office 95.
	
	WORKAROUND
	==========
	
	Obtain the updated \SNA\SYSTEM\demoobdc.scr file referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and
	2.11.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: sna 220
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	
	=============================================================================
	
