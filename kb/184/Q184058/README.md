---
layout: page
title: "Q184058: Unable to Change Password Using IIS 4.0 Change Password Feature"
permalink: kb/184/Q184058/
---

## Q184058: Unable to Change Password Using IIS 4.0 Change Password Feature

	Article: Q184058
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change your password through the Internet Information Server
	(IIS) change password feature, you may receive the following error in Internet
	Explorer:
	
	  The server returned and invalid or unrecognized response.
	
	CAUSE
	=====
	
	The Web site is configured to support password changing, but the IISADMPWD
	virtual directory does not exist on that Web site. When Internet Information
	Server is installed, the IISADMPWD virtual directory is only added to the
	default Web site.
	
	RESOLUTION
	==========
	
	To resolve this issue, add a virtual directory named IISADMPWD to the Web site
	by performing the following steps:
	
	1. In the Internet Service Manager, click the Web site.
	
	2. From the Action menu, point to New and then click Virtual Directory.
	
	3. Type "IISADMPWD" (without the quotation marks) in the alias name box of the
	  New Virtual Directory Wizard, and then click Next.
	
	4. Type the path to the Winnt\System32\Inetsrv\Iisadmpwd folder, and then click
	  Next.
	
	5. Click to disable the Allow Script Access.
	
	6. Click to enable Allow Execute Access (Includes Script Access), and then click
	  Finish.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Internet Information Server 4.0 includes the capability that allows a Windows NT
	user to change their password, receive notification when their password is to
	expire, and allow them to change the password. IIS installs this functionality
	in the IISADMPWD virtual directory of the default Web site. This feature is
	implemented as a set of .HTR files located in the
	%system%\System32\Inetsrv\Iisadmpwd directory and the ISAPI extension file
	Ism.dll.
	
	For additional information about configuring Internet Information Server to
	support password changing, view the section Notifying Clients of Password Status
	section of the Windows NT 4.0 Option Pack Documentation.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
