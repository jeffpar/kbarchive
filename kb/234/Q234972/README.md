---
layout: page
title: "Q234972: PRB: Error 40042119: There Is No PostInfo File On The Server"
permalink: kb/234/Q234972/
---

## Q234972: PRB: Error 40042119: There Is No PostInfo File On The Server

	Article: Q234972
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
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When deploying to a Web server using the Package and Deployment Wizard (PDW),
	you see the following error:
	
	  Unexpected error number 40042119 has occurred: There is no PostInfo file on
	  the server.
	
	  This error may occur if you have typed an incorrect URL or if the URL does not
	  refer to a correctly configured Web server. Ensure that the URL is correct
	  and the Web server is properly configured. For proper configuration, you may
	  need to install Microsoft Visual Studio's server-side setup on the Web
	  server.
	
	CAUSE
	=====
	
	This error occurs because of the following reasons:
	
	- The Web service is not running.
	
	- The PostInfo.asp file is missing or is not located in the InetPub\scripts
	  physical directory.
	
	- You do not have NTFS Read and Execute (RX) permissions to the InetPub\scripts
	  directory.
	
	- The <META> tag in default document (typically named Default.htm) in the
	  root directory of the Web is pointing to the incorrect location for
	  PostInfo.asp.
	
	RESOLUTION
	==========
	
	Use the following steps to work around this problem:
	
	- Make sure the Web service is running.
	
	- Make sure PostInfo.asp is loated in the InetPub\scripts directory. By
	  default, the Microsoft Posting Acceptor 2.0 installs the PostInfo.asp and
	  Cpshost.dll files to the InetPub\scripts directory.
	
	- Make sure the user has NTFS Read and Execute (RX) permissions to the
	  InetPub\scripts directory.
	
	- Make sure your default document has the following <META> tag on the
	  first line and the "content" parameter points to a valid location for the
	  PostInfo.asp file as shown below:
	
	  <META name="postinfo" content="/scripts/postinfo.asp">
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	  Q199017 HOWTO: Deploy Visual Basic IIS Applications with PDW
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
