---
layout: page
title: "Q243671: How to Enable SNARAS Tracing on SNA Server 4.0"
permalink: /kb/243/Q243671/
---

## Q243671: How to Enable SNARAS Tracing on SNA Server 4.0

{% raw %}

	Article: Q243671
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to enable tracing for SNA Server Remote Access
	Service.
	
	MORE INFORMATION
	================
	
	The SNA Server 4.0 compact disc contains enhanced versions of the Snaras.dll and
	Rassna.dll files that include the capability to write important internal process
	information to a file for troubleshooting purposes. To enable SNARAS tracing,
	use the following steps:
	
	On the Server:
	
	1. Locate the Trcsna.dll and Trcras.dll files on the SNA Server 4.0 compact disc
	  corresponding to the type of system SNA Server is installed on.
	
	  For DEC Alpha processors:
	
	  Alpha\System\RASSNA\Trcras.dll
	  Alpha\System\RASSNA\RAS\Trcsna.dll
	
	  For Intel-based processors:
	
	  I386\System\RASSNA\Trcras.dll
	  I386\System\RASSNA\RAS\Trcsna.dll
	
	2. Copy the Trcsna.dll and Trcras.dll files to the %SNARoot%\System directory.
	
	3. In the %SNARoot%\System directory, rename Snaras.dll to Oldras.dll, and
	  Rassna.dll to Oldsna.dll.
	
	4. In the same folder, rename the trace versions of the SNARAS DLL files from
	  Trcsna.dll to Rassna.dll, and Trcras.dll to Snaras.dll.
	
	5. Click Start, click Shutdown, and then restart the computer to enable the
	  traces.
	
	  The trace files will be logged in the %WinntRoot%\System32 directory as
	  Snaras.trc and Rassna.trc.
	
	6. When the tracing is complete, turn off the traces by renaming the Snaras.dll
	  to Trcras.dll and Rassna.dll to Trcsna.dll. Restore the original files by
	  renaming Oldras.dll to Snaras.dll, and Oldsna.dll to Rassna.dll.
	
	7. Click Start, click Shutdown, and then restart the computer to restore the
	  system to its original state.
	
	On the Client:
	
	1. Locate the Trcsna.dll and Trcras.dll files on the SNA Server 4.0 compact disc
	  corresponding to the type of system SNA Server is installed on.
	
	  For DEC Alpha processors:
	
	  CLIENTS\WINNT\Alpha\System\RASSNA\Trcras.dll
	  CLIENTS\WINNT\Alpha\System\RASSNA\RAS\Trcsna.dll
	
	  For Intel-based processors:
	
	  CLIENTS\WINNT\I386\System\RASSNA\Trcras.dll
	  CLIENTS\WINNT\I386\System\RASSNA\RAS\Trcsna.dll
	
	2. Copy the Trcsna.dll and Trcras.dll files to the %SNARoot%\System directory.
	
	3. In the %SNARoot%\System directory, rename Snaras.dll to Oldras.dll, and
	  Rassna.dll to Oldsna.dll.
	
	4. In the same folder, rename the trace versions of the SNARAS DLL files from
	  Trcsna.dll to Rassna.dll, and Trcras.dll to Snaras.dll.
	
	5. Click Start, click Shutdown, and then restart the computer to enable the
	  traces.
	
	  The trace files will be logged in the %WinntRoot%\System32 directory as
	  Snaras.trc and Rassna.trc.
	
	6. When the tracing is complete, turn off the traces by renaming the Snaras.dll
	  to Trcras.dll and Rassna.dll to Trcsna.dll. Restore the original files by
	  renaming Oldras.dll to Snaras.dll, and Oldsna.dll to Rassna.dll.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q243784 SNARAS Traces Continually Grow In Size If Left Enabled
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
