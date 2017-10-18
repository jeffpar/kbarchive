---
layout: page
title: "Q281743: XCON: Internet Mail Service Dr. Watson Error"
permalink: kb/281/Q281743/
---

## Q281743: XCON: Internet Mail Service Dr. Watson Error

	Article: Q281743
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Internet Mail Service starts, an unexpected Dr. Watson error may
	occur.
	
	If the proper Microsoft Windows NT and Exchange Server symbols are installed, you
	see a debug call stack that is similar to the following:
	
	  
	
	  ChildEBP RetAddr  Args to Child
	  00f7fd50 00431b39 00000000 00000000 00e11a00 msexcimc!CPostmaster__rcFindAdminX400Address+0x129 
	  00f7fd68 0043ca46 00e11870 00e118b0 00e10f88 msexcimc!CPostmaster__rcInitialize+0xc3 
	  00f7ff74 0043abaf 00000001 ffffffff 00134d00 msexcimc!CIMCService__InitializeService+0x1c3e 
	  00f7ff94 0043aafa 00479bd8 00000001 00134d08 msexcimc!CService__ServiceProc+0xbd 
	  00f7ffa8 77dd8bec 00000001 00134d08 0012ff60 msexcimc!_SP_IMCService+0x19 
	  00f7ffb8 77f04ee8 00134d00 ffffffff 0012ff60 ADVAPI32!ScSvcctrlThreadA+0xe
	  00f7ffec 00000000 77dd8bde 00134d00 00000000 KERNEL32!BaseThreadStart+0x51
	
	CAUSE
	=====
	
	This problem can occur because the Internet Mail Service stops responding if the
	X.400 proxy address is missing from the Internet Mail Service Administrator
	mailbox.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the Administrator mailbox has an
	X.400 proxy address on the E-mail Address tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
