---
layout: page
title: "Q128060: PRB: Cannot Open a General Field from a FoxPro 2.x Table"
permalink: /kb/128/Q128060/
---

## Q128060: PRB: Cannot Open a General Field from a FoxPro 2.x Table

	Article: Q128060
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro version 3.0, if you open the Object General field in the
	OLETABLE sample table that shipped with FoxPro version 2.6 for Windows, you see
	this error:
	
	  OLE object is invalid or corrupted.
	
	CAUSE
	=====
	
	The error is specific to this particular table. The structure of the OLETABLE
	sample table has an obsolete format that was used in pre-released versions of
	FoxPro version 2.5. FoxPro version 2.6 can read this obsolete format, but Visual
	FoxPro version 3.0 cannot.
	
	WORKAROUND
	==========
	
	Update the table in FoxPro version 2.6 for Windows:
	
	1. Run FoxPro version 2.6 for Windows, and open the OLETABLE file with the USE
	  command.
	
	2. Browse the table by using the BROWSE command and open the OBJECT General
	  field by double-clicking to activate the OLE server.
	
	3. Modify the field in some way, but don't save the changes.
	
	Repeat these three steps for records number 1, 2, and 3. This will cause the
	table to be saved in a FoxPro version 2.6 format. Once it is in a version 2.6
	format, you will be able to open it and browse it in Visual FoxPro for Windows.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin backward
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.6,2.6a,3.0
	
	=============================================================================
	
