---
layout: page
title: "Q191212: HOWTO: Modify and Rebuild .CAB Files Built with PDW"
permalink: kb/191/Q191212/
---

## Q191212: HOWTO: Modify and Rebuild .CAB Files Built with PDW

	Article: Q191212
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Visual Basic Package and Deployment Wizard (PDW) to create a
	distribution set for your application, you may need to modify the .cab file
	created by the wizard.
	
	This article describes how to modify the .cab files that the Package and
	Deployment Wizard creates, how to extract the files from a .cab file, and how to
	rebuild the .cab file.
	
	MORE INFORMATION
	================
	
	When you create a distribution package with the Package and Deployment Wizard,
	it creates the .cab file(s) that are used to install your application.
	
	The Contents of a .cab File
	---------------------------
	
	A .cab file contains compressed files that are necessary for installing your
	application. The Package and Deployment Wizard places an decompressed copy of
	each of these files in a folder named "Support," which can be found in the same
	location as the .cab file.
	
	In all cases, the Package and Deployment Wizard places at least two files in the
	Support folder: a .ddf file and a component file (.exe, .dll, or .ocx file). If
	you are creating an Internet download package, the Package and Deployment Wizard
	also includes an .inf file.
	
	- .ddf: The ddf file is known as a Diamond Directive File, a text file that you
	  can open in NotePad or any text editor. The .ddf file contains specific
	  information required to compress your files into a cabinet file; the .ddf
	  file itself is not placed in the .cab file.
	
	  NOTE: You should not modify this file unless absolutely necessary.
	
	- Component File (.exe, .dll, or .ocx): The type of component you create
	  determines the file extension of the file included here. This is the main
	  file you are attempting to install.
	
	- .inf: This is the Information file that contains information about what other
	  files your ActiveX component depends on (dependency files), where to get
	  copies of those files, and how to install those files.
	
	Extracting the Contents of a .cab File
	--------------------------------------
	
	To extract the contents of a cabinet file, you must use the Extract utility.
	Extract.exe can be found in your Windows folder or on your Windows 95, Windows
	98, Windows Me, or Windows NT installation disc.
	
	Extract.exe is a command-line utility; therefore, it is used from an MS-DOS
	command prompt. To extract the files within a cabinet file, be sure the
	Extract.exe utility is in the MS-DOS path, or copy the Extract utility to the
	same folder as the cabinet file.
	
	From the MS-DOS command prompt, you can run the following command to extract all
	of the files in a .cab file into the current directory:
	
	  Extract Project1.cab *.*
	
	where "Project1.cab" is the name of your cabinet file.
	
	For more information on using the Extract.exe utility, you can type the following
	command at an MS-DOS command prompt:
	
	  Extract /?
	
	For even more information on Extract.exe, please see the ActiveX SDK
	documentation as referred to in the REFERENCES section of this article.
	
	Rebuilding a .cab File
	----------------------
	
	Once you've extracted the files within a .cab file, you can make modifications to
	those files and then proceed to rebuild the .cab file manually.
	
	To rebuild a .cab file, the Package and Deployment Wizard provides a batch (.bat)
	file. The batch file will have the same name as your .cab file, but with a .bat
	extension. The wizard places this file into the Support folder for your package.
	Double-click the .bat file in Windows Explorer or run the .bat file from the
	MS-DOS prompt to rebuild the .cab file.
	
	The .bat file runs the MakeCab.exe utility that ships with Visual Basic. The
	MakeCab utility is installed by default in the following folder:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\Wizards\PDWizard\
	
	You can also find the MakeCab utility on your Visual Basic installation disc.
	
	To rebuild the cabinet file without the .bat file, place any modified files and
	the original .ddf file into a single folder. Also, make sure the MakeCab.exe
	utility is in the MS-DOS path or copy it to the same folder as the .ddf file.
	
	At a command prompt, type the following command where "Project1.ddf" is the name
	of your .ddf file:
	
	  MakeCab /F Project1.ddf
	
	For more information about the MakeCab utility, you can use the "/?" switch, or
	see the ActiveX SDK documentation as referred to in the REFERENCES section of
	this article.
	
	Notes on Rebuilding Cabinet Files
	---------------------------------
	
	Normally, you do not need to modify the files within a cabinet file. However, if
	you do need to modify cabinet files, please use the following guidelines to
	avoid problems:
	
	- Never add or remove files from a .cab file. The only files that should be in
	  a .cab file are those added by the Package and Deployment Wizard. If you need
	  to add or remove files from the cabinet file, re-run the wizard. Otherwise,
	  you need to modify the .ddf file, which this article does not discuss.
	
	- If you modify the .inf file, be sure that your changes are syntactically
	  correct and do not contain errors. For more information about modifying .inf
	  files, see the ActiveX SDK as referred to in the REFERENCES section of this
	  article. Problems with the .inf file can result in undesired behavior when
	  the component attempts to download.
	
	- You should not modify an ActiveX component (.ocx, .exe, or .dll) in any way.
	  If you need to modify an ActiveX component, rebuild the cabinet file using
	  the Package and Deployment Wizard.
	
	- If you rebuild the .cab files after updating any of the included files to a
	  newer version, you also need to update the version number and date/time stamp
	  in the Setup.lst file.
	
	- If you end up with a different number of .cab files after running the .bat
	  file, you need to update the number of .cab files listed in the Setup.lst
	  file. For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190077 : HOWTO: Set Number of .CAB's in Setup.lst After Repackaging
	
	REFERENCES
	==========
	
	For more information about using Extract.exe, MakeCab.exe, modifying .ddf files,
	or modifying .inf files, see the documentation on the ActiveX Software
	Development Kit (SDK) in the Microsoft Developer Network (MSDN):
	
	  http://msdn.microsoft.com/workshop/misc/activexsdk/sdk.asp
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q176810 : HOWTO: Manually Modify and Rebuild CAB Files
	
	  Q132913 : How to Use EXTRACT.EXE to Copy Files from DMF Disks
	
	Additional query words: directory
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
