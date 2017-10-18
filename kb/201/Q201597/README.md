---
layout: page
title: "Q201597: PRB: PrivateProfile Problems, in 4.0b Macintosh Cross-Compiler"
permalink: kb/201/Q201597/
---

## Q201597: PRB: PrivateProfile Problems, in 4.0b Macintosh Cross-Compiler

	Article: Q201597
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b; winnt:4.0,4.0a,4.1
	Operating System(s): 
	Keyword(s): kbHWMAC kbMFC kbRegistry kbVC400 kbVC410 kbDSupport kbGrpDSMFCATL kbNoUpdate
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.0a, 4.1, on platform(s):
	   - the operating system: Mac OS (all) 
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PrivateProfile family of routines may fail on the Macintosh operating system
	due to caching of the preference file name.
	
	CAUSE
	=====
	
	The PrivateProfile family of routines supported on the Macintosh
	(GetPrivateProfileInt, GetPrivateProfileString, and WritePrivateProfileString)
	cache the previously opened preference file by file name. This preference file
	is closed on idle to avoid repeated opening and closing of preference files.
	This mechanism fails if an already opened file is specified later by a
	PrivateProfile routine using a different file name.
	
	Consider the case where "test preferences" is passed to GetPrivateProfileString
	first and "Macintosh HD:System Folder:Preferences:test preferences" is
	subsequently passed to WritePrivateProfileString. While the second reference is
	valid and the correct file is found, the file name is not recognized as the same
	file name already cached. The second attempt to open the file fails.
	Specifically, an attempt to create the file fails with an unexpected error code
	(other than dupFNErr). When this happens, GetPrivateProfileString and
	GetPrivateProfileInt return the default value and WritePrivateProfileString
	fails.
	
	RESOLUTION
	==========
	
	To work around this problem, always specify the file in the same way.
	
	Prior to calling InitInstance, the Microsoft Foundation Class (MFC) references a
	preference file with the same name as the application, with " Preferences"
	appended to it. It specifies the file by only the file name. If you need to
	access this same preference file from within InitInstance(), you must use only
	the file name.
	
	Consider always using only the file name to reference any preference file that
	may also be referenced internally by the MFC.
	
	MORE INFORMATION
	================
	
	The preference file names are cached as an optimization to reduce the number of
	times the preference file is opened and closed. To avoid the PrivateProfile APIs
	opening and closing the file each time it is invoked, the preference file is
	left opened and subsequently closed when the application is idle.
	
	A list of open preference file names is used to determine whether a preference
	file is already opened. When a PrivateProfile routine is invoked, it first
	checks this file name. If the file name is different, PrivateProfile attempts to
	reopen the file and an error occurs.
	
	Prior to calling InitInstance, the Microsoft Foundation Class (MFC) library reads
	and writes to a preference file. The file name is determined by appending "
	Preferences" to the application name (as read from string resource
	AFX_IDS_APP_TITLE).
	
	If a preference file by the same name is accessed within InitInstance, the file
	will still be open because the application hasn't been idle yet. Accessing this
	file using a different file name (that is, a fully qualified file name) will
	fail. The solution is to use the same string literal that MFC uses as described
	above.
	
	Steps to Reproduce Behavior
	---------------------------
	
	     ...
	     char buffer[MY_MAX_BUFFER+1];
	     GetPrivateProfileString (lpSection, lpKey, lpDefault, buffer, MY_MAX_BUFFER, "test preferences");
	     // Check buffer, should be valid.
	     GetPrivateProfileString (lpSection, lpKey, lpDefault, buffer, MY_MAX_BUFFER, "Macintosh HD:System Folder:Preferences:test preferences");
	     // Check buffer, will be lpDefault.
	     ...
	
	Additional query words: GetPrivateProfileString GetPrivateProfileInt WritePrivateProfileString _OpenPrefsFile
	
	======================================================================
	Keywords          : kbHWMAC kbMFC kbRegistry kbVC400 kbVC410 kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : MACINTOSH:4.0,4.0b; winnt:4.0,4.0a,4.1
	Hardware          : MAC
	Issue type        : kbprb
	
	=============================================================================
	
