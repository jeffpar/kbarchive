---
layout: page
title: "Q165851: Support SNA Server 3270 Applet Keyboard Type-Ahead"
permalink: /kb/165/Q165851/
---

## Q165851: Support SNA Server 3270 Applet Keyboard Type-Ahead

	Article: Q165851
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 3270 applet does not support keyboard type-ahead. This prevents a
	user from entering data while the 3270 session is in an inhibited state.
	
	CAUSE
	=====
	
	The SNA Server 3270 applet does not support keyboard type-ahead.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem in the Windows
	NT, Windows 95, and Windows 3.x 3270 applet. To resolve this problem, obtain the
	hotfix mentioned below.
	
	The 3270 applet now supports type-ahead by default. Keys entered while input is
	inhibited are queued and then processed when the input inhibit flag is cleared.
	Up to 256 keys may be queued. The type-ahead queue is cleared without processing
	the keys if the user presses the RESET, SYSREQ, or ATTN keys. To disable the
	type-ahead capability, edit the Win.ini file in the Windows directory as
	follows:
	
	  [SnaServerWin3270]
	     typeahead=0
	
	Setting typeahead=0 disables type-ahead support. If this entry is not configured,
	or if typeahead=1, then type-ahead is enabled.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: type-ahead typeahead
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
