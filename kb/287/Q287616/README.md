---
layout: page
title: "Q287616: FTP Error 550 Occurs When You Use Put and Append Commands"
permalink: /kb/287/Q287616/
---

## Q287616: FTP Error 550 Occurs When You Use Put and Append Commands

	Article: Q287616
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you append to a file immediately after you upload it to a Microsoft FTP
	server that is storing data on a UNC share, the following error message may
	appear:
	
	  550 "filename": The process cannot access the file because it is being used
	  by another process
	
	CAUSE
	=====
	
	The append command attempts to open the file that you uploaded before the
	redirector has fully committed the file to disk.
	
	WORKAROUND
	==========
	
	Insert a delay between the put and the append commands to give the FTP server to
	commit the file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Version         Size      File name     
	  -------------------------------------------------------------
	  2/21/2001   10:54a   5.0.2195.3278   117,008   Ftpsvc2.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	
	Additional query words: kbNetworking
	
	======================================================================
	Keywords          : kbnetwork kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
