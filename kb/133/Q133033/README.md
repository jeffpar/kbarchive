---
layout: page
title: "Q133033: FIX: Tracing Main Program After DO &#42;.PJX Causes Exception Err."
permalink: /kb/133/Q133033/
---

## Q133033: FIX: Tracing Main Program After DO &#42;.PJX Causes Exception Err.

{% raw %}

	Article: Q133033
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The series of steps described under the More Information section is a process in
	which someone mistakenly chooses to DO <*.PJX> file from the Visual FoxPro
	user interface. Then the user gets a "Syntax error". Realizing a mistake was
	made, the user opens the *.PJX file and runs the proper *.PRG file. When the
	"Syntax error" appears again upon doing the *.PRG file, the user suspends the
	error and brings up the Trace Window to find out where the error is. At that
	point, a crash occurs in Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run this command:
	
	     CREATE PROJECT test_pro
	
	2. Select the Code tab.
	
	3. Click the New button.
	
	4. Type "WAIT WINDOW" (without the quotation marks) into Program1.
	
	5. Press CTRL+W to save the file as TEST_PRO.PRG and exit the Program Editor.
	  (The .PRG file must have the same name as the .PJX file).
	
	6. Run this command:
	
	     DO TEST_PRO.PJX.
	
	7. Cancel the resulting "Syntax error" and edit window.
	
	8. Run this command:
	
	     MODIFY PROJECT test_pro.
	
	9. Select the Code tab and drill down to Programs.
	
	10. Select the program file TEST_PRO, and click the Run button.
	
	11. Suspend the "Syntax error."
	
	12. On the Tools menu, click Trace window.
	
	13. Click Resume in the Trace window.
	
	14. Cancel the "Syntax Error."
	
	15. Close the program editing window. At this point, a crash occurs in Visual
	  FoxPro.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
