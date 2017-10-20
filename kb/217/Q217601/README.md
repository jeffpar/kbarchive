---
layout: page
title: "Q217601: XADM: Incorrect Time Appears After Directory Is Modified"
permalink: /kb/217/Q217601/
---

## Q217601: XADM: Incorrect Time Appears After Directory Is Modified

{% raw %}

	Article: Q217601
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you modify an object in the directory, the directory may indicate that the
	object was modified at a different time. The time appears in Greenwich mean
	time, rather than the time zone in which you are located.
	
	For example, if you are located in the Pacific time zone and you modify an object
	in the directory at 2:00 P.M., the directory incorrectly indicates that the
	object was modified at 10:00 P.M. The eight-hour difference is the same as the
	difference between the Pacific time zone and Greenwich mean time.
	
	CAUSE
	=====
	
	This problem is known to occur when Microsoft Visual C++ version 6.0 is
	installed on the Exchange Server computer. The problem may also occur with other
	programs that install an updated version of the Msvcrt.dll file.
	
	
	This problem occurs because later versions of the Msvcrt.dll file reset the time
	zone information differently.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2504.0 | 
	+--------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2diri.exe
	(x86) and Psp2dira.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/eng/Exchg5.5/PostSP2/DIR-fix/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 3.
	
	
	Additional query words: time stamp
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
