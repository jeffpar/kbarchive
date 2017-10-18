---
layout: page
title: "Q162929: ACC97: Err Msg: &quot;Could not create a valid file name&quot; in VSS"
permalink: kb/162/Q162929/
---

## Q162929: ACC97: Err Msg: &quot;Could not create a valid file name&quot; in VSS

	Article: Q162929
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you add an object to Visual SourceSafe, you may receive the following error
	message:
	
	  Could not create a valid file name for '<object>'. You must rename it
	  before you can add it to Source Code Control.
	
	CAUSE
	=====
	
	You used a character that is invalid for Visual SourceSafe in the object name.
	
	RESOLUTION
	==========
	
	Do not use any of the following characters in object names that will be included
	in a project in Visual SourceSafe:
	
	"&", "@", "<", ">, "{", "}", "[", "]", "(", ")", ":", ";", "=", "^", "|", "*", "\", "/", "%", "?", ",", "'", """, or tabs. 
	
	Some names in Visual SourceSafe cannot begin or end with spaces or tabs.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new database named "ssTest" (without the quotation marks).
	
	2. Place this database under Source Safe Control by selecting SourceSafe on the
	  Tools menu and clicking "Add Database to SourceSafe."
	
	3. Create a new module.
	
	4. Save the module as "**<modTest>**" (without the quotation marks) and
	  close it.
	
	5. Note that you receive the error mentioned in the SYMPTOMS section. Click OK.
	
	6. Change the name of the module to "modTest" (without the quotation marks).
	
	7. Add the module to SourceSafe by selecting SourceSafe on the Tools menu and
	  clicking "Add Objects to SourceSafe."
	
	REFERENCES
	==========
	
	For more information about naming limitations, search the Visual SourceSafe Help
	Index for "Naming Conventions."
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
