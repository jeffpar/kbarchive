---
layout: page
title: "Q197377: Memory Leak if Large File Upload Is Cancelled Prematurely"
permalink: kb/197/Q197377/
---

## Q197377: Memory Leak if Large File Upload Is Cancelled Prematurely

	Article: Q197377
	Product(s): Internet Information Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Request for Comment (RFC) 1867 to upload a large file to an Active
	Server Page (ASP) and the transfer procedure is terminated prematurely by the
	client, a memory leak the size of the file occurs. For example, if you are
	uploading a 10 megabyte (MB) file and then disconnect before the file is
	completely uploaded, the memory leak is 10MB. Note that the ASP page calls
	Request.BinaryRead.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: You must install SP4 before installing this fix.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : :3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
