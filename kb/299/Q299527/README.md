---
layout: page
title: "Q299527: PRB: &quot;Error in Loading DLL&quot; Error If You Add PDW as VB Component"
permalink: /kb/299/Q299527/
---

## Q299527: PRB: &quot;Error in Loading DLL&quot; Error If You Add PDW as VB Component

{% raw %}

	Article: Q299527
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbAddin kbwizard kbAppSetup kbDeployment kbide kbVBp kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select the "Package and Deployment Wizard" check box from the Components
	dialog box in a Visual Basic project and then click either OK or Apply, you
	receive the following error message:
	
	  Error in loading DLL
	
	CAUSE
	=====
	
	If you select the "Package and Deployment Wizard" check box in the Components
	dialog box, Visual Basic tries to load the PDWizard.ocx file. However,
	PDWizard.ocx is not intended for use as a component in a Visual Basic project;
	it is designed to be used by the Package and Deployment Wizard (PDW) Add-In.
	
	RESOLUTION
	==========
	
	To work around this problem, load the Package and Deployment Wizard (PDW) as an
	add-in, or start the PDW as a stand-alone program. For step-by-step
	instructions, see the "More Information" section.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic 6.0.
	
	2. From the Project menu, click Components, select the "Package and Deployment
	  Wizard" check box, and then click OK. You receive the above-mentioned error
	  message.
	
	How to Load the PDW as an Add-In
	--------------------------------
	
	1. From the Add-Ins menu in Visual Basic 6.0, click Add-In Manager.
	
	2. In the list, click "Package and Deployment Wizard". Under Load Behavior,
	  select the "Loaded/Unloaded" check box, and then click OK.
	
	3. Save the project.
	
	  NOTE: If you try to load the PDW as an Add-In without first saving the current
	  project, you receive the following error message, and the wizard does not
	  start:
	
	  The active project must be saved before it can be packaged and deployed.
	
	4. From the Add-Ins menu, click "Package and Deployment Wizard" to start the
	  PDW.
	
	How to Start the PDW as a Stand-Alone Program
	---------------------------------------------
	
	To start the PDW outside of Visual Basic, on the Microsoft Windows Start menu,
	point to Programs, point to Microsoft Visual Studio 6.0, point to Microsoft
	Visual Studio 6.0 Tools, and then click Package and Deployment Wizard.
	
	Additional query words: PDW Error loading DLL 48
	
	======================================================================
	Keywords          : kbAddin kbwizard kbAppSetup kbDeployment kbide kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
