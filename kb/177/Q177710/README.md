---
layout: page
title: "Q177710: XADM: Store Stops Referencing Parent Attachment Pointer"
permalink: kb/177/Q177710/
---

## Q177710: XADM: Store Stops Referencing Parent Attachment Pointer

	Article: Q177710
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store service may terminate
	unexpectedly with an access violation. If Windows NT Server and Microsoft
	Exchange Server symbols are installed and correct, the resulting Drwtsn32.log
	produced may look similar to the following:
	
	  State Dump for Thread Id 0xb4
	
	  v0=00000000 39000003   t0=00000000 00000003   t1=00000000 00760065
	  t2=00000000 00000003   t3=00000000 00000018   t4=00000000 11ebf868
	  t5=00000000 00001000   t6=00000000 000000e3   t7=00000000 00000004
	  s0=00000000 00f7f748   s1=00000000 11ebf8a8   s2=00000000 00000001
	  s3=00000000 000003f0   s4=00000000 00000000   s5=00000000 1521e010
	  fp=00000000 14ae4db8   a0=00000000 00000000   a1=00000000 37010102
	  a2=00000000 00000003   a3=00000000 00000004   a4=00000000 0207c5c0
	  a5=00000000 11ebf868   t8=00000000 00002703   t9=ffffffff fffffff6
	  t10=00000000 00000001  t11=00000000 00000000   ra=00000000 0207d464
	  t12=ffffffff fffff739   at=00000000 0202d4f8   gp=00000000 00000000
	  sp=00000000 11ebf820 zero=00000000 00000000 fpcr=08000000 00000000
	  SoftFpcr=00000000 00000000  fir=0210acd0
	  psr=00000003
	  mode=1 ie=1 irql=0
	  function: PstreamFromPtag
	          0210aca8: 44207802 xor     t0,#3,t1
	          0210acac: e4400004 beq     t1,0210acc0  PstreamFromPtag+30
	          0210acb0: 44209801 xor     t0,#4,t0
	          0210acb4: e4200002 beq     t0,0210acc0  PstreamFromPtag+30
	          0210acb8: 47ff0400 bis     zero,zero,v0
	          0210acbc: 6bfa8001 ret     zero,(ra),1  CACHE::EcCacheOneProp+b4
	          0210acc0: a0500014 ldl     t1,14(a0)
	          0210acc4: a0100018 ldl     v0,18(a0)
	          0210acc8: 47ff0410 bis     zero,zero,a0
	          0210accc: ec400012 ble     t1,0210ad18  PstreamFromPtag+88
	  FAULT ->0210acd0: a0600000 ldl     t2,0(v0)
	          0210acd4: 44605105 bic     t2,#2,t4
	          0210acd8: 44605004 and     t2,#2,t3
	          0210acdc: a0a50008 ldl     t4,8(t4)
	          0210ace0: 48a402c4 extwl   t4,t3,t3
	          0210ace4: 44813804 xor     t3,#9,t3
	          0210ace8: f4800007 bne     t3,0210ad08  PstreamFromPtag+78
	          0210acec: a0a3002c ldl     t4,2c(t2)
	          0210acf0: 4a21f624 zapnot  a1,#f,t3
	          0210acf4: 48a1f625 zapnot  t4,#f,t4
	          0210acf8: 48821684 srl     t3,#10,t3
	          0210acfc: 48a21685 srl     t4,#10,t4
	
	  *----> Stack Back Trace <----*
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  11ebf820 0207d464 00000000 37010102 00000003 00000004
	store!PstreamFromPtag
	  11ebf820 02100ef4 00f7f748 00000000 00000001 00000004
	store!CACHE::EcCacheOneProp
	  11ebf880 02106fdc 00f7f748 00000004 00000000 00000004
	store!ATTACH::EcSetOneProp
	  11ebf8c0 02106314 151e76f0 00000000 00000000 00000004
	store!STREAM::EcFlushWriteCache
	  11ebf940 0202d500 151e76f0 00000000 00000000 00000004
	store!STREAM::~STREAM
	  11ebf960 020eee44 151e76f0 00000000 00000000 00000004 store!UNK::Delete
	  11ebf970 0215c3b4 188763f0 00000000 11ebf9f0 00000004 store!EcReleaseOp
	  11ebf9b0 02170814 188763f0 00000000 11ebf9f0 00000004 store!EcRpc
	  11ebfa50 77d33040 188763f0 188763f0 254a77c2 00003c00 store!EcDoRpc
	  11ebfa90 77d33044 188763f0 188763f0 254a77c2 00003c00
	rpcrt4!_NULL_IMPORT_DESCRIPTOR
	  11ebfa90 00000000 188763f0 188763f0 254a77c2 00003c00
	rpcrt4!_NULL_IMPORT_DESCRIPTOR
	
	  *----> Raw Stack Dump <----*
	  11ebf820  b8 4d ae 14 00 00 00 00 - 30 f9 eb 11 00 00 00 00
	.M......0.......
	  11ebf830  0d 00 01 37 00 00 00 00 - 00 00 00 00 00 00 00 00
	...7............
	  11ebf840  00 00 00 00 00 00 00 00 - 10 e0 21 15 00 00 00 00
	..........!.....
	  11ebf850  b8 4d ae 14 00 00 00 00 - f8 0e 10 02 00 00 00 00
	.M..............
	  11ebf860  f0 0d 10 02 74 6c 22 15 - 01 00 00 00 00 00 00 00
	....tl".........
	  11ebf870  ff 0f 00 00 00 00 00 00 - 01 00 00 00 00 00 00 00
	................
	  11ebf880  f0 76 1e 15 00 00 00 00 - 00 00 00 00 00 00 00 00
	.v..............
	  11ebf890  00 00 00 00 00 00 00 00 - 00 00 00 00 00 00 00 00
	................
	  11ebf8a0  e0 6f 10 02 00 00 00 00 - 02 01 01 37 00 00 00 00
	.o.........7....
	  11ebf8b0  00 3a 00 00 10 e0 21 15 - ef 41 20 15 00 00 00 00  .:....!..A
	.....
	  11ebf8c0  f0 76 1e 15 00 00 00 00 - 62 36 00 00 00 00 00 00
	.v......b6......
	  11ebf8d0  f0 f9 eb 11 00 00 00 00 - a0 0d f6 00 00 00 00 00
	................
	  11ebf8e0  00 00 00 00 00 00 01 00 - 63 36 00 00 00 00 00 00
	........c6......
	  11ebf8f0  00 00 00 00 00 00 00 00 - 18 63 10 02 00 00 00 00
	.........c......
	  11ebf900  00 00 00 00 00 00 00 00 - 6c 51 0f 02 00 00 00 00
	........lQ......
	  11ebf910  00 00 00 00 00 00 00 00 - ef 41 20 15 00 00 00 00  .........A
	.....
	  11ebf920  00 00 00 00 00 00 00 00 - 2c 51 0f 02 00 00 00 00
	........,Q......
	  11ebf930  02 01 01 37 00 00 00 00 - 00 3a 00 00 10 e0 21 15
	...7.....:....!.
	  11ebf940  f0 76 1e 15 00 00 00 00 - 62 36 00 00 00 00 00 00
	.v......b6......
	  11ebf950  04 d5 02 02 00 00 00 00 - 63 36 00 00 00 00 00 00
	........c6......
	
	CAUSE
	=====
	
	When instantiating a new cache for copying an attachment object, the pointer to
	the source attachment object was being used rather than the pointer to the
	destination attachment object. When accessing the memory location of the parent
	object of the attachment (based on the pointer to the source attachment object),
	it is possible that this memory was already freed. If the memory was freed, the
	store access violates and terminates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: crash hang GPF general protection fault
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
