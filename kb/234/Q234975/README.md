---
layout: page
title: "Q234975: PRB: Error C0042116: No Write Access to Destination URL"
permalink: /kb/234/Q234975/
---

## Q234975: PRB: Error C0042116: No Write Access to Destination URL

{% raw %}

	Article: Q234975
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500
	Last Modified: 25-APR-2001
	
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
	
	  Unexpected error number C0042116 has occurred: The Web server returned the
	  following error: You do not have write access to destination URL
	  http://<servername>/<directory>.
	
	CAUSE
	=====
	
	This error message could occur because of two reasons:
	
	- You have not enabled Write permissions to the target directory you are
	  deploying to. Write permissions are required in order to deploy your WebClass
	  application.
	
	  -or-
	
	- The deployment directory you have specified does not exist on the target
	  server.
	
	RESOLUTION
	==========
	
	To enable Write permissions follow these steps:
	
	1. Open the Internet Service Manager (ISM) snap-in in the Microsoft Management
	  Console (MMC).
	
	2. Right-click your deployment directory and select Properties.
	
	3. Select the Directory or Virtual Directory tab.
	
	4. Under Access Permissions, enable the Write permissions option.
	
	5. Click Apply and then click OK.
	
	NOTE: Allowing write access to a virtual directory is a security risk. You should
	remove write access after deploying your WebClass.
	
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
	

{% endraw %}
