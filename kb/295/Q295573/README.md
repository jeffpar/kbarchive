---
layout: page
title: "Q295573: Random Access Violation in RPC Client in Low-Memory Conditions"
permalink: /kb/295/Q295573/
---

## Q295573: Random Access Violation in RPC Client in Low-Memory Conditions

{% raw %}

	Article: Q295573
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Remote Procedure Call (RPC) program may stop working with an attempt to use
	memory that has already been freed. When this problem occurs, you may see a call
	stack that is similar to:
	
	  
	
	  0:006> kb
	  ChildEBP RetAddr  Args to Child              
	  029dfd98 4ef9805b 00000048 4efe1724 02486a3c RPCRT4!GENERIC_OBJECT__InvalidHandle+0xe
	  029dfdb0 4ef9d3fb 1ba821b0 02539b78 029dfe48 RPCRT4!RpcBindingFree+0x46
	  029dfdd0 4efd14c9 029dff4c 02539b78 02486a28 RPCRT4!NDRCContextUnmarshall+0x5b
	  029dfdec 0057d069 029dfe44 029dff4c 02539b78 RPCRT4!NdrClientContextUnmarshall+0x26
	  029dff14 0046b626 029dff4c 029dff38 00000000 emsmta!_MtaUnbindBack+0xef [G:\MTA\src\emsmta\sysglue\mtarpc_c.c @ 585]
	  029dff8c 0046d9ce 00000000 010dfd50 00000005 emsmta!oeprfree+0x1f4 [G:\MTA\src\emsmta\sysglue\oentdmod.c @ 10354]
	  029dffb8 77f04ede 00000005 00000000 010dfd50 emsmta!sbpiwbep+0x67 [G:\MTA\src\emsmta\sysglue\sbnilnt.c @ 377]
	  029dffec 00000000 0046d976 00000005 00000000 KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	This problem occurs because a pointer to memory is being saved in an object
	(Object1). Object1 copies the pointer to another object (Object2). Both objects
	now have a pointer to the same memory location. Typically, Object1 will set its
	pointer to null (thereby releasing ownership of the memory to the second
	object). In a low-memory condition, however, Object1 does not release ownership
	of the memory that has been shared to Object2. When these objects are destroyed,
	they release the memory they point to, in this case causing the same memory
	location to be freed twice.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name   Platform
	  -------------------------------------------------
	  05/10/2001  07:36p  343,312  Rpcrt4.dll  Intel
	  05/10/2001  04:32p  602,896  Rpcrt4.dll  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
