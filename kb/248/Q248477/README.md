---
layout: page
title: "Q248477: FIX: Deadlock Using STL Map or Set in Multithreaded Application"
permalink: /kb/248/Q248477/
---

## Q248477: FIX: Deadlock Using STL Map or Set in Multithreaded Application

	Article: Q248477
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCRT kbSTL kbVC600bug kbVC600fix kbVC600QFE kbVS600sp4fix kbVS600sp5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, used with:
	   - Microsoft Visual C++, 32-bit Editions, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Two threads can deadlock when one thread uses a map, multimap, set, or multiset
	class member that waits for a second thread and that uses another run-time
	object that requires synchronization.
	
	CAUSE
	=====
	
	The _Tree class in the <xtree> STL header, the basic data structure used
	for map and set, uses the same critical section to protect _Tree static data
	members as other run-time objects use to protect their private data.
	
	RESOLUTION
	==========
	
	Change the architecture of your application so that two threads do not use C
	run-time objects that use the same critical section. For instance, if your
	object contained in a map has a destructor that waits for a second thread to
	create an ostream derived-class, then change the architecture so that the
	destructor does not need to wait for the ostream-derived class to be
	constructed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCRT kbSTL kbVC600bug kbVC600fix kbVC600QFE kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
