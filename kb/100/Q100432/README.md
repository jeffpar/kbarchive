---
layout: page
title: "Q100432: PRB: LABEL Command SAMPLE Clause Doesn't Work with Windows"
permalink: kb/100/Q100432/
---

## Q100432: PRB: LABEL Command SAMPLE Clause Doesn't Work with Windows

	Article: Q100432
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the command LABEL FORMAT c:\foxprow\test.lbx SAMPLE is used with FoxPro for
	Windows, the keyword SAMPLE has no effect and the samples are not displayed.
	
	CAUSE
	=====
	
	This behavior occurs because SAMPLE can be only used to test label alignment in
	character-based labels created in FoxPro for MS-DOS.
	
	REFERENCES
	==========
	
	"Language Reference," version 2.5, page L3-603
	
	Additional query words: RWriter LWriter
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,2.5a,3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
