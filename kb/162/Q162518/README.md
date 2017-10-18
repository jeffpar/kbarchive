---
layout: page
title: "Q162518: PRB: &quot;Unexpected error; quitting&quot; Installing VB4 Application"
permalink: kb/162/Q162518/
---

## Q162518: PRB: &quot;Unexpected error; quitting&quot; Installing VB4 Application

	Article: Q162518
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbDSSTools kbVBp400 kbGrpDSVB
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install a Visual Basic 4.0 32-bit application created using
	the Setup Wizard, the following error message appears:
	
	  Unexpected Error; Quitting
	
	CAUSE
	=====
	
	This problem occurs because the target machine has version 5.x of Olepro32.dll
	installed but does not have version 2.20.xxx of Oleaut32.dll installed. This can
	happen when Visual Basic 4.0 developers install an Office 97 application,
	Internet Explorer 3.0, or Visual Basic 5.0 on their machine (thus installing
	Olepro32.dll version 5.x), and then create a distribution using the Visual Basic
	4.0 Setup Toolkit. The Visual Basic 4.0 Setup Toolkit includes version 5.x
	Olepro32.dll in the files it installs. When an attempt is made to install the
	Visual Basic 4.0 application on a machine that does not have the version 2.20
	Oleaut32.dll, it fails as described above, leaving the updated version of
	Olepro32.dll on the target machine.
	
	Also, any application on the target machine that uses Olepro32.dll will no longer
	work because Olepro32.dll attempts to forward calls into the new Oleaut32.dll,
	which is not present.
	
	RESOLUTION
	==========
	
	The Visual Basic 4.0 Setup Toolkit cannot be used to install the updated
	Oleaut32.dll on the target system because doing so requires the system to be
	restarted and the Visual Basic 4.0 Setup Toolkit does not have this capability.
	
	To correct problems on target machines where installation was attempted, there
	are two options:
	
	1. Install an application that includes the new Oleaut32.dll onto the problem
	  machines by installing any of the following apps: Internet Explorer 3.0 or
	  Visual Basic 5.0 CC edition (downloadable from the Web), Office 97, Visual
	  Basic 5.0, Windows 2000, Windows NT 4.0, or Windows NT 3.51 Service Pack 5.
	
	2. Get the original Olepro32.dll from the Visual Basic 4.0 operating system
	  CD-ROM and replace the 5.x version of Olepro32.dll with it. Machines that are
	  not having problems do not need to delete any files.
	
	You now need to recreate your installation so the problem will not re-occur. Do
	this by copying the following components from the \vb\system directory of your
	Visual Basic 4.0 CD-ROM:
	
	  OLEPRO32.DLL
	  MFC40.DLL
	  MSVCRT40.DLL
	
	to the following folder:
	
	  C:\Program Files\Microsoft Visual Basic\Setupkit\Kitfil32\sys32
	
	Now recreate your distribution. Microsoft Visual Basic 4.0's Setup Wizard always
	looks first at the above folder when searching for dependent files. When you
	install your application, only less-recent files on the target machine will be
	overwritten.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbDSSTools kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search
	Version           : WINDOWS:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
