---
layout: page
title: "Q103323: PATCH: Setupwiz.exe Updated VFP for Windows 3.0b Setup Wizard"
permalink: /kb/103/Q103323/
---

## Q103323: PATCH: Setupwiz.exe Updated VFP for Windows 3.0b Setup Wizard

	Article: Q103323
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbfile kbtool kbvfp kbvfp300b
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setupwiz.exe is a patch that contains the updated version of the Setup Wizard
	for Visual FoxPro 3.0b.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Setupwiz.exe
	  (http://download.microsoft.com/download/fox30pro/Update/1/WIN98/EN-US/Setupwiz.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: These files fix the problem described in the following Microsoft Knowledge
	Base article:
	
	  Q148762 FIX: Distribution Disk Setup Fails with Setup Error 279
	
	The following information is also provided in the Readme.txt file contained in
	Setupwiz.exe:
	
	Microsoft Visual FoxPro Setup Wizard Update 05/96
	
	These updated Setup Wizard files fix problems associated with distributing
	applications that contain long path and file names. To use these new Setup
	Wizard files, place them in the following locations:
	
	  File               Directory Location
	  ==========================================
	
	  Wzsetup.app        \VFP\Wizards\ 
	  Compress.dbf       \VFP\Distrib.src\ 
	
	Before running the updated Setup Wizard, go to the directory where your source
	files are and delete the Dkcontrl.dbf, Dkcontrl.cdx, and the Wzsetup.ini files.
	
	NOTE: Windows NT and Windows 95 support long file names. So, if the application
	directory has any long file or path names, a dialog box is displayed notifying
	you that no Win32s files will be included (even if the Win32s Required System
	Files check box is selected in Step 2). This also means that you will be unable
	to do an installation with these setup disks on the Win32s platform. In
	addition, if you have specified a long path name for the Default Destination
	Directory in Step 5, you will not be able to install the setup disks on a Win32s
	computer.
	
	Microsoft appreciates your continued support of Visual FoxPro and is always
	committed to making Visual FoxPro better.
	
	
	Additional query words: softlib filename pathname patch
	
	======================================================================
	Keywords          : kbfile kbtool kbvfp kbvfp300b 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
