---
layout: page
title: "Q101731: File/Folder Attribute Mapping from NT AS to Macintosh"
permalink: /kb/101/Q101731/
---

## Q101731: File/Folder Attribute Mapping from NT AS to Macintosh

{% raw %}

	Article: Q101731
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are running a Macintosh volume with Services for the Macintosh from a
	Windows NT Advanced Server, the files and folders (directories) have attributes
	or properties depending on which platform you are using to view the files and
	folders (directories). See below for details regarding these properties.
	
	MORE INFORMATION
	================
	
	Windows NT Advanced Server Properties
	-------------------------------------
	
	Directory and File Properties
	
	  Read Only, Hidden, Archive, and System
	
	You can view these properties by using the MS-DOS ATTRIB command or by choosing
	Properties from the File menu in File Manager.
	
	Macintosh Properties
	--------------------
	
	File Properties
	
	  Locked, File Locked, Resources Locked, Printer driver MultiFinder compatible,
	  Has BNDL, No INITs, Shared, INITed, Invisible, Label, Stationary, Alias, and
	  Use Custom Icon
	
	Folder Properties
	
	  Locked, INITed, Invisible, Label, and Use Custom Icon
	
	You can view the above Macintosh attributes by using ResEdit version 2.1.1 or
	later.
	
	The following table describes the mapping of attributes from Windows NT Advanced
	Server to the appropriate attributes on the Macintosh. Only the attributes that
	are cross platform are listed; if an attribute is not listed, it has no
	equivalent on the other platform.
	
	   Macintosh Attribute           Windows NT Advanced Server Attribute
	   ------------------------------------------------------------------
	
	   File Locked                   Read Only
	   Invisible                     Hidden
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
