---
layout: page
title: "Q150056: PRB: Version Conflict Adding Components or Reinstalling Windows"
permalink: /kb/150/Q150056/
---

## Q150056: PRB: Version Conflict Adding Components or Reinstalling Windows

{% raw %}

	Article: Q150056
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95 kbOPK kbSBK
	Last Modified: 19-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reinstall Windows 95 or when you use the Add/Remove Programs tool in
	Control Panel to add a component, you may receive the following error message:
	
	  A file being copied is older than the file currently on your computer. It is
	  recommended that you keep your existing file.
	
	  File name: <filename.ext>
	  Description: <description of file>
	  Your version: <version number>
	
	  Do you want to keep this file?
	
	You have the option to choose Yes (to keep the existing file) or No (to overwrite
	the file).
	
	CAUSE
	=====
	
	You may receive the error message in any of the following scenarios:
	
	Scenario 1
	----------
	
	You have the Windows 95 retail upgrade pre-installed on your computer, but the
	source (compact disc or floppy disks) you are using to reinstall Windows 95 or
	install a component is the Windows 95 Original Equipment Manufacturer (OEM)
	Service Release 1.
	
	Scenario 2
	----------
	
	You have the Windows 95 Original Equipment Manufacturer (OEM) Service Release 1
	pre-installed on your computer, but the source (compact disc or floppy disks)
	you are using to reinstall Windows 95 or install a component is the Windows 95
	retail upgrade.
	
	Scenario 3
	----------
	
	A third-party application or component that you have previously installed has
	overwritten one or more Windows 95 files.
	
	RESOLUTION
	==========
	
	Scenario 1
	----------
	
	Contact the OEM vendor for assistance in properly resolving this issue.
	
	NOTE: Using the OEM Service Release 1 compact disc to upgrade Windows 95 is not
	supported by Microsoft.
	
	Scenario 2
	----------
	
	Contact the OEM vendor so that the vendor can provide you with the correct source
	files for the version of Windows 95 installed on your computer.
	
	Scenario 3
	----------
	
	Choose "No" to the error message mentioned in the "Symptoms" section so that
	Windows 95 overwrites the files on your system with the original Windows 95
	files. This may cause one or more of your third-party programs to stop working
	properly. If this occurs, you may need to reinstall any affected programs.
	
	NOTE: When you reinstall your third-party program(s) (as discussed earlier), the
	third-party programs may overwrite some Windows files. Therefore, you may find
	that some Windows components no longer work properly.
	
	MORE INFORMATION
	================
	
	Some OEMs may ship computers with a mismatch between their pre-installed version
	of Windows 95 (OEM Service Release 1) and the Windows 95 compact disc or floppy
	disks (retail Windows 95 upgrade) included with the computer. The Windows 95 OEM
	Service Release 1 includes several updates that are not included in the retail
	Windows 95 upgrade. The following is a partial list of files that may be
	displayed in the error message mentioned in the "Symptoms" section:
	
	  Nwnp32.dll
	  Lpt.vxd
	  Mapi32.dll
	  Cdvsd.vxd
	  Voltrack.vxd
	  Umdm16.dll
	  Umdm32.dll
	  Unimdm.tsp
	  Unimodem.vxd
	  Esdi_506.pdr
	  Scsihlp.vxd
	  Modemui.dll
	  Ole32.dll
	  Shell32.dll
	  Mspwl32.dll
	  Vredir.vxd
	  Nwredir.vxd
	
	Additional query words: opk opk1 SBK Oem Preinstall Kit
	
	======================================================================
	Keywords          : win95 kbOPK kbSBK 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
