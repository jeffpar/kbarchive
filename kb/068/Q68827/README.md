---
layout: page
title: "Q68827: Updating Cached Private Profiles (.INI Files)"
permalink: /kb/068/Q68827/
---

## Q68827: Updating Cached Private Profiles (.INI Files)

{% raw %}

	Article: Q68827
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows version 3.1, the first time a private profile (.INI file) is
	accessed, the system will call the GetFileTime() API and store this value. The
	WriteProfileString() API will then call the GetFileTime() API and compare the
	return value to the stored value. If the two values match, the file is
	considered valid for two seconds. The function makes the changes and writes the
	new contents to disk. If the two values do not match, the profile is reread into
	a buffer and the change is made. The same principle holds true for reading
	values from a private profile.
	
	The reasoning behind the two second limit is that most applications read private
	profiles in a burst, at application startup, and write in a burst, at
	application shutdown. The penalty of one read in a twenty read sequence is
	considered acceptable, given the benefits.
	
	In Windows version 3.0, an application that has a private profile will not
	respond to changes made to that private profile by a text editor. When a text
	editor updates a private profile, the file on disk is modified. However,
	GetPrivateProfileString() and GetPrivateProfileInt() do not read from the disk
	file, instead the functions read from a copy of the file in a cache.
	WritePrivateProfileString() will update the appropriate sections in both the
	cached file and the disk file, however, the functions will not reload the disk
	file into the cache unless the entire cache is invalidated. The information
	included below discusses how to force a private profile to be recached from a
	disk file.
	
	MORE INFORMATION
	================
	
	Windows caches .INI files to reduce access time. This design allows the file to
	remain in memory until a different .INI file is loaded or until an application
	forces recaching of the file.
	
	To force an .INI file to be recached, make the following call (where
	<fname.ini> is the name of the application's private profile):
	
	     WritePrivateProfileString(NULL, NULL, NULL, <fname.ini>)
	
	This call will force the entire .INI file that is in the cache to be invalidated.
	The next call to either GetPrivateProfileString() or GetPrivateProfileInt() will
	cause the disk file to be recached.
	
	While .INI files are cached to optimize access time, the following are examples
	of how and when an .INI file could be recached.
	
	1. The application could update the cache from disk each time the application
	  requires information from the profile. Calling the WritePrivateProfileString
	  function as outlined above would clear the cache.
	
	  NOTE: Because the file is recached with every access, the benefit of the cache
	  is lost with this method.
	
	2. Create a separate program or function that the user would invoke to
	  explicitly invalidate the cache. The following is some code for that purpose
	  that could be placed into the GENERIC sample application supplied with the
	  Windows Software Development Kit (SDK):
	
	     BOOL InitInstance(HANDLE hInstance, int nCmdShow)
	     {
	        LPSTR lpApplicationName, lpKeyName, lpDefault, lpReturnedString;
	
	        int   nSize;
	
	        /* initialize variables */ 
	        ...
	
	        WritePrivateProfileString(NULL, NULL, NULL, "MY.INI");
	        GetPrivateProfileString(lpApplicationName, lpKeyName,
	           lpDefault, lpReturnedString, nSize, "MY1.INI");
	        MessageBox(NULL, "Cache Refreshed", szApp,
	           MB_ICONINFORMATION | MB_OK);
	        return TRUE;
	     }
	
	  Using a program or function like this will cause the .INI file to be recached
	  only when it is changed by an editor, therefore the benefit of the cache is
	  retained. However, it is necessary for the user to call another application
	  or function after the profile is changed with an editor.
	
	3. If neither of these techniques is suitable, the application could check the
	  time and date stamp on the .INI file before each access to see if cache
	  invalidation is necessary. This option provides the benefits of the cache
	  without requiring the user to call another program. The overhead required to
	  read the time and date stamp is minimal compared to recaching the file with
	  every call to either the GetPrivateProfileString or GetPrivateProfileInt
	  functions.
	
	Additional query words: no32bit 3.00 3.10 3.x SR# G910109-169
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
