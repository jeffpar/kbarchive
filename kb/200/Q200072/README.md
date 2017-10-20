---
layout: page
title: "Q200072: HOWTO: Initializing lpstrFilter for All Files on the Macintosh"
permalink: /kb/200/Q200072/
---

## Q200072: HOWTO: Initializing lpstrFilter for All Files on the Macintosh

{% raw %}

	Article: Q200072
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbVC kbDSupport
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On the Macintosh, to list all files, you must use "****" as the filter string
	(lpstrFilter) for the open file dialog box (GetOpenFileName).
	
	MORE INFORMATION
	================
	
	GetOpenFileName uses the lpstrFilter field of the OPENFILENAME structure to
	specify file filters. It points to a list of string pairs, separated by null
	characters. Each pair contains the display string and the filter pattern. On the
	Intel platform, a filter string of "*.*" specifies all files. The Windows
	Portability Library (WPL) uses "****", instead. Below is an MFC-based example:
	
	          CString strFilter;
	          CFileDialog dlgFile(TRUE);
	          CString allFilter = "All Files (*.*)";
	          strFilter += allFilter;
	          strFilter += (TCHAR)'\0';   // Next string please.
	
	  #ifndef _MAC
	
	          strFilter += _T("*.*");
	
	  #else
	
	          strFilter += _T("****");
	
	  #endif
	
	          strFilter += (TCHAR)'\0';   // Last string.
	          dlgFile.m_ofn.lpstrFilter = strFilter;
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: OPENFILENAME lpstrFilter GetOpenFileName
	
	======================================================================
	Keywords          : kbHWMAC kbVC kbDSupport 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Hardware          : MAC
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
