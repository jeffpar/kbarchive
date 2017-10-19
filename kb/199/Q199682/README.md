---
layout: page
title: "Q199682: PRB: ATL Object Wizard Cannot Add ATL Object to Existing File"
permalink: /kb/199/Q199682/
---

## Q199682: PRB: ATL Object Wizard Cannot Add ATL Object to Existing File

	Article: Q199682
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL210 kbide kbVC500 kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to insert an ATL Object Wizard object into an existing .h or .cpp
	file, you get the following error message:
	
	  The file {filename} already exists. The Object Wizard requires a new file.
	  Please enter another filename.
	
	CAUSE
	=====
	
	The ATL Object Wizard is not designed to insert objects into existing files. You
	need to provide a new file name for the .h and .cpp files.
	
	RESOLUTION
	==========
	
	This is by design.
	
	STATUS
	======
	
	NOTE: Microsoft Visual C++ version 6.0 does not have this limitation.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a new ATL COM AppWizard project using default options.
	
	2. On the Insert menu, click New ATL Object.
	
	3. Click Simple Object and then click Next.
	
	4. In the ATL Object Wizard Properties dialog box, click the Names tab.
	
	5. In the Short Name edit box, type obj1, and click OK.
	
	  This creates Obj1.h and Obj1.cpp files in the project directory.
	
	6. Repeat steps 2 to 4 above.
	
	7. In the Short Name edit box, type obj2.
	
	8. Change .H Name from Obj2.h to Obj1.h or .CPP Name from Obj2.cpp to Obj1.cpp.
	  Click OK.
	
	RESULTS: You should get the error message:
	
	  The file obj1.h already exists. The Object Wizard requires a new file. Please
	  enter another filename.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbATL210 kbide kbVC500 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
