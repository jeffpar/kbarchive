---
layout: page
title: "Q193477: FIX: Developer Studio Exits When Creating a Derived Class"
permalink: /kb/193/Q193477/
---

## Q193477: FIX: Developer Studio Exits When Creating a Derived Class

{% raw %}

	Article: Q193477
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbEditor kbide kbVC600bug kbDevStudio kbGrpDSTools kbNoUpdate
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a derived C++ class, Developer Studio exits with no warning or
	error message.
	
	CAUSE
	=====
	
	A global variable of that class was declared before the derived C++ class was
	defined.
	
	RESOLUTION
	==========
	
	Always define the class first before declaring global variables from that class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a C++ project in Developer Studio.
	
	2. In one of the source files, declare the following global variable:
	
	        CDerivedTest g_Test;
	
	3. Position the cursor above this declaration, and begin defining the
	  CDerivedTest class as follows:
	
	        class CDerivedTest : public CBaseTest
	
	RESULTS: Before finishing the first line of the class definition, Developer
	Studio will exit without warning.
	
	In this example, writing the CDerivedTest class definition first avoids the
	problem.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q153284 INFO: Limitations of IntelliSense in Visual C++ 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEditor kbide kbVC600bug kbDevStudio kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
