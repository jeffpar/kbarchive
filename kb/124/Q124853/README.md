---
layout: page
title: "Q124853: STOP Message with SFMATALK.SYS"
permalink: /kb/124/Q124853/
---

## Q124853: STOP Message with SFMATALK.SYS

{% raw %}

	Article: Q124853
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Servers running Services for Macintosh may stop running and a STOP message may
	appear. This appears to be most likely with MS-DOS and Windows clients printing
	to Macintosh printers.
	
	MORE INFORMATION
	================
	
	This problem can be identified in the kernel debugger by the following (after
	obtaining the trap frame address):
	
	kd> !trap fef97c84
	eax=00000700 ebx=ffffff01 ecx=00000040 edx=00595b02 esi=206b7441
	edi=00000001
	
	eip=80124da9 esp=fef97cf8 ebp=fef97d34 iopl=0         nv up ei pl nz na pe
	nc
	
	cs=0008  ss=0010  ds=0023  es=0023  fs=0030  gs=0000
	efl=00010202
	
	ErrCode = 00000000
	80124da9 393438           cmp     [eax+edi],esi
	
	kd> !kb
	KD: Unable to load debug information for 0x00000524
	KD: unloading "0x00000524" (deferred)
	ChildEBP RetAddr  Args to Child
	fef97d00 801012d4 206b7441 00000060 ffffffff NT!_ExpRemovePoolTracker+0x49
	fef97d34 fc997320 ffb49768 ffb4976c fc996631 NT!_ExFreePool+0x15a
	fef97d40 fc996631 ffb4976c fef97dd0 ffb49794 sfmatalk!_AtalkFreeMemory+0x21
	fef97d60 fc99ad9e ffb4976c 00000000 ffac6470 sfmatalk!_AtalkDdpDeref+0xfa
	fef97d78 fc99cce7 ffb4976c 00000000 00000000
	sfmatalk!_AtalkDdpCloseAddress+0x5f
	fef97d98 fc9a0100 ffac630c 00000000 00000000
	sfmatalk!_AtalkAtpCloseAddress+0x84
	fef97db0 fc99140b ffaac14c fc99bf79 ff0981d8
	sfmatalk!_AtalkPapCloseAddress+0x4f
	fef97dd0 fc990df3 ff0981d8 ff098248 feffc0f8
	sfmatalk!_AtalkTdiCloseAddress+0x1c3
	fef97dec 80107aea feffc040 ff0981d8 ff0981d8
	sfmatalk!_AtalkDispatchClose+0x5
	1
	fef97e00 80108b7f ff095f50 ffae0140 00000000 NT!IofCallDriver+0x38
	fef97e34 80147049 ffae0140 ffae010c ffae0108 NT!_IopDeleteFile+0x149
	fef97e54 8010560e ffae0140 ffae0140 ffae0108
	NT!_ObpRemoveObjectRoutine+0xd7
	
	fef97e68 8010b30d fef97e98 fef97e98 fef97f14 NT!ObfDereferenceObject+0x28
	fef97e8c 801385c3 00000524 801042e4 ffacdd68 NT!_NtClose+0x120
	fef97e8c 8012a6d3 00000524 801042e4 ffacdd68 NT!_KiSystemService+0x83
	fef97f0c 00000524 80405a50 ff04a6a8 fcae8710 NT!_ZwClose+0xb
	
	The key points of information are:
	eax=00000700
	edi=00000001
	Top of stack=NT!_ExpRemovePoolTracker+0x49
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt sfm ntstop blue screen trap
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
