---
layout: page
title: "Q171549: FIX: Cached Class Factorys Get Released by Illegal Thread"
permalink: /kb/171/Q171549/
---

## Q171549: FIX: Cached Class Factorys Get Released by Illegal Thread

{% raw %}

	Article: Q171549
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Cached Class Factorys can get released by illegal thread.
	
	CAUSE
	=====
	
	The repository maintains a cache of class factorys. If a class factory has not
	been accessed for a short period of time, the reference to the class factory
	will get released. However, the reference is released from a different thread
	than the one that initially obtained the reference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	MORE INFORMATION
	================
	
	The behavior above violates the apartment-threading model, and can cause a
	crash.
	
	This behavior is evident when a repository object is implemented in Visual Basic.
	This only occurs in Visual Basic where a class is defined as the class that is
	the implementation of the generic repository class. This behavior occurs when
	the ClassID for the Visual Basic class matches the repository classdef's
	ClassID. It crashes when the client creates an instance before the cache is
	released. When the engine releases the class factory cache, the crash occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVBDB kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
