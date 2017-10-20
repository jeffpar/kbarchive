---
layout: page
title: "Q132441: INFO: Multithread Process and Visual FoxPro"
permalink: /kb/132/Q132441/
---

## Q132441: INFO: Multithread Process and Visual FoxPro

{% raw %}

	Article: Q132441
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp300 kbvfp500
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The term process is a multitasking concept used in Windows 95 and Windows NT. A
	process represents a running instance of an application. It has resources such
	as files, memory, and threads. A thread represents a single path of execution of
	the process. In Windows 95 and Windows NT, an application can spawn multiple
	threads by calling the Win32API function CreateThread().
	
	Under Windows 95 and Windows NT, Visual FoxPro exists in two threads. All
	applications created in Visual FoxPro also exist in two threads, and there is no
	Visual FoxPro command or operation that spawns an additional thread. Explicitly
	calling the CreateThread API function via the DECLARE-DLL command from a program
	creates a thread, but Visual FoxPro code won't execute in that thread;
	therefore, it is not recommended.
	
	Because Win32s does not support multiple threads for a single process, Visual
	FoxPro exists in one thread in Windows and Windows for Workgroups.
	
	REFERENCES
	==========
	
	"Inside Windows 95," by Adrian King, published by Microsoft Press.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
