---
layout: page
title: "Q297826: FIX: CHRSAW() Function Can Hang When AutoYield = .F."
permalink: /kb/297/Q297826/
---

## Q297826: FIX: CHRSAW() Function Can Hang When AutoYield = .F.

{% raw %}

	Article: Q297826
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Visual FoxPro AutoYield property is set to .F., the CHRSAW() function may
	not be able to check the keyboard buffer properly, and may cause the system to
	stop responding (hang).
	
	CAUSE
	=====
	
	The AutoYield property prevents Windows event messages from interrupting program
	flow. Therefore, when CHRSAW() checks to see whether any keyboard events have
	come in, it can get into a state in which it continues to look for an event, but
	can't find one.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code will eventually reproduce the behavior, although perhaps not
	on the first run. If you open the Task Manager, you will see that Visual FoxPro
	is taking all available CPU time.
	
	  *!* Q297826 FIX: CHRSAW() Function Can Hang System When AutoYield = .F.
	  CLEAR
	
	  _VFP.AutoYield = .F.
	  lnCount = 1000
	  lnStart = SECONDS()
	
	  FOR lnI = 1 TO lnCount
	  	@ 1,1 SAY lnI
	  	llTest = CHRSAW()
	  ENDFOR
	
	  ? SECONDS() - lnStart
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
