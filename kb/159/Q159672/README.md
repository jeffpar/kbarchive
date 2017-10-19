---
layout: page
title: "Q159672: How To Find the Trap Frame If It Is Corrupt"
permalink: /kb/159/Q159672/
---

## Q159672: How To Find the Trap Frame If It Is Corrupt

	Article: Q159672
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the trap frame is corrupt or cannot be found when completing a debugging
	session, use the method detailed below to determine its location.
	
	MORE INFORMATION
	================
	
	Dump the first ChildEBp's address on the stack using the dd command. Continue to
	dump until you see two 23's back-to-back. After you run into this line of the
	dump, subtract x30 from the address at the beginning of that line and run a
	!trap against the results.
	
	For example:
	
	KD> kb
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	fdfa4d3c  80121022  00000000 00000000 00000000 NT!KiTrap0E+0x252
	
	KDx86> dd fdfa4d3c
	0xFDFA4D3C  fef26ba8 fbde3200 00000000 00000000 .k...2..........
	0xFDFA4D4C  00000000 00104601 fdfa4d80 80104655 .....F...M..UF..
	0xFDFA4D5C  fef26ba8 fef26c08 fef26ba8 fbde3260 .k...l...k..`2..
	0xFDFA4D6C  00000000 00000023 00000023 00000400 ....#...#.......
	
	Sequence of 00000000 00000023 00000023 starts at 0xFDFA4D6C.
	
	KD> !trap FDFA4D3C
	eax=00326b08 ebx=00022500 ecx=e18f6dc0 edx=00000400 esi=00000000
	edi=004f2118
	eip=80121022 esp=fdfa4db0 ebp=fdfa4dfc iopl=0         nv up ei pl nz na po
	cy
	vip=0    vif=0
	cs=0008  ss=0010  ds=0023  es=0023  fs=0030  gs=0000
	efl=00010207
	ErrCode = 00000000
	
	NOTE: Another way of getting the trap frame is to do a dump on EBP-30 and dump
	from this address until you get to the sequence of 00000023 00000023. From this
	point on its just like the first example.
	
	Additional query words: debugref
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
