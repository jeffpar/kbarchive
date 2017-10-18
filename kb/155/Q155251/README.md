---
layout: page
title: "Q155251: PPT7: Menu Items Not Available or Missing"
permalink: kb/155/Q155251/
---

## Q155251: PPT7: Menu Items Not Available or Missing

	Article: Q155251
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbui kbdta
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you run PowerPoint 95, you may notice several menu choices that are missing
	or not available. The following is a list of these possible menu selections:
	
	Tools Menu Items
	----------------
	
	- Style Checker
	
	- AutoContent Wizard
	
	- Interactive Settings
	
	- Presentation Conferencing
	
	- AutoClipart
	
	- Meeting Minder
	
	- Write-Up
	
	File Menu Items
	---------------
	
	- Pack and Go
	
	- Genigraphics Wizard
	
	CAUSE
	=====
	
	These features are added to PowerPoint through 2 add-in modules, Ppttools.ppa
	and Pptools1.ppa. If these files are missing, damaged, or not registered
	properly, these items may not appear as a menu selection.
	
	RESOLUTION
	==========
	
	Verify that the PowerPoint 95 add-in files are installed. Listed below are the
	proper file sizes and dates for the two files:
	
	  Ppttools.ppa     248KB   9/27/95 12:00AM
	  Pptools1.ppa    1351KB   9/27/95 12:00AM
	
	If these files are not in the same folder as Powerpnt.exe you should reinstall
	PowerPoint. If these files are the wrong size or date, you should delete the
	files and reinstall PowerPoint.
	
	If the files are installed and are the correct size and date, they may not be
	registered properly in the Windows 95 Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Click the Windows Start button, then click Run.
	
	2. In the Open box, type the following, and then click OK:
	
	  "regedit" (without the quotation marks)
	
	3. Click the plus sign (+) to the left of HKEY_CLASSES_ROOT.
	
	4. Scroll to locate the .ppt registry key.
	
	5. Click the .ppt key to select it.
	
	6. Click Export Registry File on the Registry menu. In Save In, specify Desktop.
	
	7. Provide a name for the registry file, then click Save. Look on the Desktop to
	  see that the registry key has been saved successfully.
	
	8. Return to the Registry Editor. With the registry key still highlighted, click
	  Delete on the Edit menu. Click Yes when you receive the following prompt:
	
	  Are you sure you want to delete this key?
	
	9. Repeat steps 1 through 8 for the .pot, .pwz, and .pps keys.
	
	10. Start PowerPoint to re-register it in Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q140981 PPT7: Components That Cannot be Added or Removed
	
	  Q136973 PPT: Sorry, PowerPoint Could Not Start or Locate 'PPT Tools'
	
	  Q128957 Optional Components Unavailable When User Profiles Are Enabled
	
	Additional query words: available missing damaged corrupt broken lost grayed gray powerpt powerpnt ppt out unavailable gone
	
	======================================================================
	Keywords          : kbui kbdta 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
