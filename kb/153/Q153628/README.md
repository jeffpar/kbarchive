---
layout: page
title: "Q153628: PRB: Exclamation Mark in Folder Name Causes Genmenu Error"
permalink: /kb/153/Q153628/
---

## Q153628: PRB: Exclamation Mark in Folder Name Causes Genmenu Error

	Article: Q153628
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbHWMAC kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug kbvfp600bugkbbuglist
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you generate a menu in a folder when name of that folder contains an
	exclamation point (!), the following error appears:
	
	  File '<hard drive name>:<folder name>:<file name>.DBC' does
	  not exist. Line number 649
	
	Here 'hard drive name' is the name of the Macintosh hard drive, 'folder name' is
	the name of the folder up to the exclamation point, and 'file name' is the text
	after the exclamation point. After you click the OK button, another error
	appears:
	
	  Menu <file name> is invalid
	  Line number 657
	
	Here 'file name' is the name of the menu file that Genmenu.prg attempted to
	create.
	
	The same errors occur in Visual FoxPro for Windows; however, the line numbers and
	the path structures differ. Remove the exclamation point from the folder name.
	
	CAUSE
	=====
	
	The Genmenu program has difficulty parsing a path that contains a folder name
	that contains an exclamation point. The program is treating the exclamation
	point as a separator between a database and a table name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a folder called "Test!" (without the quotation marks).
	
	2. Type the following in the Command window:
	
	     Create Menu Test1
	
	3. Choose Quick Menu.
	
	4. Save the menu in the Test! folder, and attempt to generate the source code.
	  The errors appear.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbHWMAC kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug kbvfp600bug kbbuglist kbfixlist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
