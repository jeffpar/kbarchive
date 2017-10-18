---
layout: page
title: "Q116482: PRB: Inserting OLE Object Causes General Protection Fault"
permalink: kb/116/Q116482/
---

## Q116482: PRB: Inserting OLE Object Causes General Protection Fault

	Article: Q116482
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a 16-bit version of Microsoft Windows (Windows versions 3.x), while
	you are editing a general field, if you choose Insert Object from the Edit menu,
	and then choose the File button, a general protection (GP) fault will occur.
	
	CAUSE
	=====
	
	The problem is caused by a corrupted REG.DAT file. The REG.DAT file contains
	information about file associations and object-linking-and- embedding (OLE)
	objects.
	
	RESOLUTION
	==========
	
	For information on how to resolve this problem, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q80393 How to Rebuild the Default Windows REG.DAT File
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open and browse a database that contains a general field.
	
	2. Double-click the general field.
	
	3. From the Edit menu, choose Insert Object.
	
	4. Select an item, and then choose the File button.
	
	If the REG.DAT file is corrupted, the GP fault will occur.
	
	Additional query words: FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a errmsg err msg gpf "error creating OLE object" 3.10 3.11 registry
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300
	Version           : WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
