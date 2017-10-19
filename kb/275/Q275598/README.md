---
layout: page
title: "Q275598: XCON: Invalid Characters Cause Information Store Crash"
permalink: /kb/275/Q275598/
---

## Q275598: XCON: Invalid Characters Cause Information Store Crash

	Article: Q275598
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a newsfeed is running on your Exchange Server computer, the information store
	may stop unexpectedly because of an access violation.
	
	If you enable Dr. Watson, you may see a call stack that is similar to the
	following call stack:
	
	  
	
	  ChildEBP RetAddr  Args to Child
	  13d1fb34 005dfccd 11f424c1 11f2e888 13d1fbb8 store!HashMsgId+0x10
	  13d1fb80 00588e7d 11f45100 11f0d008 13d1fbb8 store!EcFabricateConvProps+0x195
	  13d1fbd4 00441155 01123410 0067fc18 11f2e8d0 store!OMSG__EcFixConversationProps+0x12e
	  13d1fc14 00587693 01123410 061e0005 00000000 store!OMSG__EcDoPreSaveChangesWork+0x3f8
	  13d1fdc0 0052acfa 021e0000 11f42b00 00000001 store!OMSG__EcNNTPPost+0x37c
	  13d1fe60 006185e3 11f2e888 00000001 11f23968 store!EcSaveNntpArticle+0x728
	  13d1fef8 006179c2 11ef1720 0000021e 00000000 store!NNTPCON__CbReadArticle+0x58f
	  13d1ff14 6fcc59f6 11ef1720 00000222 11ef16c8 store!NNTPCON__CbCommand+0xb2
	  13d1ff44 6fcc5de9 00000222 11ef16b8 77f05104 netif!EVTLOG__~EVTLOG+0x2696
	  00000001 00000000 00000000 00000000 00000000 netif!EVTLOG__~EVTLOG+0x2a89
	
	CAUSE
	=====
	
	This problem can occur if the newsfeed receives news articles with characters
	that are not valid in the references field. The data contains a control
	sequence, which is not valid; the information store cannot process the data.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.16 | 
	+-------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: References NNTP Newsfeed store crash
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
