---
layout: page
title: "Q198537: BUG: &quot;Sorry! An error occurred when generating the object.&quot;"
permalink: kb/198/Q198537/
---

## Q198537: BUG: &quot;Sorry! An error occurred when generating the object.&quot;

	Article: Q198537
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbClassView kbide kbVC600bug kbATL300bug kbGrpDSMFCATL
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message occurs when you follow the steps in the More
	Information section below using Visual C++ 6.0:
	
	  Sorry! An error occurred when generating the object.
	
	Or, when attempting to insert a new ATL object or when manually adding an object
	from another project into a new ATL project, you may receive the error message:
	
	  Sorry! An error occurred when generating the object.
	
	CAUSE
	=====
	
	This is a bug in the Visual C++ product.
	
	Or, a project dependency file may not be checked out from the file version
	control system or the file may be marked as read-only. Typically, a Resource.h
	or similar file may be marked as read-only.
	
	This error can also occur if the Interface Definition Language (IDL) file parser
	has problems reading the Interface Definition Language file due to characters it
	does not expect. For example, a help string with square brackets such as the
	following may also cause the error:
	
	  [
	  <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0> uuid(11110C7E-134E-4164-9E37-EEF94221BF7E),
	  <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0> version(1.0),
	  <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0> helpstring("[MyCompany] Software Project")
	  ]
	
	RESOLUTION
	==========
	
	Check to see if the dependency files are read-only. If they are, check them out
	from the file version control system or change the file attribute to
	read/write.
	
	
	Also, check to see if your project contains more than one Interface Definition
	Language file with "library" blocks. If so, this error can also occur. This is
	because the Wizard utilizes only one Interface Definition Language file to write
	the IDL of the new object. When there are multiple IDL files, it cannot figure
	out which file to write to and failure occurs.
	
	The workaround for the problem with the square brackets is to remove the brackets
	so that the string included in the "Symptoms" section instead looks like this:
	
	  [
	              uuid(11110C7E-134E-4164-9E37-EEF94221BF7E),
	              version(1.0),
	              helpstring("-My Company- Software Project")
	  ]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Step to Reproduce the Error
	---------------------------
	
	1. Create a standard MFC AppWizard (EXE) project.
	
	2. Choose SDI in step one.
	
	3. Click Finish.
	
	4. Select the ClassView and right-click the project name classes, bringing up
	  the menu.
	
	5. Select New ATL Object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbClassView kbide kbVC600bug kbATL300bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
