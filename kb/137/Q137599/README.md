---
layout: page
title: "Q137599: PPT7: Setup Does Not Install the CorelDRAW .CDR Filter"
permalink: kb/137/Q137599/
---

## Q137599: PPT7: Setup Does Not Install the CorelDRAW .CDR Filter

	Article: Q137599
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbgraphic kbsetup kbdta kbconversion
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
	
	If you run PowerPoint for Windows 95 Custom Setup, there is no choice to install
	a filter for CorelDRAW! .cdr files. However, the necessary file (Cdrimp32.flt)
	is on Disk 4 and on the PowerPoint compact disc.
	
	NOTE: The CorelDRAW! filter will install if you do a Complete installation of
	PowerPoint, or a Complete or Custom installation of Microsoft Office for Windows
	95.
	
	CAUSE
	=====
	
	
	RESOLUTION
	==========
	
	If you want to install the CorelDRAW! filter but don't want to install all
	PowerPoint options, you can manually install the .cdr filter by placing
	Cdrimp32.flt in the correct location and registering it.
	
	To Installing Cdrimp32.flt from the PowerPoint Compact Disk
	-----------------------------------------------------------
	
	Cdrimp32.flt is located in the following folder on the PowerPoint compact disc
	(assuming that your CD-ROM drive is drive D):
	
	  D:\Os\Msapps\Grphflt
	
	Copy Cdrimp32.flt to the following folder:
	
	  C:\Program Files\Common Files\Microsoft Shared\Grphflt
	
	To Install Cdrimp32.flt from PowerPoint Disk 4
	----------------------------------------------
	
	1. Copy the Extract.exe file from PowerPoint Disk 1 to your Windows folder.
	
	2. Open an MS-DOS prompt.
	
	3. Insert PowerPoint Disk 4 in drive A or B.
	
	4. Type the following commands (this assumes that Disk 4 is in drive A):
	
	  "extract a:\ppt4.cab cdrimp32.flt /l c:\windows\desktop" (without the
	  quotation marks)
	
	5. You will receive the following message:
	
	  Extract needs cabinet file 'PPT5.CAB' from Microsoft PowerPoint Setup: Disk
	  5'.
	
	  Please enter the path where this file may be found, and press ENTER:
	
	  Insert PowerPoint Disk 5 in the drive and press ENTER.
	
	6. You will now see an icon for Cdrimp32.flt on your desktop. Drag this file to
	  the following folder:
	
	    C:\Program Files\Common Files\Microsoft Shared\Grphflt
	
	To Register Cdrimp32.flt
	------------------------
	
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
	
	1. Make a backup copy of the Registry Key you will be editing by doing the
	  following:
	  a. Click the Windows Start button and click Run.
	
	  b. Type the following in the Open text box:
	
	  "regedit.exe" (without the quotation marks)
	
	  c. Click OK.
	
	  d. When the Registry Editor opens, find the following folder:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Graphics Filters
	
	  e. Select the folder and click Export Registry Key on the Registry menu.
	
	  f. Name the file Graphics.reg and save it to your desktop.
	
	  g. On the Registry menu, click Exit.
	
	2. Use Notepad or another text editor to create a file that contains the
	  following text. (NOTE: The indented lines should actually be continuations of
	  the lines above them.)
	
	     REGEDIT4
	
	     [HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools
	        \Graphics Filters\Import\CDR]
	     "Name"="Corel Draw"
	     "Path"="C:\\Program Files\\Common Files\\Microsoft Shared\\Grphflt\ 
	        \CDRIMP32.FLT"
	     "Extensions"="CDR"
	
	3. Save this file with a filename similar to Cdrimp.reg. (It must have an .reg
	  extension.)
	
	4. Double-click this .reg file to register the CorelDRAW! import filter.
	
	After merging this into the Registry, check to ensure that CDR has been
	successfully added.
	
	STATUS
	======
	
	
	Additional query words: 7.00 ppt7 ppt95 setup w_powerpt cdrimp32.flt
	
	======================================================================
	Keywords          : kb3rdparty kbgraphic kbsetup kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
