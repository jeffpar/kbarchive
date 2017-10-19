---
layout: page
title: "Q74800: INFO: Working Around the STRINGTABLE 255 Character Limit"
permalink: /kb/074/Q74800/
---

## Q74800: INFO: Working Around the STRINGTABLE 255 Character Limit

	Article: Q74800
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbResource kbSDKPlatform kbString
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
	
	Windows STRINGTABLE resources are limited to 255 characters per string. However,
	it is possible to work with longer strings using the technique described in this
	article.
	
	MORE INFORMATION
	================
	
	The following function, MyLoadString, will allow strings longer than 255
	characters to be loaded. Using the exclamation mark ("!") to indicate that a
	particular string is part of a longer whole is not required; any character that
	does not otherwise start a string may be used for this purpose. The string IDs
	used for pieces of the same string must be consecutive.
	
	     MyLoadString(HANDLE hInst, WORD wID, LPSTR szBuf)
	     {
	
	     int i, j;
	     char szLoadedString[256];   // temporary buffer
	
	     *szBuf = 0;
	
	     do
	
	      {
	      LoadString(hInst, wID, szLoadedString, 255);
	
	      if ('!' == *szLoadedString)
	        {
	        lstrcat(szBuf, (szLoadedString + 1));
	        wID++;
	        }
	      else
	        lstrcat(szBuf, szLoadedString);
	      }
	
	     while ('!' == *szLoadedString);
	
	     return lstrlen(szBuf);
	     }
	
	The RC file will take on a form resembling the following:
	
	     STRINGTABLE
	     BEGIN
	     100, "!This is the first part of the string to be loaded,"
	     101, "!this is the second part, "
	     102, "and this is the third"
	     END
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbResource kbSDKPlatform kbString 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
