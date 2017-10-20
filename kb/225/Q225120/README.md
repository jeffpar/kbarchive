---
layout: page
title: "Q225120: PRB: Error C0042116: Signature on CAB File Could Not Be Verified"
permalink: /kb/225/Q225120/
---

## Q225120: PRB: Error C0042116: Signature on CAB File Could Not Be Verified

{% raw %}

	Article: Q225120
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	When using the Package and Deployment Wizard (PDW) to deploy an Internet
	Information Server (IIS) application to a Web server, you may receive the
	following error:
	
	  Unexpected error number C0042116 has occurred: The Web server returned the
	  following error: The signature on cabinet file XX.CAB could not be verified.
	
	CAUSE
	=====
	
	The PDW uses the Posting Acceptor on the remote Web server to post and unpack
	the .cab file. After the file has been posted, a registry key is automatically
	checked to determine whether the signature on the .cab file must be verified. If
	this key is set to Yes, the error message results.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To Resolve the PDW Problem
	--------------------------
	
	1. Start the Registry Editor (Regedit.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Publishing\RemoteInstaller
	
	3. Double-click the ComponentRequireSignature value below the RemoteInstaller
	  key.
	
	4. Change the value data to No and click OK.
	
	5. Quit the Registry Editor.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	  Q199017 Deploy Visual Basic IIS Applications with PDW
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
