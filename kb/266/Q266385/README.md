---
layout: page
title: "Q266385: Err Msg: The Stub Received Bad Data"
permalink: kb/266/Q266385/
---

## Q266385: Err Msg: The Stub Received Bad Data

	Article: Q266385
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Service Manager on a computer running Internet
	Information Server (IIS) version 3.0 to remotely administer Internet Information
	Server (IIS) version 4.0 or Internet Information Services (IIS) version 5.0, you
	may receive the following error message:
	
	  The stub received bad data
	
	CAUSE
	=====
	
	This error message appears because IIS 3.0 was not designed to administer IIS
	4.0 or IIS 5.0. It is possible to do this on a Windows NT 4.0-based computer
	that has IIS 3.0 Service Pack 4 or earlier installed; however, with later
	service packs, the option is no longer available and does not function.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade the computer running IIS 3.0 to IIS 4.0 by
	installing the Windows NT Option Pack (NTOP), and then re-applying the latest
	Windows NT Service Pack. You can then use the Microsoft Management Console (MMC)
	to administer other computers running IIS 4.0 or IIS 5.0.
	
	
	
	Additional query words: iis 5 4 3 ntop mmc
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
