---
layout: page
title: "Q171658: Windows 95 3270 Applet Fails if Directory Name Contains a Space"
permalink: /kb/171/Q171658/
---

## Q171658: Windows 95 3270 Applet Fails if Directory Name Contains a Space

{% raw %}

	Article: Q171658
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you start the 3270 applet that ships with the SNA Windows 95 client, the
	applet may report back an error that the SNA Base was not loaded. The applet
	experiences a page fault and stops responding.
	
	CAUSE
	=====
	
	Snakrnl.dll is not correctly handling the space character in the pathname of the
	SNA client application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Below is an internal trace where the Regname should be set to Win3270.exe.
	
	  fffd080f|fffd1a87 \semcreg.c 602 GetTransportBase Searching
	     TransportBase
	  from registry, default: 0
	  fffd080f|fffd1a87 \semcinit.c 2638 GetRegname Module file name:
	     C:\PROGRAM
	  FILES\SNA95\SYSTEM\WIN3270.EXE
	  fffd080f|fffd1a87 \semcinit.c 2685 GetRegname Env now: PROGRAM
	  FILES\SNA95\SYSTEM\WIN3270.EXE
	  fffd080f|fffd1a87 \semcinit.c 2709 GetRegname Regname is set to PROGRAM
	  fffd080f|fffd1a87 \semcinit.c 2734 GetRegname Service already running
	     with this name: PROGRAM
	  fffd080f|fffd1a87 \snadmod.c 229 sbpuinit DMOD init failed !
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
