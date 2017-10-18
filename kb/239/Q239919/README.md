---
layout: page
title: "Q239919: Handle Leak in SnaBase When SNA API DLL Is Loaded/Unloaded"
permalink: kb/239/Q239919/
---

## Q239919: Handle Leak in SnaBase When SNA API DLL Is Loaded/Unloaded

	Article: Q239919
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server application may experience a memory and handle leak if the
	application repeatedly calls LoadLibrary and FreeLibrary on the SNA API DLL
	interface that its using. These API interfaces include RUI (Winrui32.dll), SLI
	(Winsli32.dll), APPC (Wappc32.dll) and CPIC (Wcpic32.dll). In addition to the
	application resource leaks, this behavior will also cause the SnaBase process
	handle count to increase over time, as viewed by Windows NT Performance Monitor.
	This behavior was found by an application which repeatedly loaded and unloaded
	the RUI interface (Winrui32.dll).
	
	CAUSE
	=====
	
	When the SNA API DLL is dynamically loaded and unloaded, resource leaks occurred
	in the underlying Snadmod.dll, which is statically linked to the SNA API DLLs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	This problem can be avoided if the application loads the SNA API DLL only once
	when starting, and unloads it when exiting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
