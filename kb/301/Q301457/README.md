---
layout: page
title: "Q301457: HOW TO: View or Change Authentication Methods in IIS"
permalink: kb/301/Q301457/
---

## Q301457: HOW TO: View or Change Authentication Methods in IIS

	Article: Q301457
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- View Or Change IIS Authenication Methods
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to view or change IIS Authentication
	methods.
	
	Requirements
	------------
	
	The following describes the necessary stuff that you will need:
	
	- Windows 2000 Professional, Windows 2000 Server, and Windows 2000 Advanced
	  Server
	- Internet Information Server 5.0
	
	View or Change Authentication Methods
	-------------------------------------
	
	1. Click Start, point to Programs, point to Administrative Tools, and click
	  Internet Services Manager.
	
	2. In the console tree (left pane) of Internet Information Services, browse to
	  the Web site that you want to work with.
	
	3. Right-click this Web site and click Properties.
	
	4. Click the Directory Security tab.
	
	5. Under Anonymous Access and Authentication Control, click Edit.
	
	6. In the Authentication Methods dialog box, select one or more appropriate
	  methods.
	
	7. Click OK twice to exit the Web site Properties page and return to the
	  Internet Information Services console.
	
	Troubleshooting
	---------------
	
	- Enabling Basic authentication does not automatically configure your Web
	  server to authenticate users. Windows user accounts must be created and the
	  Windows NT file system (NTFS) permissions must be properly set. The
	  disadvantage is that Web browsers that use Basic authentication transmit
	  passwords in an unencrypted form. By monitoring communications on your
	  network, someone can easily intercept and decipher these passwords by using
	  publicly available tools. Therefore, Basic authentication is not recommended
	  unless you are confident that the connection between the user and your Web
	  server is a secure connection, such as a direct cable connection or a
	  dedicated line.
	
	- Integrated Windows authentication does not work across CERN compliant proxy
	  servers (such as MS Proxy 2.0). It does work with some firewall applications
	  (such as ISA).
	
	- Digest authentication is supported only for domains with a Windows 2000
	  domain controller. Digest authentication completes only if the domain server
	  for which a request is made has a plain-text copy of the requesting user's
	  password. Because the domain controller has plain-text copies of passwords,
	  it must be secured from both physical and network attacks. For more
	  information about securing a domain controller, click the link to the
	  Microsoft Windows 2000 Server Resource Kits in the "References" section.
	  Microsoft Internet Explorer version 5.0 is the only browser that currently
	  supports Digest authentication.
	
	REFERENCES
	==========
	
	For more information, see the following Web sites:
	
	  Internet Information Services 5.0 Authentication Methods
	  http://www.win2000mag.com/Articles/Index.cfm?ArticleID=8443
	
	  IIS 101: The Basics of IIS Authentication
	  http://www.iisadministrator.com/Articles/Index.cfm?ArticleID=15843
	
	  Setting Up Digest Authentication for Use with Internet Information Services
	  5.0
	  http://support.microsoft.com/directory/article.asp?ID=KB;EN-US;q222028
	
	  Microsoft Windows 2000 Server Resource Kits
	  http://www.microsoft.com/windows2000/techinfo/reskit/en/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
