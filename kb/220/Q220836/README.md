---
layout: page
title: "Q220836: Regrgs.exe: Adds Entries to the Registry Using RGS File"
permalink: kb/220/Q220836/
---

## Q220836: Regrgs.exe: Adds Entries to the Registry Using RGS File

	Article: Q220836
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbCOMt kbRegistry kbVC600 kbATL300 kbGrpDSMFCATL
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Regrgs.exe is a sample that can be used to register information stored in a
	registrar script file (RGS). RGS files are created by the ATL wizards. This
	sample might be useful in the case of DCOM. You can register the server on the
	client machine even though the DLL/EXE resides on a different machine.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Regrgs.exe now
	  (http://download.microsoft.com/download/vc60pro/samp7/1/WIN98/EN-US/Regrgs.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Regrgsvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.28/win98mexp/en-us/Regrgsvcnet.exe)
	
	Release Date: 2-Jul-2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Regrgs.exe is a command line tool that takes the following format:
	
	  REGRGS [/?] [/s] [/u] [/c] FILENAME.RGS [Replaceable Parameter="Value"]
	
	Arguments in square brackets [ ] are optional.
	
	/? - Displays a help dialog.
	/s - Silent mode.
	/u - Performs unregistration.
	/c - Console output.
	
	Replaceable Parameter - Anything in the RGS file surrounded by % (percent sign)
	is a replaceable parameter. For example, %MODULE%.
	
	Value - You must provide a value for replaceable parameters. For example, to
	register an RGS file that contains %MODULE% using REGRGS.EXE:
	
	  REGRGS.EXE  MYOBJECT.RGS  MODULE="c:\Program Files\myobject.dll"
	
	Full source code is included in the self-extracting file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbCOMt kbRegistry kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
