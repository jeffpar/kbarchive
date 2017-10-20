---
layout: page
title: "Q134977: FIX: Error Occurs When Remove Object That Has Pending Code"
permalink: /kb/134/Q134977/
---

## Q134977: FIX: Error Occurs When Remove Object That Has Pending Code

{% raw %}

	Article: Q134977
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a new form or a form that has been recently modified is instantiated for
	the first time by using the DO FORM <formname> command or by any other
	means, the user sees an error message and Visual FoxPro closes.
	
	- In Windows for Workgroups version 3.11, the error is a Win32S error.
	
	- In Windows NT, the error is an Application error.
	
	- In Windows 95, the error is an illegal operation error similar to this one:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	  The details presented in Windows 95 are similar to this:
	
	  Visual FoxPro caused an invalid page fault in module VFP.EXE at
	  0137:0040dbc5."
	
	CAUSE
	=====
	
	In one of the methods of one (or more) of the objects, the developer has placed
	at least one command in the code call stack. (The code call stack is a list of
	pointers to Visual FoxPro commands that will run when a specified event takes
	place.) The code placed in the call stack is triggered by a specific event. In
	this case, the specific event takes place during the form load procedure.
	
	That triggered code, or other code in a method of one of the other objects on the
	form, removes the object and its methods from the form. Therefore, when the
	pointer in the call stack triggers the code, the problem occurs because the
	owning object, along with the code, has been removed.
	
	WORKAROUND
	==========
	
	There may be times when the developer needs to have an object rendered invisible
	to the user. Rather than issuing a REMOVEOBJECT, the developer can set the
	object's visible property to false (.F.).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window of Visual FoxPro, issue this command:
	
	     MODIFY FORM TEST
	
	2. In the Form Designer, place a command button on Form1.
	
	3. In the Refresh method of the command button, enter this line of code:
	
	     THISFORM.REMOVEOBJECT(This.Name)
	
	4. Save the form definition as TEST, and close the Form Designer.
	
	5. In the Command window, issue this command:
	
	     DO FORM TEST
	
	Additional query words: 3.00 VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
