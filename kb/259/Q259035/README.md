---
layout: page
title: "Q259035: PRB: GetChunk/AppendChunk Methods Are Not Clearly Explained"
permalink: kb/259/Q259035/
---

## Q259035: PRB: GetChunk/AppendChunk Methods Are Not Clearly Explained

	Article: Q259035
	Product(s): Microsoft C Compiler
	Version(s): winnt:3.51,3.6
	Operating System(s): 
	Keyword(s): kbdocfix kbGrpDSVBDB kbDSupport kbDAO360bug
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, versions 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Data Access Object (DAO) 3.51 document, the
	GetChunk/AppendChunk methods that belong to the Field object are not clearly
	explained. For both methods, the variant that holds the data that is being
	transferred is said to be of subtype string. This is not true when the database
	field is of type dbLongBinary (BLOB). In this case the correct variant subtype
	is an array of bytes.
	
	RESOLUTION
	==========
	
	Put binary data in arrays of bytes. Never assign arrays of bytes onto strings
	unless they have text semantic; that is, each byte represents an ASCII value
	that can be converted to a Unicode character.
	
	MORE INFORMATION
	================
	
	If you choose a variant of subtype string or a string to store binary data, that
	choice can lead to the following two problems if a byte-to-Unicode conversion
	occurs:
	
	1. The physical size of the field is twice as big as the original binary data.
	
	2. The conversion is dependent on the current code page for the process (that is
	  usually inherited from the system settings). An application may be unable to
	  read its data if a different code page is currently selected because the data
	  was written. Also, changes to a given code page to add new symbols can lead
	  to the same problem.
	
	Additional query words: vbwin SP4 Win98 98
	
	======================================================================
	Keywords          : kbdocfix kbGrpDSVBDB kbDSupport kbDAO360bug 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch kbSDKDAO360 kbSDKDAO351
	Version           : winnt:3.51,3.6
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
