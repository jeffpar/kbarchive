---
layout: page
title: "Q138350: PPT7: &quot;Sorry, There Is No Valid Speller&quot; Error"
permalink: kb/138/Q138350/
---

## Q138350: PPT7: &quot;Sorry, There Is No Valid Speller&quot; Error

	Article: Q138350
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta kbproof
	Last Modified: 16-APR-2000
	
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
	
	When you try to run the spelling checker in PowerPoint for Windows 95, you may
	receive the following message:
	
	  Sorry, there is no valid speller. You should run Setup and reinstall.
	
	If the Registry does not contain all the necessary keys you receive the following
	additional message:
	
	  The spelling information is missing from the Registry. You should run Setup
	  and reinstall.
	
	CAUSE
	=====
	
	When PowerPoint for Windows 95 installs, it may write incorrect information to
	the Registry, or it may not write all the necessary lines in the appropriate
	Registry key. The text string referencing the spelling .dll or the dictionary
	.lex file may be missing, or it may be pointing to an incorrect file.
	
	This problem, however, has been corrected in the international releases of
	PowerPoint 7.0.
	
	RESOLUTION
	==========
	
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
	
	The PowerPoint spelling checker can work with either of the following two pairs
	of files. If the pairs are mismatched, the spelling check fails. One pair
	represents files installed by the Office installation and the other for files
	installed by the stand-alone version of PowerPoint. English.
	
	  Version       Dictionary             Speller
	  -------       ----------             -------
	
	  Office        Mssp2_en.lex           Mssp232.dll
	  Stand-alone   Mssp_am.lex            Mssp32.dll
	
	Make sure one of the pairs of files is on the hard disk. The default location for
	these files in Windows 95 is
	
	  C:\Program Files\Common Files\Microsoft Shared\Proof
	
	and the default location in Windows NT is:
	
	  C:\Winnt\Msapps\Proof
	
	If these files are missing, you must run Setup to restore them. If the files are
	present, use the following steps to check your Registry to make sure the
	information is correct.
	
	1. Click the Windows 95 Start button and then click Run. (Or click Run on the
	  File menu in the Windows NT Program Manager.)
	
	2. Type "Regedit" (without the quotation marks), or "Regedt32" (without the
	  quotation marks) for Windows NT in the Run dialog box and click OK.
	
	3. Open the following key:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Proofing Tools
	        \Spelling\1033\Normal
	
	4. This key should contain the following values:
	
	  Dictionary:
	  Engine:
	
	  Make sure that text to the right of these values is the correct path to the
	  spelling files. If they are incorrect, double-click the incorrect value to
	  bring up the editing screen.
	
	5. Correct the path. Click OK. Also open the following key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Office\PowerPoint\7.0\Spelling\Speller
	
	  The correct data for Speller should read:
	
	     Speller     "1033\Normal"
	
	  (This is the value for the American English speller; double-click the
	  incorrect value and correct if necessary)
	
	6. On the Registry menu, click Exit Registry.
	
	7. Restart Windows.
	
	The PowerPoint spelling checker should now work correctly.
	
	Additional query words: ppt7 ppt95 pp95 speller powerpt spelling error w_powerpt powerpnt spellcheck
	
	======================================================================
	Keywords          : kberrmsg kbdta kbproof 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
