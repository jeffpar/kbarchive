---
layout: page
title: "Q231748: XADM: Pattern in Address in SMTP Messages Causes Store to Crash"
permalink: /kb/231/Q231748/
---

## Q231748: XADM: Pattern in Address in SMTP Messages Causes Store to Crash

	Article: Q231748
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Information Store service stops responding
	(crashes) when processing a message from the Internet.
	
	The call stack when the crash occurs is similar to the following:
	
	FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	06ebf654  004fb02e  0716cb2c fffff45c 0716bf95 STORE!CmcvtrHdr::ulSkipComment+0x15
	06ebf670  004fae3c  0716cb2c fffff45c 0716d348 0x004fb02e
	06ebf6ac  00466328  00000000 fffffff3 00000000 STORE!CmcvtrHdrAddress::HrExtractAddress+0x95402
	06ebf740  004b817b  0716b5a8 0716cdd8 0716bf7f STORE!CmcvtrHdrAddress::HrExtractRecips+0x13a
	06ebf75c  004284db  0716b5a8 0716cdd8 0716bf7f STORE!CmcvtrHdrCc::hrExtract+0x20
	06ebf78c  0045d431  0716af31 00000162 06ebf7b4 STORE!CINETextr::hrExtract+0x73
	0716b400  00fd2eb8  00000001 00688cd8 0716ab18 STORE!CConvertStream::Write+0x69
	
	CAUSE
	=====
	
	The following process illustrates how this behavior occurs:
	
	1. CmcvtrHdrAdress::HrExtractRecips is called to extract the To and Cc
	  recipients.
	
	2. A comment in the Address field is excluded by the DeleteHeaderComments
	  function, but the function deletes the comment in place and does not clear
	  the rest of field. So garbage remains in the field. For example,
	
	  "mchiba (M,Chiba); "
	
	becomes
	
	  "mchiba ; ,Chiba); "
	
	3. HrExtractRecips calls HrExtractAddress to extract an address from the header.
	
	4. In HrExtractAddress, the code mishandles the end of field, and cbEOH becomes
	  -1.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Store.exe   | 5.5.2607.0 | 
	+--------------------------+
	| Mdbmsg.dll  | 5.5.2607.0 | 
	+--------------------------+
	| Gapi32.dll  | 5.5.2607.0 | 
	+--------------------------+
	| Netif.dll   | 5.5.2607.0 | 
	+--------------------------+
	| Dsamain.exe | 5.5.2607.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
