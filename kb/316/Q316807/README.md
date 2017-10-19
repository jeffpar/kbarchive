---
layout: page
title: "Q316807: FIX: Fatal Error When You Select Properties from the Table Menu"
permalink: /kb/316/Q316807/
---

## Q316807: FIX: Fatal Error When You Select Properties from the Table Menu

	Article: Q316807
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 7.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click Properties on the Table menu in Visual FoxPro while a Browse window
	is open, and the table does not belong to the current data session, the
	following errors may occur:
	
	  Fatal error: Exception code=C0000005
	
	  followed by:
	
	  The instruction at "0x77e6e5dc" referenced memory at "0x00000000". The memory
	  could not be "written".
	
	Note that these errors do not occur if another table receives focus before you
	click Properties.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the following code in a program file and then run the file:
	
	  CREATE TABLE mytable (fld1 C(10))
	  INSERT INTO mytable (fld1) VALUES ("Record one")
	  USE
	
	  PUBLIC oForm
	
	  oForm = NEWOBJECT("myform")
	
	  DEFINE CLASS myform AS FORM
	  	DATASESSION=2
	
	  PROCEDURE INIT
	  	USE mytable  
	  	BROWSE NOWAIT 
	
	  ENDDEFINE
	
	2. When the Browse window appears, click Properties on the Table menu.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
