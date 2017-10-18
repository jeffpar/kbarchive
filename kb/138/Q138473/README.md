---
layout: page
title: "Q138473: BUG: Code Window Closes Design Tools When Run from a Program"
permalink: kb/138/Q138473/
---

## Q138473: BUG: Code Window Closes Design Tools When Run from a Program

	Article: Q138473
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When modifying reports, forms, or projects, you may find that under certain
	conditions the report, form, or project may close unexpectedly. This will happen
	when you have opened the item for editing using a program file, application, or
	from within an executable.
	
	Typically an item is opened for editing by using one of these methods;
	
	- Clicking Open or New on the File menu.
	
	- Double-clicking the item from a project.
	
	- Entering the following command in the Command window:
	
	     MODIFY COMMAND <item name or type>
	
	CAUSE
	=====
	
	The problem occurs when you place the following line of code in a program (.prg)
	file:
	
	     MODIFY COMMAND <item name or type>
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. On the File menu, click New. Then click Program, and click the New button.
	
	2. Enter the following text in the new program:
	
	      MODIFY Report testr
	      MODIFY Form testf
	      MODIFY project testp
	
	3. Save and Run the Program.
	
	4. Right-click within the report window, and then click Data Environment.
	
	5. Right-click within the Data Environment window, and then click Code. Note
	  that the Report Writer and data environment close. This behavior is erratic.
	  The Report Writer window may not close.
	
	6. Repeat steps 4 and 5 for the Form Designer. Note that the same behavior
	  occurs.
	
	7. With the project window displayed, from the Tools menu, click Debugger. Note
	  that the Project closes.
	
	8. Click Delete to remove the project.
	
	Additional query words: kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
