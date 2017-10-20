---
layout: page
title: "Q236281: FIX: An Error Occurs While Registering the File Expsrv.dll"
permalink: /kb/236/Q236281/
---

## Q236281: FIX: An Error Occurs While Registering the File Expsrv.dll

{% raw %}

	Article: Q236281
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDeployment kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix kbDSupport
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic project using the Data control or otherwise has a Reference to
	the Microsoft DAO Object Library, is compiled into an executable file. The
	Package and Deployment Wizard is used to create a deployment package. When this
	package is run on another computer, the following error message appears:
	
	  An error occurred while registering the file expsrv.dll.
	
	CAUSE
	=====
	
	Your setup package contains Expsrv.dll version 6.0.0.8268 or earlier.
	
	The setup package is attempting to register Expsrv.dll. Version 6.0.0.8268 is not
	a self-registering file. However, it includes the resource tag OLESelfRegister,
	which indicates that it is a self-registering file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was first corrected in Visual Studio 6.0 Service Pack 3. However, we
	recommend that you install the latest Visual Studio service pack and create a
	new deployment package.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a data control to Form1.
	
	3. Save and compile the project.
	
	4. Use the Package and Deployment Wizard to create a deployment package.
	
	5. Run the deployment package on another system. The error message appears when
	  the deployment package attempts to register the file Expsrv.dll.
	
	REFERENCES
	==========
	
	For related information on this problem, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q196057 PRB: The Jet VBA File VBAJet32.dll Failed to Initialize
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDeployment kbVBp kbVBp600bug kbGrpDSVB kbVS600sp3fix kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
