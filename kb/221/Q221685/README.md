---
layout: page
title: "Q221685: FIX: NODEFAULT in Activate of Page Can Cause Fatal Error"
permalink: /kb/221/Q221685/
---

## Q221685: FIX: NODEFAULT in Activate of Page Can Cause Fatal Error

	Article: Q221685
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a NODEFAULT command in the Activate event of a page in conjunction with
	the pageframe's PageCount property being set to 0, can cause the following
	error:
	
	  Fatal Error: Exception code C000005
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a PRG and type in the code below:
	
	  PUBLIC oform1
	  oform1 = CREATEOBJECT('form1')
	  oform1.SHOW()
	
	  DEFINE CLASS form1 AS FORM
	  	ADD OBJECT pf1 AS PAGEFRAME WITH ;
	  		PAGECOUNT = 0
	  	PROCEDURE pf1.INIT()
	  		THIS.ADDOBJECT('pg1', 'pg')
	  	ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS pg AS PAGE
	  	PROCEDURE ACTIVATE()
	  		NODE
	  	ENDPROC
	  ENDDEFINE
	
	2. Save and run the PRG.
	
	Immediately after the PRG runs, the Fatal Error occurs and Visual FoxPro
	terminates.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
