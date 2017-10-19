---
layout: page
title: "Q221621: FIX: C0000005 Fatal Error In Editor Selecting Text Then Up Arrow"
permalink: /kb/221/Q221621/
---

## Q221621: FIX: C0000005 Fatal Error In Editor Selecting Text Then Up Arrow

	Article: Q221621
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox
	Last Modified: 27-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are editing a program in the Visual FoxPro editor. You work in the editor
	for an extended period of time without saving the file. You then select some
	text with SHIFT+UP ARROW or SHIFT+DOWN ARROW, copy the text into the clipboard
	using CTRL+C, then press the UP ARROW.
	
	You may see an error similar to the following running on Windows NT:
	
	  VFP.EXE application error. The instruction at 0x006dc198 referenced
	  memory at 0x01dc5000. The memory could not be read.
	
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
	
	Precise steps to reproduce this are not available, as this behavior is extremely
	difficult to reproduce. It is not known whether this occurs on Windows 95 or
	Windows 98. It may also occur with steps similar to those listed in the SYMPTOMS
	section of this article.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
