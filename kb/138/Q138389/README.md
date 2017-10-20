---
layout: page
title: "Q138389: SNA Win 3.x Client (WNAP.EXE) Hogs CPU, Affects Some Apps"
permalink: /kb/138/Q138389/
---

## Q138389: SNA Win 3.x Client (WNAP.EXE) Hogs CPU, Affects Some Apps

{% raw %}

	Article: Q138389
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
	
	When you run the SNA Server Windows 3.x client process (WNAP.EXE), other
	CPU-intensive Windows processes do not run properly. For example, a CPU-
	intensive CAD application does not update the display in a timely fashion when
	WNAP is running.
	
	CAUSE
	=====
	
	WNAP has a loop in it that is constantly calling PeekMessage(), and then
	processing any message it finds. If there is a low-priority task trying to run
	(e.g., something like a screen-saver), that task is shut out.
	
	
	RESOLUTION
	==========
	
	WNAP.EXE and WDMOD.DLL have been modified so that it now uses GetMessage()
	instead of PeekMessage() if you add the line "PeekLoop=no" is in the [WNAP]
	section of WIN.INI. For example:
	
	  [WNAP]
	  PeekLoop=no
	
	NOTE: The default is PeekLoop=yes.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	KBCategory: kbnetwork kbinterop kbbug2.00 kbbug2.10 kbbug2.11
	KBSubcategory: ntnetserv ntconfig
	
	Additional query words: prodsna wnap yield 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
