---
layout: page
title: "Q259962: Visual FoxPro 6.0 Sample: How to Create a Menu Object"
permalink: /kb/259/Q259962/
---

## Q259962: Visual FoxPro 6.0 Sample: How to Create a Menu Object

{% raw %}

	Article: Q259962
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbvfp500 kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MenuObject.exe is a sample that demonstrates how to create a menu object in
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  MenuObject.exe
	  (http://download.microsoft.com/download/vfox60/sample4/6/win98/en-us/MenuObject.exe)
	
	Release Date: May-24-2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The MenuObject.exe file contains the following files:
	
	+-------------------------+
	| File name      | Size   | 
	+-------------------------+
	| MenuObject.pjx | 2,493  | 
	+-------------------------+
	| MenuObject.pjt | 15,675 | 
	+-------------------------+
	| MenuClass.prg  | 10,303 | 
	+-------------------------+
	| MenuObject.scx | 2,232  | 
	+-------------------------+
	| MenuObject.sct | 10,906 | 
	+-------------------------+
	| Program3.prg   | 44     | 
	+-------------------------+
	| DoMenuForm.prg | 2,116  | 
	+-------------------------+
	| ReadMe.txt     | 1,451  | 
	+-------------------------+
	
	This example contains a project (MenuObject.pjx) that runs when a menu item is
	chosen. MenuObject.pjx contains a form (MenuObject.scx), a MenuClass class
	definition (MenuClass.prg), a Main program (DoMenuForm.prg), and a program
	(program3.prg).
	
	Steps to Run the Sample
	-----------------------
	
	1. Run the self-extracting executable file (MenuObject.exe) into a folder.
	
	2. In the Visual FoxPro Command window, run DoMenuForm. When the form is run,
	  three menu pads are displayed on the system menu, Test1, Test2, and Test3.
	
	3. Select Enable Test2 menu pad to enable the Test2 menu pad.
	
	4. Select Add Option4 menu pad to the menu to add another Option4 menu pad to
	  the system menu.
	
	5. Select Add Menu items to Option4 to add a menu item under the Option4 menu
	  pad.
	
	6. Select Disable menu items under Sub-Test3-2-2 to disable the Sub-Test3-2-2
	  menu items in Test3 -> SubTest3-2 -> SubTest3-2-2.
	
	7. Select Disable menu item Sub-Test3-2-2 to disable menu item Sub-Test3-2-2.
	
	8. Select Change Caption Test3 to WhoIsThis to check the Test3 menu pad text to
	  WhoIsThis.
	
	9. Select Test1 -> Exit or click the Exit button on the form to quit the
	  program.
	
	NOTE: The code provided in the sample does not contain any type of error checking
	routines. The code provided only demonstrates how to create a menu object
	wrapper.
	
	Additional query words: MenuObject
	
	======================================================================
	Keywords          : kbfile kbSample kbvfp500 kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
