---
layout: page
title: "Q182797: XADM: Directory Replication Stops in Low Memory Condition"
permalink: /kb/182/Q182797/
---

## Q182797: XADM: Directory Replication Stops in Low Memory Condition

	Article: Q182797
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user is sending a message, the directory replication service stops
	responding in low memory condition. The Drwtsn32.log file may contain the
	following:
	
	State Dump for Thread Id  0x101
	eax=00000000 ebx=02b4f298 ecx=00000000 edx=00340548 esi=02b4f298
	edi=6df4a05d
	eip=6df44029 esp=02e1ef2c ebp=02e1ef4c iopl=0         nv up ei pl zr na po
	nc
	cs=001b  ss=0023  ds=0023  es=0023  fs=003b  gs=0000
	efl=00000246
	
	function: <no symbols>
	       6df44011 8bec             mov     ebp,esp
	       6df44013 83ec14           sub     esp,0x14
	       6df44016 53               push    ebx
	       6df44017 56               push    esi
	       6df44018 57               push    edi
	       6df44019 894df0           mov     [ebp-0x10],ecx
	ss:033cd86e=????????
	       6df4401c e900000000       jmp     6df44021
	       6df44021 8b4508           mov     eax,[ebp+0x8]
	ss:033cd86e=????????
	       6df44024 8b4004           mov     eax,[eax+0x4]
	ds:005ae922=????????
	       6df44027 33c9             xor     ecx,ecx
	FAULT ->6df44029 668b4802         mov     cx,[eax+0x2]
	ds:005ae923=????
	       6df4402d 81f9ff030000     cmp     ecx,0x3ff
	       6df44033 0f8e0d010000     jle     6df44146
	       6df44039 e900000000       jmp     6df4403e
	       6df4403e 8b4508           mov     eax,[ebp+0x8]
	ss:033cd86e=????????
	       6df44041 8b4004           mov     eax,[eax+0x4]
	ds:005ae922=????????
	       6df44044 33c9             xor     ecx,ecx
	       6df44046 668b4802         mov     cx,[eax+0x2]
	ds:005ae923=????
	       6df4404a f6c580           test    ch,0x80
	       6df4404d 0f8479000000     je      6df440cc
	       6df44053 e900000000       jmp     6df44058
	       6df44058 8b4508           mov     eax,[ebp+0x8]
	ss:033cd86e=????????
	
	Stack back trace may look like this:
	
	*----> Stack Back Trace <----*
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	02e1ef4c 6df4431a 02ba1f18 6df4a05d 02b4f298 02b4f298 drax400!<no symbols>
	02e1ef70 6df430b1 02ba1f18 6df4a05d 02b4f298 02b4f298 drax400!<no symbols>
	02e1efc0 6df43306 02b91950 6df4a05d 02b4f298 02b4f298 drax400!<no symbols>
	02e1f010 6df43306 02b93148 6df4a05d 02b4f298 02b4f298 drax400!<no symbols>
	02e1f060 6df43306 02ba2328 6df4a05d 02b4f298 02b4f298 drax400!<no symbols>
	02e1f0b0 6df46214 02b9c318 6df4a05d 02b4f298 02b4f298 drax400!<no symbols>
	02e1f0dc 6df4208c 00000159 0000007f 02e1f128 0058f314 drax400!<no symbols>
	02e1f0fc 6df415a9 02e1f154 02e1f128 6df4cdc8 0058f314 drax400!<no symbols>
	02e1f16c 0044baa2 003b06b4 03bf5110 00000088 02e1f5b8 drax400!<no symbols>
	02e1f2f0 0044be3b 003b06b0 03bf5110 02e1f600 02e1f5b8 dsamain!<no symbols>
	02e1f814 0041f0bd 003b06b0 02b8f4b8 00038489 00000000 dsamain!<no symbols>
	02e1fcfc 0041c4d1 003b0588 02b8f4b8 00000000 02b8f49c dsamain!<no symbols>
	02e1ff38 0041c9dc 02b8f480 0058f314 02b4f298 02b4f298 dsamain!<no symbols>
	02e1ff84 10219d84 00000000 0058f314 0058f505 02b4f298 dsamain!<no symbols>
	02e1ffb8 77f06bd7 02b4f298 0058f314 0058f505 02b4f298 !<no symbols>
	02e1ffec 00000000 00000000 00000000 00000000 00000000 kernel32!<no
	  symbols>
	00000000 00000000 00000000 00000000 00000000 00000000 dsamain!<no symbols>
	
	CAUSE
	=====
	
	The function is allocating buffer for OM_OBJECT. However, it fails with an
	insufficient memory error due to the memory shortage. So the buffer is actually
	not allocated. Finally, the directory service stops by releasing this
	unallocated buffer area.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
