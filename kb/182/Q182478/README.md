---
layout: page
title: "Q182478: XADM: Information Store Crashes Attempting to Deliver Message"
permalink: /kb/182/Q182478/
---

## Q182478: XADM: Information Store Crashes Attempting to Deliver Message

	Article: Q182478
	Product(s): Microsoft Exchange
	Version(s): 4.0,4.0 SP3,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP3, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may terminate unexpectedly with
	a stack dump similar to the following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  03fbefcc  0215dd56  022d0690 00000000 0000000d 0x10233a58
	  03fbf00c  021b236b  77fbff76 c0000034 00000000
	  STORE!OMSG::FSchdpMsgClass+0x126(...)
	  03fbf150  021aeb63  03fbf290 00000000 77fbff76
	  STORE!EcDoForwardAction+0x7db(0x03FBF290, 0x00000000)
	  03fbf2f4  021bc3d1  0294466c 0294ed3c 0f875384
	  STORE!EcDoDeliveryRules+0xb43(0x0294466C, 0x0294ED3C, 0x0F875384,
	  0x00000409, 0x0F8730A4, 0x03FBF540, 0x03FBF674, 0x03FBF5E8, 0x0F875DD4,
	  0x03FBF464)
	  03fbf374  0223e515  0294466c 0294ed3c 0f875384
	  STORE!EcDoPrivateFolderRules+0x271(0x0294466C, 0x0294ED3C, 0x0F875384,
	  0x00000409, 0x0F8730A4, 0x03FBF540, 0x03FBF674, 0x03FBF5E8, 0x03FBF5A4,
	  0x03FBF464)
	  03fbf68c  02259128  0f8730a4 0294ed3c 00000000
	  STORE!EcDoDeliverMessage+0x1525(0x0F8730A4, 0x0294ED3C, 0x00000000,
	  0x0294466C, 0x0F8727D4, 0x00000001, 0x00000002, 0x00000002, 0x0000,
	  0x00000000, 0x03FBFB04, 0x0F8730F4)
	  03fbf7ec  02253ed2  0295fc2c 0f871f2c 03fbf998
	  STORE!EcDoLocalDelivery+0x8c8(0x0295FC2C, 0x0F871F2C, 0x03FBF998,
	  0x0294F934, 0x03FBFDCC, 0x03FBFB04, 0x0F87226C, 0x0F871E24, 0x0000000c,
	  0x0F871E9C, 0x00000000)
	  03fbf9cc  02252b81  0295fc2c 03fbfaf4 00000000
	  STORE!EcCreateOMSubmit+0x8b2(0x0295FC2C, 0x03FBFAF4, 0x00000000,
	  0x002F05C0, 0x03FBFAF0, 0x0294F934, 0x03FBFDCC, 0x03FBFAFC, 0x03FBFB04,
	  0x03FBFE04, 0x03FBFADC, 0x03FBFB00)
	  03fbfb2c  0225167a  0295fc2c 00000000 002f05c0
	  STORE!EcSendMessage+0x1c1(0x0295FC2C, 0x00000000, 0x002F05C0,
	  0x0294F934, 0x03FBFDCC, 0x03FBFF10, 0x03FBFE04, 0x03FBFCF4)
	  03fbff38  0217b0fb  0294176c 00060004 77fbff76
	  STORE!FStartSend+0x105a(0x0294176C, 0x00060004)
	  03fbffb8  77f46c2e  00000000 77fbff76 c0000034
	  STORE!EcProcessTask+0x2db(0x00000000)
	  03fbffec  00000000  00000000 00000000 00000000
	  KERNEL32!BaseThreadStart+0x61
	
	CAUSE
	=====
	
	This crash occurs when the information store attempts to deliver a message with
	an empty message-class attribute. The function STORE!OMSG::FschdpMsgClass passes
	a null pointer to _strnicmp, which causes the crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0, SP1 and SP2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: IS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange400SP3
	Version           : :4.0,4.0 SP3,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
