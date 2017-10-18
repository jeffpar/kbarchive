---
layout: page
title: "Q308533: Encarta World Atlas 2001: Err Msg: MSVCIRT.DLL File Is Linked..."
permalink: kb/308/Q308533/
---

## Q308533: Encarta World Atlas 2001: Err Msg: MSVCIRT.DLL File Is Linked...

	Article: Q308533
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta Reference Suite 2001 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Encarta World Atlas 2001, you may receive an
	error message similar to the following:
	
	  Atlas - MSVCIRT.DLL file is linked to missing MSVCRT.DLL <path>
	  MSWORLD6.EXE
	
	CAUSE
	=====
	
	This error can occur when there are required files missing from the
	C:\WINDOWS\SYSTEM folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract the missing files from your Encarta installation
	disk. To do this, use one of the following methods, as appropriate to your
	situation.
	
	Method 1: Microsoft Windows 98 and Microsoft Windows 98 Second Edition
	----------------------------------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sfc" (without the quotation marks), and then click OK.
	
	3. Click "Extract one file from installation disk".
	
	4. In the "System file name" box, type "msvcrt.dll" (without the quotation
	  marks), and then click Start.
	
	5. In the Save In box, type "C:\WINDOWS\SYSTEM." (without the quotation marks)
	
	6. In the "Restore from" box, click Browse.
	
	7. If you have a Windows 98 CD-ROM, click <CD-ROM DRIVE>:\WIN98, and then
	  click OK.
	
	  If you do not have a Windows 98 CD-ROM, and the operating system was
	  factory-installed, click C:\WINDOWS\OPTIONS\CABS, and then click OK.
	
	8. Repeat steps 4 through 7 to extract the file Msvcirt.dll.
	
	Method 2: Microsoft Windows Millennium Edition 
	----------------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. In the System Configuration Utility dialog box, click Extract File.
	
	4. In the "File name" box, type "msvcrt.dll" (without the quotation marks), and
	  then click Start.
	
	5. Click Browse.
	
	6. If you have a Windows Millennium Edition (Me) CD-ROM, browse to <CD-ROM
	  DRIVE>:\WIN9x.
	
	  If you do not have a Windows Me CD-ROM and your operating system was factory
	  installed, browse to C:\WINDOWS\OPTIONS\CABS.
	
	7. In the Save In box, type "C:\WINDOWS\SYSTEM" (without the quotation marks),
	  and then click OK.
	
	8. Click OK to close the System Configuration Utility dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbOSWin98 kbOSWinME kbOSWin98SE kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaReference2001 kbEncartaWorldAtlas2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
