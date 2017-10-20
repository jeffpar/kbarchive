---
layout: page
title: "Q132079: HOWTO: How to Access CMemFile Directly When Using It with CArchi"
permalink: /kb/132/Q132079/
---

## Q132079: HOWTO: How to Access CMemFile Directly When Using It with CArchi

{% raw %}

	Article: Q132079
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1; :1.0,2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using CMemFile in conjunction with CArchive, problems may arise from
	calling CArchive::GetFile and subsequently using the CFile pointer returned for
	direct file access.
	
	This is true for CFile and any class derived from CFile. Because CArchive buffers
	I/O, you need to call CArchive::Flush() before using any of the members of
	CFile.
	
	MORE INFORMATION
	================
	
	When a CMemFile object is used with a CArchive object, the two objects share a
	single buffer. Both objects retain separate pointers to this shared buffer. It
	is possible for the two objects to become out of synch if the file is accessed
	directly through a file pointer retrieved by calling CArchive::GetFile.
	
	For example, say you open a CMemFile, and start writing to it using the
	serialization functions. Then, suppose you call CMemFile::GetFile, and write to
	the file using CFile::Write. The first thing that the CMemFile object does is
	make sure it has enough space for the pending write. For this example, assume
	that there is not enough space to satisfy the write. This means that the
	CMemFile object must reallocate the buffer. This will most likely change the
	location of the buffer. The problem occurs when you write to the CMemFile again
	through the CArchive object. The CArchive object still has a pointer to the old
	buffer, because the object has no way of knowing that the CMemFile reallocated
	the shared buffer. Any attempt to write through this pointer does not write to
	the appropriate file. Therefore, the data is missing from the file where it
	should have been written.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 3.20 2.20 4.00 4.10
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbvc100 kbVC220 kbVC410 kbVC200 kbVC210
	Version           : winnt:4.0,4.1; :1.0,2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
