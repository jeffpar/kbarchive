---
layout: page
title: "Q307326: Startweb.vbs and Stopweb.vbs Fail on NT4.0 with Error 800401E4"
permalink: /kb/307/Q307326/
---

## Q307326: Startweb.vbs and Stopweb.vbs Fail on NT4.0 with Error 800401E4

	Article: Q307326
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Internet Information Services (IIS) Active Directory
	Service Interfaces (ADSI) scripts such as Startweb.vbs and Stopweb.vbs on a
	remote computer, you may receive one or both of the following error messages:
	
	  error: 800401E4 - unable to open IIS://computer/w3svc/site number
	
	-or-
	
	  error: 1A8 - unable to stop web server IIS://computer/w3svc/site number
	
	CAUSE
	=====
	
	This problem has two possible causes:
	
	- The user that issues the command lacks the necessary permissions on the
	  target IIS server.
	
	- Either the source or the target server has a downlevel ADSI client.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that the user that issues the command is an
	authenticated user on the target computer and has Operator rights for the IIS
	Web site. Built-in ADSI security does not allow the Anonymous user to access IIS
	objects by running IIS scripts.
	
	If the permissions are correct and attempts to run the scripts still fail, the
	problem may be a downlevel ADSI client. An upgrade is available from the
	following Microsoft Web site:
	
	  Active Directory Service Interfaces Overview
	  http://www.microsoft.com/windows2000/techinfo/howitworks/activedirectory/adsilinks.asp
	
	MORE INFORMATION
	================
	
	The following is the correct syntax to control an IIS Web site on a remote
	computer:
	
	  cscript scriptname.vbs -c computername -a sitenum
	
	For example, to start the Default Web Site on the SERVER1 computer, open a
	command prompt, change to the Winnt\System32\Inetsrv\Adminsamples folder, and
	then issue the following command:
	
	  cscript startweb.vbs -c SERVER1 -a 1
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
