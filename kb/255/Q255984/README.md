---
layout: page
title: "Q255984: PRB: IIS5 User Privilege Elevation Vulnerability"
permalink: kb/255/Q255984/
---

## Q255984: PRB: IIS5 User Privilege Elevation Vulnerability

	Article: Q255984
	Product(s): Internet Information Server
	Version(s): WINDOWS:2000; winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbIIS kbiis500 kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 18-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user logged on to a Windows 2000-based computer that is running Internet
	Information Services (IIS) can obtain system user privileges. The user does not
	have to be an administrator. This can be done only when the user is either:
	
	- locally logged on to the computer (physically present).
	
	-or-
	
	- accessing the server through Windows 2000 Server with Terminal Services
	  (Terminal Services running in Application Server mode).
	
	In both cases the "log on locally" right is needed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was first corrected in Windows 2000 Service Pack 1.
	
	Additional query words: CLSID_IISAdmin IConnectionPointContainer LocalSystem Security
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbIIS kbiis500 kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
