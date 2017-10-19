---
layout: page
title: "Q234977: PRB: Error C0042116 &quot;Further Processing Has Stopped&quot;"
permalink: /kb/234/Q234977/
---

## Q234977: PRB: Error C0042116 &quot;Further Processing Has Stopped&quot;

	Article: Q234977
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
	
	  Unexpected error number C0042116 has occurred: The Web server returned the
	  following error: Cannot move filename "<filename>" to its final
	  destination. Further processing has stopped.
	
	CAUSE
	=====
	
	The authenticated user does not have proper Windows NT File System (NTFS)
	permissions to the C:\InetPub\scripts directory or to the directory you are
	deploying to. The authenticated user needs at least NTFS Read and Execute (RX)
	permissions to the C:\InetPub\scripts directory and NTFS Change (RWXD)
	permissions to the deployment directory.
	
	RESOLUTION
	==========
	
	Assign the authenticated user Read and Execute permissions to the
	C:\InetPub\scripts directory and assign Change permissions to your deployment
	directory.
	
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
	
