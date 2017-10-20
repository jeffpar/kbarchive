---
layout: page
title: "Q160968: PRB: VB5 Components Distribute Improperly with VB4 Setup Kit"
permalink: /kb/160/Q160968/
---

## Q160968: PRB: VB5 Components Distribute Improperly with VB4 Setup Kit

{% raw %}

	Article: Q160968
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbGrpDSVB kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual Basic 4.0 distributions built using the Setup Wizard will not
	work properly if created on a system that also has Microsoft Visual Basic
	Control Creation Edition version 5.0 installed.
	
	CAUSE
	=====
	
	Microsoft Visual Basic Control Creation Edition 5.0 installs components that are
	incompatible with Microsoft Visual Basic 4.0's Setup Wizard. These components
	require different runtime components than the earlier Microsoft Visual Basic 4.0
	versions. The new controls that are affected are:
	
	  COMCTL32.OCX
	  COMDLG32.OCX
	
	The files upon which these controls depend are:
	
	  ASYCFILT.DLL OLEAUT32.DLL OLEPRO32.DLL STDOLE32.TLB
	
	Changing the SWDEPEND.INI file for Microsoft Visual Basic 4.0's Setup Wizard
	usually allows the appropriate files (above) to be included with the distributed
	diskettes. However, OLEAUT32.DLL is a System file that is commonly in use by the
	operating system, even with no other applications running. This situation
	requires a system reboot to update OLEAUT32.DLL properly. The Setup Wizard
	included with Microsoft Visual Basic 4.0 does not support rebooting.
	
	RESOLUTION
	==========
	
	There are two possible workarounds for this behavior.
	
	NOTE: If a Microsoft Visual Basic 4.0 application has already been distributed to
	a target machine with the new .OCX components (as described above), you must
	uninstall the application and manually remove or replace the updated components.
	This is necessary because the workarounds below make use of the Microsoft Visual
	Basic 4.0 components. The Setup Wizard is incapable of replacing a later version
	of a component with an earlier one.
	
	Workaround 1
	------------
	
	Prior to installing Microsoft Visual Basic Control Creation Edition version 5.0,
	copy the following components:
	
	  COMCTL32.OCX
	  COMDLG32.OCX
	  OLEPRO32.DLL
	  MFC40.DLL
	  MSVCRT40.DLL
	
	to the following folder:
	
	  C:\Program Files\Microsoft Visual Basic\Setupkit\Kitfil32\sys32
	
	Microsoft Visual Basic 4.0's Setup Wizard always looks at the above folder first
	when searching for dependent files.
	
	Next, when you create distribution disks with Microsoft Visual Basic 4.0's Setup
	Wizard, follow these steps:
	
	1. Deselect the COMCTL32.OCX and COMDLG32.OCX references in step 5.
	
	2. Manually add COMCTL32.OCX and COMDLG32.OCX from the above folder during step
	  7.
	
	Again, this will only be necessary when creating distribution disks for
	applications that use the COMCTL32.OCX or COMDLG32.OCX controls.
	
	Workaround 2
	------------
	
	Another workaround is to maintain a pure Microsoft Visual Basic 4.0 system (one
	without Microsoft Visual Basic Control Creation Edition version 5.0 installed)
	for the purpose of creating Setup distribution files.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbGrpDSVB kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbVBA500Search kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
