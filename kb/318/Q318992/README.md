---
layout: page
title: "Q318992: FIX: Fatal Exception in Edit Box with MS Active Accessibility"
permalink: /kb/318/Q318992/
---

## Q318992: FIX: Fatal Exception in Edit Box with MS Active Accessibility

	Article: Q318992
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an edit box on a form, and you use the Accessible Event Watcher
	from the Microsoft Active Accessibility Software Development Kit (SDK),you may
	receive an error message that is similar to the following when you tab to the
	edit box, click the edit box with your mouse, or type in the edit box:
	
	  Fatal error: Exception code=C0000005 @ 02/27/2002 8:41:09 PM.
	  Error log file: C:\Program Files\Microsoft Visual FoxPro 7\vfp7err.log Called
	  from - test line 5 {c:\test\test.prg c:\test\test.fxp}
	
	This error may also occur with screen reader products that use Active
	Accessibility.
	
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
	
	This can occur when you monitor the Value object property through Active
	Accessibility.
	
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
	
	5. Under Object Properties, click Value, and then click OK.
	
	6. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  CREATE CURSOR cjunk (f1 m) 
	  APPEND BLANK 
	  ox = CREATEOBJECT('frm1')
	  ox.show
	  READ EVENTS 
	
	  DEFINE CLASS frm1 as Form 
	  	showwindow = 2
	
	  ADD OBJECT text1 as textbox
	
	  ADD OBJECT edit1 as editbox WITH top = 50, ;		
	  	controlsource = 'cjunk.f1'
	  PROCEDURE init 
	  	THISFORM.Text1.SetFocus()
	  ENDPROC
	  PROCEDURE QUERYUNLOAD()
	  	CLEAR EVENTS
	      THISFORM.Release()
	  ENDPROC 
	  ENDDEFINE
	
	7. Tab to the edit box, and then type any character. Note that you receive the
	  error message that is described in the "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
