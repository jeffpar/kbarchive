---
layout: page
title: "Q243530: PRB: Microsoft Lightweight Controls CAB Not on Web Site"
permalink: kb/243/Q243530/
---

## Q243530: PRB: Microsoft Lightweight Controls CAB Not on Web Site

	Article: Q243530
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbcode kbwizard kbAppSetup kbDownload kbVBp kbVBp600 kbCodeDownload kbGrpDSInet kbDSupp
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When packaging applications using Microsoft Windowless Controls, the Visual
	Basic Package and Deployment Wizard (PDW) references the MSWLess.cab file linked
	to the site http://activex.microsoft.com/controls/vb6/MSWLess.cab, which does
	not exist.
	
	CAUSE
	=====
	
	The file MSWLess.dep incorrectly points to the above site. The MSWLess.dep file
	should not contain any entries for CABFileName, CABDefaultURL, or CABINFFile.
	Microsoft Lightweight Controls are not meant for distribution over the Web.
	
	RESOLUTION
	==========
	
	Do not use these controls for Web-based applications.
	
	-or-
	
	Remove lines containing CABFileName, CABDefaultURL, and CABINFFile from the
	MSWLess.dep file.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: Lightweight controls MSWLess.cab
	
	======================================================================
	Keywords          : kbcode kbwizard kbAppSetup kbDownload kbVBp kbVBp600 kbCodeDownload kbGrpDSInet kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
