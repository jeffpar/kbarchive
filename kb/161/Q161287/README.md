---
layout: page
title: "Q161287: HOWTO: Register 4.0 Add-ins for Visual Basic 5.0 or 6.0"
permalink: /kb/161/Q161287/
---

## Q161287: HOWTO: Register 4.0 Add-ins for Visual Basic 5.0 or 6.0

	Article: Q161287
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbVBp500 kbVBp600 kbGrpDSVB kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Add-ins created in Microsoft Visual Basic 4.0 do not appear in the list of
	available add-ins when you are using Microsoft Visual Basic 5.0 or 6.0. This
	behavior occurs when the add-in is installed after Microsoft Visual Basic
	version 5.0 or 6.0 have been installed on the system.
	
	NOTE: Microsoft Visual Basic version 5.0 and 6.0 only support 32-bit add- ins.
	
	MORE INFORMATION
	================
	
	Microsoft Visual Basic version 5.0 and 6.0 have moved the available add-in
	registration from VB.INI to a new file, VBADDIN.INI. This new file is used
	exclusively for Visual Basic add-ins.
	
	However, add-ins written with Microsoft Visual Basic 4.0 are usually written to
	register themselves automatically into the VB.INI file. Therefore, the Add-in
	Manager for Microsoft Visual Basic version 5.0 and 6.0 is unable to determine
	how to launch Visual Basic 4.0 add-ins.
	
	NOTE: It is recommended that add-ins written for Microsoft Visual Basic 4.0 be
	updated to register automatically into the VBADDIN.INI file instead of the
	VB.INI file.
	
	Follow these steps to register add-ins written with Microsoft Visual Basic 4.0
	that you want to use with Microsoft Visual Basic versions 5.0 or 6.0:
	
	1. If Microsoft Visual Basic version 5.0 or 6.0 is currently running, click Exit
	  from the File menu.
	
	2. Properly install the add-in as per its installation instructions. If
	  Microsoft Visual Basic version 5.0 or 6.0 is currently running, click Exit
	  from the File menu.
	
	3. From the Start menu, click Find.
	
	4. Type "VB.INI" in the Named field. Click Find Now.
	
	5. The VB.INI file will be found in the \Windows folder. Double-click VB.INI to
	  edit it.
	
	6. In the VB.INI file, find the section labeled [Add-Ins32]. Locate the entry
	  for the installed Visual Basic 4.0 add-in. It should look like the
	  following:
	
	     [Add-Ins32]
	     MyAddin.AddinClass=0
	
	7. Copy the line "MyAddin.AddinClass=0" by selecting the entire line and then
	  clicking Copy from the Edit menu.
	
	8. From the File menu, click Exit. Click No when asked to save the VB.INI file.
	
	9. In the Find window, type "VBADDIN.INI" and click Find Now.
	
	10. The VBADDIN.INI file will be found in the \Windows folder. Double-click
	  VBADDIN.INI to edit it.
	
	11. Insert a new line at the bottom of the VBADDIN.INI file. Move the edit
	  cursor to this new line.
	
	12. From the Edit menu, click Paste. This will paste the line that you copied
	  from the VB.INI into VBADDIN.INI.
	
	13. From the File menu, click Save.
	
	14. From the File menu, click Exit.
	
	RESULT: The next time you run Microsoft Visual Basic 5.0 OR 6.0, your add-in will
	be available in the Add-In Manager.
	
	REFERENCES
	==========
	
	Microsoft Visual Basic 4.0 Programmer's Guide
	"Installing Add-Ins", pages 105-106
	
	Microsoft Visual Basic 5.0 online Help
	
	Microsoft Visual Basic 5.0 Books Online
	
	Additional query words: invisible
	
	======================================================================
	Keywords          : kbusage kbVBp500 kbVBp600 kbGrpDSVB kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
