---
layout: page
title: "Q163698: IDC Fails to Execute When Access to Httpodbc.dll Is Denied"
permalink: /kb/163/Q163698/
---

## Q163698: IDC Fails to Execute When Access to Httpodbc.dll Is Denied

{% raw %}

	Article: Q163698
	Product(s): Internet Information Server
	Version(s): WINNT: 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute an Internet Database Connector (.idc) file, your browser may
	display the following error messages, depending on the authentication method
	used:
	
	Allow Anonymous Authentication
	------------------------------
	
	  Internet Explorer cannot open the Internet site
	  "http://www.yoursite.com/scripts/filename.idc?" The requested
	  header was not found.
	
	Basic and Windows NT Challenge/Response Authentication
	------------------------------------------------------
	
	A dialog box will prompt you three times for your username and password; then you
	will get the following error message:
	
	  Error: Access is denied.
	
	CAUSE
	=====
	
	Access to the Httpodbc.dll file is required for the .idc file to execute. If
	permissions for the Httpodbc.dll file have been denied to the IUSR_Computername
	account for Allow Anonymous access or Microsoft Windows NT users authenticated
	with Basic or NT Challenge/Response authentication methods, the .idc file will
	fail to execute and generate the above error message.
	
	WORKAROUND
	==========
	
	Grant NTFS read/execute permissions to the Httpodbc.dll file for all users who
	need to execute .idc files. This includes, but is not limited to the
	IUSR_Computername account for Anonymous access and any Windows NT user accounts
	using Basic or Windows NT Challenge/Response authentication methods.
	
	NOTE: By default, the Httpodbc.dll file is installed to the following location:
	
	  %SYSTEMROOT%\SYSTEM32\INETSRV\HTTPODBC.DLL
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WINNT: 2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
