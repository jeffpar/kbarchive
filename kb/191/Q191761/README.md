---
layout: page
title: "Q191761: PRB: Error In VFP When Help File 'Topics Found' Dialog Displays"
permalink: /kb/191/Q191761/
---

## Q191761: PRB: Error In VFP When Help File 'Topics Found' Dialog Displays

	Article: Q191761
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
	
	When accessing the Visual FoxPro Help file through Visual FoxPro, if the topic
	found displays the "Topics Found" dialog, switching back to Visual FoxPro and
	clicking anywhere on the screen results in an error.
	
	CAUSE
	=====
	
	The "Topics Found" dialog is a modal dialog and focus cannot be given back to
	the calling program until that dialog closes.
	
	RESOLUTION
	==========
	
	Before switching back to Visual FoxPro, close the Topics Found dialog box.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	From the Visual FoxPro Command window run the following:
	
	  HELP VIEW
	
	This should display a Topics Found dialog in the Help file. Use the ALT+Tab keys
	to go back to Visual FoxPro and then click the screen. The following error
	displays:
	
	  This action could not be completed because the other program is busy. Choose
	  'Switch To' to activate the busy program and correct the problem.
	
	On Windows 95 and Windows 98, this works fine. On Windows NT, the Switch To
	button opens the Start menu.
	
	Additional query words: kbVFp600 kbDocs
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
