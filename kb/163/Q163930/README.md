---
layout: page
title: "Q163930: FIX: Canceling Out of Builder Can Cause VFP to Shut Down"
permalink: /kb/163/Q163930/
---

## Q163930: FIX: Canceling Out of Builder Can Cause VFP to Shut Down

{% raw %}

	Article: Q163930
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro for Windows, clicking on Cancel in a builder and then choosing
	Undo from the Edit menu causes FoxPro to shut down. In Visual FoxPro for
	Macintosh, the program reports a Type 11 error and shuts down.
	
	
	The following error message appears in Windows 95 after choosing Undo:
	
	  "This program has performed an illegal operation and will be shut down"
	
	Clicking Details reveals the following message:
	
	  "VFP caused an invalid page fault in module VFP.exe at <memory
	  address>"
	
	In Windows NT 4.0, the following error appears:
	
	  "An application error has occurred and an application error log is being
	  generated"
	
	  "VFP.exe
	  Exception: access violation <error number>, Address: <memory
	  address>"
	
	The operating system then closes Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem does not occur in Visual FoxPro 5.0 because the Undo menu pad is not
	available in this instance.
	
	MORE INFORMATION
	================
	
	WARNING: As may occur with any system error or abnormal shutdown of an
	application on the Macintosh, some customers have reported that the following
	steps have corrupted the hard drive on their machines. Therefore, you should not
	attempt to reproduce these steps on the Macintosh.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add a text box object to the form.
	
	2. Select the text box object, right-mouse click and choose Builder from the
	  menu.
	
	3. In the Builder, select Cancel.
	
	4. Click the Form Designer to set the focus on it.
	
	5. Select the Undo option from the Edit menu pad and note that the error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
