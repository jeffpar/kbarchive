---
layout: page
title: "Q163804: Filer.exe Contains Filer.dll for Visual FoxPro 5.0"
permalink: /kb/163/Q163804/
---

## Q163804: Filer.exe Contains Filer.dll for Visual FoxPro 5.0

{% raw %}

	Article: Q163804
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbvfp kbvfp500 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Filer.exe is a file that provides a component version of the Filer desk
	accessory (Filer.dll), available in previous versions of Microsoft Visual
	FoxPro. Filer.dll is an ActiveX COM, and as such, supports Automation. You can,
	therefore, create an instance of Filer.dll in Visual FoxPro or other Automation
	servers.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Filer.exe
	  (http://download.microsoft.com/download/vfox50/Sample1/1/W9X/EN-US/filer.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Many Visual FoxPro developers are familiar with the Filer desk accessory from
	previous versions of FoxPro and Visual FoxPro 3.0. After a brief absence during
	the Visual FoxPro 5.0 release, the Filer is back by popular demand as an
	Automation object called Filer.dll.
	
	When you download Filer, you get the following files:
	
	List of Files
	-------------
	
	Readme.txt - Readme file
	Filer.dll -  Filer engine as Automation object
	Filer.htm - Filer documentation
	Msvcrt.dll - System library needed by Filer.dll
	Filer.scx/sct - Sample form to use with Filer
	Filer.ico - Icon used by sample form (Filer.scx)
	
	Distribution
	------------
	
	Filer.dll and its companion files are for use with Visual FoxPro only. You are
	not permitted to distribute any of the files with your distributed run- time
	applications.
	
	Installing the Filer Files
	--------------------------
	
	Use the following steps to install the Filer files:
	
	1. Create a new folder under the Visual FoxPro 5.0 home folder called Filer (for
	  example, C:\Vfp\Filer).
	
	2. Unzip the files in Filer.exe and copy them into the newly created Filer
	  folder.
	
	3. Look for a copy of Msvcrt.dll, the Microsoft Visual C++ Run-time Library, in
	  your Windows\System (Windows 95) or WinNT\System32 (Windows NT) folder. If
	  Msvcrt.dll is not present, copy it to the Windows\System or WinNT\System32
	  folder from your Filer folder.
	
	Registering Filer.dll
	---------------------
	
	Filer.dll must be registered before you can create an instance of the Filer.
	
	Windows Registration
	--------------------
	
	The following command, entered in the Windows Run dialog box, registers Filer.dll
	if it is located in the folder C:\Vfp\Filer (the recommended folder):
	
	  REGSVR32 /s C:\VFP\FILER\FILER.DLL
	
	Visual FoxPro Registration
	--------------------------
	
	The following command, issued in the Visual FoxPro Command window or a program,
	registers Filer.dll if it is located in the folder C:\Vfp\Filer (the recommended
	folder):
	
	  RUN/N REGSVR32 /s C:\VFP\FILER\FILER.DLL
	
	Filer.dll can also be registered within Visual FoxPro by running the Filer form,
	Filer.scx, and performing a file search by clicking the Find Now button. Issue
	the following command to run the Filer form (assuming the Filer form is in a
	subfolder named Filer off the Visual FoxPro folder):
	
	  DO FORM (HOME( ) + 'FILER\FILER.SCX')
	
	For more information on the Filer, read the documentation in Filer.htm.
	
	Additional query words: Filer
	
	======================================================================
	Keywords          : kbfile kbvfp kbvfp500 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
