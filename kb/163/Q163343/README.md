---
layout: page
title: "Q163343: ACC97: No SourceSafe Symbols in Large Icon View"
permalink: kb/163/Q163343/
---

## Q163343: ACC97: No SourceSafe Symbols in Large Icon View

	Article: Q163343
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multi-user skills.
	
	The Checked In and Checked Out symbols do not appear next to objects in your
	Database window in Large Icon view.
	
	This article assumes that you are familiar with using the client-side
	capabilities of Visual SourceSafe. For more information about Visual SourceSafe,
	please refer to the "Visual SourceSafe User's Guide" or Help topics available
	from the Visual SourceSafe Help menu.
	
	CAUSE
	=====
	
	You have installed a program, such as Microsoft Internet Explorer version 3.0,
	which replaced Comctl32.dll in your Windows System folder with its own version
	of the file.
	
	RESOLUTION
	==========
	
	Do not use Large Icon view if you want to see the Checked In and Checked Out
	symbols.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Perform a fresh install of Microsoft Windows 95, Microsoft Access 97,
	  Microsoft Office 97 Developer Edition Tools, and Microsoft Visual SourceSafe
	  client version.
	
	2. Start Microsoft Access and create a new database called NoSymbol.mdb.
	
	3. Add the database to SourceSafe.
	
	4. On the View menu, click Large Icons. Note that you can see the Checked In
	  symbol next to the objects in the Database window. If you check out an
	  object, note that you can also see the Checked Out symbol next to the object.
	
	5. Quit Microsoft Access 97.
	
	6. Install Microsoft Internet Explorer version 3.0, and then restart your
	  computer.
	
	7. Start Microsoft Access and open NoSymbol.mdb.
	
	8. On the View menu, click Large Icons. Note that you do not see the Checked In
	  and Checked Out symbols next to the objects in the Database window.
	
	REFERENCES
	==========
	
	For more information about source code control, search the Help Index for
	"Source Code Control," or refer to the Source Code Control White Paper included
	with Microsoft Office 97 Developer Edition Tools.
	
	Additional query words: ACCSCC VSS SCC
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbAccessSearch kbAccess97 kbAccess97Search
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
