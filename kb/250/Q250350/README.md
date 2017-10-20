---
layout: page
title: "Q250350: PRB: Memory is Low Error Message when Printing to Screen"
permalink: /kb/250/Q250350/
---

## Q250350: PRB: Memory is Low Error Message when Printing to Screen

{% raw %}

	Article: Q250350
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbGrpDSFox kbDSupport
	Last Modified: 18-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing characters to the desktop in Microsoft Visual FoxPro 6.0, the
	following error might occur:
	
	  Memory is low, streaming output updating has been disabled.
	
	This error does not appear to occur in Visual FoxPro 3.0, 5.0, or 5.0a.
	
	RESOLUTION
	==========
	
	In the example below, removing the @...BOX command or the SAVE SCREEN TO and
	RESTORE SCREEN FROM commands prevents the error message.
	
	Also, using @...CLEAR instead of simply using CLEAR between the RESTORE SCREEN
	commands prevents the error message.
	
	MORE INFORMATION
	================
	
	This error most often occurs when converting legacy code from FoxPro 2.x for
	Microsoft Windows or MS-DOS into Visual FoxPro 6.0. Upgrading to Microsoft
	Visual Studio Service Pack 3 does not fix the problem. In the code example
	below, the @...BOX, SAVE SCREEN, and RESTORE SCREEN commands act to cause the
	error. However, printing other characters or using other commands to display
	data to the desktop might also cause the problem.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program containing the following code and execute it:
	
	  FOR i=1 TO 10
	  @1,1 SAY ""
	  SAVE SCREEN && TO scrn2
	  CLEAR
	  @ 5,30,5,50 BOX
	  RESTORE SCREEN && FROM scrn2
	  CLEAR
	  RESTORE SCREEN && FROM scrn2
	  @ 15,1,15,33 BOX
	  ENDFOR
	
	Note that the error mentioned in the "Symptoms" section of this article appears
	repeatedly.
	
	REFERENCES
	==========
	
	For additional information this error message, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q162301 FIX: @ SAY Causes Error After SET DEVICE to PRINTER Command
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
