---
layout: page
title: "Q277632: Memory Leak in Inetinfo.exe When Using the ADs IIS Provider"
permalink: /kb/277/Q277632/
---

## Q277632: Memory Leak in Inetinfo.exe When Using the ADs IIS Provider

	Article: Q277632
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is a memory leak in Inetinfo.exe or Dllhost.exe when you use the ADs
	Internet Information Services (IIS) provider.
	
	CAUSE
	=====
	
	This problem occurs because the ADs IIS Extension dynamic-link library
	(Iisext.dll) does not free used memory properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Version        Size    File name
	  -----------------------------------------------------
	  5/10/2000  3:35:10  5.0.2195.2413  42,768  Iisext.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: GetObject
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
