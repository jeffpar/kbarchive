---
layout: page
title: "Q271777: Distributed Applications with Visual C++ 6.0 Training Kit Commen"
permalink: /kb/271/Q271777/
---

## Q271777: Distributed Applications with Visual C++ 6.0 Training Kit Commen

{% raw %}

	Article: Q271777
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Distributed Applications with Microsoft Visual C++ 6.0 MCSD Training Kit ISBN 0-7356-0926-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Distributed Applications with Microsoft
	Visual C++ 6.0 MCSD Training Kit, ISBN 0-7356-0926-8.
	
	The following topics are covered:
	
	- CD-ROM: Duwamish Files Are Not Included
	
	- CD-ROM: Missing Code Sample Files For Chapter 4 Exercise 2
	
	- CD-ROM: CreatePHTable.sql and PHImportData.txt Files Are Not Included
	
	- Page 212: Replace Parentheses With Brackets
	
	- Pages 281 and 282: Code Errors
	
	- Pages 298 and 776: Incorrect Question And Answer
	
	MORE INFORMATION
	================
	
	CD-ROM: Duwamish Files Are Not Included
	---------------------------------------
	
	The Duwamish files mentioned on pages 51-56 are not included on the companion
	CD-ROM. These files are available for download from the Microsoft Developer
	Network (MSDN) web site at:
	
	  http://msdn.microsoft.com/default.asp.
	
	
	CD-ROM: Missing Code Sample Files For Chapter 4 Exercise 2
	----------------------------------------------------------
	
	The files in C:\DISV\Labs\Ch04\Ex02 do not match the exercise in the book as
	outlined on pages 201-210. The DISVCh4X2.EXE self-extracting executable file
	contains the correct sample files for this exercise.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DISVCh4X2.exe
	  (http://download.microsoft.com/download/vc60pro/DISVC4X2/1.0/WIN98/EN-US/DISVCh4X2.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	CD-ROM: CreatePHTable.sql and PHImportData.txt Files Are Not Included
	---------------------------------------------------------------------
	
	The CreatePHTable.sql and PHImportData.txt files mentioned on page 475 are not
	included on the companion CD-ROM. We have included the two files in a
	self-extracting file available for download in the Microsoft Download Center.
	The following file is available for download from the Microsoft Download
	Center:
	
	  DISVDB.EXE
	  (http://download.microsoft.com/download/vc60ent/mspress/1.0/WIN98Me/EN-US/DISVDB.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Page 212: Replace Parentheses With Brackets
	-------------------------------------------
	
	On page 212, Steps 4 and 5 should have brackets after the code statement rather
	than parentheses. Change:
	
	  if(Dib.Load(&DibFile))
	  )
	
	To:
	
	  if(Dib.Load(&DibFile))
	  {
	
	Also change:
	
	  CDIBPal* pTemp = new CDIBPal;
	  ASSERT(pTemp != NULL);
	  if(pTemp->Create(&Dib))
	  )
	
	To:
	
	  CDIBPal* pTemp = new CDIBPal;
	  ASSERT(pTemp != NULL);
	  if(pTemp->Create(&Dib))
	  {
	
	
	Pages 281 and 282: Code Errors
	------------------------------
	
	On page 281, in the second line from the bottom,
	
	Change:
	
	  return m_pParent->QueryInterface(riid,ppv);
	
	To:
	
	  return m_pParent->InternalQueryInterface(riid,ppv);
	
	On page 282, in the third line
	
	Change:
	
	  return m_pParent->AddRef();
	
	To:
	
	  return m_pParent->InternalAddRef();
	
	On page 282, in the seventh line,
	
	Change:
	
	  return m_pParent->Release();
	
	To:
	
	  return m_pParent->InternalRelease();
	
	
	Pages 298 and 776: Incorrect Question And Answer
	------------------------------------------------
	
	On pages 298 and 776, change question 4, and its answer, as follows.
	
	On page 298 change the question from:
	4. What are the four interfaces that every COM class must implement?
	
	To:
	4. What is the interface that all COM classes must support?
	
	On page 776, change the question and corresponding answer from:
	4. What are the four interfaces that every COM class must implement?
	IUnknown, QueryInterface, AddRef, and Release are the standard interfaces
	developed by Microsoft for use with COM, as opposed to any custom interfaces
	that you develop within your own code.
	
	To:
	4 What is the interface that all COM classes must support?
	IUnknown is the interface that all COM classes must support. All interfaces
	inherit from IUnknown. The methods of IUnknown are QueryInterface, AddRef, and
	Release."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK DEVBOOK VSTUDIO VC 0-7356-0926-8
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
