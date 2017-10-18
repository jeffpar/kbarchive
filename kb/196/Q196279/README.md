---
layout: page
title: "Q196279: FIX: &quot;File or Project not Found&quot; Adding Files Via Integration"
permalink: kb/196/Q196279/
---

## Q196279: FIX: &quot;File or Project not Found&quot; Adding Files Via Integration

	Article: Q196279
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe500bug kbSSafe600fix kbVBp500 kbVC500 kbvfp500 kbVS97
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a project to Visual SourceSafe from one of the applications that
	Visual SourceSafe integrates with, you receive the following error message:
	
	  File or Project not Found.
	
	CAUSE
	=====
	
	Some of the files that you are trying to add are in a subdirectory of the home
	directory (the home directory is the one that contains the .vbp, .dsp, or .pjx
	file), and project security is turned on.
	
	RESOLUTION
	==========
	
	Turn off project security by clearing the Enable Project Security check box in
	the Admin program. To do this, open the Visual SourceSafe Administrator, go to
	the Tools menu, click Options, click the Project Security tab, and clear the
	Enable Project Security check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual SourceSafe 6.0.
	
	MORE INFORMATION
	================
	
	Only the Administrator of the Visual SourceSafe database has permission to turn
	project security on or off.
	
	REFERENCES
	==========
	
	For additional information on related issues, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q164684 PRB: VFP/VSS File Could Not Be Mapped to SourceSafe Project
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe500bug kbSSafe600fix kbVBp500 kbVC500 kbvfp500 kbVS97 
	Technology        : kbVCsearch kbVFPsearch kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVC500 kbVC32bitSearch kbVFP500 kbVFP500a kbSSafe500 kbVC500Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
