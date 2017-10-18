---
layout: page
title: "Q231961: PRB:Set Breakpoint Menu Item in Modify Memo Shows Up at Run Time"
permalink: kb/231/Q231961/
---

## Q231961: PRB:Set Breakpoint Menu Item in Modify Memo Shows Up at Run Time

	Article: Q231961
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600bug kbXBase kbGrpDSFox
	Last Modified: 09-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When selecting the secondary-mouse button while the cursor is positioned over a
	modified memo field in a run-time EXE, there is a Set Breakpoint menu item that
	is not there if performing the same function in Visual FoxPro's development
	environment. This menu item is non-functional and should not be listed in the
	menu of the modified memo field at run time.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program called mymemo and place the following code in it:
	
	       USE mymemo SHARED
	       MODIFY MEMO memofld1
	
	2. Run the following code from the Command window:
	
	       CREATE TABLE mymemo (memofld1 m)
	       BUILD PROJECT mymemo FROM mymemo.prg
	       BUILD EXE mymemo FROM mymemo
	
	3. Go to Windows Explorer and find the mymemo.exe file and run it. After the
	  modified memo field appears, click the secondary-mouse button while the
	  cursor is positioned over the memo field. Note that there is a "Set
	  Breakpoint" menu item in the menu list. Selecting it does nothing.
	
	4. Close the Mymemo executable. Go back to Visual FoxPro's Command window and
	  type:
	
	  "Do Mymemo.prg" (without the quotation marks)
	
	After the modified memo field appears, click the secondary-mouse button while the
	cursor is positioned over it. Note that there is no "Set Breakpoint" menu item
	in the menu list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600bug kbXBase kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
