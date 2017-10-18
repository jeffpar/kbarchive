---
layout: page
title: "Q315069: FIX: Report Preview Error with Properties Window and DE Open"
permalink: kb/315/Q315069/
---

## Q315069: FIX: Report Preview Error with Properties Window and DE Open

	Article: Q315069
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you preview a report with the Properties window and data environment of the
	report open, Visual FoxPro closes after reporting the following error:
	
	  Fatal Error: Exception code: C0000005
	
	This error does not occur if the data environment is not open when the preview
	appears.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called "Test" and add the following code:
	
	  ACTIVATE WINDOW "properties"
	  CREATE TABLE test (f1 i,f2 c(10))
	  INSERT INTO test VALUES(1,"aaa")
	  CREATE REPORT testrepo FROM test
	  MODIFY REPORT testrepo nowait
	
	  KEYBOARD '{ALT+V}E'
	  DOEVENTS
	  REPORT FORM testrepo PREVIEW
	
	2. Save the program and then execute the program from the Command window.
	
	Additional query words: crash dataenvironment kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
