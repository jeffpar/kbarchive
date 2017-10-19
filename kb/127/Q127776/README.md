---
layout: page
title: "Q127776: Path Rules for FoxPro for Macintosh"
permalink: /kb/127/Q127776/
---

## Q127776: Path Rules for FoxPro for Macintosh

	Article: Q127776
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes differences and similarities in path
	constructs between the Macintosh and MS-DOS platforms and explains how to use
	path constructs in FoxPro.
	
	MORE INFORMATION
	================
	
	The rules for naming drives differ on the Macintosh and MS-DOS platforms. The
	drive name on the MS-DOS platform consists of a single character followed by a
	colon such as C: or D:. On the Macintosh, a drive name may look like Mac HD: or
	Barney. The Macintosh drive name can even contain a space between multiple
	letters whereas the MS-DOS style is limited to one character. Both, however, end
	with a colon.
	
	NOTE: Volume names, paths, and file names are not case sensitive. The term
	"volume" is interchangable with "drive" on the Macintosh platform.
	
	File Names
	----------
	
	Valid characters in file names are:
	
	  A-Z, underscore, and 0-9 but do not begin a file name with a numeral.
	
	Invalid characters according to the Finder are:
	
	  Colon (:) - ASCII value 58
	  Some systems substitute a dash -
	
	Invalid characters according to FoxPro's Fcreate command are:
	
	  Double Quotation mark (") - ASCII value 34
	  Colon (:) - ASCII value 58
	  Backslash (\) - ASCII value 92
	
	Valid but potentially problematic characters are:
	
	  Single Quotation mark (') - ASCII value 39
	  Period (.) other than the one automatically appended - ASCII value 46
	  Space ( ) - ASCII value 32
	
	Path Strings
	------------
	
	A path is a series of directory names or folders separated by a delimiter
	character such as a colon (:), which is the Macintosh notation, or a backslash
	(\), which is the the MS-DOS notation. The path may or may not have a file name
	at the end or a drive name at the beginning.
	
	NOTE: Most FoxPro for Macintosh commands accept the path in either MS-DOS
	backslash (\) format or Macintosh colon (:) format regardless of environment
	settings. However, commands and functions such as FxNewFolder() from Foxtools,
	which interact directly with the System, require a path in Macintosh shorthand
	notation. Please see SYS(2027) in FoxPro Help for more information.
	
	When to Use Quotation Marks
	---------------------------
	
	Surround the path and file name with quotation marks when any element of the
	volume, path, or file name contains any spaces or characters other than those
	suggested above. Surrounding a path with quotation marks may or may not be
	necessary, but if they are extraneous, they will be ignored.
	
	Path Examples
	-------------
	
	For the following examples, assume the following structure:
	
	  Barney             <-- A volume with same name as folder
	     +-Fred1.dbf
	     |
	     +-Folder
	        +-Fred2.dbf
	        |
	        +-SubFolder1
	        |  +-Fred3.dbf
	        |  |
	        |  +-Barney  <-- A folder with same name as volume
	        |     +-Fred5.dbf
	        |
	        +-SubFolder2
	           +-Fred4.dbf
	
	Fully qualified paths to open the file FRED5.DBF:
	
	  USE Barney:Folder:SubFolder1:Barney:Fred5
	  USE Barney:\Folder\SubFolder1\Barney\Fred5
	
	  * incorrect USE Barney\Folder\SubFolder1\Barney\Fred5
	
	From root of the default volume to FRED3.DBF:
	
	  USE \Folder\SubFolder1\Fred3
	  USE \:Folder:SubFolder1:Fred3
	
	NOTE: The critical difference between a relative path and a fully qualified path
	to FRED5.DBF is the colon after but not before the volume name.
	
	More Information on Relative Path Rules
	---------------------------------------
	
	Given that the default folder is SubFolder1 specified by this command:
	
	     Default=Barney:Folder:SubFolder1
	
	Two valid commands for opening the table in FoxPro are:
	
	     USE Fred3
	
	  This assumes MS-DOS shorthand that does not require a preceding path
	  separator for references relative to the current directory.
	
	     USE :Fred3
	
	  This Macintosh shorthand does require a preceding path separator for
	  references relative to the current directory.
	
	Valid references to the child folder of current folder to FRED5.DBF are:
	
	     USE :Barney:Fred5<BR/>
	     USE Barney\Fred5
	
	Valid references to the parent folder and FRED2.DBF are:
	
	     USE ..\Fred2<BR/>
	     USE ::Fred2
	
	Valid references to the grandparent folder and FRED1.DBF are:
	
	     USE ..\..\Fred1<BR/>
	     USE :::Fred1
	
	Valid references to the sibling folder and FRED4.DBF are:
	
	     USE ..\SubFolder2\Fred4<BR/>
	     USE ::SubFolder2:Fred4
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,2.6a,3.0b
	
	=============================================================================
	
