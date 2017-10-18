---
layout: page
title: "Q221663: FIX: FFCs - registry.vcx foxreg.EnumOptions Contains Recursion"
permalink: kb/221/Q221663/
---

## Q221663: FIX: FFCs - registry.vcx foxreg.EnumOptions Contains Recursion

	Article: Q221663
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In foxreg class of registry.vcx class library, the EnumOptions method contains
	recursive code.
	
	RESOLUTION
	==========
	
	To work around this problem, cut out the code in the EnumOptions and paste it to
	EnumFoxOptions or upgrade to Visual Studio SP3 for Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the foxreg class of registry.vcx in class designer.
	
	2. Open the EnumOptions method.
	
	3. The following code appears:
	
	  LPARAMETER aFoxOpts
	  RETURN THIS.EnumOptions(@aFoxOpts,THIS.cVFPOptPath,THIS.nUserKey,.F.)
	
	Note that the code contains a recursive call to itself.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
