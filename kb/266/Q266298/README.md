---
layout: page
title: "Q266298: BUG: IWindows::Next and IDocuments::Next Leak Memory"
permalink: kb/266/Q266298/
---

## Q266298: BUG: IWindows::Next and IDocuments::Next Leak Memory

	Article: Q266298
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbide kbVC kbVC500bug kbVC600bug kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the IWindows::Next or IDocuments::Next method to automate the
	Visual C++ Integrated Development Environment (IDE), you may see a memory leak.
	This leak is approximately 4 bytes for each time the IWindows::Next or
	IDocuments::Next method is called.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the automation layer code for the Visual C++
	IDE.
	
	RESOLUTION
	==========
	
	After prolonged use, the IDE may need to be closed and restarted because the
	leak may cause the system to become low on resources. If you restart the IDE,
	memory that was leaked is freed and the system regains the resources that were
	consumed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	To reproduce this leak, compile the ReplAll Visual C++ add-in sample and run the
	sample in the Visual C++ IDE. You can find the ReplAll sample in the MSDN index
	by searching on ReplAll.
	
	The leak is noticeable by using a memory monitoring tool such as Task Manager in
	Microsoft Windows NT. View the memory usage for the Msdev.exe file.
	
	Additional query words: reply all replyall msdev
	
	======================================================================
	Keywords          : kbAutomation kbide kbVC kbVC500bug kbVC600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
