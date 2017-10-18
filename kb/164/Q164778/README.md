---
layout: page
title: "Q164778: BUG: Loading Visual Test Project May Crash Developer Studio"
permalink: kb/164/Q164778/
---

## Q164778: BUG: Loading Visual Test Project May Crash Developer Studio

	Article: Q164778
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kbenv kbGenInfo kbide kbVC kbArtTypeINF
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Test for Windows, version 4.0 
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performing the following procedures may cause Developer Studio to crash when
	both Visual C++ and Visual Test are installed:
	
	1. Load a Visual Test project (.vtp file) from Windows 95 Explorer or Windows NT
	  3.51 File Manager, or run the command "msdev project.vtp" from a command line
	  prompt to launch Developer Studio.
	
	2. In Developer Studio, expand the tree in the TestView of the project workspace
	  window. Select one of the nodes in the tree. Choose Insert | New Test Project
	  Item from the menu to bring up the "New Test Project Item" dialog.
	
	The error message you may get is:
	
	  
	
	  "This program has performed an illegal operation and will be shut down"
	  Details..
	  MSDEV caused an invalid page fault in
	  module MSTEST.PKG at 0137:52197c6b.
	
	RESOLUTION
	==========
	
	Instead of loading Visual Test projects from Explorer, File Manager, or the
	command line, launch the Developer Studio first, and then open the Visual Test
	projects by selecting File | Open Workspace. This will not cause the Developer
	Studio to crash.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install Visual C++ 4.x. Choose "Reboot the machine" at the end of the
	  installation.
	
	2. Install Visual Test 4.0a. Choose "Reboot the machine" at the end of the
	  installation.
	
	3. Open the Explorer or File Manager. Go to directory
	  \msdev\samples\Vtest40\Ntalk\Record.
	
	4. Double-click on file Synchost.vtp. This will bring up Developer Studio with
	  the Synchost project loaded. You should be at the TestView pane at this
	  point.
	
	5. Expand the tree control, and then select a node in the tree. Choose Insert |
	  New Test Project Item. This brings up the "New Test Project Item" dialog box.
	
	6. This will reproduce the problem.
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbenv kbGenInfo kbide kbVC kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword2 kbVTest400 kbZNotKeyword3 kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.00 4.10 4.20
	Issue type        : kbbug
	
	=============================================================================
	
