---
layout: page
title: "Q170668: Inetinfo.exe Access Violation When Querying DB2 Using SNA Server"
permalink: /kb/170/Q170668/
---

## Q170668: Inetinfo.exe Access Violation When Querying DB2 Using SNA Server

{% raw %}

	Article: Q170668
	Product(s): Internet Information Server
	Version(s): WinNT:2.0,3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft SNA Server version 3.0 to connect to a host computer to
	perform queries using IDC or ASP, Inetinfo.exe may stop with a Dr. Watson
	message.
	
	You may also get the following Microsoft Active Server Pages (ASP) error message
	in the browser from an ASP page that uses an ActiveX Data Object (ADO).
	
	  ASP 0115 Error
	
	CAUSE
	=====
	
	To perform database queries against DB2, Internet Information Server (IIS) must
	call the ODBC driver then it must call Wappc32.dll from SNA Server. This rapid
	loading and unloading of the DLL file causes IIS to fail with the symptoms
	described above.
	
	WORKAROUND
	==========
	
	Upgrade the IIS computer to Microsoft SNA Server 3.0 Service Pack 1 (SP1) to
	correct this problem.
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WinNT:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
