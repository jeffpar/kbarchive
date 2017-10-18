---
layout: page
title: "Q125417: PRB: Sharing Violation Error Message When Accessing EXE File"
permalink: kb/125/Q125417/
---

## Q125417: PRB: Sharing Violation Error Message When Accessing EXE File

	Article: Q125417
	Product(s): Microsoft FoxPro
	Version(s): 2.60a 3.00
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When more than one user attempts to invoke a EXE file created with the Microsoft
	FoxPro Distribution Kit, the "Sharing Violation" error message may occur.
	
	CAUSE
	=====
	
	The Sharing Violation error message may occur for a variety of reasons. For a
	list of the known reasons why this error message occurs, please see the
	following article in the Microsoft Knowledge Base article:
	
	  Q112567 FoxPro 2.6 for MS-DOS: Most Frequently Asked Questions
	
	RESOLUTION
	==========
	
	Review the following article in the Microsoft Knowledge Base article:
	
	  Q112567 FoxPro 2.6 for MS-DOS: Most Frequently Asked Questions
	
	Sometimes this error message may be caused by a version of SHARE.EXE that is
	included with Novell DOS 7.0. If Novell DOS 7.0 is running on the local
	workstation, and SHARE is loaded in the AUTOEXEC.BAT file, and the version of
	SHARE being used was included with Novell DOS 7.0, then it may be necessary to
	obtain an updated version of SHARE.EXE from Novell. It is possible to obtain an
	updated version of SHARE.EXE from the Novell.
	
	Additional query words: VFoxWin FoxWin novel
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : 2.60a 3.00
	
	=============================================================================
	
