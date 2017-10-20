---
layout: page
title: "Q153491: PRB: Jet 3.0 UserCommitSync &amp; ImplicitCommitSync Values Wrong"
permalink: /kb/153/Q153491/
---

## Q153491: PRB: Jet 3.0 UserCommitSync &amp; ImplicitCommitSync Values Wrong

{% raw %}

	Article: Q153491
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2
	Operating System(s): 
	Keyword(s): kbenv kbDAOsearch kbDatabase kbMFC kbODBC kbVC
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you explicitly specify values for the Jet 3.0 UserCommitSync or
	ImplicitCommitSync keys in the registry, these values will not have the expected
	effect.
	
	CAUSE
	=====
	
	According to the Microsoft Jet Database Engine Programmer's Guide, the
	UserCommitSync and ImplicitCommitSync keys can have the following values:
	
	"Yes signifies that Microsoft Jet will wait for commits to finish. Any other
	value means that Microsoft Jet will perform commits asynchronously."
	
	Jet 3.0 incorrectly interprets the value "yes" as asynchronous and "no" as
	synchronous for these two keys.
	
	RESOLUTION
	==========
	
	Specify "yes" for asynchronous and "no" for synchronous.
	
	STATUS
	======
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	These string values can be explicitly set in the registry under:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Jet\3.0\Engines\Jet
	
	REFERENCES
	==========
	
	Microsoft Jet Database Engine Programmer's Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbDAOsearch kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.0 4.1 4.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
