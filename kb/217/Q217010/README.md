---
layout: page
title: "Q217010: Terminal Server May Be Unable to Start 16-bit DCOM Server"
permalink: /kb/217/Q217010/
---

## Q217010: Terminal Server May Be Unable to Start 16-bit DCOM Server

{% raw %}

	Article: Q217010
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Terminal Server Edition (TSE) client to connect to a Microsoft
	Terminal Server computer and the user runs a DCOM application written in 16-bit
	code, the following error may be reported:
	
	  Unable to start a DCOM Server: {A8D47DF01-6F43-11D2-8DF0-00805FC7199F}.
	
	When C:\APPS\Test.exe -Embedding is run, the following error message occurs:
	
	  Unable to perform a security operation on an object which has no associated
	  security.
	
	This behavior will only manifest itself when the 16 bit application from the TSE
	remote client if the application is launched locally on the Terminal Server then
	the 16-bit application behaves normally.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 tse wts
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
