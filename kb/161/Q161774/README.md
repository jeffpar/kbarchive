---
layout: page
title: "Q161774: Snalink.exe (SNADLC/802.2) Access Violation in Sbpa4snd()"
permalink: kb/161/Q161774/
---

## Q161774: Snalink.exe (SNADLC/802.2) Access Violation in Sbpa4snd()

	Article: Q161774
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In very rare conditions, the SNA Server 802.2 link service (supporting an SNA
	connection over Token Ring, Ethernet, or FDDI) may encounter an access violation
	(AV) leading to the following errors:
	
	- Users lose their sessions over any SNA Server connection using this link
	  service.
	
	- The following Windows NT application event log error occurs:
	
	  Event ID: 624
	  Source: SNADLC1
	  Creating dump file C:\SNA\traces\snadump.log for SNALINK.EXE
	
	- A Drwtsn32.log entry is created that indicates an application exception error
	  occurred in Snalink.dbg:
	
	     Application exception occurred:
	           App: snalink.DBG (pid=<process id>)
	           Exception number: c0000005 (access violation)
	
	     State Dump for Thread Id <thread>
	
	     eax=0019000a ebx=00620c00 ecx=00000381 edx=00000103 esi=00620d6a
	     edi=012202b5
	     eip=003d96c7 esp=003cfeac ebp=01025f28 iopl=0         nv up ei pl nz
	     na po nc
	     cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	     efl=00000206
	
	     function: sbpa4snd
	     [...]
	
	         003d96c4 8b6d00       mov   ebp,[ebp]
	  ss:0170484a=????????
	     FAULT ->003d96c7 66894504     mov   [ebp+0x4],ax
	  ss:0170484b=????
	
	CAUSE
	=====
	
	An access violation may occur if the Snadlc.dll link service formats data to
	pass to the SNA Server service while Dlc.sys passes up empty buffers with the
	total data length of a certain size. This is a rare condition that has only been
	observed at one customer site.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	and 2.11.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
