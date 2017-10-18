---
layout: page
title: "Q163705: ACC97: Error &quot;Invalid DOS 8.3 Name&quot; Adding DB to SourceSafe"
permalink: kb/163/Q163705/
---

## Q163705: ACC97: Error &quot;Invalid DOS 8.3 Name&quot; Adding DB to SourceSafe

	Article: Q163705
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 12-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	SYMPTOMS
	========
	
	When you add a database to Microsoft Visual SourceSafe, you may receive the
	following error:
	
	  <File Name> is an invalid DOS 8.3 name
	
	This article assumes that you are familiar with using the client and server side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or the Help topics
	available from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	Microsoft Visual SourceSafe is configured to use MS-DOS format file names.
	
	RESOLUTION
	==========
	
	Start Microsoft Visual SourceSafe Explorer and turn off the MS-DOS file name
	option. To do so, follow these steps:
	
	1. Start Microsoft Visual SourceSafe Explorer.
	
	2. On the Tools menu, click Options.
	
	3. Click the View tab.
	
	4. Click to clear the "Always use MS-DOS format filenames" check box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Repeat steps 1-3 in the "Resolution" section.
	
	2. Click to select the "Always use MS-DOS format filenames" box.
	
	3. Quit Microsoft Visual SourceSafe Explorer.
	
	4. Start Microsoft Access and create a new database called "This is a long file
	  name.mdb" (without the quotation marks).
	
	5. Add the new database to SourceSafe control. Note that you receive the error
	  message:
	
	  This is a long file name.ACB is an invalid DOS 8.3 name.
	
	Additional query words: ACCSCC VSS SCC source safe
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
