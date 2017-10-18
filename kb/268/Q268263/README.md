---
layout: page
title: "Q268263: SGC Does Not Work When You Use Keys Longer than 1024 Bits"
permalink: kb/268/Q268263/
---

## Q268263: SGC Does Not Work When You Use Keys Longer than 1024 Bits

	Article: Q268263
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By using a keyset with 2048-bit keys and a SGC certificate, Windows 2000 Server
	does not allow clients to connect. A "Cannot Find Server" error message is
	returned to Internet Explorer when trying to connect. This is independent of
	whether low security (56-bit == rsabase) or the high security (128bit == rsaenh)
	is used.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Version          File name     Platform
	  ---------------------------------------
	  5.0.2195.2103    Rsabase.dll   x86
	  5.0.2195.2103    Rsaenh.dll    x86
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
