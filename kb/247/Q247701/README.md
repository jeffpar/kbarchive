---
layout: page
title: "Q247701: FILE: Updated Grid Control for H/PC Pro and PsPC Platforms"
permalink: /kb/247/Q247701/
---

## Q247701: FILE: Updated Grid Control for H/PC Pro and PsPC Platforms

{% raw %}

	Article: Q247701
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CE_Grid.exe is a file that contains the updated MSCEGrid.dll files for the
	Handheld PC Pro and Palm-size PC platforms.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  CE_Grid.exe
	
	The file expands, by default, to the following directories:
	
	+----------------------------------+
	| FileName                 | Size  | 
	+----------------------------------+
	| Readme.txt               | 2kb   | 
	+----------------------------------+
	| Setup.exe                | 52kb  | 
	+----------------------------------+
	| setup.ini                | 1kb   | 
	+----------------------------------+
	| \Arm720.b\MSCEGrid.DLL   | 103kb | 
	+----------------------------------+
	| \i486.b\MSCEGrid.DLL     | 89kb  | 
	+----------------------------------+
	| \mips39xx.b\MSCEGrid.DLL | 161kb | 
	+----------------------------------+
	| \mips41xx.b\MSCEGrid.DLL | 121kb | 
	+----------------------------------+
	| \mips43xx.b\MSCEGrid.DLL | 160kb | 
	+----------------------------------+
	| \Ppc821.b\MSCEGrid.DLL   | 149kb | 
	+----------------------------------+
	| \sa1100.b\MSCEGrid.DLL   | 118kb | 
	+----------------------------------+
	| \SH3.b\MSCEGrid.DLL      | 117kb | 
	+----------------------------------+
	| \SH4.b\MSCEGrid.DLL      | 118kb | 
	+----------------------------------+
	
	Release Date: Feb-14-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional Notes
	----------------
	
	There are a couple of important notes regarding the installation procedures.
	
	After executing the CE_Grid.exe file to extract the files, be sure to run the
	setup.exe file to ensure that the files are copied to the correct locations.
	
	NOTE: This overwrites the original MSCEGrid.dll files installed with VBCE. If you
	want to manually replace the files, copy the MSCEGrid.dll file from the location
	to which it was extracted to the following (default) location:
	
	C:\Program Files\Microsoft Visual Studio\VB98\VBCE\Bin\<cpu>\Controls
	
	When targeting Windows CE devices running MIPS processors, it might be necessary
	to manually copy the updated MSCEGrid.dll files from the 39xx.b directory to the
	41xx.b directory. This becomes apparent if errors occur when registering the
	MSCEGrid.dll on the device.
	
	Please note also that the updated MSCEGrid.dll files are for the remote devices
	only. An emulation version of the file is not available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbpatch kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
