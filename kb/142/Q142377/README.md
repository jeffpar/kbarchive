---
layout: page
title: "Q142377: MMFILE - Class for Memory-Mapped Files"
permalink: kb/142/Q142377/
---

## Q142377: MMFILE - Class for Memory-Mapped Files

	Article: Q142377
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbsample kbFileIO kbMFC kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Memory-mapped files allow a file on disk to be associated with an address space.
	Once this mapping is done the data in the file can be accessed as if the file
	was in memory. Memory-mapped files provide a method on Win32 for sharing blocks
	of memory between processes.
	
	The CMemoryMappedFile class provides a C++ wrapper class for creating a
	memory-mapped file and using it. The MMFILE.TXT file included with code provides
	more information about how to use the class.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Mmfile.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	CMemoryMappedFile is derived from CMemFile. It wraps the file mapping APIs to
	manage the file mapping. A memory-mapped file does not necessarily have to be
	associated with a disk file.
	
	To create a memory-mapped file without an associated disk file, call
	CMemoryMappedFile::Open(). The first argument has to be supplied and it can be
	any string. This memory-mapped file can be accessed by other processes by using
	this string when they open the file. The other arguments to Open specify the
	size and protection flags for this file. The default parameters creates a
	memory-mapped file with a size of 4096 bytes and does not map to a disk file.
	
	Mapping a file on disk into memory involves opening the disk file with the
	correct access. Then call CMemoryMappedFile::Open() and pass in the handle to
	the file. The other parameters specify protection flags for the mapping, size of
	the mapping, and the part of the file to map. The default parameters try to map
	the complete file into memory.
	
	The code below shows the two ways of creating the memory-mapped file.
	
	REFERENCES
	==========
	
	"Advanced Windows" - Jeffrey Richter Win32 SDK Docs
	
	Sample Code
	-----------
	
	     // Code to open a memory-mapped file
	     // 
	     CMemoryMappedFile SharedFile1;
	
	     // Opens a memory-mapped file without creating a file on disk.
	     // This or other processes can access the file by using the
	     // name. Default size is 4096 bytes.
	     SharedFile1.Open("Test");
	     ...
	     SharedFile1.Close();
	
	     //Open a file on disk and map it into memory
	     CFile file("DiskFile", CFile::modeReadWrite |
	                CFile::modeCreate | CFile::shareDenyNone);
	
	     CMemoryMappedFile SharedFile2;
	     SharedFile2.Open("MapFile", (HANDLE) file.m_hFile);
	     ...
	     SharedFile2.Close();
	     file.Close();
	
	Additional query words: 4.00 2.00 2.10 2.20 memory mapped
	
	======================================================================
	Keywords          : kbcode kbfile kbsample kbFileIO kbMFC kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	
	=============================================================================
	
