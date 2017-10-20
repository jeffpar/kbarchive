---
layout: page
title: "Q99161: HOWTO: Derive From Classes not Listed in ClassWizard"
permalink: /kb/099/Q99161/
---

## Q99161: HOWTO: Derive From Classes not Listed in ClassWizard

{% raw %}

	Article: Q99161
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS: 1.0, 1.5, 1.51, 1.52; WINNT: 1.0, 2.0,
	Operating System(s): 
	Keyword(s): kbwizard kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC42
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft ClassWizard supports deriving classes only from the classes listed in
	the Class Type field of the Add Class dialog box. To create a class derived from
	a previously derived class or to derive from another class based on the
	Microsoft Foundation Class Library CWnd class that is not listed in the Class
	Type field, a few extra steps are required. The text below presents these steps.
	
	MORE INFORMATION
	================
	
	For example, suppose the following derivation tree is desired:
	
	  MyDerivedClass
	        ^
	        |
	    MyBaseClass
	        ^
	        |
	     CDialog
	
	or, it is desirable to derive a class from a class based on CWnd that is not
	listed in the Class Type field in the Add Class dialog box, such as CFileDialog.
	There is no predefined method to create this type of class hierarchy using the
	ClassWizard. However, by using the parsing techniques ClassWizard uses, you can
	create these class hierarchies.
	
	The steps below use CDialog as the default class type. Before proceeding,
	determine which predefined class type is closest to the desired base class. For
	example, CFileDialog is similar to CDialog. If none of the classes correspond
	closely to your desired class, use the generic CWnd class.
	
	To create a class with multiple levels of derivation, perform the following three
	steps:
	
	1. Use ClassWizard to create MyDerivedClass, deriving it from CDialog (or
	  another appropriate predefined class).
	
	2. Use ClassWizard to create MyBaseClass, deriving it from CDialog (or another
	  appropriate predefined class).
	
	3. Edit the code generated for MyDerivedClass and replace all references to
	  CDialog with MyBaseClass. This step is very important; many errors occur if
	  this is not done correctly and these errors may be difficult to track down.
	
	To create a class based on a class based on CWnd that is not supported by
	ClassWizard, perform the following two steps:
	
	1. Use ClassWizard to create MyDerivedClass, deriving it from CDialog (or
	  another appropriate predefined class based on CWnd).
	
	2. Edit the code generated for MyDerivedClass and replace all references to
	  CDialog with the name of the class from which you are deriving this class,
	  for example, CFileDialog. This step is very important; many errors occur if
	  this is not done correctly and these errors may be difficult to track down.
	
	Then, for either type of class, perform the following three steps:
	
	1. Delete the project .CLW file.
	
	2. Start App Studio, load your project .RC file, and activate Class Wizard.
	
	3. Because the project does not have a .CLW file, ClassWizard prompts to
	  generate a .CLW file. Choose Yes to generate the file. NOTE: You must
	  generate this file in App Studio. If you attempt to generate the file in
	  Visual Workbench, VWB instructs you to generate the file in App Studio.
	
	Once App Studio has created the .CLW file, the base class of the derived class
	has been changed successfully. To verify this, view the class in ClassWizard and
	see the data in the Class Info dialog box.
	
	For classes created using multiple levels of derivation, you can use ClassWizard
	to pass system messages, such as WM_INITDIALOG, to the base class as well. To do
	this, perform the following nine steps:
	
	1. Start ClassWizard.
	
	2. Select the MyDerivedClass class.
	
	3. Select MyDerivedClass in the Object IDs window.
	
	4. Select the WM_INITDIALOG message in the Messages window.
	
	5. Choose Add Function to add a function skeleton that calls the OnInitDialog()
	  function in MyBaseClass.
	
	6. Select the MyBaseClass class.
	
	7. Select MyBaseClass in the Object IDs window.
	
	8. Select the WM_INITDIALOG message in the Messages window.
	
	9. Choose Add Function to add a function skeleton that calls the OnInitDialog()
	  function in CDialog. This step is required only once. If you derive
	  additional classes from the base class, you do not need to redo this
	  operation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : WINDOWS: 1.0, 1.5, 1.51, 1.52; WINNT: 1.0, 2.0,
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
