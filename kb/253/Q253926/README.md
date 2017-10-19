---
layout: page
title: "Q253926: Changing SNA Trace File Directory May Not Have Any Effect"
permalink: /kb/253/Q253926/
---

## Q253926: Changing SNA Trace File Directory May Not Have Any Effect

	Article: Q253926
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SNA Server Trace program (Snatrace.exe) was updated in SNA Server 4.0
	Service Pack 3 to make the location of SNA Server traces configurable. However,
	SNA Server traces may continue to be written in the default trace location even
	after changing the path in the Trace File Directory dialog box in the SNA Server
	Trace program.
	
	This problem will occur if tracing has previously been enabled on an existing SNA
	Server 4.0 system prior to applying SNA Server 4.0 Service Pack 3.
	
	CAUSE
	=====
	
	Once tracing is enabled on a SNA Server 4.0 system, each SNA Server component
	specifies an explicit path and file name for the trace files they will generate.
	Changing the trace file directory in the SNA Server trace program does not
	change the explicit trace file paths for each of the SNA Server components, so
	trace files will continue to be written in their default trace location.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following procedure can be used to allow the trace file directory specified
	in the SNA Server Trace program to take effect:
	
	1. Delete the following Registry key:
	
	  
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA Server\CurrentVersion\Traces
	
	  This will delete all of the Registry keys under the Traces key as well.
	
	2. Run the SNA Server Trace program. This recreates the Registry keys that were
	  previously deleted without the explicit trace file paths for each SNA Server
	  component.
	
	3. If any SNA Server services were running when the previous steps were done,
	  they must be stopped and restarted before new trace files will be generated
	  for those services.
	
	MORE INFORMATION
	================
	
	The trace file location for previous versions of SNA Server could only be
	changed by modifying the Registry.
	
	Changing the trace file directory path in the SNA Server Trace program changes
	the following Registry key:
	
	  
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SNA Server\CurrentVersion\Traces\TraceFileDirectory
	
	TraceFileDirectory contains a string value that contains the path to where the
	SNA Server trace files will be written.
	
	If the SNA Server components listed under the Traces Registry key include an
	explicit path, the trace files for those components will be written in that
	specific path and not the "global" path specified in TraceFileDirectory.
	
	The Traces\SnaServr (SNA Server service) key will include Registry entries
	similar to the following when the problem described here occurs:
	
	  
	
	  InternalTraceFile1:REG_SZ:D:\SNA40\Traces\NODEINT1.ATF 
	  InternalTraceFile2:REG_SZ:D:\SNA40\Traces\NODEINT2.ATF
	  MessageTraceFile1:REG_SZ:D:\SNA40\Traces\NODEMSG1.ATF
	  MessageTraceFile2:REG_SZ:D:\SNA40\Traces\NODEMSG2.ATF
	
	A SNA Server 4.0 Service Pack 3 system that does not experience this problem will
	have a Traces\SnaServr Registry key similar to the following:
	
	  
	
	  InternalTraceFile1:REG_SZ:NODEINT1.ATF
	  InternalTraceFile2:REG_SZ:NODEINT2.ATF
	  MessageTraceFile1:REG_SZ:NODEMSG1.ATF
	  MessageTraceFile2:REG_SZ:NODEMSG2.ATF
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	
