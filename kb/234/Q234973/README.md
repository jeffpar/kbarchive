---
layout: page
title: "Q234973: PRB: Error 80042114 Web Server Doesn't Support Selected Provider"
permalink: /kb/234/Q234973/
---

## Q234973: PRB: Error 80042114 Web Server Doesn't Support Selected Provider

{% raw %}

	Article: Q234973
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
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When deploying to a Web server using the Package and Deployment Wizard (PDW),
	you see the following error:
	
	  Unexpected error number 80042114 has occurred: The Web server you selected
	  does not indicate support for the service provider you selected.
	
	CAUSE
	=====
	
	This error occurs for one or more of the following reasons:
	
	- You have not installed Microsoft Posting Acceptor 2.0. This is the most
	  common reason.
	
	- You have selected FTP as the Web publishing protocol when you are using an
	  HTTP address as a destination URL.
	
	- You are missing a <META> tag at the top of your default document
	  specified for your root Web. The PDW requests the default document for your
	  root Web and looks for the <META> tag in order to determine where your
	  PostInfo.asp file is located.
	
	RESOLUTION
	==========
	
	Take the following actions, as necessary:
	
	- Install Posting Acceptor 2.0.
	
	- Make sure that the destination URL protocol matches the selected Web
	  publishing protocol.
	
	- Check your default document to see that it contains the <META> tag
	  shown below and that it is the first line in your document:
	
	  <META name="postinfo" content="/scripts/postinfo.asp">
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	  Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	  Q199017 HOWTO: Deploy Visual Basic IIS Applications with PDW
	
	Additional query words: webclass
	
	======================================================================
	Keywords          : kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
