---
layout: page
title: "Q178493: SNA Server Status Shows &quot;Off Line&quot; Even Though It's Active"
permalink: /kb/178/Q178493/
---

## Q178493: SNA Server Status Shows &quot;Off Line&quot; Even Though It's Active

{% raw %}

	Article: Q178493
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading to SNA Server 3.0 Service Pack 2, or upgrading to or installing
	SNA Server 4.0, SNA Manager may show the SNA Server (or TN3270, TN5250 or Print
	Service) status as "Off Line" even though the service(s) may be running
	correctly.
	
	The onset of the "Off Line" status normally coincides with an access violation in
	the SNA Manage Agent service (mngagent.exe), though sometimes the service does
	appear to be running, the service fails to stop. When the service fails with an
	access violation, the following symptoms occur:
	
	- The SNA Manage Agent service may no longer be running
	
	- The following entry may appear in the <ntroot>\drwtsn32.log file:
	
	 Application exception occurred:
	         App: exe\mngagent.dbg (<process id>)
	        Exception number: c0000005 (access violation)
	
	 [...]
	
	 function: RtlDestroyHeap
	       77f7d339 83c40c           add     esp,0xc
	       77f7d33c 57               push    edi
	       77f7d33d e83af00000       call    RtlpNtEnumerateSubKey+0x312a 
	       77f7d342 c6451400         mov     byte ptr [ebp+0x14],0x0      
	       77f7d346 8b4d08           mov     ecx,[ebp+0x8]          
	       77f7d349 0fb707           movzx   eax,word ptr [edi]         
	       77f7d34c 294128           sub     [ecx+0x28],eax         
	       77f7d34f 8b4e08           mov     ecx,[esi+0x8]          
	       77f7d352 8b460c           mov     eax,[esi+0xc]          
	       77f7d355 3bc8             cmp     ecx,eax
	  FAULT ->77f7d357 8908             mov     [eax],ecx 
	
	  *----> Stack Back Trace <----*
	
	  Function Name
	  ntdll!RtlDestroyHeap 
	  ntdll!LdrGetDllHandle 
	  ntdll!RtlAllocateHeap 
	  msvcrt!realloc 
	  ws2_32!getservbyname 
	  ws2_32!gethostname 
	  snaip!BuildNosBlock  
	  snadmod!BuildActiveNosBlocks  
	  snadmod!SendDatagramTo  
	  snamanag!SendDomainMailslot  
	  snamanag!SNAStopService  
	  mngsna!CNodeServe::OnCommand  
	  mngbase!CNotifyQueue::Dispatch  
	  mngbase!CNotifyQueue::ProcessWait  
	  mngsna!DoMngSna
	
	CAUSE
	=====
	
	In some cases, the SNA Manage Agent was not allocating sufficient memory to hold
	management status information, causing internal buffers to be overwritten. This
	problem was causing memory heap corruption within the Manage Agent service which
	could cause the service to deadlock or fail with an access violation.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 Service Pack 2
	and 4.0. This problem was corrected in the latest SNA Server versions 3.0 and
	4.0 U.S. Service Packs. For information on obtaining these Service Packs, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
