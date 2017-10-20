---
layout: page
title: "Q191704: PRB: Unable to Load File to Register It During Setup"
permalink: /kb/191/Q191704/
---

## Q191704: PRB: Unable to Load File to Register It During Setup

{% raw %}

	Article: Q191704
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.6,6.0,95,98
	Operating System(s): 
	Keyword(s): kbwizard kbtophit kbADO200 kbAppSetup kbDatabase kbDCOM kbMDAC kbVBp kbFAQ kbGrpDSVBDB
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- ActiveX Data Objects (ADO), versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating distribution files using the Package and Deployment Wizard (PDW)
	and then attempting to install the application on a Windows 95, Windows 98, or
	Windows Me computer, you may receive the following error:
	
	  Unable to load file "msdadc.dll" to register it
	
	Alternatively, you may see the error:
	
	  DLL registration failed
	
	CAUSE
	=====
	
	Installation of Microsoft Data Access Components (MDAC) requires installation of
	DCOM. Setup programs created with the Package and Deployment Wizard use the MDAC
	installer program, Mdac_typ.exe, to install the Microsoft Data Access
	Components, which include OLE DB, ADO, and Jet. Mdac_typ.exe requires that the
	target machine have DCOM installed on it.
	
	RESOLUTION
	==========
	
	To fix this problem, install DCOM on the target machine. Either DCOM95 or DCOM98
	can be used. The latest version of DCOM95 can be found at the following Web
	address:
	
	  Microsoft COM at http://www.microsoft.com/com
	
	Alternatively, DCOM98 can be installed by running DCOM98.exe found in the DCOM98
	folder on the Visual Basic 6.0 CD-ROM, Disk 1. Please note that DCOM98 can
	install DCOM on both Windows 95 and Windows 98 machines.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbtophit kbADO200 kbAppSetup kbDatabase kbDCOM kbMDAC kbVBp kbFAQ kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbVBp600FAQ kbADO210sp2 kbADO250 kbMDAC260 kbADO260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :2.5,2.6,6.0,95,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
