---
layout: page
title: "Q104238: FIX: ClassWizard Cannot Read .CLW File &gt; 65530 Bytes"
permalink: kb/104/Q104238/
---

## Q104238: FIX: ClassWizard Cannot Read .CLW File &gt; 65530 Bytes

	Article: Q104238
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbMFC kbVC100bug kbVC150fix kbClassWizard kbGrpDSVCCompilerkbbuglist kbfixlist
	Last Modified: 07-MAY-2001
	
	1.00    | 1.00
	WINDOWS | WINDOWS NT
	kbtool kbfixlist kbbuglist
	
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Invoking ClassWizard produces the following message:
	
	  Out of memory. Unable to complete command
	
	CAUSE
	=====
	
	The project .CLW file (containing Class Wizard information) may have grown
	larger than 65530 bytes. This can occur if a project contains many classes that
	have been created using Class Wizard.
	
	RESOLUTION
	==========
	
	There are two possible workarounds for this problem:
	
	- Divide your project into multiple projects [that is, one project that builds
	  a static library (.LIB file) containing the code that most likely won't
	  change, and the other project that builds the .EXE and includes the library
	  in the linker options]. -or-
	
	- Delete the .CLW file and reconstruct the .CLW using only the source files
	  that are significant. To build a new .CLW file, follow these steps: 1. Delete
	  the existing .CLW file. 2. Load the project. 3. Go to App Studio. 4. Invoke
	  ClassWizard by typing CTRL+W or choosing the Class Wizard button. 5. A
	  message box will be displayed asking to rebuild the .CLW. Choose Yes. 6. A
	  dialog box be displayed similar to the one shown on page 133 of the Visual
	  C++ for Windows App Studio "User's Guide." The dialog box permits the user to
	  select the source files that will be scanned by Class Wizard. By default, the
	  dialog box selects all files. To minimize the amount of ClassWizard
	  information that will be placed in the .CLW file, select only the source
	  files that contain the classes for which you think you will need ClassWizard.
	
	NOTE: Be cautious when deleting a .CLW file! First, you may lose message filter
	information for classes. Message filters determine what messages are displayed
	in the Messages list box in ClassWizard. To change the message filter for a
	class, choose the Class Info button and then select the appropriate filter from
	the Message Filter combo box.
	
	Second, the project will lose information that maps resources created in App
	Studio to classes created in ClassWizard. For example, when a developer invokes
	Class Wizard when a dialog box resource is present in App Studio, ClassWizard
	keeps information in the .CLW file that tells it which class is associated with
	that resource (information for the class is displayed). If the .CLW file is
	deleted, the user may be asked to select a class for the resource. This can
	cause a problem. Consider the following scenario:
	
	1. A dialog box is created in App Studio.
	
	2. The .CLW file is deleted.
	
	3. The developer reconstructs the .CLW file.
	
	4. An attempt is made to create a class for the dialog box.
	
	When an attempt is made to create a class for the dialog box, a list box appears
	on the screen asking which class is to be associated with the dialog box rather
	than the Add Class dialog box. Because no class has yet been created by
	ClassWizard, the list box is inappropriate. To resolve the problem, go to the
	Visual Workbench instead and invoke ClassWizard. Select Add Class from the
	ClassWizard dialog box. You will then be permitted to create a class for the
	dialog box, as well as specify the ID of the dialog box resource that will be
	associated with the class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This bug was corrected in Microsoft Visual C++ for Windows
	version 1.5.
	
	REFERENCES
	==========
	
	See Chapter 9 in the App Studio "User's Guide" for more information about
	rebuilding the .CLW file.
	
	Additional query words: 1.00 1.10 listbox combobox 64K
	
	======================================================================
	Keywords          : kbMFC kbVC100bug kbVC150fix kbClassWizard kbGrpDSVCCompiler kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
