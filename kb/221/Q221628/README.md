---
layout: page
title: "Q221628: FIX: Using Genhtml.prg in Distributed Application is Difficult"
permalink: /kb/221/Q221628/
---

## Q221628: FIX: Using Genhtml.prg in Distributed Application is Difficult

	Article: Q221628
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbInternet kbProjManager kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Genhtml engine included with Visual FoxPro 6.0 has many dependencies,
	including several programs and a number of foundation class libraries. When
	building a project that uses Genhtml.prg, the project manager will often fail to
	automatically include all the necessary dependencies in the project.
	
	RESOLUTION
	==========
	
	The following files should be manually added to the project:
	
	  _base.vcx
	  _html.vcx
	  _movers.vcx
	  Runcode.prg
	  Setobjrf.prg
	
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
	
	1. Create a new project.
	
	2. Add a new program to the project.
	
	3. Add the following code to the program added in step 2.
	
	  CREATE TABLE test (f1 CHAR(10))
	  FOR i = 1 TO 10
	  	INSERT INTO test VALUES(TIME())
	  ENDFOR
	  DO Genhtml.prg WITH ALIAS(), ALIAS(), 2
	
	4. Build the project into an EXE.
	
	5. Run the EXE.
	
	Note that the EXE will fail because it cannot find all of its dependencies.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbProjManager kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
