---
layout: page
title: "Q262233: IIS: How to Configure Basic/Clear Text Authentication for IIS5"
permalink: kb/262/Q262233/
---

## Q262233: IIS: How to Configure Basic/Clear Text Authentication for IIS5

	Article: Q262233
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to configure Basic/Clear Text authentication for Web
	sites by using Microsoft Internet Information Services (IIS) version 5.0.
	
	MORE INFORMATION
	================
	
	Web Sites can use use several different forms of authentication; however, the
	focus of this article is specifically Basic/Clear Text authentication. For
	additional information on the authentication and security features that are
	available in IIS, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q142868 IIS: Authentication and Security Features
	
	  Q301457 HOW TO: View Or Change IIS Authentication Methods
	
	The steps to configure Basic/Clear Text authentication are described in the
	following three sections:
	
	1. Configuring Basic/Clear Text Authentication (Required)
	
	2. Configuring the Log On Locally User Right (Required)
	
	3. Configuring the Default Logon Domain (Optional)
	
	Configuring Basic/Clear Text and User Authentication (Required):
	
	Although Web sites may use several different forms of authentication, file
	transfer protocol (FTP) sites are limited to Anonymous or User authentication.
	The steps that are detailed below only focus on the steps that are required for
	Basic/Clear Text authentication for Web sites and User authentication for FTP
	sites.
	
	- Configuring all Web sites
	
	To configure all Web sites, follow these steps:
	
	1. Open the Internet Services Manager.
	
	2. Right-click the computer name and click Properties.
	
	3. Under Master Properties, select WWW Service and click Edit.
	
	4. Click the Directory Security tab. Under Anonymous access and authentication
	  control, click Edit.
	
	5. Select Basic authentication (password is sent in clear text). When you
	  receive the Are you sure you want to continue? dialog box, click Yes.
	
	6. Click OK, then click OK again.
	
	7. If you receive the Inheritance Overrides dialog box, click Select All and
	  click OK.
	
	8. Click OK to exit the Master Properties.
	
	- Configuring a specific Web site
	
	To configure a specific Web site, follow these steps:
	
	1. Open the Internet Services Manager.
	
	2. Expand the tree next to the computer name.
	
	3. Right-click the specific Web site and click Properties.
	
	4. Click the Directory Security tab. Under Anonymous access and authentication
	  control, click Edit.
	
	5. Select Basic authentication (password is sent in clear text). When you
	  receive the Are you sure you want to continue? dialog box, click Yes.
	
	6. Click OK, then click OK again.
	
	7. If you receive the Inheritance Overrides dialog box, click Select All and
	  click OK.
	
	Configuring the "Log On Locally" User Right (Required):
	
	Web users that need Basic/Clear Text authentication and FTP users that need
	authentication in IIS both require the "Log on locally" user right. In Microsoft
	Windows NT 4.0 the "Log on locally" user right was assigned through User
	Manager, but in Microsoft Windows 2000 this is configured through policies.
	
	- Configuring a stand-alone server
	
	To configure the "Log on locally" right on a stand-alone server, follow these
	steps:
	
	1. In the Microsoft Management Console (MMC), open the Local Computer Policy
	  snap-in. To do this, follow these steps:
	
	  a. Click Start, type "MMC" (without the quotation marks), and click OK.
	
	  b. Click Console, click Add/Remove Snap-in, and then click Add.
	
	  c. Select Group Policy and click Add.
	
	  d. Ensure that the Group Policy object says Local Computer and click Finish.
	
	  e. Click Close, then click OK.
	
	2. Grant users or groups the "Log on locally" right. To do this, follow these
	  steps:
	
	  a. Expand the following path in the MMC:
	
	  Local Computer Policy\Computer Configuration\Windows Settings\Security
	  Settings\Local Policies\User Rights Assignment
	
	  b. Double-click Log on Locally.
	
	  c. Add any users or groups that will use Basic/Clear Text authentication.
	
	- Configuring a domain controller
	
	NOTE: It is not recommended that you install an IIS Web server on a Windows 2000
	domain controller. The following steps describe how to configure "Log on
	locally" right by using Group Policy if it is necessary that you install an IIS
	Web server on a Windows 2000 domain controller.
	
	To configure the "Log on locally" right on a domain controller, follow these
	steps:
	
	1. In MMC, open the Default Domain Controllers Policy snap-in. To do this,
	  follow these steps:
	
	  a. Click Start, type "MMC" (without the quotation marks), and click OK.
	
	  b. Click Console, click Add/Remove Snap-in, and then click Add.
	
	  c. Select Group Policy and click Add.
	
	  d. Click Browse.
	
	  e. Double-click the domain controller for the domain.
	
	  f. Double-click Default Domain Controllers Policy and click Finish.
	
	  g. Click Close, then click OK.
	
	2. Grant users or groups the "Log on locally" right. To do this, follow these
	  steps:
	
	  a. Expand the following path in the MMC:
	
	  Default Domain Controllers Policy\Computer Configuration\Windows
	  Settings\Security Settings\Local Policies\User Rights Assignment
	
	  b. Double-click Log on Locally.
	
	  c. Add any users or groups that will use Basic/Clear Text authentication.
	
	3. Refresh the policy. To do this, open a command prompt, type "secedit
	  /refreshpolicy machine_policy" (without the quotation marks), and then close
	  the command prompt.
	
	Configuring the Default Logon Domain (Optional):
	
	An optional step in configuring clear text forms of authentication is to
	configure the Default Logon Domain. Setting this optional value prevents domain
	users from being required to enter their domain name when prompted for
	authentication.
	
	- Configuring all Web sites
	
	To configure the default logon domain for all Web sites, follow these steps:
	
	1. Open the Internet Services Manager.
	
	2. Right-click the computer name and click Properties.
	
	3. Under Master Properties, select WWW Service and click Edit.
	
	4. Click the Directory Security tab. Under Select a default domain, click Edit.
	
	5. Type your domain name, or click Browse to search for your domain.
	
	6. Click OK, then click OK again.
	
	7. If you receive the Inheritance Overrides dialog box, click Select All and
	  click OK.
	
	8. Click OK to exit the Master Properties.
	
	- Configuring a specific Web site
	
	To configure the default logon domain for a specific Web site, follow these
	steps:
	
	1. Open the Internet Services Manager.
	
	2. Expand the tree next to the computer name.
	
	3. Right-click the specific Web site and click Properties.
	
	4. Click the Directory Security tab. For Select a default domain, click Edit.
	
	5. Type your domain name, or click Browse to search for your domain.
	
	6. Click OK, then click OK again.
	
	7. If you receive the Inheritance Overrides dialog box, click Select All and
	  click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
