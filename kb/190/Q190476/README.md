---
layout: page
title: "Q190476: BUG: License Not Included with ActiveX Control Distribution"
permalink: kb/190/Q190476/
---

## Q190476: BUG: License Not Included with ActiveX Control Distribution

	Article: Q190476
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Basic Package and Deployment Wizard (PDW) does not automatically
	include or prompt the user about whether an ActiveX control's License should be
	included in a distribution set.
	
	RESOLUTION
	==========
	
	If the License for an ActiveX control developed in Visual Basic is to be
	included in a distribution set, the License must be added manually through the
	Package and Deployment Wizard. The appropriate VBL file must be included in the
	distribution and the setup needs to know to register the VBL file on the target
	machine.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q188582 HOWTO: Deploy an ActiveX Control with License Information
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
