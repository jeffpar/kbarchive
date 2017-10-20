---
layout: page
title: "Q153525: Flltest.exe Determines if FLL File Loads Successfully"
permalink: /kb/153/Q153525/
---

## Q153525: Flltest.exe Determines if FLL File Loads Successfully

{% raw %}

	Article: Q153525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Flltest.exe is a file that demonstrates C code that may be used to verify if an
	FLL will load successfully. This sample contains both a 16-bit and a 32-bit
	version of the code that can be run to test FLLs you may want to load under the
	16-bit version of FoxPro for Windows (versions 2.6x) or the 32-bit version of
	Visual FoxPro for Windows (versions 3.x, 5.x, 6.0) respectively.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Flltest.exe
	  (http://download.microsoft.com/download/fox26win/sample/1/W95/EN-US/Flltest.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Sample C Code
	-------------
	
	     HANDLE hInst;
	
	     hInst = LoadLibrary(lpCmdLine);
	     if (hInst > 32)
	     {
	        MessageBox(0,"Success: FLL can load","",0);
	        FreeLibrary(hInst);
	        return TRUE;
	     }
	     else
	     {
	        MessageBox(0,"Failure: file is invalid","",0);
	        return FALSE;
	     }
	
	Additional query words: VFoxWin FoxWin kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
