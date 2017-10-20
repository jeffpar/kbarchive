---
layout: page
title: "Q196296: FILE: Objsrv.exe Contains Fix for &quot;Object Server Not..&quot; Err"
permalink: /kb/196/Q196296/
---

## Q196296: FILE: Objsrv.exe Contains Fix for &quot;Object Server Not..&quot; Err

{% raw %}

	Article: Q196296
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbusage kbCtrl kbVBp kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Objsrv.exe is a self-extracting file that contains the Objsrvfx.exe utility. The
	Objsrvfx.exe utility fixes the following error message in Microsoft Visual
	Basic:
	
	  Object Server Not Correctly Registered.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Objsrv.exe
	  (http://download.microsoft.com/download/vb40pro/Patch/1/WIN98/EN-US/Objsrv.exe)
	
	Release Date: NOV-25-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	   File Name               Size
	   ----------------------------
	   Objsrvfx.exe            44KB
	   Readme.txt               2KB
	
	Contents of the Readme.txt File
	-------------------------------
	
	What does OBJSRVFX.EXE do?
	--------------------------
	
	There is a known problem with Microsoft Visual Basic 4.0 and custom ActiveX
	controls. When using the "Custom Controls" menu option, the following error
	message may appear at least once:
	
	  Object Server Not Correctly Registered
	
	This is a benign error message and does not cause any problems with using custom
	controls.
	
	The utility, Objsrvfx.exe, prevents these error messages from occurring.
	
	How to use Objsrvfx.exe
	-----------------------
	
	The Objsrv.exe file contains the utility, Obsrvfx.exe and this Readme.txt file.
	Here are two ways to extract the utility:
	
	- Double-click the Objsrv.exe file through the Windows Explorer.
	
	  -or-
	
	- Run the Objsrv.exe file from the command line. For example, from the Windows
	  Start menu, choose Run. In the Run dialog box, enter the following command in
	  the Open text box:
	
	  C:\Temp\Objsrv.exe
	
	The Objsrv.exe file extracts the Objsrvfx.exe utility. Two ways to run the
	utility follow:
	
	- Double-click the Objsrvfx.exe file through the Windows Explorer.
	
	  -or-
	
	- Run Objsrvfx.exe from the command line. For example, from the Windows Start
	  menu, choose Run. In the Run dialog box, enter the following command in the
	  Open text box:
	
	  C:\Temp\Objsrvfx.exe
	
	(The preceding examples assume that the Objsrv.exe and Objsrvfx.exe files are
	located in the C:\Temp folder).
	
	The Objsrvfx.exe utility examines the system registry and makes sure that all
	proper registry keys for ActiveX controls are installed. Objsrvfx.exe DOES NOT
	delete any keys in the system registry.
	
	Once the utility finishes examining the registry, the following dialog box
	appears:
	
	  Object Server Errors Have Been Fixed!
	
	How Do I Know if I Need This Utility?
	-------------------------------------
	
	A simple test with Microsoft Visual Basic 4.0 determines if you need to use this
	utility.
	
	1. Start Microsoft Visual Basic 4.0
	
	2. From the Tools menu, choose Custom Controls.
	
	If the "Object Server Not Correctly Registered" error message occurs at least
	once, you need this utility.
	
	Known Issues With Objsrvfx.exe
	------------------------------
	
	None
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q161827 PRB: "Object Server Not Correctly Registered" Error in VB4-32
	
	Additional query words: not correctly registered
	
	======================================================================
	Keywords          : kbfile kbusage kbCtrl kbVBp kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
