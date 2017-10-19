---
layout: page
title: "Q315647: FIX: Dockable Windows May Cause VFP to Crash"
permalink: /kb/315/Q315647/
---

## Q315647: FIX: Dockable Windows May Cause VFP to Crash

	Article: Q315647
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the internal name table contains more than 32,000 entries and you access a
	dockable window, Visual FoxPro (VFP) may close unexpectedly with the following
	error:
	
	  Fatal Error: Exception code=C0000005
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add the line MVCOUNT=64000 to your Config.fpw file and restart Visual FoxPro.
	  This ensures that Visual FoxPro can add enough entries to the name table to
	  cause the error.
	
	2. Create a program called "Test", add the following code, and then run the
	  program:
	
	  FOR x = 1 TO 50000
	  	varname = "blah" + TRANSFORM(x)
	  	PUBLIC &varname
	  ENDFOR
	  ACTIVATE WINDOW PROPERTIES
	
	3. Make sure that the Properties window is dockable by right-clicking its title
	  bar and selecting Dockable (if not already set).
	
	4. Press ALT+TAB to switch focus away from Visual FoxPro, and press ALT+TAB
	  again to return. (This packs the name table.)
	
	5. Close the Properties window.
	
	  Visual FoxPro closes after reporting the error mentioned in the "Symptoms"
	  section.
	
	Additional query words: crash kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbvfp kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
