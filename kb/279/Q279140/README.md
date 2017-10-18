---
layout: page
title: "Q279140: FIX: ALINES() Leaks Memory Handle with Empty String"
permalink: kb/279/Q279140/
---

## Q279140: FIX: ALINES() Leaks Memory Handle with Empty String

	Article: Q279140
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the ALINES function with an empty string, Visual FoxPro 6.0
	increments the number of memory handles by one.
	
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
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from a program (.prg) file:
	
	  Local lni
	  For lni = 1 to 10
	  	local array laTest[1]
	  	=alines(laTest, '')
	  	_Calcmem = lni  && store counter to survive clear all
	  	Clear all
	   	?SYS(1011), int(_calcmem)
	  	Local lni
	  	lni = _calcmem
	  Endfor
	  RETURN
	
	After the code runs, two numbers appear. The first column indicates the memory
	handles as reported by SYS(1011). The second number indicates the iteration of
	the loop. Note that Visual FoxPro adds one handle per iteration.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbDSupport kbCodeSnippet kbVS600sp5 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
