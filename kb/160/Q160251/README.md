---
layout: page
title: "Q160251: BUG: &quot;Invalid Page Fault&quot; After OLE Automation with WordPerfect"
permalink: /kb/160/Q160251/
---

## Q160251: BUG: &quot;Invalid Page Fault&quot; After OLE Automation with WordPerfect

	Article: Q160251
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbinterop kbole kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs after you make an OLE Automation call to Corel
	WordPerfect 7.0:
	
	  VFP.EXE Caused an Invalid Page Fault in module OLEAUT32.DLL
	
	CAUSE
	=====
	
	WordPerfect is attempting to send a return value to Visual FoxPro.
	
	WORKAROUND
	==========
	
	Use an assignment statement to call the object methods.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Corel WordPerfect 7.0 does allow OLE Automation. In Visual FoxPro, you can use
	the CreateObject command to create a reference to a WordPerfect object, but you
	will still get the error when you try to call any of its methods.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following commands in the Visual FoxPro Command window:
	
	     oWP = CREATEOBJECT("WordPerfect.PerfectScript")
	     oWP.FileNew
	
	WordPerfect 7.0 actually creates a new document before Visual FoxPro generates an
	error.
	
	To work around the problem, change the last command to the following:
	
	     result = oWP.FileNew()
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbinterop kbole kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	
	=============================================================================
	
