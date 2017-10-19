---
layout: page
title: "Q197003: ASP Cached Data for One Site Used in Multiple Sites"
permalink: /kb/197/Q197003/
---

## Q197003: ASP Cached Data for One Site Used in Multiple Sites

	Article: Q197003
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When ASP data is being cached from one Web site, the cached data is erroneously
	used in another Web site that has the same virtual directory and physical
	directory.
	
	CAUSE
	=====
	
	ASP does not cache files based on Web site instance.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The latest service pack is also available at the following Internet location:
	
	  http://www.microsoft.com/windows/servicepacks/
	
	WORKAROUND
	==========
	
	To work around this problem, run the shared virtual directory out of process for
	all the Web Sites.
	
	This can be done using the following steps for each Web Site:
	
	1. Right-click on the virtual directory and select Properties.
	
	2. Select the Home Directory Property Page.
	
	3. Check Run in Separate Memory Space (isolated process).
	
	4. Stop and the restart the Web Sites.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
