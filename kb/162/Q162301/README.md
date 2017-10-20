---
layout: page
title: "Q162301: FIX: @ SAY Causes Error After SET DEVICE to PRINTER Command"
permalink: /kb/162/Q162301/
---

## Q162301: FIX: @ SAY Causes Error After SET DEVICE to PRINTER Command

{% raw %}

	Article: Q162301
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbprint kbvfp kbvfp500aFIXkbbuglist kbfixlist
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After issuing an @ SAY command that follows a SET DEVICE to PRINTER command, the
	following error occurs:
	
	  Memory is low, so streaming output updating has been disabled.
	
	Subsequent operations in Windows 95 may become sluggish due to a possible loss of
	memory resources.
	
	STATUS
	======
	
	This problem has been fixed in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, enter the following two lines:
	
	      SET DEVICE to PRINT   && press the <Enter> key at the end
	      @1,2 SAY ''           && of each of these lines.
	
	  NOTE: The following message appears in a pop-up dialog box: "Memory is low, so
	  streaming output updating has been disabled."
	
	2. Click OK to remove the message box.
	
	3. In the Command window, enter the following line:
	
	      @3,2 SAY "Print out this test line"
	
	NOTE: When issuing the @...SAY command, ensure the Windows 95 desktop is visible.
	Observe the second @ SAY command or any other subsequent @...SAY command causes
	the desktop icons to flash.
	
	NOTE: A workaround to this problem is to SET PRINTER ON, SET DEVICE TO PRINT and
	issue the print statement using the question marks ("?"). A SET PRINTER OFF and
	SET PRINTER TO command should be issued once the print statements are completed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbvfp kbvfp500aFIX kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
