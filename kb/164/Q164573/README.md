---
layout: page
title: "Q164573: SNA Manager Traps When Deleting Symbolic Destination Name"
permalink: /kb/164/Q164573/
---

## Q164573: SNA Manager Traps When Deleting Symbolic Destination Name

{% raw %}

	Article: Q164573
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to delete a CPI-C Symbolic Destination Name from within SNA
	Server Manager, an application exception occurs. This causes a Dr. Watson log
	error to be generated. The Drwtsn32.log file that is generated will contain
	information similar to the following:
	
	  
	
	  Application exception occurred:
	     App: exe\snaexp.DBG (pid=<process id number>)
	     When: <date> @ <time>
	     Exception number: c0000005 (access violation)
	
	  (some details omitted for clarity)
	
	  function: Ordinal3412
	       762e9c76 33c0             xor     eax,eax
	       762e9c78 8b4c2404      mov     ecx,[esp+0x4] ss:013ee36f=????????
	  FAULT ->762e9c7c 3801       cmp     [ecx],al ds:00000000=??
	       762e9c7e 740e             jz      Ordinal3412+0x18 (762e9c8e)
	       762e9c80 6bc021         imul    eax,eax,0x21
	       762e9c83 0fbe11          movsx   edx,byte ptr [ecx] ds:00000000=??
	       762e9c86 03c2            add     eax,edx
	       762e9c88 41                inc     ecx
	       762e9c89 803900         cmp     byte ptr [ecx],0x0  ds:00000000=??
	       762e9c8c 75f2             jnz     Ordinal3412+0xa (762e9c80)
	       762e9c8e c20400         ret     0x4
	
	CAUSE
	=====
	
	The problem was caused by a defect in the SNA Server Manager program.
	
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
