---
layout: page
title: "Q167968: Access Violation Causes 16-Bit Applications to Silently Quit"
permalink: /kb/167/Q167968/
---

## Q167968: Access Violation Causes 16-Bit Applications to Silently Quit

{% raw %}

	Article: Q167968
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	16-bit applications, both DOS and Windows based, run successfully for a period
	of time and then quit without cause.
	
	
	RESOLUTION
	==========
	
	Verify that VIF and VIP are not turned on at the same time. This problem can be
	avoided by disabling the Pentium Virtual Machine Extensions (VME) because VIF
	and VIP are only used by VME support. To disable the use of VME in Windows NT,
	add the following value to the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Wow
	
	2. On the Edit menu, click Add Value. Enter the following:
	
	     Value Name: DisableVme
	     Data Type: REG_SZ
	
	  (hit OK here)
	
	     Data: 1
	
	3. Click OK, and then quit Registry Editor.
	
	4. Shutdown and restart you computer.
	
	Once this value is entered and you have restarted your computer, test the
	application to verify that the Virtual Dos Machine (VDM) no longer causes an
	access violation and causes the application to quit.
	
	MORE INFORMATION
	================
	
	If you run the application under a debugger such as Ntsd.exe, the application
	will break to the debugger instead of quitting. The debugger shows that the VDM
	caused an access violation after carrying out an STI instruction (this indicates
	that the program currently running does not have high enough privilege to enable
	hardware interrupts).
	
	NTSD: access violation
	eax=00010240 ebx=0000000a ecx=00004000 edx=00000010 esi=0001573c
	edi=0000000a
	eip=000053e0 esp=0000079c ebp=000bea74 iopl=0 vip vif nv up ei pl nz na
	ponc
	cs=fe2e  ss=00a7  ds=0040  es=0000  fs=0000  gs=0000
	efl=001b0206
	fe2e:53e0 ebf8            jmp    53da
	
	0:000>kv
	ChildEBP RetAddr  Args to Child
	0000ea74 00000000 00000000 00000000 00000000 0x53e0 [Stdcall: 0]
	
	0:000> u fe2e:53e0-1
	fe2e:53df fb              sti
	fe2e:53e0 ebf8            jmp     53da
	
	Additional query words: prodnt drops out disappear stop close
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
