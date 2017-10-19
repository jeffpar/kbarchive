---
layout: page
title: "Q181547: SMS: Office 97 PDF Inventory Properties Are Incorrect"
permalink: /kb/181/Q181547/
---

## Q181547: SMS: Office 97 PDF Inventory Properties Are Incorrect

	Article: Q181547
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After an inventory scan is performed, Microsoft Office 97 for Windows does not
	appear as an installed package for clients, even though Office is installed.
	
	CAUSE
	=====
	
	The Package Definition File (PDF) provided with both Standard and Professional
	editions of Office 97 for Windows and Office 97 Service Release 1 (SR-1) defines
	Package Inventory properties for Office. When a Systems Management Server client
	runs the Systems Management Server Inventory Agent, it scans the local drives
	for files that match the criteria defined in the Package Inventory properties.
	The PDFs supplied with Office 97 and 97 SR-1 check for the Mso97.dll and
	Off97spec.ini files.
	
	The Systems Management Server Client Inventory Agent uses the following
	definition to check for these files:
	
	- MSO97.DLL
	
	  -and-
	
	- OFF97SPEC.INI CRC=0 226 1548
	
	NOTE: The cyclic redundancy check (CRC) for OFF97SPEC may be different based on
	the version of Office 97 (Standard or Professional).
	
	The detection rule specifies 'AND' rather than 'OR', therefore, the package is
	not detected. This is because these two files are not located in the same
	directory.
	
	WORKAROUND
	==========
	
	Use one of the following methods (as appropriate to your situation) to work
	around the problem.
	
	Change the Package Inventory Properties
	---------------------------------------
	
	If you already have an existing Package for Office 97 that was created in Systems
	Management Server, change the Package Inventory properties using these steps:
	
	1. Start the Systems Management Server Administrator program.
	
	2. Open the Packages window.
	
	3. Open the Package for Office 97 (Standard or Professional).
	
	4. Click the Inventory button.
	
	5. Select the line in the Inventory properties that contains 'AND' and then
	  click the Toggle button. This changes 'AND' to 'OR'.
	
	6. Allow time for the Package properties to be replicated to logon servers and
	  subsites before you attempt a new software inventory.
	
	Change the PDF
	--------------
	
	If you have not yet created a package for Office 97, change the detection rule in
	the PDF from 'AND' to 'OR'. Perform the following steps:
	
	1. Locate the file in your Office 97 source.
	
	2. Open the file in a text editor such as Notepad.
	
	3. Search for the string "Detection Rule Part 2=AND" (without the quotation
	  marks).
	
	4. Change 'AND' to 'OR'.
	
	5. Save the file.
	
	6. Import the file into a new package.
	
	Use a Newer PDF
	---------------
	
	Use the newer version of the PDF for Office 97 which is included in Systems
	Management Server Service Pack 2 or later. The newer PDF corrects this problem
	by removing the Mso97.dll file from the inventory criteria.
	
	For additional information about the Microsoft Office Package Definition File,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q167630 SMS: Office 97 Contains Incorrect PDF Format
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	
