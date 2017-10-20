---
layout: page
title: "Q139001: PRB: Visual C++ Integration Does Not Recognize .CLW Files"
permalink: /kb/139/Q139001/
---

## Q139001: PRB: Visual C++ Integration Does Not Recognize .CLW Files

{% raw %}

	Article: Q139001
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbMFC kbSSafe400 kbSSafe500 kbSSafe600 kbVC400
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual C++ 4.0, you cannot check in or check out the Class Wizard status file
	(.clw file) for a project that is based on Microsoft Foundation Classes (MFC).
	The .clw file tracks the mapping between resources and classes for a Visual C++
	generated MFC project. The format of this text file is undocumented, but it can
	be easily regenerated.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	When you add a project to source control, Visual C++ does not allow you to
	include the .clw file under source control. This is because, in a multi-
	developer environment, it is easier to regenerate a .CLW file. Because the
	format is undocumented, it would not be easy to merge a .CLW file that results
	from several developers dynamically adding and removing resources, classes, or
	OLE information to a project they are working on.
	
	When you check out a project that does not have a .CLW file, Visual C++ detects
	it and prompts you to recreate it. For a project MDI.MDP in the directory
	C:\CODE\MDI, you would get a message like this one:
	
	  The ClassWizard database "C:\code\mdi\MDI.CLW" does not exist. Would you like
	  to build it from your source files?
	
	If you answer Yes, Visual C++ scans the AppWizard- or ClassWizard-generated files
	and rebuilds the .clw file. If the .clw file does not rebuild properly, check
	the formatting of your file. It may be incorrect. The macros or comments that
	Visual C++ expects to see to use the file with ClassWizard might be the source
	of the problem.
	
	
	With Visual SourceSafe, you can add the .clw file to a project. However,
	Developer Studio does not allow multiuser merge of this file, so Microsoft
	recommends that you not put a .clw file under source control.
	
	REFERENCES
	==========
	
	Visual C++ 4.0 Help: Visual C++ Books; User's Guides; Visual C++ User's Guide;
	Working With Classes; Working With Classes; Using ClassWizard
	
	MSDN Library: Using ClassWizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbMFC kbSSafe400 kbSSafe500 kbSSafe600 kbVC400 
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
