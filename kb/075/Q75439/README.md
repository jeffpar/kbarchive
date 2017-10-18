---
layout: page
title: "Q75439: INFO: Tips for Writing DBCS-Compatible Applications"
permalink: kb/075/Q75439/
---

## Q75439: INFO: Tips for Writing DBCS-Compatible Applications

	Article: Q75439
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	String operations in systems that use a Double-Byte Character Set (DBCS) are
	slightly different from a single-byte character system. This article provides
	guidelines to reduce the work necessary to port an application written for a
	single-byte system to a DBCS system.
	
	MORE INFORMATION
	================
	
	In a double-byte character set, some characters require two bytes, while some
	require only one byte. The language driver can distinguish between these two
	types of characters by designating some characters as "lead bytes." A lead byte
	will be followed by another byte (a "tail byte") to create a Double-Byte
	Character (DBC). The set of lead bytes is different for each language. Lead
	bytes are always guaranteed to be extended characters; no 7-bit ASCII characters
	can be lead bytes. The tail byte may be any byte except a NULL byte. The end of
	a string is always defined as the first NULL byte in the string. Lead bytes are
	legal tail bytes; the only way to tell if a byte is acting as a lead byte is
	from the context.
	
	The Windows Software Development Kit (SDK) version 3.0 includes two functions for
	moving through strings that may contain DBCs: AnsiNext() and AnsiPrev(). The
	AnsiPrev() function is a time expensive call because it must run through the
	string from the beginning to determine where the previous character begins. It
	is best to search for characters from the beginning rather than the end of a
	string.
	
	The Windows SDK version 3.1 includes the IsDBCSLeadByte() function, which returns
	TRUE if and only if the byte CAN BE a lead byte. Because this function takes a
	char parameter, it cannot report if the byte IS a lead byte (to do so would
	require context).
	
	To make non-DBCS code run as quickly as possible, a source file may use "#ifdef
	DBCS" around code that is only for DBCS, and compile two versions of the object
	(OBJ) file. For example:
	
	     #ifdef DBCS
	       for (pszTemp = szString; *pszTemp; pszTemp = AnsiNext(pszTemp))
	     #else
	       for (pszTemp = szString; *pszTemp; ++pszTemp)
	     #endif
	
	     ...
	
	To make the code easier to read, an application could define macros for the
	AnsiNext() and AnsiPrev() functions if DBCS is not defined:
	
	     #ifndef DBCS
	
	     #define AnsiNext(x) ((x)+1)
	     #define AnsiPrev(y, x) ((x)-1)
	
	     #ifdef WIN31
	
	     #define IsDBCSLeadByte(x) (FALSE)
	
	     #endif
	
	     #endif
	
	With these definitions in place, all of the code can be written for DBCS. Note
	that the AnsiNext() function will not go past the end of a string and the
	AnsiPrev() function will not go past the beginning of a string, while the macros
	will. In addition, because the "y" parameter in the AnsiPrev() macro is ignored,
	some code will give different results when compiled with and without DBCS
	defined. The following code is an example of this phenomenon:
	
	     pszEnd = AnsiPrev(++pszStart, pszEnd);
	
	The following code demonstrates how to find the offset of the filename in a full
	path name:
	
	     LPSTR GetFilePtr(LPSTR lpszFullPath)
	     {
	
	      LPSTR lpszFileName;
	
	      for (lpszFileName = lpszFullPath; *lpszFullPath;
	                 lpszFullPath = AnsiNext(lpszFullPath))
	          if (*lpszFullPath == ':' || *lpszFullPath == '\\')
	              lpszFileName = lpszFullPath + 1;
	
	      return lpszFileName;
	
	     }
	
	Note that ':' and '\\' are guaranteed not to be lead bytes. The search started
	from the beginning of the string rather than the end to avoid using the
	AnsiPrev() function.
	
	The following code demonstrates a string copy into a limited size buffer. Note
	that it ensures that the string does not end with a lead byte.
	
	     int StrCpyN(LPSTR lpszDst, LPSTR lpszSrc, unsigned int wLen)
	
	     {
	
	      LPSTR lpEnd;
	      char cTemp;
	
	      // account for the terminating NULL
	      --wLen;
	
	      for (lpEnd = lpszSrc; *lpEnd && (lpEnd - lpszSrc) < wLen;
	                 lpEnd = AnsiNext(lpEnd))
	          ;  // scan to the end of string, or wLen bytes
	
	      // The following can happen only if lpszSrc[wLen-1] is a lead
	      // byte, in which case do not include the previous DBC in the copy.
	      if (lpEnd - lpszSrc > wLen)
	          lpEnd -= 2;
	
	      // Terminate the source string and call lstrcpy.
	      cTemp = *lpEnd;
	      *lpEnd = '\0';
	      lstrcpy(lpszDst, lpszSrc);
	      *lpEnd = cTemp;
	
	     }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
