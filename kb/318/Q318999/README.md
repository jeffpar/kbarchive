---
layout: page
title: "Q318999: FIX: Fatal Exception Starting Object Browser with MSAA"
permalink: /kb/318/Q318999/
---

## Q318999: FIX: Fatal Exception Starting Object Browser with MSAA

	Article: Q318999
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Accessible Event Watcher from the Microsoft Active
	Accessibility Software Development Kit (SDK), and you start the Object Browser
	in Visual FoxPro 7.0, you may receive an error message similar to the
	following:
	
	  Fatal error: Exception code=C0000005 @ 02/27/02 09:19:59 PM. Error log file:
	  C:\Program Files\Microsoft Visual FoxPro 7\vfp7err.log
	  Called from - cobjectbrowserinterface.resize line 0 { }
	  Called from - cobjectbrowserinterface.applysettings line 0 { }
	  Called from - cobjectbrowserinterface.init line 0 { }
	  Called from - objectbrowser line 0 { c:\program files\Microsoft Visual FoxPro
	  7\objectbrowser.app}
	
	This may also occur with screen reader products that use Active Accessibility.
	
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
	
	This can occur when you monitor the Value object property and OBJ_LOCATIONCHANGE
	event through Active Accessibility.
	
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
	
	6. In the Events list, click to select OBJ_LOCATIONCHANGE. Make sure that only
	  OBJ_LOCATIONCHANGE is selected.
	
	7. In the Object Properties list, click to select Value, and then click OK.
	
	8. Return to Visual FoxPro 7.0. On the Tools menu, click Object Browser. Note
	  that you receive the error message that is described in the "Symptoms"
	  section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
