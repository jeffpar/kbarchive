---
layout: page
title: "Q201740: Cannot Create Object Error when Browsing ASP Pages"
permalink: /kb/201/Q201740/
---

## Q201740: Cannot Create Object Error when Browsing ASP Pages

{% raw %}

	Article: Q201740
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC
	Last Modified: 17-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Active Server Pages (ASP) application runs, you may receive the
	following error(s).
	
	Application Event Log Error:
	
	  Failed on creation from object context: CoCreateInstance (ProgId:
	  ADODB.Connection.1.5) (CLSID: {00000514-0000-0010-8000-00AA006D2EA4})
	  (Microsoft Transaction Server Internals Information: File:
	  d:\viper\src\runtime\context\ccontext.cpp, Line: 1292)
	
	Browser error:
	
	  Microsoft VBScript runtime error '800a01ad' ActiveX component can't create
	  object /test.asp, line 1
	
	The line in the Active Server Pages file reads as follows:
	
	  <% set db = Server.CreateObject("ADODB.Connection") %>
	
	CAUSE
	=====
	
	This problem is related to the permissions granted to your DLLs. The
	IUSR_computer and IWAM_computer account (where computer is the name of the
	machine) do not have the permissions necessary to execute the DLLs being
	instantiated on the "Server.CreateObject" line in the ASP code.
	
	RESOLUTION
	==========
	
	The IUSR_computer and IWAM_computer account must be granted read permissions to
	the <drive letter>:\Program Files\Common Files\System\ADO directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
