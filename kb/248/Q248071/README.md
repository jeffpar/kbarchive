---
layout: page
title: "Q248071: HOWTO: Distribute a Custom DLL with Your eVB Application"
permalink: kb/248/Q248071/
---

## Q248071: HOWTO: Distribute a Custom DLL with Your eVB Application

	Article: Q248071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to include a custom-built DLL, created with the
	eMbedded Visual C++ (eVC), with an eMbedded Visual Basic (eVB) application
	distribution package.
	
	MORE INFORMATION
	================
	
	For additional information about the creation of eVC components for use in eVB,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q241531 HOWTO: Create a UI-less eVC DLL for use in eVB
	
	This article assumes that the eVC DLL already exists and uses the DLL created in
	the preceding article for illustration purposes. The article also assumes that
	you have already created an eVB project that uses an eVC component.
	
	Step by Step Example
	--------------------
	
	1. Create an installation package for your eMbedded Visual Basic application
	  with the Application Install Wizard.
	
	For additional information about the use of the Application Install Wizard, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q307595 HOWTO: Distribute an eMbedded Visual Basic Application
	
	2. Copy the DLL files for the custom components from each of the processor
	  specific directories (for the components) into this directory:
	
	  "<package path>\<processor>"
	
	  For example, if the CProcess.dll was compiled for the ARM processor, it would
	  be copied from the directory in which it was compiled to the ARM 1100 (4K)
	  v3.00 directory.
	
	3. Modify the .inf file to include the support files for your components (for
	  example, the .inf file for Project1 would be Project1.inf).
	
	  You need to change the processor specific sections for the CESelfRegister and
	  SourceDisksFiles, as well as the Source list at the end of the file. Here are
	  excerpts from an updated .inf file that takes into consideration the custom
	  DLL:
	
	 [DefaultInstall.Mips 3000 (4K) v2.11]
	 CopyFiles=Files.Mips 3000 (4K) v2.11
	 CESelfRegister=vbscript.dll,pvbhost2.dll,pvbform2.dll,CProcess.dll
	
	 [CEDevice.Mips 3000 (4K) v2.11]
	 ProcessorType=4000
	
	 [SourceDisksNames.Mips 3000 (4K) v2.11]
	 3= ,"Mips 3000 (4K) v2.11 Files",,Mips 3000 (4K) v2.11
	
	 [SourceDisksFiles.Mips 3000 (4K) v2.11]
	 pvbhost2.dll=3
	 pvbload.exe=3
	 vbscript.dll=3
	 vbsen.dll=3
	 pvbform2.dll=3
	 CProcess.dll=3 
	
	 [Files.Mips 3000 (4K) v2.11]
	 pvbhost2.dll,,0x80000000
	 pvbload.exe
	 vbscript.dll,,0x80000000
	 vbsen.dll
	 pvbform2.dll,,0x80000000
	 CProcess.dll 
	
	
	4. Repackage the .cab files by using Cabwiz.exe as described in the Readme.txt
	  file located in the package directory.
	
	5. Copy the .cab files to the CD1 directory.
	
	6. Test the installation.
	
	REFERENCES
	==========
	
	For more information, please see the following Web URLs:
	
	  Creating an .inf File for the CAB Wizard
	  (http://www.msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/wcedoc/wcesvcs/instapps_2.htm)
	
	  Using the CAB Wizard
	  (http://www.msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/wcedoc/wcesvcs/instapps_16.htm)
	
	Additional query words: evb evb3 wce cabwiz inf evc
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
