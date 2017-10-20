---
layout: page
title: "Q240938: Access Violation in Lsass.exe on Domain Controllers"
permalink: /kb/240/Q240938/
---

## Q240938: Access Violation in Lsass.exe on Domain Controllers

{% raw %}

	Article: Q240938
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Access violation" error message may occur on a domain controller that has
	File and Print Services for NetWare (FPNW) installed. You may see a stack trace
	similar to the following sample trace in the Drwtsn32.log file after the error
	occurs:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	29f7f548  76dc1954  02774fd8 001843f0 00000000 FPNWCLNT!wcsupr+0x31
	29f7f570  76dc1715  02763090 017980f0 29f7fc93 FPNWCLNT!MNSWorkstationValidate+0xb7
	29f7f684  76dc1899  00000002 02763074 00000001 FPNWCLNT!Msv1_0SubAuthenticationRoutine2+0x564
	29f7f6b4  75b88612  00000002 02763074 00000001 FPNWCLNT!Msv1_0SubAuthenticationRoutine+0x25
	29f7f814  75b82584  00000002 02763074 00000001 MSV1_0!Msv1_0SubAuthenticationRoutine+0x1c7
	29f7fbf8  75b82d6b  01796588 00000001 00000002 MSV1_0!MsvpSamValidate+0x250
	29f7fc40  501816fd  01796588 00000001 00000002 MSV1_0!MsvSamValidate+0x55
	29f7fc94  50181bf8  00000002 00000002 02763074 NETLOGON!NlpUserValidate+0x85
	29f7fce0  50185209  02763010 02763038 02763050 NETLOGON!NetrLogonSamLogon+0x239
	29f7fe20  77e111b7  29f7fef0 0179b438 29f7fef0 NETLOGON!logon_NetrLogonSamLogon+0x18d
	29f7fe5c  77e112e6  5018507c 29f7fef0 29f7ff34 RPCRT4!DispatchToStubInC+0x34
	29f7feb0  77e11215  29f7fef0 00000000 29f7ff34 RPCRT4!?DispatchToStubWorker@RPC_INTERFACE@@AAEJPAU_RPC_MESSAGE@@IPAJ@Z+0xb0
	29f7fed0  77e1a3b1  29f7fef0 00000000 29f7ff34 RPCRT4!?DispatchToStub@RPC_INTERFACE@@QAEJPAU_RPC_MESSAGE@@IPAJ@Z+0x41
	29f7ff40  77e181e4  02762fe8 00000190 29f7ff90 RPCRT4!?ReceiveOriginalCall@OSF_SCONNECTION@@QAEHPAUrpcconn_common@@I@Z+0x14b
	
	CAUSE
	=====
	
	This behavior occurs because the wcsupr function in the stack trace is expecting
	to pass a null-terminated string as an argument. The problem occurs if, for some
	reason, it is passed a string that is not null-terminated.
	
	
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
	
	The English-version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  09/29/1999  08:53p              35,648 Fpnwclnt.dll  Intel
	  09/29/1999  08:52p              56,080 Fpnwclnt.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
