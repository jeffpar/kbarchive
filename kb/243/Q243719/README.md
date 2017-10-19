---
layout: page
title: "Q243719: SNA Traces Are Only Deleted from %SnaRoot%&#92;Traces"
permalink: /kb/243/Q243719/
---

## Q243719: SNA Traces Are Only Deleted from %SnaRoot%&#92;Traces

	Article: Q243719
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you change the registry entry for the trace file path of a service to
	anything other than %SnaRoot%\Traces, the trace files are not deleted when you
	use the Purge All Trace Files option in the SNA Trace utility (Snatrace.exe).
	
	CAUSE
	=====
	
	The delete operation used when selecting Purge All Trace Files is different than
	the create operation used when the SNA Trace utility is started.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was first corrected in SNA Server 4.0 Service Pack Service Pack 3.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	In some cases, after you apply Service Pack 3, traces may not appear in the
	specified folder, or in the %SnaRoot%\Traces folder. If this happens, remove the
	following registry key and restart the SNA Trace utility (Snatrace.exe):
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SNA Server\CurrentVersion\Traces
	
	This key is rebuilt when the SNA Trace utility is restarted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
