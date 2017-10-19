---
layout: page
title: "Q85520: INFO: Archiving Several Objects That Point to a Third Object"
permalink: /kb/085/Q85520/
---

## Q85520: INFO: Archiving Several Objects That Point to a Third Object

	Article: Q85520
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application uses the archiving capabilities of the Microsoft Foundation
	Classes, you must carefully archive objects that contain pointers. If two
	distinct objects (A and B) each point to a third object (C), you serialize A and
	B into separate archives, and deserialize A and B, each one points to a unique
	copy of object C.
	
	This can cause several problems. If either object A or B changes object C, the
	change affects only the corresponding copy of object C. This can cause
	inconsistencies. In addition, this creates duplicate copies of object C on disk
	and in memory which wastes system resources.
	
	MORE INFORMATION
	================
	
	The CArchive class provides a solution to this classic problem when an
	application serializes two objects into one archive object. Each archive
	maintains a mapping from the stored object to a 16-bit persistent identifier
	(PID). The serialization process assigns a new PID to each unique class and
	object name in an archive.
	
	Each time an application saves an object to the archive (usually through the
	insertion operator), the serialization code determines if the class or object
	already exists in the archive. For any class or object already in the archive,
	the code inserts the PID already associated with the object instead of a new
	copy of the class or object.
	
	PID values have no significance outside an archive. If you serialize objects A
	and B into different archives, the process assigns a PID to object C and stores
	of the object in each archive, even if both archives refer to the same file.
	Even if you disregard the space that this process wastes, deserializing the
	objects creates a data structure that contains two distinct copies of object C,
	which does not accurately reflect the original data structure.
	
	Additional information on storing objects using the CArchive class is available
	in the "Class Libraries User's Guide" and in the "Class Libraries Reference"
	manual. In Visual C++, further information is available in Technical Note #2 in
	the MFC Tech Notes help file. In Microsoft C/C++ version 7.0, further
	information is available in Microsoft Foundation Classes technical note file
	TN002.TXT.
	
	NOTE: Starting with Visual C 4.0, the PID can be 16- or 32-bit value depending on
	the number of objects serialized.
	
	Additional query words: Carchive persistent serialize
	
	======================================================================
	Keywords          : kbnokeyword kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1
	Issue type        : kbinfo
	
	=============================================================================
	
