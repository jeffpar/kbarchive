---
layout: page
title: "Q303831: FIX: ScrollBars on EditBox Control Do Not Show in Compiled .exe"
permalink: kb/303/Q303831/
---

## Q303831: FIX: ScrollBars on EditBox Control Do Not Show in Compiled .exe

	Article: Q303831
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Forms that contain EditBox controls do not display the vertical scrollbar when
	they are run in an application using the Visual FoxPro run-time libraries. Users
	can still scroll the EditBox control by using the keyboard.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	The individual update is available from the following Microsoft Developer Network
	(MSDN) Web site:
	
	  http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	This update contains new versions of the Visual FoxPro run-time libraries, as
	well as an updated Visual FoxPro run-time merge module (used for redistribution
	of custom applications). This issue only applies to the run-time versions of
	Visual FoxPro that ship with the English product.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	This issue does not occur on forms that contain EditBox controls when the forms
	are run under the full development version of Visual FoxPro (VFP7.exe).
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a .prg file, then run the code:
	
	  TEXT TO temp NOSHOW
	  ON SHUTDOWN quit
	  oform=CREATEOBJECT("Form1")
	  oform.show()
	  READ events
	  DEFINE CLASS form1 as Form
	  ADD OBJECT edit1 as editbox WITH visible=.t.,scrollbars=2
	  PROCEDURE show
	  this.Width=thisform.edit1.width
	  this.Height=thisform.edit1.height+2
	  thisform.edit1.value="this is a very, very, very long string"
	  thisform.edit1.value=thisform.edit1.value+" that needs scrollbars"
	  ENDDEFINE
	  ENDTEXT
	  =Strtofile(temp,"tempprg.prg")
	  Create Project temp Nowait
	  _vfp.ActiveProject.Files.Add("tempprg.prg")
	  _vfp.ActiveProject.Build("tempprg.exe",3)
	  Run /N tempprg.exe
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
