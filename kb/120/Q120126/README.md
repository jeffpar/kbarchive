---
layout: page
title: "Q120126: PowerPoint Cannot Locate Its Spelling Checker"
permalink: /kb/120/Q120126/
---

## Q120126: PowerPoint Cannot Locate Its Spelling Checker

{% raw %}

	Article: Q120126
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbproof
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the spelling checker inside PowerPoint 4.0 or 7.0, you may
	get the following message:
	
	  Sorry, there is no valid speller. You should run PowerPoint Setup.
	
	RESOLUTION
	==========
	
	PowerPoint 7.0
	--------------
	
	Run PowerPoint Setup and re-install Proofing Tools.
	
	-or-
	
	The PowerPoint spelling checker can work with either of the following two pairs
	of files. If the pairs are mismatched, the spelling check will fail. One pair
	represents spelling for US English and the other for British English.
	
	  Country       Dictionary             Speller
	  -------       ----------             -------
	
	  US            Mssp2_en.lex           Mssp232.dll
	  British       Mssp_am.lex            Mssp32.dll
	
	Make sure one of the pairs of files is on the hard disk. The default location for
	these files in Windows 95 is
	
	  C:\Program Files\Common Files\Microsoft Shared\Proof
	
	and the default location in Windows NT is:
	
	  C:\Winnt\Msapps\Proof
	
	If these files are missing, you will have to run Setup to restore them. If the
	files are present, check your Registry to make sure the information is correct:
	
	1. Click the Windows 95 Start button and then click Run. (Or click Run on the
	  File menu in the Windows NT Program Manager.)
	
	2. Type "Regedit" (without the quotation marks) (or "Regedt32" (without the
	  quotation marks) for Windows NT) in the Run dialog box and click OK.
	
	3. Open the following key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Proofing Tools
	     \Spelling\1033\Normal
	
	4. This key should contain the following values:
	
	  Dictionary:
	  Engine:
	
	  Make sure that text to the right of these values is the correct path to the
	  spelling files. If they are incorrect, double-click the incorrect value to
	  bring up the editing screen.
	
	5. Correct the path. Click OK.
	  a. Also open the following key:
	
	       HKEY_CURRENT_USER\Software\Microsoft\Office\PowerPoint\ 
	       7.0\Spelling\Speller
	
	     The correct data for Speller should read:
	
	     Speller "1033\Normal"
	
	     (This is the value for the American English speller; double-click the
	     incorrect value and correct if necessary)
	
	6. On the Registry menu, click Exit Registry.
	
	7. Restart Windows.
	
	The PowerPoint spelling checker should now work correctly.
	
	PowerPoint 4.0, 4.0a, 4.0c
	--------------------------
	
	Determine if the files MSSPEL2.DLL and MSSP2_EN.LEX are located in the
	WINDOWS\MSAPPS\PROOF directory. If they are not present, run PowerPoint Setup to
	add them. If they are present, do the following:
	
	1. Open the WIN.INI file, located in the WINDOWS directory, in a text editor
	  such as Notepad.
	
	2. Locate the [MS Proofing Tools] section.
	
	3. Locate the line that is similar to:
	
	     Spelling 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.dll,C:\WINDOWS
	      \MSAPPS\PROOF\MSSP2_EN.LEX
	
	  -or-
	
	     Spelling 2057,0=<same path as above>.
	
	4. Make a note of that line and close the WIN.INI file. Do NOT save any changes.
	
	5. Open the POWERPNT.INI file, located in the WINDOWS directory, in a text
	  editor such as Notepad. Locate the following line in the [Spelling] section:
	
	     Speller=<some 4 digit number>,0
	
	6. Disable the line by inserting a semicolon (;) at the beginning of the line.
	
	7. Add one of the following lines to match the number you noted in steps 3 and 4
	  above:
	
	  "Speller=Spelling 1033,0" (without the quotation marks)
	
	  -or-
	
	  "Speller=Spelling 2057,0" (without the quotation marks)
	
	8. Save POWERPNT.INI and restart PowerPoint.
	
	MORE INFORMATION
	================
	
	PowerPoint 7.0
	--------------
	
	When PowerPoint for Windows 95 installs, it may write incorrect information to
	the Registry, or it may not write all the necessary lines in the appropriate
	Registry key. The text string referencing the spelling .dll or the dictionary
	.lex file may be missing, or it may be pointing to the incorrect file.
	
	This problem, however, has been corrected in the international releases of
	PowerPoint 7.0, and all releases of PowerPoint 7.0a and 7.0b. If you are
	experiencing this problem, the best way to fix it, is to obtain the latest
	release of PowerPoint.
	
	If you do not wish to obtain the latest release of PowerPoint, or you do have the
	most current release of PowerPoint, and you are still experiencing the problem,
	please follow the steps outlined in the Resolution section below.
	
	PowerPoint 4.0
	--------------
	
	The Speller= line in POWERPNT.INI contains a pointer to the appropriate line in
	the [MS Proofing Tools] section of the WIN.INI. The line in the [MS Proofing
	Tools] section points to the actual dictionary to be used. This line can be used
	to set the same dictionary for all Microsoft applications.
	
	A sample entry in the [MS Proofing Tools] section might appear as follows:
	
	  Spelling 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.DLL,
	     C:\WINDOWS\MSAPPS\PROOF\MSSP2_EN.LEX
	
	If you do not have MSSPEL2.DLL listed in WIN.INI but do have MSSPELL.DLL listed,
	you can use that spelling checker the same way as mentioned above.
	
	Additional query words: 4.00 4.00a power point powerpt
	
	======================================================================
	Keywords          : kberrmsg kbproof 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
