---
layout: page
title: "Q238242: BUG: OLE Automation Returns &quot;Element not found&quot; Error"
permalink: kb/238/Q238242/
---

## Q238242: BUG: OLE Automation Returns &quot;Element not found&quot; Error

	Article: Q238242
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe600bug kbDSupport kbBug kbGrpDSSSafe kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to Visual SourceSafe (VSS) using OLE Automation, the following
	error message appears:
	
	  Element not found.
	
	RESOLUTION
	==========
	
	The following two workarounds will resolve the problem described in the SYMPTOMS
	section:
	
	- Unregister the VSS 5.0 OLE Automation .dll and register the VSS 6.0 OLE
	  Automation .dll using the following commands from a DOS prompt:
	
	     regsvr32 /u <path to 5.0 ssapi.dll>
	     regsvr32 <path to 6.0 ssapi.dll>
	
	- Use early binding instead of late binding (See the REFERENCES section for
	  more information on early binding).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem can exist in Visual Basic (VB), VBScript, WScript, or VC (if you
	use the Class Wizard to wrap the DLL). The problem only happens on computers
	that previously had SourceSafe 5.0 installed on them and then upgraded to
	SourceSafe 6.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new VB project.
	
	2. Add a button to the form and type the following in the Click event of the
	  button:
	
	     Dim objVSSDatabase
	     Set objVSSDatabase = CreateObject("SourceSafe")
	     objVSSDatabase.Open <"path to SourceSafe srcsafe.ini file\srcsafe.ini">,    <"login">, <"password">
	
	3. Run the program and click the button you just added.
	
	REFERENCES
	==========
	
	A Primer on Early Binding (or How to Make OLE Automation Faster)
	
	  Q161983 ACC: Regsv32a.exe Available on MSL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe600bug kbDSupport kbBug kbGrpDSSSafe kbISS 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
