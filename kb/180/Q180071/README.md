---
layout: page
title: "Q180071: FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files"
permalink: kb/180/Q180071/
---

## Q180071: FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files

	Article: Q180071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.51,4.0,5.0
	Operating System(s): 
	Keyword(s): kbfile kbwizard kbtophit kbAppSetup kbVBp500
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- the operating system: Microsoft Windows NT, versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MSVBVM50.exe is a self-extracting file that installs the latest versions of the
	Microsoft Visual Basic run-time files that all applications created with Visual
	Basic 5.0 need in order to run.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Msvbvm50.exe
	  (http://download.microsoft.com/download/vb50pro/utility/1/win98/EN-US/Msvbvm50.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Msvbvm50.exe installs the following files, which ship with Visual Basic 5.0
	Service Pack 2 and Service Pack 3:
	
	  FILE            VERSION
	  --------------------------
	  Msvbvm50.dll    05.00.8244
	  Oleaut32.dll    2.20.4118
	  Olepro32.dll    5.0.4118
	  Stdole2.tlb     2.20.4118
	  Asycfilt.dll    2.20.4118
	  Comcat.dll      4.71
	
	These files are the base dependencies for any component or application created in
	Visual Basic 5.0.
	
	Do I Need Msvbvm50.exe?
	-----------------------
	
	Msvbvm50.exe is not intended to replace the Setup Wizard for distributing Visual
	Basic applications. For example, if your application includes components, such
	as ActiveX controls or DLLs, you should use the Application Setup Wizard or a
	third party setup package for distribution. However, if your Visual Basic
	application only depends upon the files included in Msvbvm50.exe, you can
	distribute your application by providing end users with the executable (.exe)
	file and Msvbvm50.exe.
	
	To determine whether your application requires additional files for distribution,
	you can use the Setup Wizard to create a set of setup files as a test. If the
	[Files] section of the resulting Setup.lst file only lists your .exe file, end
	users should be able to run your application after running Msvbvm50.exe to
	install the core run-time files. However, if the [Files] section contains
	multiple files, you should consider using the Setup Wizard or a third-party
	setup package for distribution instead.
	
	In addition to distributing simple executables, you can also use Msvbvm50.exe for
	the following:
	
	- To minimize the size of Internet downloads of Visual Basic applications. By
	  running Msvbvm50.exe ahead of time, your users can download your application
	  from the Web faster.
	
	- As a troubleshooting step when installation of Visual Basic or a Visual Basic
	  application fails.
	
	  If Setup fails with an error message that mentions one of the core files, or
	  if registration of a component fails during Setup, the core files on the
	  target computer may be mismatched. If the versions of the files in
	  Msvbvm50.exe are newer than the versions on the target computer, running
	  Msvbvm50.exe before running Setup may resolve the problem.
	
	REFERENCES
	==========
	
	For a specific example of a problem that is resolved by running Msvbvm50.exe,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q185992 : PRB: "Wrong Version Of Run-Time DLL" When Starting Application
	
	Users of Microsoft Internet Explorer can download some additional ActiveX
	Controls and DLLs frequently required by applications built with Visual Basic
	5.0. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172991 : INFO: CAB Files Distributed with Visual Basic 5.0
	
	For information about the self-extracting file that contains the Visual Basic 6.0
	run-time files, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q192461 FILE: VBRUN60.EXE Installs Visual Basic 6.0 Run-Time Files
	
	Additional query words: virtual machine runtime run time run-time MSVBVM50 Oleaut32 Olepro32 Stdole2 Asycfilt Comcat vb5
	
	======================================================================
	Keywords          : kbfile kbwizard kbtophit kbAppSetup kbVBp500 
	Technology        : kbVBSearch kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbOSWinNT351 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3 kbOSWinNTSearch
	Version           : :3.51,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
