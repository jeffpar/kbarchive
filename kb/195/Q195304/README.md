---
layout: page
title: "Q195304: XFOR: Lsdiavm.exe Process Terminates with a Dr. Watson"
permalink: /kb/195/Q195304/
---

## Q195304: XFOR: Lsdiavm.exe Process Terminates with a Dr. Watson

{% raw %}

	Article: Q195304
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The Microsoft Exchange PROFS Connector may stop delivering messages and the
	Lsdiavm.exe process may terminate and display a Dr. Watson error message.
	
	With the proper Windows NT and Exchange Server symbols installed, you should see
	a debug call stack like the following:
	
	  FramePtr  RetAddr   Param1   Param2   Param3   Function Name
	  0012fd24  002d4131  00711ae0 00711ef0 0012fd54
	   LSVMHC!ZIP5Data::writeCRNptrs+0x36
	  0012fda4  002d337e  00711ef0 0070a4e0 0012fde0
	   LSVMHC!ZIP5Data::buildCRON+0x1e1
	  0012fde8  00406f82  0070a4e0 00c1a498 00c1a270
	   LSVMHC!ZIP5Data::build+0xee
	  0012fed8  0040507f  0070a4e0 00c1a270 00000000 LSDIAVM!sendZIP5+0x182
	  0012ff08  00404e1d  00404350 00000000 00000000
	   LSDIAVM!outputZIP5+0x24f(...)
	  0012ff0c  00404350  00000000 00000000 00000000 LSDIAVM!outputVM+0xd
	  0012ff20  004039d3  00000000 00000000 007074b4
	   LSDIAVM!transformDIAtoOVM+0x30
	  0012ff34  1000739d  00000000 0040cb40 007075c0
	   LSDIAVM!DIAOVMHandleInQItem+0x73
	  0012ff50  00401c30  0070a380 77f64a89 00140548
	   LSCPS!EventManager::process+0x11d
	  0012ff6c  004013bc  0040b8ef 00000004 00700180
	   LSDIAVM!runApp+0x380(...)
	  0012ff70  0040b8ef  00000004 00700180 00700350 LSDIAVM!main+0x1c
	  0040cb40  00000000  00000000 00000000 00000000
	   LSDIAVM!mainCRTStartup+0xff(...)
	
	CAUSE
	=====
	
	A string buffer was read past its boundary into unknown memory.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange PROFS Connector
	
	  File Name     Version
	  ------------------------
	  Lsdiavm.exe   5.5.2443.0
	  Lsvmhc.dll    5.5.2443.0
	  LSCPS.DLL     5.5.2443.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
