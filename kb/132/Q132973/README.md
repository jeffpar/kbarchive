---
layout: page
title: "Q132973: FIX: OLE Automation After Loading Word Manually Gives GP Fault"
permalink: /kb/132/Q132973/
---

## Q132973: FIX: OLE Automation After Loading Word Manually Gives GP Fault

{% raw %}

	Article: Q132973
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when you run a program that contains an OLE
	Automation command in Microsoft Visual FoxPro for Windows after manually opening
	an existing document in Microsoft Word for Windows:
	
	  
	
	                       Application Error
	          WINWORD caused a General Protection Fault in
	             module COMPOBJ.DLL at 0002:0AB6.
	
	This problem occurs only when running Microsoft Visual FoxPro for Windows in the
	Win32s environment.
	
	CAUSE
	=====
	
	Microsoft Visual FoxPro for Windows ships with Win32s version 1.25.142. Win32s
	is required when running Microsoft Visual FoxPro for Windows in a 16- bit
	operating system such as Windows version 3.1 or Windows for Workgroups version
	3.11.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program called TEST.PRG containing the following code:
	
	     oleApp = CREATEOBJECT("Word.basic")
	
	2. Run TEST.PRG at the Visual FoxPro Command window.
	
	3. Manually start Word for Windows.
	
	4. Open an existing document in Word for Windows.
	
	5. Exit Word for Windows.
	
	6. Run TEST.PRG from the Visual FoxPro Command window.
	
	Additional query words: VFoxWin GPF fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
