---
layout: page
title: "Q58333: Windows 3.0 WIN.INI &#91;extensions&#93; Section"
permalink: /kb/058/Q58333/
---

## Q58333: Windows 3.0 WIN.INI &#91;extensions&#93; Section

	Article: Q58333
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows 3.0 WININI.TXT
	readme file. The Windows Setup program copies this file to the Windows
	directory.
	
	[EXTENSIONS] SECTION
	--------------------
	
	The [extensions] section contains settings that link groups of
	document files with an application so that opening the document file
	automatically starts the application.
	
	The [extensions] section can contain settings of the following type:
	
	<extension>=<executable-filename input-filename>
	
	Purpose: Contains a list of filename extensions and corresponding
	        applications that are called when the user chooses a file
	        that has one of the given extensions.
	
	        The <extension> keyname is a one- to three-character
	        extension. The <executable-filename> value is the filename
	        (with the .EXE extension) of the corresponding application.
	        The <input-filename> value is the filename that will be
	        passed to the application when called. This value can be any
	        filename, or it can consist of a special wildcard character
	        -- the caret (^) -- followed by a filename extension. The
	        caret (^) represents all files with the specified extension.
	
	        For example, the following setting links document files with
	        the .CAL extension to the Windows Calendar application:
	
	           cal=calendar.exe ^.cal
	
	To change: Choose Association from the File menu in File Manager.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
