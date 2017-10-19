---
layout: page
title: "Q190870: PRB: TITLEBAR = 0 Does Not Carry Over from Base Class"
permalink: /kb/190/Q190870/
---

## Q190870: PRB: TITLEBAR = 0 Does Not Carry Over from Base Class

	Article: Q190870
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you subclass a form based on the Top-Level form class definition and the
	Top-Level form class TitleBar property is set to 0 (zero), the TitleBar property
	does not get implemented in the subclassed form.
	
	RESOLUTION
	==========
	
	To workaround this behavior, place "Desktop = .T." in the class definition code
	as shown in the MORE INFORMATION section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a .prg file.
	
	2. Paste the following program into the .PRG file:
	
	        PUBLIC x
	        x=CREATEOBJECT("frmform")
	        x.SHOW
	
	        DEFINE CLASS frmform AS FORM
	           ShowWindow = 2
	           TitleBar = 0
	           *Desktop = .T.  && Uncomment this property to hide the TitleBar.
	           ADD OBJECT command1 AS CommandButton
	
	           PROCEDURE command1.Click
	              Thisform.Release
	           ENDPROC
	
	        ENDDEFINE
	
	3. Save and run the .RRG
	
	NOTE: The form appears with a TitleBar even though the TitleBar property is set
	to 0 (off) in the class definition.
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
