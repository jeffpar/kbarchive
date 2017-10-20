---
layout: page
title: "Q164913: Access Violations or Memory Leak May Occur with Tracing Enabled"
permalink: /kb/164/Q164913/
---

## Q164913: Access Violations or Memory Leak May Occur with Tracing Enabled

{% raw %}

	Article: Q164913
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	This article describes the following problems that were found in SNA
	Server 3.0 and corrected:
	
	1. Enabling SNA Server tracing may cause a process to encounter an access
	  violation.
	
	
	2. A memory leak may occur when SNA Server tracing is enabled.
	
	
	3. Link service internal tracing is not fully implemented.
	
	
	SYMPTOMS
	========
	
	1. Enabling SNA Server tracing may cause a process to encounter an access
	  violation.
	
	  SYMPTOMS
	
	  When you have enabled SNA Server tracing using the SNATRACE tool, the process
	  that is being traced (for example, SNA Server, SNA Print Service, SnaBase, or
	  link services) may encounter an access violation (AV). If you generate a
	  Drwtsn32.log file, the following failures may occur:
	
	  
	
	  Exception number: c0000005 (access violation)
	
	  Function: MSVCRT!rmtmp
	  FAULT ->779f8bc7 803f00           cmp     byte ptr [edi],0x0
	
	  -or-
	
	  
	
	  Exception number: c0000005 (access violation)
	
	  Function: MSVCRT!_vsnprintf+0x34
	
	
	  -or-
	
	  
	
	  Exception number: 80000003 (hardcoded breakpoint)
	
	  function: DbgBreakPoint
	  FAULT ->77f75d64 cc               int     3
	
	
	  CAUSE
	
	  The tracing code incorrectly handles a string buffer, which may lead to an
	  access violation. Also, under some timing conditions, if two processes
	  attempt to initialize tracing at the same time, an access violation may
	  occur.
	
	2. A memory leak may occur when SNA Server tracing is enabled.
	
	  SYMPTOMS
	
	  Enabling SNA Server tracing may lead to an internal memory leak, causing the
	  server to eventually run out of virtual memory. This was observed by setting
	  the trace file size to 10 MB and enabling full tracing on SNA Server, the SNA
	  Print Service, and SNA Application APPC API tracing.
	
	  CAUSE
	
	  This problem may occur when the disk I/O cannot keep up with trace creation.
	  Memory keeps growing until the system runs out of virtual memory. The
	  solution is to limit the maximum size of the trace buffer pool, which by
	  default is the same size as the multiple of the trace file size chosen in
	  SNATRACE. For example, if the trace file size is 1 MB, (1,000,000, the
	  default), with internal, message and API tracing enabled, the maximum trace
	  buffer pool is 3 x 1 MB = 3 MB.
	
	  You can use the following registry setting to define the maximum trace buffer
	  pool size:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/SnaServer/CurrentVersion/Traces/ 
	  MemoryBufferSize: REG_DWORD: <value>
	
	  NOTE: The MemoryBufferSize value must be manually created. It is not created
	  by Setup when SNA Server is installed.
	
	
	3. Link service tracing is not fully implemented.
	
	  SYMPTOMS
	
	  When enabling link service full internal tracing using SNATRACE, third- party
	  link trace statements that use the TRACEx macros are not traced to the trace
	  files.
	
	  CAUSE
	
	  The TRACEx macro statements were not converted to use the new SNA Server 3.0
	  tracing functions.
	
	RESOLUTION
	==========
	
	To resolve these problems, obtain the hotfix mentioned below. The updated
	modules are:
	
	  <Snaroot>\System\Snatrc.dll<BR/>
	  <Snaroot>\System\Dbgtrace.dll<BR/>
	  <Snaroot>\System\Snalink.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna snatrace dr watson
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
