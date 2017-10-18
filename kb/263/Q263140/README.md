---
layout: page
title: "Q263140: Anonymous and Basic Authentication Fail When Connecting to IIS 5"
permalink: kb/263/Q263140/
---

## Q263140: Anonymous and Basic Authentication Fail When Connecting to IIS 5

	Article: Q263140
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a Web page that is running under Internet Information
	Services (IIS) 5.0 on a Microsoft Windows 2000 Domain Controller by using
	Anonymous or Basic authentication, the following error message may appear in the
	Web browser, even when the proper permissions are set:
	
	  HTTP 401.1 - Unauthorized: Logon Failed
	
	CAUSE
	=====
	
	For security reasons, on Windows 2000 domain controllers, only the account
	operators, administrators, backup operators, print operators, server operators,
	Internet guest account, and Terminal Services user accounts have the Log on
	Locally user right, which is a requirement for both Anonymous and Basic
	authentication.
	
	WORKAROUND
	==========
	
	IMPORTANT: Microsoft does not recommend running Internet Information Services on
	a domain controller (or BDC/PDC if you are running Microsoft Windows NT Server
	4.0), because IIS performance is severely degraded due to the networking and
	processor load imposed by authentication and other roles performed by domain
	controllers. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q197132 Windows 2000 Active Directory FSMO Roles
	
	To work around this issue, perform the following steps:
	
	1. Load the Domain Users and Computers snap-in.
	
	2. Right-click the Users container, click New, and then select Group.
	
	3. Configure this new group as follows:
	
	   - Group Name: WebUsers
	
	   - Group Scope: Domain Local
	
	   - Group Type: Security
	
	4. Click Next until the wizard is finished and the WebUsers group is created.
	
	5. Add any users or groups that require access to your Web site to the WebUsers
	  group.
	
	6. Load the Domain Controller Security Policy snap-in.
	
	7. In the left pane, click to expand Windows Settings, click to expand Security
	  Settings, click to expand Local Policies, and then select User Rights
	  Assignments.
	
	8. Double-click the Log on locally user right.
	
	9. Add the WebUsers group that you created in step 4.
	
	10. Force the policy to take affect by issuing the following command:
	
	  "secedit /refreshpolicy machine_policy /enforce" (without the quotation
	  marks)
	
	At this point, any account or group that is a member of the WebUsers group should
	be able to log on to the IIS 5.0 server by using Basic authentication. With
	Basic/Clear Text authentication, it is recommended that the data be encrypted
	with SSL, as it is extremely easy to obtain credentials from a network trace.
	For additional information on installing SSL under IIS 5.0, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q228836 Installing a New Certificate for Use in SSL/TLS
	
	MORE INFORMATION
	================
	
	For additional information about this issue, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q220609 How to Assign "Log On Locally" User Rights in Windows 2000
	
	  Q234237 Assign "Log On locally" Rights to Windows 2000 Domain Controller
	
	For additional information on verifying that permissions are configured properly,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
