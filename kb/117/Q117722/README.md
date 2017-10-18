---
layout: page
title: "Q117722: FoxPro for Macintosh Language Tips and Tricks"
permalink: kb/117/Q117722/
---

## Q117722: FoxPro for Macintosh Language Tips and Tricks

	Article: Q117722
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below gives language tips and tricks for FoxPro for Macintosh.
	This information is also found in FoxPro online Help in the "Language Tips"
	topic under the "Tips and Tricks" topic.
	
	MORE INFORMATION
	================
	
	Moving a Screen Object
	----------------------
	
	Use _CUROBJ to move to a particular screen object. This object can even be
	itself. You might want to do this in order to change the value of an @...GET
	object while in that object's VALID clause.
	
	The following example changes the value of x without leaving the @...GET. When
	you set the value of _CUROBJ, try to avoid hard-coding an actual number there
	because reordering fields in the Screen Builder can cause unexpected results.
	
	     x = some_value
	     _CUROBJ = _CUROBJ
	     RETURN .T.
	
	To avoid hard-coding a value, use an expression like:
	
	     _CUROBJ = OBJNUM(myvar)
	
	Drives and Folders
	------------------
	
	Several FoxPro functions can be used to obtain information about drives and
	folders. Compare the returned values after issuing the command SET DEFAULT TO
	\FOXPRO.
	
	        ? SYS(5)
	     MacHD:
	        ? SET('DEFAULT')
	     MacHD:
	
	        ? CURDIR()
	     \FOXPRO\ 
	        ? SYS(2003)
	     \FOXPRO
	        ? FULLPATH(SET('DEFA'))
	     MacHD:\ 
	
	You can also use the ADIR() function to see if a specific folder exists.
	
	Set Volume to Shorten Paths
	---------------------------
	
	You can use SET VOLUME to ease the task of typing long Macintosh folder and path
	names.
	
	For example, assume your Macintosh hard disk is named MacHD, and the folders in
	which your files are located are MacHD:PICT files and MacHD:Microsoft
	FoxPro:Project One. If you issue the following commands
	
	     SET VOLUME C TO "MacHD:Microsoft FoxPro:Project One"
	     SET VOLUME D TO "MacHD:PICT files"
	
	whenever you use a command that specifies a file in these folders, you can use
	the single-letter drive or volume designation. For example
	
	     COPY FILE D:GraphicImage.PIC TO C:
	
	instead of
	
	     COPY FILE MacHD:PICT files:GraphicImage.PIC ;
	        TO MacHD:Microsoft FoxPro: Project One
	
	The volume mapping can also be specified in your CONFIG.FPM configuration file.
	For example, you can place the following lines in your CONFIG.FPM configuration
	file:
	
	     VOLUME C = "MacHD:\Microsoft\FoxPro"
	     VOLUME D = "MacHD:\Microsoft\FoxPro\Project One"
	     VOLUME E = "MacHD:\PICT files"
	     DEFAULT = C:
	
	Except for the colon following the Macintosh hard disk name, colons and
	backslashes can both be used as delimiters in FoxPro for Macintosh. Note that
	FoxPro for Macintosh does not recognize folder names containing embedded back
	slashes (\).
	
	For more information, see SET VOLUME.
	
	USE Command
	-----------
	
	You can issue the command USE IN 0 to open a table in the first available work
	area. This command does not select that work area in which it opened the table.
	You must use the SELECT command to do this. You can issue the command USE IN
	<alias> to close a table without selecting its work area.
	
	The SHARE clause for the USE command allows you to open a table for shared use
	without using the SET EXCLUSIVE command. For more information about the USE
	command, refer to the USE topic.
	
	Cross-Tab Output to Spreadsheets
	--------------------------------
	
	Run the GENXTAB program to create cross-tabulated output that you can COPY TO or
	EXPORT to a spreadsheet.
	
	Custom Messages
	---------------
	
	You can display custom messages in the FoxPro status bar. To do this, SET TALK
	OFF then use the SET MESSAGE TO <expC> command to specify a message. (You
	can pass a null string to display nothing.) SET MESSAGE TO without a parameter
	will restore the status bar to its normal functionality.
	
	Preprocessor Directives
	-----------------------
	
	Do not use _WINDOWS, _DOS, _MAC, or _UNIX with preprocessor directives (that is,
	#IF ... #ENDIF). These are designed to be runtime variables. For example the
	following will not work:
	
	     #define _DOS .t.
	     #define _MAC .f.
	     * For code compile in MS-DOS, the following would not work:
	     DO CASE
	       CASE _DOS
	         ? "Running in MS-DOS"
	       CASE _MAC
	         ? "Running on Macintosh"
	     ENDCASE
	
	This code would not work because _DOS would be changed to .T. and _MAC would be
	changed to .F. so that the code could never work properly again. Instead use the
	following:
	
	     #if "Win" $ VERS()
	     #define WINDOWS_CODE .t.
	     #elif "Mac" $ VERS()
	     #define MAC_CODE .t.
	     #elif "Unix" $ VERS()
	     #define UNIX_CODE .t.
	     #else
	     #define DOS_CODE .t.
	     #endif
	     #if WINDOWS_CODE
	     ? "Compiled under WINDOWS"
	     #elif DOS_CODE
	     ? "Compiled under DOS"
	     #endif
	
	Prevent Preprocessor Substitution in Text Strings
	-------------------------------------------------
	
	#DEFINE prevents preprocessor substitution in text strings. Note that square
	brackets [ ] can be used do delimit text strings. This means that no
	substitution will be made in the following:
	
	     #DEFINE nosub 1
	     DECLARE an_array(3)
	     *** This will cause a 'variable NOSUB not found' error
	     *** because no substitution was made
	     ? afunc[an_array[nosub]]
	     FUNCTION afunc
	     PARAMETER x
	     RETURN x
	
	Development Tools
	-----------------
	
	The FOXTOOLS.MLB file, which is located in your Systems:Extensions folder,
	contains a variety of functions that you can use to enhance your applications.
	Many of these functions provide access to API routines and Macintosh functions.
	You can view these using the DISPLAY STATUS command (after you issue SET LIBRARY
	TO foxtools).
	
	Additional query words: vFoxMac FoxMac on-line foxhelp.dbf foxhelp.hlp akz
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
