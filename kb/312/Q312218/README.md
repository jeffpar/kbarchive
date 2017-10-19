---
layout: page
title: "Q312218: BUG: Deadlock in Multithreaded Process Using Declare Statements"
permalink: /kb/312/Q312218/
---

## Q312218: BUG: Deadlock in Multithreaded Process Using Declare Statements

	Article: Q312218
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a multithreaded process hosts in-process Visual Basic ActiveX components
	(.dll or .ocx files), the multithreaded process may experience a deadlock or may
	stop responding (hang).
	
	Examples of multithreaded processes include:
	
	- Microsoft COM+ (Dllhost.exe)
	- Microsoft Internet Information Server (Inetinfo.exe)
	- Microsoft Transaction Server (Mtx.exe)
	
	CAUSE
	=====
	
	There are many causes for a deadlock in a multithreaded process. One possible
	cause is the use of Visual Basic 6.0 ActiveX components with Declare statements
	for application programming interfaces (APIs).
	
	RESOLUTION
	==========
	
	To work around this problem, remove the Declare statements in the ActiveX .dll
	or .ocx projects, and use a type library to declare those APIs instead. For
	additional information about how to create and use a type library, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q189133 HOWTO: Make C DLL More Accessible to VB with a Type Library
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Additional query words: in-proc hang DLL OCX IIS MTS multi-threaded
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
