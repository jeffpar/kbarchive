---
layout: page
title: "Q123004: Remotely Administering SNA Server Tracing"
permalink: /kb/123/Q123004/
---

## Q123004: Remotely Administering SNA Server Tracing

	Article: Q123004
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SNA Server includes an SNATRACE tool (Win32 utility), installed into
	the Microsoft SNA Server (Common) program group, to allow an administrator to
	dynamically turn off/on all types of server-side (and Win32 SNA
	application-side) SNA Server tracing.
	
	This article describes how to remotely control SNA Server tracing using the
	SNATRACE program. When administering tracing for SNA Server 2.x, the SNATRACE
	program from 2.11 must be used. When administering tracing for SNA Server 3.0,
	the SNATRACE program from 3.0 must be used.
	
	The trace state is dynamically controlled by registry parameters on the SNA
	Server client or server computer. The SNATRACE program sets these registry
	parameters, though REGEDT32 could be used by knowledgeable SNA Server support
	personnel to remotely control SNA Server tracing.
	
	MORE INFORMATION
	================
	
	The SNA Server SNATRACE program accepts a \\servername command line parameter to
	remotely control tracing. For example:
	
	  SNATRACE \\servername
	
	allows an authorized administrator to remotely control SNA Server tracing on
	\\servername. The administrator must be able to update the registry of the
	remote computer in order to control tracing.
	
	SNA Server trace files are generated on the remote server machine and can be
	found in the <snaroot>\TRACES directory. SNA Server 2.x stores traces as
	*.TRC, which can be viewed using any text editor. SNA Server 3.0 stores traces
	as *.ATF, which can be viewed by the TRACEVWR.EXE tool installed with SNA Server
	3.0 and 4.0.
	
	Additional query words: prodsna 2.00 2.10 2.11 3.00
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
