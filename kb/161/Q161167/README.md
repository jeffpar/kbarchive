---
layout: page
title: "Q161167: Application Exception in SETUP.EXE if CleanSweep 3.0 Installed"
permalink: /kb/161/Q161167/
---

## Q161167: Application Exception in SETUP.EXE if CleanSweep 3.0 Installed

{% raw %}

	Article: Q161167
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running SNA Server Setup results in a Dr. Watson error if CleanSweep 3.0 is
	installed on the Windows NT Server. The DRWTSN32.LOG will contain information
	similar to the following:
	
	  Application exception occurred:
	  App: exe\setup.dbg (pid=73)
	  When: 12/13/1996 @ 15:47:40.208
	  Exception number: c0000005 (access violation)
	
	This problem occurs on both Windows NT Server 3.51 and 4.0.
	
	CAUSE
	=====
	
	The application exception in SNA Server's Setup program occurs if Quarterdeck's
	CleanSweep Version 3.0 is installed on the Windows NT Server where SNA Server is
	being installed.
	
	Installing CleanSweep V3.0 after SNA Server is installed results in the same
	problem if SNA Server Setup is executed to reconfigure or remove SNA Server.
	
	RESOLUTION
	==========
	
	The current solution is to remove CleanSweep V3.0 from Windows NT servers that
	will be running SNA Server version 2.1, 2.11, or 2.11 SP1. The problem does not
	occur with SNA Server 3.0.
	
	
	CleanSweep is manufactured by Quarterdeck Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodsna trap virus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
