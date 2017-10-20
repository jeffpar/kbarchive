---
layout: page
title: "Q169489: Snabase.exe AV After You Save Configuration Changes"
permalink: /kb/169/Q169489/
---

## Q169489: Snabase.exe AV After You Save Configuration Changes

{% raw %}

	Article: Q169489
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you save changes to the configuration file using SNA Server Manager, the
	following access violation may occur in Snabase.exe:
	
	  NTSD: access violation
	  eax=0ee0a008 ebx=0b775dc8 ecx=0bd8fca0 edx=ffffffff esi=0ee0a008
	     edi=00dc0004
	  eip=6120e003 esp=0bd8fbf0 ebp=0bd8fcb0 iopl=0         nv up ei pl nz na
	     pe nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	     efl=00010202
	  snacfg!_GetDS+0x13:
	  6120e003 813e00feca00  cmp dword ptr [esi],0xcafe00
	     ds:0023:0ee0a008=????????
	
	  0:018> kb
	
	  ChildEBP RetAddr  Args to Child
	  0bd8fbf4 612057fd 00dc0004 0bd8ff15 77f46c78 snacfg!_GetDS+0x13
	  0bd8fc04 01004406 00dc0004 00000001 00000000
	     snacfg!_SnaEnumerateRecords+0x1d
	  0bd8fc28 0100e27d 010231e4 010231ec 010231e8
	     snabase!_GetBroadcastEntries+0x36
	
	CAUSE
	=====
	
	The SnaBase GetBroadcastEntries() function calls the configuration DLL without
	calling ReadLockConfig() first. If a local RPC request arrives simultaneously,
	the RPC request refreshes the config file if it is out of date. This invalidates
	the pointer to the configuration file. If the GetBroadcastEntries() has already
	pushed the old configuration file pointer to the stack, GetDS() may try to
	access the old (now invalid) file pointer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, GetBroadcastEntries calls ReadLockConfig before attempting
	to access configuration information, to ensure that the configuration file
	pointer is not invalidated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
