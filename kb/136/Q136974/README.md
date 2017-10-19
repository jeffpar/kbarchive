---
layout: page
title: "Q136974: PPT7: Error Opening Earlier Version Presentation"
permalink: /kb/136/Q136974/
---

## Q136974: PPT7: Error Opening Earlier Version Presentation

	Article: Q136974
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbconversionkbbuglist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to open a file that was created in an earlier version of
	PowerPoint, you receive one of the following error messages:
	
	  Sorry, "C:\...\POWERPNT\PP4X32.DLL" can't be loaded.
	
	  -or-
	
	  "C:\PATH\FILENAME.PPT" Sorry, this type of file cannot be opened in Microsoft
	  PowerPoint.
	
	CAUSE
	=====
	
	This problem occurs when the registry entries for the Pp4x32.dll file are
	invalid or missing.
	
	The Pp4x32.dll file handles the translation of all previous versions of Microsoft
	PowerPoint.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Verify that the Pp4x32.dll file is on your computer.
	
	  If the Pp4x32.dll file is not on your computer, rerun PowerPoint setup in
	  maintenance mode and click Reinstall.
	
	2. Verify that the file is correctly registered in the Windows registry:
	  a. Exit PowerPoint.
	
	  b. On the Start menu, click Run.
	
	  c. In the Open box, type "Regedit" (without the quotation marks), and then
	     click OK.
	
	  d. Expand the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\Office\PowerPoint\7.0\Translators\Import\PP4Trans
	
	     If the right pane of the Registry Editor does not contain any values or the
	     value do not correspond with those listed in the following table, the
	     registry entry for the Pp4x32.dll file is invalid or missing.
	
	     The following table outlines the values that you will find in the registry
	     key if the PP4x32.dll file is registered correctly:
	
	        Value                    Data
	        -----                    ----
	
	        Extensions               "POT PPT"
	        Path                     "C:\<Path>\PP4X32.DLL"
	        Title                    "PowerPoint (2-4) Files"
	        Translator Type          0x00000001 (1)
	
	     <Path> represents the folder where you installed PowerPoint.
	
	  e. Locate and select the following registry key:
	
	     Hkey_Classes_Root\.ppt
	
	  f. On the Registry menu, click Export Registry File.
	
	  g. In the Export Registry File dialog box, type a name in the File Name box,
	     and then click Save.
	
	  h. Reselect the Hkey_Classes_Root\.ppt registry key if it is not currently
	     selected, and then click Delete on the Edit menu.
	
	  i. Close Registry Editor.
	
	  j. Restart PowerPoint and open the PowerPoint 4.0 presentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft
	PowerPoint version 7.0b for Windows 95.
	
	
	Additional query words: powerpoint powerpnt 95 w_powerpt file open Sorry C PP4X32.DLL can t be loaded
	
	======================================================================
	Keywords          : kberrmsg kbdta kbconversion kbbuglist
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
