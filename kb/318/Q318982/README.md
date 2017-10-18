---
layout: page
title: "Q318982: FIX:Fatal Exception Activating Properties Window w/ MSAA Watcher"
permalink: kb/318/Q318982/
---

## Q318982: FIX:Fatal Exception Activating Properties Window w/ MSAA Watcher

	Article: Q318982
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbGrpDSFox kbDSupport kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Accessible Event Watcher from the Microsoft Active Accessibility
	Software Development Kit (SDK), and you activate the Visual FoxPro 7.0
	Properties window with the Accessible Event Watcher set to display full event
	information for invisible or hidden windows, you may receive the following error
	message, and Visual FoxPro 7.0 quits:
	
	  Fatal error: Exception code=C0000005
	
	Screen readers or other accessibility aids that use Microsoft Active
	Accessibility may cause similar errors in Visual FoxPro 7.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Download the following files from Microsoft Active Accessibility 2.0 SDK
	  Tools
	  (http://www.msdn.Microsoft.com/downloads/default.asp?URL=/downloads/sample.asp?url=/msdn-files/027/001/785/msdncompositedoc.xml),
	  and then save them in the same folder:
	
	   - Accevent32.exe
	   - Event32.dll
	
	2. Start Visual FoxPro 7.0. Make sure that the Properties window is closed.
	
	3. Run the Accessible Event Watcher (AccEvent32.exe) from the files that you
	  downloaded.
	
	4. On the Options menu in the Accessible Event Watcher, click Settings.
	
	5. Click to select Display full event information for invisible/hidden windows.
	
	6. Return to Visual FoxPro 7.0, and then run the following code from the Command
	  window:
	
	  ACTIVATE WINDOW properties
	
	Note that you receive the error message that is described in the "Symptoms"
	section, and Visual FoxPro quits.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbGrpDSFox kbDSupport kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
