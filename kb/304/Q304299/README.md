---
layout: page
title: "Q304299: SAMPLE: Using the Voice Control from eMbedded Visual Basic"
permalink: /kb/304/Q304299/
---

## Q304299: SAMPLE: Using the Voice Control from eMbedded Visual Basic

{% raw %}

	Article: Q304299
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbfile kbDSupport
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft eMbedded Visual C++, Version:4.0 version 3.0 
	- Microsoft Windows CE Platform SDK for Pocket PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Vbvoice.exe sample is package that includes sample code to build a dynamic
	link library (DLL) to use the Voice Control on Pocket PC from an eMbedded Visual
	Basic application.
	
	MORE INFORMATION
	================
	
	The source code to the sample DLL includes code to use the Voice Control in a
	modeless manner without automatically closing the Control when it loses window
	focus. The sample DLL subclasses the control to handle the WM_ACTIVATE message
	so that it can remain on an eMbedded Visual Basic form while the user continues
	to use the rest of the application.
	
	Included with the sample DLL (Vbvoice.dll) is an eMbedded Visual Basic
	application to demonstrate its use. The application calls functions in the DLL
	which, in turn, creates and uses the Voice Control on the Pocket PC.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Vbvoice.exe
	  (http://download.microsoft.com/download/pocketpc/sample/1.0/WCE/EN-US/Vbvoice.exe)
	
	Release Date: JUL-20-2001
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Vbvoice.exe file contains the following files:
	
	+----------------------------------------+
	| Folder name | File name       | Size   | 
	+----------------------------------------+
	| .           | Readme.txt      | 3,578  | 
	+----------------------------------------+
	| Vbvoice     | Vbvoice.vcw     | 542    | 
	+----------------------------------------+
	| Vbvoice     | Vbvoice.vcp     | 20,094 | 
	+----------------------------------------+
	| Vbvoice     | Vbvoice.cpp     | 5,287  | 
	+----------------------------------------+
	| Vbvoice     | Vbvoice.h       | 810    | 
	+----------------------------------------+
	| Vbvoice     | Vbvoice.def     | 102    | 
	+----------------------------------------+
	| Testvbvoice | TestVBVoice.ebp | 980    | 
	+----------------------------------------+
	| Testvbvoice | TestVBVoice.ebw | 84     | 
	+----------------------------------------+
	| Testvbvoice | Main.ebf        | 5,620  | 
	+----------------------------------------+
	| Testvbvoice | Vbvoice.bas     | 694    | 
	+----------------------------------------+
	
	Additional query words: vbvoice eVB
	
	======================================================================
	Keywords          : kbfile kbDSupport 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword2 kbPocketSearch kbSDKSearch kbVBeMbSearch kbWinCESDKSearch kbWinCESearch kbVCeMb kbWinCESDKPalmsizePC kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
