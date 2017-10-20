---
layout: page
title: "Q122259: FIX: ClassWizard Reports Invalid Filename When Importing Class"
permalink: /kb/122/Q122259/
---

## Q122259: FIX: ClassWizard Reports Invalid Filename When Importing Class

{% raw %}

	Article: Q122259
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410fix kbClassWizard kbG
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to import a class into a project using ClassWizard, and locating
	the header file and implementation file using the Browse buttons to select a
	path to each file, you may get an error when you click the OK button even though
	the paths to the files are valid.
	
	If either path has a drive letter in it, ClassWizard displays a message box with
	this error message:
	
	  The file name "<full path to file>" is not a valid file name. Please
	  enter a valid file name.
	
	When the message box is dismissed, the Import Class dialog has the path
	highlighted for change even though the file name and path are valid.
	
	If either path is a relative path that does not include drive letter, such as
	..\..\DIR1\DIR2\MYFILE.H, ClassWizard displays a message box with this error
	message:
	
	  The file names [<full path to header file>, <full path to
	  implementation file>] for class "<class name>" do not exist or are
	  invalid file names.
	
	ClassWizard will accept a relative path that indicates one level above the
	current directory, such as ..\DIR1\DIR2\MYFILE.H.
	
	RESOLUTION
	==========
	
	To successfully import the class, change the path to the header and
	implementation files, so they are not relative paths and do not contain a drive
	letter. For example, ClassWizard will not accept this:
	
	  C:\DIR1\MYFILE.H and ..\..\..\MYFILE.H
	
	But ClassWizard will accept this:
	
	  \DIR1\MYFILE.H
	
	An alternative solution is to copy the files to the project directory. Note that
	in any case, you need to add the class implemenation files to your project. When
	you import a class, ClassWizard will not update your project to include the
	implementation files for the classes you import.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	Additional query words: kbVC400bug 1.00 1.50 1.51 2.00 wizard pathname 4.00 4.10 kbNoUpdate
	
	======================================================================
	Keywords          : kbwizard kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410fix kbClassWizard kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
