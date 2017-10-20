---
layout: page
title: "Q194412: PROJUPDG.EXE VB 6.0 ActiveX Control Upgrade Utility"
permalink: /kb/194/Q194412/
---

## Q194412: PROJUPDG.EXE VB 6.0 ActiveX Control Upgrade Utility

{% raw %}

	Article: Q194412
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbGrpDSVB
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ProjUpgd.Exe is a self-extracting file that contains a program that upgrades
	your Visual Basic 5.0 or pre-release 6.0 projects to use the latest Visual Basic
	6.0 ActiveX controls. The utility updates any project that uses the following
	controls:
	
	Descriptive name                          .OCX filename
	-----------------------------------       -------------
	Microsoft Windows Common Controls          COMCTL32.OCX
	Microsoft Windows Common Controls-2        COMCT232.OCX
	Microsoft Chart Control                    MSChart.OCX
	
	After you run the utility, your project will reference the following ActiveX
	controls:
	
	Descriptive name                          .OCX filename
	-----------------------------------       -------------
	Microsoft Windows Common Controls 6.0      MSCOMCTL.OCX
	Microsoft Windows Common Controls-2 6.0    MSCOMCT2.OCX
	Microsoft Chart Control 6.0 (OLEDB)        MSChrt20.OCX
	
	NOTE: To use this utility, you must have the released version of Visual Basic 6.0
	installed on your system.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Visual Basic
	site by selecting ActiveX Control Upgrade Utility from Code Samples in Samples
	and Downloads at:
	
	  http://msdn.microsoft.com/vbasic/downloads/addins.asp
	
	
	When you run the self-extracting executable file, the following files are
	expanding into the following directory:
	
	Program Files\Microsoft VisualStudio\VB98\Tools\ProjUpgd
	
	   File Name              Size
	  ---------------------------------------------------------
	  PrjUpgd.exe             40Kb
	  PrjUpgd.log              2Kb
	  ReadMe.txt               6Kb
	  Uninstal.exe            81Kb
	
	Before installing or using the utility, please read the following.
	
	Do Not Convert Projects Using Binary Compatibility
	--------------------------------------------------
	
	Be careful when converting an ActiveX .EXE, .OCX or .DLL project. If the project
	is binary compatible with an existing .EXE, .OCX or .DLL, then you probably
	should not run this upgrade utility. If you upgrade a binary compatible project
	to use any of the Visual Basic 6.0 controls, then you risk breaking binary
	compatibility.
	
	Backup Your Files Before Using This Tool
	----------------------------------------
	
	This tool offers no means for reverting your upgraded project back to the Visual
	Basic 5.0 ActiveX controls.
	
	To ensure that you can get back to using the Visual Basic 5.0 ActiveX controls,
	backup your project files before running this tool. If you decide to revert back
	to using the Visual Basic 5.0 ActiveX controls, you can restore your backed up
	files. Otherwise, you will need to edit your project files with a text editor
	and restore all ActiveX control references to reference the Visual Basic 5.0
	controls.
	
	NOTE: The upgrade information listed in the Output window lists the exact files
	that were upgraded. This information may be helpful in editing or restoring a
	specific set of upgraded files.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190952 : HOWTO: Upgrade Project to Use New VB6 Controls
	
	Additional query words: kbDSupport kbVBp kbVBp600 kbCtrl kbActiveX kbdsd kbUsage
	
	======================================================================
	Keywords          : kbfile kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
