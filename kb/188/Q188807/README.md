---
layout: page
title: "Q188807: XADM: Information Store Crashes While Client Downloads POP3 Mail"
permalink: /kb/188/Q188807/
---

## Q188807: XADM: Information Store Crashes While Client Downloads POP3 Mail

	Article: Q188807
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store crashes as a POP3 user downloads
	mail.
	
	CAUSE
	=====
	
	During the extraction of the message header, a call to GetNamesFromIDs is made.
	This call returns a warning that is ignored. In this instance, the data pointer
	is set to PT_ERROR because one of the properties in the requested set cannot be
	resolved (the Exchange database engine returned an error indicating the record
	was not found).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	
	
	MORE INFORMATION
	================
	
	The fix for this case is to simply check for the null pointer in the return data
	from GetNamesFromIDs.
	
	For more information on the API call GetNamesFromIDs, see the Platform SDK.
	
	The stack on this particular crash will be similar to the one below:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  1403fd04  0040bc7d  ffffffff 00000006 004b6490
	   STORE!CMAPIextr::hrExtractHdr+0x9c771
	  1403fd10  004b6490  01381900 00000000 0043d2fc
	   STORE!MIDL_user_allocate+0xa
	  1403fd30  0043d0b3  00000000 00000001 0138c8c0
	   STORE!CMAPIextr::hrExtract+0x11
	  1403fd40  00440472  0042c865 0138c8c0 0138dad0
	   STORE!CINETemtr::hrStartMessage+0x23
	  1403fd44  0042c865  0138c8c0 0138dad0 00000400
	   STORE!CmcvtrBptStart::hrEmit+0x9
	  1403fd6c  0042c78b  0138e180 00000400 1403fde0
	   STORE!CINETemtr::hrEmit+0x99
	  1403fd88  6fff1921  6fff1965 00000003 00000001
	   STORE!CConvertStream::Read+0x5b
	  1403fdb8  00480c09  01387ba0 0138e180 00000400
	   EXCHMEM!MpHeapAlloc+0x101
	  1403fe90  00480a9c  0000000a 9cefde00 ffffffff
	   STORE!POP3CON::EcRenderMessage+0x12e({...})
	  1403feb4  004809f6  0000000a 9cefde00 ffffffff
	   STORE!POP3CON::EcSendMessage+0x47({...})
	  1403fed4  00462084  0000002c 77f05140 01387df0
	   STORE!POP3CON::EcRetr+0x91
	  1403feec  00461b2b  00000004 0000002c 01387610
	   STORE!POP3CON::OnTransactionCmd+0xa2
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
