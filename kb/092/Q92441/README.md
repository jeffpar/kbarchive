---
layout: page
title: "Q92441: SAMPLE: VerStamp.exe Accesses File Version Information Resource"
permalink: /kb/092/Q92441/
---

## Q92441: SAMPLE: VerStamp.exe Accesses File Version Information Resource

{% raw %}

	Article: Q92441
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbSample kbResource kbGrpDSUser kbOSWin310 kb16bitonly
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VerStamp.exe demonstrates how to use the VER.DLL and VER.LIB libraries, which
	provide version-stamping for Microsoft(R) Windows(TM) and MS-DOS(R) executable
	files.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Verstamp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To select an executable, a dynamic-link library (DLL), or a driver file source
	and display its file version information in the main window, choose the Open
	command from the File menu. If the file does not have a version information
	resource, VERSTAMP notifies you with a message box. If the file has a version
	information resource, choose the More Info button in the main window to display
	the information. If you choose the Install File button, VERSTAMP uses the
	VerFindFile() function to determine where the source file should be installed.
	If VerFindFile() returns an error, VERSTAMP displays a message box prompting you
	to continue or abort. If you choose to continue, VERSTAMP proceeds with the
	installation, captures the result of VerInstallFile(), and displays it in a
	message box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbResource kbGrpDSUser kbOSWin310 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
