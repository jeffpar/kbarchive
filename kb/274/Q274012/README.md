---
layout: page
title: "Q274012: FIX: std::wofstream Can't Output After DBCS Character Is Output"
permalink: /kb/274/Q274012/
---

## Q274012: FIX: std::wofstream Can't Output After DBCS Character Is Output

	Article: Q274012
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSTL kbVC600 kbVC600QFE kbDSupport kbGrpDSVCCompiler
	Last Modified: 14-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	No text appears after a double-byte character set (DBCS) character is written to
	a file.
	
	For instance, in the following code snippet, the text " There" is not written to
	the STLout.txt file after the DBCS character 0x30F0 is written to a file.
	
	  #include <fstream>
	
	  void main()
	  {
	    wchar_t ch = 0x30F0; /* DBCS Japanese test character. */ 
	    std::wofstream wfout;
	    wfout.imbue(std::locale("Japanese"));
	    wfout.open("STLout.txt");
	    wfout << L"Hello";
	    wfout << ch;  /* Write the DBCS character to the output text file. */ 
	    //wfout.clear(); /* Workaround: Call clear() after the DBCS output. */ 
	    wfout << L" There\n";  /* This is not written to the output text file. */ 
	  }
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest Service Pack for Visual Studio 6.0.
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Visual Studio 6.0 Service Pack 5.
	
	Additional query words: std::wofstream DBCS
	
	======================================================================
	Keywords          : kbSTL kbVC600 kbVC600QFE kbDSupport kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
