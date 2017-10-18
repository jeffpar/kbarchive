---
layout: page
title: "Q188542: PRB: VB 4.0 16-Bit Add-Ins Fail After Installing VB 6.0"
permalink: kb/188/Q188542/
---

## Q188542: PRB: VB 4.0 16-Bit Add-Ins Fail After Installing VB 6.0

	Article: Q188542
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbRegistry kbVBp kbVBp400 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After installing Visual Basic 6.0 you will receive the following error when
	using Visual Basic 4.0 16-bit:
	
	  <Add-In Module> could not be loaded. Remove it from the list of
	  available Add-Ins?
	
	CAUSE
	=====
	
	Visual Basic 6.0 changes some of the registry settings that Visual Basic 4.0
	16-bit uses.
	
	RESOLUTION
	==========
	
	Update the Windows Registry to enable Visual Basic 6.0 and Visual Basic 4.0
	16-bit to work together on the same development system.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Step-by-Step Example
	--------------------
	
	1. Copy and paste the below text into a text file:
	
	  REGEDIT4
	
	  [HKEY_CLASSES_ROOT\TypeLib\{EF404E00-EDA6-101A-8DAF-00DD010F7EBB}\99.0]
	
	  [HKEY_CLASSES_ROOT\TypeLib\{EF404E00-EDA6-101A-8DAF- 00DD010F7EBB}\99.0\0]
	
	  [HKEY_CLASSES_ROOT\TypeLib\{EF404E00-EDA6-101A-8DAF-
	  00DD010F7EBB}\99.0\0\win16] @="C:\\VB\\vbext.olb"
	
	2. Modify the "C:\\VB\\vbext.olb" line above to point to the location where
	  Visual Basic 4.0 16-bit was installed on your system.
	
	  NOTE: Make sure to press ENTER on the last line of the text file before saving
	  in the next step, or Regedit may not enter the last registry entry above
	  during step 4.
	
	3. Save the file as Vb4.reg.
	
	4. Launch Windows Explorer, and double-click the Vb4.reg file. This process
	  updates the system registry.
	
	5. Launch Visual Basic 4.0 16-bit. The Add-Ins now work correctly.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You receive the error message listed above in one of two ways within the Visual
	Basic 4.0 16-bit environment:
	
	- When you launch Visual Basic 4.0 16-bit, and you have at least 1 Add-In
	  selected to load.
	
	- When you attempt to add an Add-In module to Visual Basic 4.0 through the
	  Add-In Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbRegistry kbVBp kbVBp400 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
