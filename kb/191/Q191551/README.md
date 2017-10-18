---
layout: page
title: "Q191551: BUG: CtlPlus Sample Fails to Load"
permalink: kb/191/Q191551/
---

## Q191551: BUG: CtlPlus Sample Fails to Load

	Article: Q191551
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to load the Visual Basic CtlPlus sample that ships with Visual Basic
	6.0 you receive the following error:
	
	  <Path to CtlPlus.vbg>\CtlPlus.ocx could not be loaded- Continue Loading
	  Project?
	
	CAUSE
	=====
	
	The Ctlplus.vbp and the Testctlp.vbp project files reference the built version
	of the Ctlplus.ocx file. However, the sample does not come with a built copy of
	the Ctlplus.ocx file.
	
	RESOLUTION
	==========
	
	Make the following changes to the Ctlplus.vpb and Testctlp.vbp files. Note that
	the Read Only attribute must be cleared on these files first.
	
	1. Open the Ctlplus.vbp file in a text editor like Notepad.
	
	2. Remove the "CompatibleEXE32=CtlPlus.OCX" line from the .vbp file.
	
	3. Save and close the file.
	
	4. Open the Testctlp.vpb file in a text editor like Notepad.
	
	5. Modify the Object reference line to be the following:
	
	        Object=*\ACtlPlus.vbp
	
	  instead of
	
	        Object={782B8EDB-9338-11D1-B06B-00DD01144174}#1.0#0; CtlPlus.ocx
	
	6. Save and close the file. It now opens without giving an error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	All Visual Basic 6.0 samples are on the Visual Studio Microsoft Developer
	Network CD under the Samples\VB98 directory.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the Ctlplus folder from the Samples\VB98 folder on the Visual Studio 6.0
	  CD to your local drive.
	
	2. Try to open the Ctlplus.vbg file. You receive the preceding error.
	
	After you make the changes discussed in the RESOLUTION section of this article
	you should be able to open and run the sample.
	
	Additional query words: kbVBp kbVBp600bug
	
	======================================================================
	Keywords          : kbVBp kbVBp600bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
