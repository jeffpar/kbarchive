---
layout: page
title: "Q192596: FIX: ASP May Fail When IIS Is in Low Memory Condition"
permalink: /kb/192/Q192596/
---

## Q192596: FIX: ASP May Fail When IIS Is in Low Memory Condition

	Article: Q192596
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Internet Information Server (IIS) computer is in low memory
	conditions and using a COM object to set a cookie, there is a possibility that
	IIS may generate a Dr. Watson error like the following:
	
	  Dr. Watson for NT Application error has occurred inetinfo.exe
	  Exception: access violation (0xc0000005), Address: 0x7740f60b
	
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to IIS 4.0 Service Pack (SP) 6a or later. To
	download SP6a, click the following link:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/SP6/allSP6.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Internet Information Server 4.0 Service Pack 6A.
	
	Additional query words: iiswww iisgeneral iisscript
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
