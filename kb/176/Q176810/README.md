---
layout: page
title: "Q176810: HOWTO: Manually Modify and Rebuild CAB Files"
permalink: /kb/176/Q176810/
---

## Q176810: HOWTO: Manually Modify and Rebuild CAB Files

{% raw %}

	Article: Q176810
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500 kbGrpDSVB kbDSupport
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Visual Basic 5.0 Application Setup Wizard to create an Internet
	Component Download Setup for your ActiveX control or ActiveX document, you may
	need to modify the CAB file created by the Setup Wizard.
	
	This article describes how to modify the CAB files that the Visual Basic Setup
	Wizard creates and specifically shows how to extract the files from a CAB file
	and how to rebuild the CAB file.
	
	MORE INFORMATION
	================
	
	For distributing ActiveX components, you may choose to build an Internet
	Component Download Setup using the Visual Basic 5 Application Setup Wizard.
	
	The wizard creates two key files: an HTM file (Hypertext Markup Language File,
	also known as HTML file) and a CAB file (Cabinet file, a compressed file). The
	HTM file contains the information necessary to extract and install the
	information stored in the CAB file. The CAB file contains the actual components
	of your OCX, EXE, or DLL.
	
	When you open the HTM file with Internet Explorer (IE), IE executes the
	<OBJECT> tag within the HTML code. In its simplest terms, an
	<OBJECT> tag tells Internet Explorer how to install your ActiveX component
	onto the client machine.
	
	The following is an example of an <OBJECT> tag;
	
	     <OBJECT ID="MyUserDocument"
	     CLSID="CLSID:CB6994D4-2DCA-11D1-A9CB-00AA00B7B36F"
	     CODEBASE="ActiveX.CAB#version=1,0,0,0">
	     </OBJECT>
	
	In the <OBJECT> tag above, Internet Explorer uses the ID and CLSID to see
	if the specified control is already installed on the client computer. If it is
	not already installed or if it out of date, IE uses the CODEBASE argument to
	locate the ActiveX.CAB file to install the ActiveX control or document.
	
	The Contents of a .CAB File
	---------------------------
	
	A CAB file contains compressed files that are crucial for installing your ActiveX
	components. The Setup Wizard places an uncompressed copy of each file it placed
	into your cabinet file into a directory named "Support," which can be found in
	the same location as the CAB and HTM files.
	
	In all cases, the Setup Wizard will place at least three files in the Support
	folder: a .DDF file, an ActiveX component file (.EXE, .DLL or .OCX file), and an
	.INF file.
	
	- .DDF: The DDF file is known as a Diamond Directive File, a text file that may
	  be opened in Notepad or any text editor. The DDF contains specific
	  information required to compress your files into a cabinet file; the DDF file
	  itself is not placed into the CAB file. NOTE: This file should not be
	  modified unless absolutely necessary.
	
	- Component File (.EXE, .DLL or .OCX): The type of ActiveX component you create
	  determines the file extension of the file included here. All ActiveX controls
	  have a .OCX extension. Other ActiveX components either .EXEs or .DLLs. This
	  file is your ActiveX component being installed.
	
	- .INF: This is the Information file that contains information about what other
	  files your ActiveX component depends on (dependency files), where to get
	  copies of those files, and how to install those files.
	
	Extracting the Contents of a CAB File
	-------------------------------------
	
	In order to extract what is in a cabinet file, you must use the Extract utility.
	Extract.Exe can be found in your Windows folder or on your Windows 95, Windows
	98, Windows NT, or Windows 2000 installation CD-ROM.
	
	Extract.Exe is a command-line utility; therefore it is used from an MS-DOS
	command prompt. To extract the files within a cabinet file, be sure the
	Extract.Exe utility is in the MS-DOS Path or copy the Extract utility to the
	same folder as the cabinet file.
	
	From the MS-DOS command prompt, you can run the following command to extract all
	of the files in a CAB file into the current directory:
	
	  Extract ActiveX.CAB *.*
	
	where "ActiveX.CAB" is the name of your cabinet file.
	
	For more information on using the Extract.Exe utility, you may type the following
	command at an MS-DOS command prompt:
	
	  Extract /?
	
	For even more information on Extract.Exe, please see the ActiveX SDK
	documentation as referred to in the REFERENCES section of this article.
	
	Rebuilding a CAB File
	---------------------
	
	Once you've extracted the files within a CAB, you can make modifications and then
	proceed to rebuild the CAB file manually.
	
	To rebuild a CAB file, you must use the MakeCab.Exe utility that ships with
	Visual Basic. The MakeCab utility is installed by default in the following
	directory:
	
	  C:\Program Files\DevStudio\Vb\setupkit\kitfil32
	
	It may also be found on your Visual Basic 5.0 installation CD-ROM in the
	following directory:
	
	  \VB\Setupkit\Kitfil32
	
	To rebuild the cabinet file, place any modified files and the original .DDF file
	into a single folder. Also, make sure the MakeCab.Exe utility is in the MS-DOS
	path or copy it to the same folder as the .DDF.
	
	From a command prompt, type the following command:
	
	  MakeCab /F ActiveX.DDF
	
	where "ActiveX.DDF" is the name of your .DDF file.
	
	For more information on the MakeCab utility ,you may use the "/?" switch or see
	the ActiveX SDK documentation as referred to in the REFERENCES section of this
	article.
	
	Notes on Rebuilding Cabinet Files
	---------------------------------
	
	Usually, it should not be necessary to modify the files within a cabinet file.
	However, situations may arise where you need to do so. When modifying cabinet
	files, please use the following guidelines to avoid problems:
	
	1. Never add or remove files from a CAB file. The only files that should be in a
	  CAB file are those added by the Application Setup Wizard. If you need to add
	  or remove files from the cabinet file, re-run the Application Setup Wizard.
	  Otherwise, you will need to modify the .DDF file.
	
	2. If you modify the INF file, be sure that your changes are syntactically
	  correct and do not contain errors. For more information about modifying INF
	  files, see the ActiveX SDK in the REFERENCES section of this article.
	  Problems with the INF file may result in undesired behavior when the
	  component attempts to download.
	
	3. You should not modify the ActiveX component (.OCX, .EXE or .DLL) in any way.
	  If you feel you need to modify the ActiveX component, rebuild the cabinet
	  file using the Application Setup Wizard.
	
	REFERENCES
	==========
	
	For more information about how to use the Extract.exe and the MakeCab.exe files
	and how to modify .ddf or .inf files, see the ActiveX Software Development Kit
	(SDK) documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
