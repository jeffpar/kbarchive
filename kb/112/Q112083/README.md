---
layout: page
title: "Q112083: PRB: &quot;Invalid or Missing .EXE&quot; w/ Backslashes in Folder Names"
permalink: /kb/112/Q112083/
---

## Q112083: PRB: &quot;Invalid or Missing .EXE&quot; w/ Backslashes in Folder Names

{% raw %}

	Article: Q112083
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Macintosh allows folder names to include characters like the backslash (\).
	If a backslash is placed in the FoxPro for Macintosh folder name, an "Invalid or
	missing .EXE" error may result when you try to load FoxPro and will prevent the
	program from starting.
	
	MORE INFORMATION
	================
	
	The "FoxPro Readme" file, the "Installation and Macintosh Features Guide", and
	the online Help topic "Cross-Platform Development" contain the following
	information:
	
	  Do not use backslashes as embedded characters in folder names. Although the
	  Macintosh accepts backslashes as valid characters in a folder name, FoxPro
	  uses MS-DOS path delimiters and tries to interpret a folder name containing a
	  backslash as two separate folders. For example, if a single folder is named
	  FOXPRO\APPS, FoxPro for Macintosh tries to find a folder called APPS in a
	  folder called FOXPRO.
	
	If a backslash is included at any level of the hierarchical path (including the
	volume name), an "Invalid or missing .EXE file" error will result.
	
	NOTE: This error message can also occur in two other situations. One, if the
	local drive and a network drive have the same names, the error will occur. Two,
	if the hard drive name contains just a period, the error will occur.
	
	Additional query words: invalid or missing exe file back slash
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.6a,3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
