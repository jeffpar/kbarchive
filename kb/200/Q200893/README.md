---
layout: page
title: "Q200893: HOWTO: Use LoadResource to Load Strings from a String Table"
permalink: /kb/200/Q200893/
---

## Q200893: HOWTO: Use LoadResource to Load Strings from a String Table

{% raw %}

	Article: Q200893
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbIntl kbResource kbSDKWin32 kbString kbUnicode kbVC500 kbDBCS kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an application has a string localized to multiple languages and mapped to the
	same ID in each language, the correct version of the string might not be loaded
	on Windows 95 or Windows 98 using the Win32 function ::LoadString. To load the
	correct version of the string you need to load the string using the Win32
	functions FindResourceEx and LoadResource.
	
	MORE INFORMATION
	================
	
	String resources are stored as UNICODE strings in the string table. The strings
	in the string table are arranged into segments or blocks of 16 strings each.
	String IDs are indexed from one.
	
	The segment a string belongs to is determined by the value of the string's
	identifier. For example, strings with identifiers of 0 to 15 are in one segment,
	strings with identifiers of 16 to 31 are in a second segment, and so on. To move
	a string from one segment to another you need to change its identifier.
	
	Below is a sample function, GetStringFromStringTable, that demonstrates how to
	load a string from an application's string table that matches the default
	language of the operating system.
	
	     wchar_t* GetStringFromStringTable( UINT uStringID )
	     {
	
	        wchar_t   *pwchMem, *pwchCur;
	        UINT      idRsrcBlk = uStringID / 16 + 1;
	        int       strIndex  = uStringID % 16;
	        HINSTANCE hModule = NULL;
	        HRSRC     hResource = NULL;
	
	        hResource = FindResourceEx( AfxGetResourceHandle(), RT_STRING,
	                                    MAKEINTRESOURCE(idRsrcBlk),
	                                    MAKELANGID(LANG_NEUTRAL,
	                                               SUBLANG_DEFAULT) );
	
	        if( hResource != NULL )
	        {
	           pwchMem = (wchar_t *)LoadResource( hModule, hResource );
	
	           if( pwchMem != NULL )
	           {
	              pwchCur = pwchMem;
	              for(int i = 0; i<16; i++ )
	              {
	                 if( *pwchCur )
	                 {
	                    int cchString = *pwchCur;  // String size in characters.
	                    pwchCur++;
	                    if( i == strIndex )
	                    {
	                       // The string has been found in the string table.
	                       wchar_t *pwchTemp = new wchar_t[ cchString ];
	                       wcsncpy( pwchTemp, pwchCur, cchString );
	                       pwchTemp[ cchString ] = '\0';
	
	                       return pwchTemp;
	                    }
	                    pwchCur += cchString;
	                 }
	                 else
	                    pwchCur++;
	              }
	           }
	        }
	        return NULL;
	
	     }
	
	REFERENCES
	==========
	
	Visual C++ Help, version 5.0; search on: "String Editor"
	
	Additional query words: LoadString FindResourceEx
	
	======================================================================
	Keywords          : kbIntl kbResource kbSDKWin32 kbString kbUnicode kbVC500 kbDBCS kbIntlDev 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
