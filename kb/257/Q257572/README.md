---
layout: page
title: "Q257572: FIX: Err Msg &quot;Missing Dependency Information&quot; with PDW"
permalink: /kb/257/Q257572/
---

## Q257572: FIX: Err Msg &quot;Missing Dependency Information&quot; with PDW

	Article: Q257572
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix k
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When packaging a DHTML Project with the Package and Deployment Wizard (PDW), you
	receive the following error message for the Mshtml.tlb file:
	
	  Missing Dependency Information
	
	CAUSE
	=====
	
	Mshtml.tlb is being included incorrectly in the setup package, and the PDW is
	not able to determine what dependencies there are for the file.
	
	Mshtml.tlb does not need to be installed on target computers because it is
	already installed on Windows 2000 and any computers that have Internet Explorer.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem:
	
	- You can manually deselect the Mshtml.tlb file so that it is not included in
	  your setup package.
	
	- If you install the latest service pack for Visual Studio 6.0, the Package and
	  Deployment Wizard does not pick up Mshtml.tlb.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and choose a New DHTML Project.
	
	2. Save and compile the project without making any changes to it.
	
	3. Start the PDW and select the Project that you just created. Click the Package
	  button.
	
	4. Choose Internet Package and click Next.
	
	5. Accept the Default folder to assemble the package and click Next. You should
	  now receive the error message for the Mshtml.tlb file:
	
	  Missing Dependency Information
	
	Additional query words: sp4 kbfix
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
