---
layout: page
title: "Q234974: PRB: Error C0042116: The Web Server Is Not Responding"
permalink: kb/234/Q234974/
---

## Q234974: PRB: Error C0042116: The Web Server Is Not Responding

	Article: Q234974
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Package and Deployment Wizard (PDW) to deploy an Internet
	Information Server (IIS) application to a Web server, you receive the following
	error message:
	
	  Unexpected error number C0042116 has occurred: The Web server either is not
	  responding or returned an unrecognized response.
	
	CAUSE
	=====
	
	This error message could occur because of the following reasons:
	
	- You do not have a virtual directory called SCRIPTS that points to the
	  physical directory C:\Inetpub\scripts.
	
	  -or-
	
	- You have not given Execute permissions to the SCRIPTS virtual directory.
	
	  -or-
	
	- The virtual server that you are deploying to is not running on port 80.
	
	RESOLUTION
	==========
	
	Verify that the SCRIPTS virtual directory exists and that you have enabled
	Execute permissions for this directory on the virtual server to which you are
	deploying.
	
	Use the following steps to create the SCRIPTS virtual directory:
	
	1. Open the Internet Service Manager (ISM) snap-in in the Microsoft Management
	  Console (MMC).
	
	2. Right-click the virtual server that you are deploying to and select New then
	  Virtual Directory.
	
	3. When asked for an Alias, type SCRIPTS and click Next.
	
	4. When asked for physical directory, browse to the physical location of the
	  scripts directory, which is under your Inetpub directory, and click Next.
	
	5. Make sure to allow Execute access permissions and then click Next.
	
	6. Click Finish.
	
	Use the following steps to enable Execute permissions:
	
	1. Open the Internet Service Manager (ISM) snap-in in the Microsoft Management
	  Console (MMC).
	
	2. Right-click the SCRIPTS virtual directory that is under the virtual server
	  that you are deploying to and select Properties.
	
	3. Select the Virtual Directory tab.
	
	4. Under Access Permissions, enable the Execute permissions option.
	
	5. Click Apply and then click OK.
	
	You will not be able to deploy your WebClass application to a virtual server that
	is not running on port 80.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	  Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	  Q199017 HOWTO: Deploy Visual Basic IIS Applications with PDW
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
