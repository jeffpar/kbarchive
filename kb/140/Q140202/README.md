---
layout: page
title: "Q140202: SAMPLE: MFCARRAY Using Safe Arrays in MFC Automation"
permalink: /kb/140/Q140202/
---

## Q140202: SAMPLE: MFCARRAY Using Safe Arrays in MFC Automation

{% raw %}

	Article: Q140202
	Product(s): Microsoft C Compiler
	Version(s): 3.5,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbAutomation kbOSWinNT351 kbOSWinNT400 kbOSWin2000 kbVC400 kbVC500 kbVC
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft OLE Libraries, used with:
	   - Microsoft Windows NT Server versions 3.5, 4.0 
	   - Microsoft Windows NT Workstation versions 3.5, 4.0 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MFCArray is an MFC OLE Automation server application that demonstrates the use
	of safe arrays. The array is passed to and returned from automation methods in a
	VARIANT.
	
	Microsoft Visual C++ 5.0 was used to create the automation server. Vb.vbp and
	Vb.frm in the sample are Visual Basic 5.0 files that can be used to control the
	automation server.
	
	The following file is available for download from the Microsoft Download Center:
	
	  MFCArray.exe
	  (http://download.microsoft.com/download/ole/mfcarray/2000/WIN98/EN-US/MFCArray.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After downloading the file, use the following command to extract the sample and
	build the appropriate directory structure:
	
	  MFCArray.exe -d
	
	MORE INFORMATION
	================
	
	MFCArray implements the following methods:
	
	- SlowSort: Sorts an input safearray of BSTRs and returns the sorted array and
	  the time required for the sort. The array is passed by reference because it
	  needs to be modified by the sort. SlowSort uses SafeArrayGetElement and
	  SafeArrayPutElement to gain access to the array elements.
	
	- FastSort: Sorts an input safearray of BSTRs as does SlowSort but uses
	  SafeArrayAccessData to get a pointer to the array elements. This allows
	  direct access to the array elements instead of using SafeArrayGetElement and
	  SafeArrayPutElement. This accounts for the speed improvement over SlowSort.
	
	- Average: Finds the average of an input safe array of integers. The array is
	  not passed by reference.
	
	- GetArray: Creates and returns a safe array of BSTRs.
	
	REFERENCES
	==========
	
	For an example of referencing the values that are in a VARIANT that contains a
	SAFEARRAY in an MFC client, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q167668 HOWTO: Pass a SafeArray of Strings in a VARIANT
	
	Additional query words: MFCArray
	
	======================================================================
	Keywords          : kbfile kbSample kbAutomation kbOSWinNT351 kbOSWinNT400 kbOSWin2000 kbVC400 kbVC500 kbVC600 kbOSWin95 kbGrpDSCom kbDSupport kbOLE200 
	Technology        : kbVCsearch kbAudDeveloper kbOLESearch kbVC32bitSearch
	Version           : :3.5,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
