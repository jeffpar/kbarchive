---
layout: page
title: "Q130058: Language-Independent Way to Update the Startup Group"
permalink: /kb/130/Q130058/
---

## Q130058: Language-Independent Way to Update the Startup Group

	Article: Q130058
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When writing an installation script for a Windows-based application, an entry to
	the StartUp program group should be added. However, international retail
	versions of Windows use different group names. For example, the German retail
	version of Windows calls its startup program group AutoStart, so merely looking
	for a program group by name will not work in other languages. This article gives
	you a language-independent way to update the startup group.
	
	MORE INFORMATION
	================
	
	The program manager checks for the startup group name by first checking the
	PROGMAN.INI file for the entry "Startup=" entry. (The user can specify their own
	startup group using this entry.) If it doesn't find this entry, it searches the
	title bars of all child windows for text matching the name of the startup group
	as defined in the Program Manager resource script file. In other words, there is
	no tag on a program group that marks it as the startup group. It is decided
	solely on the name of the group, and the name changes for each language version
	of Windows.
	
	You can use the same approach in your application. All you need to know are the
	translations for "Start Up" for the languages you are interested in. Then use
	code similar to this:
	
	      #if language == GERMAN
	        startup="Autostart"
	     #elif language ==  ENGLISH
	        startup="Start Up"
	     #elif .........
	
	Additional query words: 3.10 international French European kbinf
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
