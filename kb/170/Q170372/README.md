---
layout: page
title: "Q170372: BUG: Setup Wizard Closes With Error: Invalid Property Value..."
permalink: /kb/170/Q170372/
---

## Q170372: BUG: Setup Wizard Closes With Error: Invalid Property Value...

{% raw %}

	Article: Q170372
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When starting the Microsoft Visual Basic Application Setup Wizard, a dialog box
	appears with the following error message:
	
	  Invalid property value, an unexpected error has occurred.
	
	If you click OK, the Setup Wizard terminates.
	
	CAUSE
	=====
	
	When the Setup Wizard begins, a system configuration file is read. If the
	devices listed in the configuration file cannot be located, the error occurs and
	the Setup Wizard terminates.
	
	RESOLUTION
	==========
	
	Use one of the following methods to resolve this error:
	
	- Reinstall the unlocated device(s).
	
	- Comment the appropriate line in the configuration file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When Microsoft Visual Basic is installed, a system configuration file is
	created. This configuration file includes information about devices installed on
	the computer at the time of installation.
	
	In Microsoft Visual Basic Version 4.0 there may be three configuration files. The
	original configuration files are:
	
	- 16 bit: <VB directory>\SETUPKIT\KITFIL16\SW16TMPL.INI
	
	- 32 bit: <VB directory>\SETUPKIT\KITFIL32\SW32TMPL.INI
	
	If the Setup Wizard has been used once successfully, an additional configuration
	file is created for all future uses:
	
	  <Windows directory>\SWDEPEND.INI
	
	In Microsoft Visual Basic Version 5.0, the configuration file is:
	
	  <VB directory>\SETUPKIT\KITFIL32\VB5DEP.INI
	
	The following is a sample of a VB5DEP.INI (other files similar):
	
	     [SetupWiz]
	     Uses1=D:\DStudio\VB5\setupkit\kitfil32\VB5StKit.dll
	     Drive1=1.44 MB,1457664,512
	     Drive2=2.88 MB,2915328,1024
	     Drive3=1.2 MB,1213952,512
	     Drive4=720 KB,730112,1024
	     Drive5=360 KB,362496,1024
	     BootStrap=D:\DStudio\VB5\SETUPKIT\KITFIL32\SETUP.EXE
	     VBExe=D:\DStudio\VB5\VB5.EXE
	     RemoveInstallEXE=D:\DStudio\VB5\SETUPKIT\KITFIL32\ST5UNST.EXE
	
	The Application Setup Wizard reads this configuration file during initialization.
	If devices described in the log file are not found on the system, the error
	occurs and the Setup Wizard terminates.
	
	In the sample above, Drive1 is a 1.44MB floppy drive. If this device was removed
	from the system (and not replaced with a similar device), the Setup Wizard would
	be unable to find the device and the error would occur. This situation typically
	occurs with computers that have removable disk drives.
	
	Use one of the following methods to correct this error:
	
	- Reinstall the missing device.
	
	- Comment the line in the configuration file by adding a semicolon (;) at the
	  beginning of the line.
	
	Additional query words: TlsSetWiz VB4ALL VB4WIN vb5all VBKBToolkit kbvbp400bug kbVBp500bug kberrmsg
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : :4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
