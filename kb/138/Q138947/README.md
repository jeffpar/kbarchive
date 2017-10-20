---
layout: page
title: "Q138947: FIX: Comma Acts Like CR/LF in Custom Build Options"
permalink: /kb/138/Q138947/
---

## Q138947: FIX: Comma Acts Like CR/LF in Custom Build Options

{% raw %}

	Article: Q138947
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbtool kbide kbVC kbVC500fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A comma used in the command line of the custom build options will be treated as
	a CR/LF unless the string containing the comma is enclosed in double quotation
	marks.
	
	CAUSE
	=====
	
	Commas are used as delimiters internally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Demonstrate Problem
	----------------------------
	
	1. Create or open a project.
	
	2. Create a file that has an extension, such as Comma.p, that does not have
	  built-in build rules. The content doesn't matter. Add this file to the
	  project.
	
	3. In build settings, select Comma.p, and click the Custom Build tab.
	
	4. Put the following on the command line:
	
	     cl -c -Tccomma.p -DCOMMA=',' -Dwhatever
	
	5. Make Comma.obj the output file, and then click OK.
	
	6. Return to the Build Settings dialog box, and notice that the custom build
	  options have split into two lines:
	
	     cl -c -Tccomma.p -DCOMMA='
	     ' -Dwhatever
	
	7. Replace the command with:
	
	     cl -c -Tccomma.p -DCOMMA="','" -Dwhatever
	
	8. Click OK, and then return to the Build Settings dialog box. The custom build
	  options are now correct.
	
	Additional query words: kbVC400bug utilities
	
	======================================================================
	Keywords          : kbtool kbide kbVC kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbVC410 kbVC420 kbFORTRANPower32400NT
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
