---
layout: page
title: "Q155357: PERL Scripts Fail to Execute &amp; Not Load the Advapi32.dll File"
permalink: /kb/155/Q155357/
---

## Q155357: PERL Scripts Fail to Execute &amp; Not Load the Advapi32.dll File

	Article: Q155357
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a PERL script with Microsoft Internet Information Server (IIS), you
	may get the following error:
	
	  CGI Error:
	
	  The specified CGI application misbehaved by not returning a complete set of
	  HTTP headers. The headers it did return are:
	
	  Cannot load advapi32.dll.
	
	However, the PERL script will run without errors from the command line without
	using IIS.
	
	CAUSE
	=====
	
	The Advapi32.dll file is used by PERL and in turn, tries to open another DLL in
	the Microsoft Windows NT System32 directory. If it fails to load the DLL in
	\System32, Advapi32.dll will also fail to load causing the above error message.
	
	WORKAROUND
	==========
	
	The credentials of the IUSR_servername (IIS anonymous account) are used to
	access the Windows NT System directories. If this account does not have
	sufficient privileges to a file or directory, PERL or other CGI scripts may fail
	to execute.
	
	Check the permissions on the Winnt\System32 directory and make sure the
	IUSR_servername account has sufficient access.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
