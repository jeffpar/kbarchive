---
layout: page
title: "Q162931: PRB: SourceSafe Commands not Available for RunCommand Method"
permalink: kb/162/Q162931/
---

## Q162931: PRB: SourceSafe Commands not Available for RunCommand Method

	Article: Q162931
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	You can use the new RunCommand method to execute menu commands in Microsoft
	Access 97, and, in general, most of the application's functionality is available
	using this method.
	
	However, the RunCommand method does not expose the menu commands to control
	Visual SourceSafe Integration from either Visual Basic for Applications code or
	macros.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe menu.
	
	CAUSE
	=====
	
	Microsoft Access 97 does not expose a programmatic interface to Visual
	SourceSafe integration.
	
	RESOLUTION
	==========
	
	You can control Microsoft Visual SourceSafe version 5.0 using OLE Automation
	from Visual Basic for Applications code. You can obtain information concerning
	this functionality by searching for Visual SourceSafe on the Microsoft home page
	on the World Wide Web at:
	
	  http://www.msdn.microsoft.com/.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
