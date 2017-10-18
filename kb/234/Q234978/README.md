---
layout: page
title: "Q234978: PRB: Error C0042116 &quot;The Parameter Is Incorrect&quot;"
permalink: kb/234/Q234978/
---

## Q234978: PRB: Error C0042116 &quot;The Parameter Is Incorrect&quot;

	Article: Q234978
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
	
	  Unexpected error number C0042116 has occurred: The parameter is incorrect.
	
	RESOLUTION
	==========
	
	This is often a client issue resolved by installing the Web Publishing Wizard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can install the Web Publishing Wizard by running wpie15.exe from the \Setup
	folder of Disc 1 of Visual Studio. To get the latest version, you can choose
	"Windows Update" from the Windows Start button or go directly to the following
	Microsoft Web site:
	
	  http://windowsupdate.microsoft.com/
	
	and choose Product Updates. The wizard is listed under "Internet Authoring." See
	the "References" section for additional information.
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	  Q194296 HOWTO: Debug PDW Internet Deployment Issues
	
	  Q199017 HOWTO: Deploy Visual Basic IIS Applications with PDW
	
	  Q168636 Microsoft Web Publishing Wizard Updates Available
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
