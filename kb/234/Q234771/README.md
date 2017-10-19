---
layout: page
title: "Q234771: FIX: Error 800a2328 When You Browse a VB 6.0 WebClass"
permalink: /kb/234/Q234771/
---

## Q234771: FIX: Error 800a2328 When You Browse a VB 6.0 WebClass

	Article: Q234771
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbVS600sp4fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to browse a WebClass application, the following error is
	returned:
	
	  Server object error 'ASP 0177 : 800a2328'
	  Server.CreateObject Failed
	  /WebClassApp/WebClassFile.ASP, line 20
	  The operation completed successfully.
	
	CAUSE
	=====
	
	This error occurs if Session state is disabled for the Web application. Visual
	Basic 6.0 WebClasses (IIS Applications) require Session state to be enabled.
	
	RESOLUTION
	==========
	
	Use the following steps to re-enable Session state:
	
	1. Open the Internet Service Manager (ISM) in the Microsoft Management Console
	  (MMC).
	
	2. Navigate to the Web directory for the WebClass.
	
	3. Right-click the directory and select Properties.
	
	4. Select Directory and click the Configuration button.
	
	5. Select App Options and enable the Enable session state option.
	
	6. Click OK twice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbVS600sp4fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
