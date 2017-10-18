---
layout: page
title: "Q247405: PRB: Incorrect SESSION_INFO_XX Pulled in when Compiling _MBCS"
permalink: kb/247/Q247405/
---

## Q247405: PRB: Incorrect SESSION_INFO_XX Pulled in when Compiling _MBCS

	Article: Q247405
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbAPI kbWNet kbDSupport kbGrpDSMFCATL
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling the NetSessionEnum() Win32 API function in an application compiled
	with _MBCS defined, the SESSION_INFO_XX structure fields are not filled in
	correctly.
	
	CAUSE
	=====
	
	The NetSessionEnum() Win32 API function always returns values in Unicode in the
	SESSION_INFO_XX structures. However, the definitions for these structures in
	%MSVCDir%\Include\LMSHARE.h are incorrect. For instance, SESSION_INFO_10 is
	defined incorrectly as:
	
	  typedef struct _SESSION_INFO_10 {
	      LPTSTR    sesi10_cname;             // client name (no backslashes)
	      LPTSTR    sesi10_username;
	      DWORD     sesi10_time;
	      DWORD     sesi10_idle_time;
	  } SESSION_INFO_10, *PSESSION_INFO_10, *LPSESSION_INFO_10;
	
	Note that the string fields are defined as LPTSTR, when they should have been
	LPWSTR.
	
	RESOLUTION
	==========
	
	The Platform SDK version of LMSHARE.h has the SESSION_INFO_XX structures defined
	correctly. Compiling with the Platform SDK version of LMSHARE.h gives correct
	results. You can download the latest release of the Platform SDK from the
	following Microsoft Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?URL=/code/topic.asp?URL=/msdn-files/028/000/123/topic.xml
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	- NetSessionEnum()
	
	- SESSION_INFO_10
	
	- Platform SDK
	
	Additional query words: platform SESSION_INFO_XX, NetSessionEnum() SESSION_INFO_0 SESSION_INFO_1 SESSION_INFO_2 SESSION_INFO_10
	
	======================================================================
	Keywords          : kbfile kbAPI kbWNet kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
