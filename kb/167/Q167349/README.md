---
layout: page
title: "Q167349: PRB: Unable to Derive Classes from External Dependencies"
permalink: /kb/167/Q167349/
---

## Q167349: PRB: Unable to Derive Classes from External Dependencies

{% raw %}

	Article: Q167349
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a new class derived from a generic class using the New
	Class Wizard, you might get the following error message:
	
	  The New Class Wizard could not find the appropriate header file(s) to include
	  for the base class(es) <base class name>. If you choose to derive from
	  the class(es) anyway, you may need to manually add the appropriate header
	  file(s) to <derived class file>.
	
	CAUSE
	=====
	
	The New Class Wizard can only derive from classes explicitly included in the
	project. Classes that are only in the External Dependencies folder are not
	considered part of the project. That is, if the base class' header file, where
	the base class is declared, is not included in the project, the wizard cannot
	add the header to the derived class' header file.
	
	RESOLUTION
	==========
	
	To resolve the problem, you can do one of the following:
	
	- Close the message box and derive the class anyway. Add the base class header
	  file manually to the derived class' header file.
	
	-or-
	
	- Add the base class header file to the project. On the Project menu, click Add
	  To Project, and then select Files. Browse for the base class header file,
	  then click OK. After doing this, you should be able to derive the class
	  without any warning messages.
	
	Once the new class has been derived, you may remove the base class file from the
	project, and it will appear in the External Dependencies folder on the next
	build.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following procedures can be used to reproduce the problem.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the AppWizard to generate a generic MFC application.
	
	2. Create a header file named CTestClass.h in which you declare a base class.
	  Make sure CTestClass.h is not added to the project. Delete it from FileView
	  if necessary.
	
	3. Derive a class from CTestClass. by clicking New Class on the Insert menu. In
	  "Class type:" choose "Generic Class". Name the derived class
	  CTestClassDerived. Enter CTestClass as the class name in the Derived From
	  edit box.
	
	4. Click OK to save the derivation and exit the New Class dialog box.
	
	5. You should get the error message box mentioned previously before the dialog
	  box is closed.
	
	Additional query words: member methods wizards VwbIss
	
	======================================================================
	Keywords          : kbide kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
