---
layout: page
title: "Q163349: ACC97: IPF Adding DB with Large Number of Objects to VSS 4.0"
permalink: /kb/163/Q163349/
---

## Q163349: ACC97: IPF Adding DB with Large Number of Objects to VSS 4.0

{% raw %}

	Article: Q163349
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	SYMPTOMS
	========
	
	When you add a large number of objects to a Visual SourceSafe 4.x project, you
	may receive the following error message:
	
	  MSACCESS caused an invalid page fault in module SSSCC.DLL
	
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	RESOLUTION
	==========
	
	Upgrade to Microsoft Visual SourceSafe version 5.0 or later, or reduce the
	number of objects in your database.
	
	STATUS
	======
	
	This problem no longer occurs with Microsoft Visual SourceSafe version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	WARNING: Following these steps will cause a general protection fault on your
	computer. Make sure you save and close any open work on your computer before
	following these steps.
	
	1. Create a new database with 1000 tables and 1000 queries.
	
	2. Add the database to SourceSafe 4.0. Note that you receive the page fault
	  error message and that Microsoft Access quits.
	
	Additional query words: ACCSCC VSS SCC source safe
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
