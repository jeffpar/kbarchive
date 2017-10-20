---
layout: page
title: "Q199736: FIX: C1013: Too Many Open Parentheses"
permalink: /kb/199/Q199736/
---

## Q199736: FIX: C1013: Too Many Open Parentheses

{% raw %}

	Article: Q199736
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVC500 kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When including more than 59 levels of nested parentheses in a single expression,
	the compiler generates the following error:
	
	  fatal error C1013: compiler limit : too many open parentheses
	
	CAUSE
	=====
	
	This is a limitation of the compiler. The compiler supports up to 59 levels of
	nested parentheses in a single expression.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	The current limit is 256 levels of nested parentheses in a single expression.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbVC500 kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
