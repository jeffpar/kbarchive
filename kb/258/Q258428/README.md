---
layout: page
title: "Q258428: FIX: Printer Name Longer than 64 Characters Causes Error"
permalink: /kb/258/Q258428/
---

## Q258428: FIX: Printer Name Longer than 64 Characters Causes Error

{% raw %}

	Article: Q258428
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4f
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A printer has a name longer than 64 characters. When you try to print to this
	printer in Visual FoxPro using a command, such as LIST STRUCTURE TO PRINT, or a
	report form, you receive the error:
	
	  Fatal error: Exception: code:=C0000005
	
	RESOLUTION
	==========
	
	Either upgrade to the latest service pack for Visual Studio 6.0 or change the
	name of the printer so it is less than 64 characters in length.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	If the printer name is between 64 and 204 characters in length, the error may
	not immediately occur and may appear intermittently in an application. If the
	printer name is longer than 205 characters, the behavior normally occurs
	immediately.
	
	1. Run the following line of code in the Command window:
	
	  _cliptext=REPLICATE("a",205)
	
	2. From the Start menu, select Settings, open Control Panel, and then choose the
	  Printers option. Highlight a local printer and press the F2 key. Paste the
	  contents of Clipboard into the printer name using the CTRL+V key combination.
	  Press ENTER to save the name.
	
	3. Right-click the newly renamed printer and set it as the default.
	
	4. Exit and restart Visual FoxPro.
	
	5. Place the following code into a program and run it:
	
	  SET SAFETY OFF
	  CREATE TABLE testtab (f1 c(5))
	  INSERT INTO testtab (f1) VALUE ("aaaa")
	  LIST STRUCTURE TO PRINTER
	  CREATE REPORT test FROM testtab
	  REPORT FORM test TO PRINTER
	
	The error mentioned in the "Symptoms" section appears and Visual FoxPro closes.
	
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
