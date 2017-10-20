---
layout: page
title: "Q118612: INFO: Schema Numbers Not Stored if Serialize() Called Directly"
permalink: /kb/118/Q118612/
---

## Q118612: INFO: Schema Numbers Not Stored if Serialize() Called Directly

{% raw %}

	Article: Q118612
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:7.0; winnt:1.0,2.0,2.1,2.2,4.0,4.1,4.2; :1.0,1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC100 kbVC150 kbVC152 kbVC200 kbVC210 kbVC220 kbGrpDSMFCATL
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	- Microsoft Foundation Classes (MFC) 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you store an object in an archive by calling Serialize() directly, the
	schema number for the object is not stored. As a result, if an older version of
	an object with an older schema number is read using a later version of the
	object, a CArchiveExeception is not produced. Instead, the object reads the data
	that was written in the older format, using code that reads the newer format;
	this often fails, causing the application to crash.
	
	MORE INFORMATION
	================
	
	MFC objects that use the DECLARE_SERIAL and IMPLEMENT_SERIAL macros have schema
	numbers that indicate the "version" of the object. An MFC archive maintains a
	list of objects and their schema numbers. When an object is stored by means of
	the insertion operator (<<) or the WriteObject() function, the schema
	number is also stored. Then, when the object is retrieved using the extraction
	operator (>>) or the ReadObject() function, the schema number from the
	archive is compared with the schema number of the object in the application. If
	they are different, a CArchiveException is produced.
	
	When an object is stored by calling the Serialize() function of the object
	directly, the schema number is not stored. When an older version of an object is
	read back into the archive, Serialize() simply attempts to read the data from
	the archive using the newer code for the object. If the data format of the
	object has changed, the object is filled with bad data and most likely causes
	the application to crash.
	
	One way to avoid this problem is to use the insertion and extraction operators,
	or ReadObject() and WriteObject(), whenever you serialize an object. However,
	there are cases where you cannot do this and need to call Serialize() directly.
	When you archive an object using the insertion and extraction operators, or
	ReadObject() and WriteObject(), MFC dynamically creates the object when it is
	loaded. If the memory for your object is already allocated when you are ready to
	load the object, you will not want MFC to create a new object, so you need to
	call Serialize() directly.
	
	If you need to store an object by calling Serialize() directly, then you may want
	to have your object contain its own version number in its Serialize() function.
	While you are loading the object, check this number to verify that the versions
	are the same.
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC100 kbVC150 kbVC152 kbVC200 kbVC210 kbVC220 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbMFC kbvc150 kbvc100 kbVC220 kbZNotKeyword3 kbVC410 kbCVC700DOS kbVC420 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152
	Version           : MS-DOS:7.0; winnt:1.0,2.0,2.1,2.2,4.0,4.1,4.2; :1.0,1.5,1.51,1.52
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
