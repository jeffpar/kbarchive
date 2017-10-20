---
layout: page
title: "Q137472: HOWTO: How to Deal with a load=foxrstart.exe Line in the Win.ini"
permalink: /kb/137/Q137472/
---

## Q137472: HOWTO: How to Deal with a load=foxrstart.exe Line in the Win.ini

{% raw %}

	Article: Q137472
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Visual FoxPro under Windows 3.1 or Windows for Workgroups 3.x,
	Visual FoxPro installs 32-bit .ocx files and a 32-bit Vfp.exe file. The Setup
	uses Foxrstrt.exe, which tells the 32-bit .ocx files to self register themselves
	and assigns an icon to the 32-bit FoxPro executable (Vfp.exe) and to
	Imagedit.exe. If the Setup is not successful, then "load = foxrstart.exe"
	appears in the Win.ini file.
	
	MORE INFORMATION
	================
	
	
	When the system is restarted by the Visual FoxPro setup, it is running Win32s
	(32-bit environment). At this point, setup launches Foxrstrt.exe, an executable
	that tells the 32-bit .ocx files to self register themselves and assigns an icon
	to the 32-bit FoxPro executable (Vfp.exe) and to Imagedit.exe.
	
	If "load = foxrstart.exe" appears in the Win.ini file, installation of Visual
	FoxPro has not completed successfully.
	
	NOTE: Foxrstrt.exe may take a few minutes to run. You may think your computer is
	hung and reboot it before Foxrstrt finishes. This prevents the .ocx files from
	being registered, keeps the MS-DOS icon assigned to Vfp.exe, and leave behind
	the "load=foxrstart.exe" line in the Win.ini file.
	
	To reassign a correct icon for 32-bit Visual FoxPro, on the File menu, click
	Properties in the Program Manager.
	
	To register the .ocx files, run C:\Vfp\Samples\Ole\Regsvr32.exe by clicking Run
	on the File Manager's File menu. Do this for each of the .ocx files if Foxrstart
	fails or is interrupted. For example:
	
	  Regsvr32.exe C:\Windows\System\Msoutl32.ocx
	
	NOTE: If there are too many entries in the load= line in the Win.ini file (90+
	characters) after installing Win32s, then on rebooting, you may see an error
	when trying to load one of the entries in the load= line. This error occurs
	because setup adds Foxrstrt.exe to the load= line that registers the 32-bit .ocx
	files and reassigns an icon to Vfp.exe and Imagedit.exe after the reboot into
	the 32-bit Win32s environment.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
