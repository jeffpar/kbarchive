---
layout: page
title: "Q169707: XADM: AV in Mad.exe w/ 20 or More IP Addresses for NIC"
permalink: /kb/169/Q169707/
---

## Q169707: XADM: AV in Mad.exe w/ 20 or More IP Addresses for NIC

	Article: Q169707
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you have more than 20 IP addresses defined for the network interface card
	(NIC), the System Attendant may raise a general protection fault (GPF),
	resulting in a Drwtsn32.log similar to the one below:
	
	  Application exception occurred:
	     App: mad.dbg (pid=277)
	     When: 7/9/1997 @ 14:27:56.867
	     Exception number: c0000005 (access violation)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	From the Dr. Watson log
	
	  State Dump for Thread Id 0x121
	
	  eax=00000000 ebx=00000001 ecx=011dffdc edx=00000018 esi=023611f0
	  edi=00000000
	  eip=77f674e6 esp=011dfee8 ebp=00000000 iopl=0         nv up ei pl zr na
	  po
	  nc
	  cs=001b  ss=0023  ds=0023  es=0023  fs=0038  gs=0000
	  efl=00000246
	
	  function: RtlLeaveCriticalSection
	     77f674e0 8b542404         mov     edx,[esp+0x4]
	  ss:020ee8ef=????????
	     77f674e4 33c0             xor     eax,eax
	  FAULT ->77f674e6 ff4a08           dec     dword ptr [edx+0x8]
	  ds:00f0ea1e=????????
	     77f674e9 7525             jnz     RtlLeaveCriticalSection+0x30
	  (77f67510)
	     77f674eb 89420c           mov     [edx+0xc],eax
	  ds:00f0ea1e=????????
	     77f674ee f0ff4a04         lock   dec dword ptr [edx+0x4]
	  ds:00f0ea1f=????????
	     77f674f2 7d03             jge     RtlLeaveCriticalSection+0x17
	  (77f674f7)
	     77f674f4 c20400           ret     0x4
	     77f674f7 52               push    edx
	     77f674f8 e873580000       call    RtlpUnWaitCriticalSection
	  (77f6cd70)
	     77f674fd 33c0             xor     eax,eax
	     77f674ff c20400           ret     0x4
	     77f67502 2e8bc0           mov     eax,cs:eax
	     77f67505 2e8bc0           mov     eax,cs:eax
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00000000 00000000 00000000 00000000 00000000 00000000
	  ntdll!RtlLeaveCriticalSection
	
	From the user.dmp:
	
	  kb
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  011dfee4  6c0bab9c  00000018 00000000 02361fb0
	  NTDLL!RtlLeaveCriticalSection+0x6
	  011dff00  6c0baa4e  00000000 02360aec 6c0bd870
	  EMSMDB32!CNCT::EcAllocateNotification+0x11c
	  011dff0c  6c0bd870  6c0a17e8 0085128c 02360aec
	  EMSMDB32!RPC::EcAttemptPush+0xe
	  011dff28  6c0bd700  00000006 0085128c 80000008
	  EMSMDB32!FOLDOBJ::EcGetTable+0x130
	  011dff48  004137cc  02360aec 80000008 0085128c
	  EMSMDB32!FOLDOBJ::GetContentsTable+0x70
	  011dff88  00412667  000000b4 00851100 00000000
	  MAD!CMapiSession::ScInitInbox+0xdc
	  011dffa0  0040f6d3  011dffec 00310025 0061004c
	  MAD!CMapiSession::ScConnectMailbox+0x47
	  011dffb4  0040f649  77f04f2c 00851100 00310025
	  MAD!CMapiSession::DwProcessInbox+0x83
	  011dffb8  77f04f2c  00851100 00310025 0061004c
	  MAD!CMapiSession::DwProcessInboxStatic+0x9
	  011dffec  00000000  0040f640 00851100 00000000
	  KERNEL32!BaseThreadStart+0x51
	
	
	Additional query words: IIS Crash
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
