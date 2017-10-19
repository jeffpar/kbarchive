---
layout: page
title: "Q184525: HOWTO: Use API Functions to Set and Check File Attributes"
permalink: /kb/184/Q184525/
---

## Q184525: HOWTO: Use API Functions to Set and Check File Attributes

	Article: Q184525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article has program code that creates a file named Test.txt in the home
	directory of Visual FoxPro, sets each of several file attributes using the
	SetFileAttributes() API, then verifies that the attributes were correctly set
	using the GetFileAttributes() API.
	
	MORE INFORMATION
	================
	
	Create a program called Setatrib, place the sample code given below in the file,
	and run the program.
	
	Sample Code
	-----------
	
	     *
	     * Usage: DO Setatrib
	     *
	     * constants from from Winnt.h
	     #DEFINE FILE_ATTRIBUTE_READONLY   1
	     #DEFINE FILE_ATTRIBUTE_HIDDEN           2
	     #DEFINE FILE_ATTRIBUTE_SYSTEM           4
	     #DEFINE FILE_ATTRIBUTE_ARCHIVE          32
	     #DEFINE FILE_ATTRIBUTE_NORMAL           128
	     #DEFINE FILE_ATTRIBUTE_TEMPORARY   256
	
	     #DEFINE CR chr(13)
	
	     DECLARE INTEGER SetFileAttributes in Win32API STRING FileName, INTEGER
	     Attributes
	     DECLARE INTEGER GetFileAttributes in Win32API STRING FileName
	
	     m.filename = HOME() + '\TEST.TXT'
	
	     * Create a zero-length one if it doesn't exist.
	     if not file(m.filename)
	        m.handle = fcreate(m.filename)
	        =fclose(m.handle)
	     endif
	
	     * Set and test several attributes.
	     m.retval = SetFileAttributes(m.filename, FILE_ATTRIBUTE_READONLY)
	     =ShowFAttr(m.filename)
	
	     m.retval = SetFileAttributes(m.filename, FILE_ATTRIBUTE_HIDDEN)
	     =ShowFAttr(m.filename)
	
	     m.retval = SetFileAttributes(m.filename, FILE_ATTRIBUTE_SYSTEM)
	     =ShowFAttr(m.filename)
	
	     m.retval = SetFileAttributes(m.filename, FILE_ATTRIBUTE_ARCHIVE)
	     =ShowFAttr(m.filename)
	
	     m.retval = SetFileAttributes(m.filename, FILE_ATTRIBUTE_NORMAL)
	     =ShowFAttr(m.filename)
	
	     m.retval = SetFileAttributes(m.filename, FILE_ATTRIBUTE_TEMPORARY)
	     =ShowFAttr(m.filename)
	
	     * Attributes can also be combined by ORing them together.
	     m.retval = SetFileAttributes(m.filename, bitor(FILE_ATTRIBUTE_HIDDEN, ;
	     FILE_ATTRIBUTE_SYSTEM))
	     =ShowFAttr(m.filename)
	
	     * Function ShowFAttr
	     * Accepts a fully-qualified filename.
	     * Displays a message box showing each attribute of that file.
	     *
	     * Usage = ShowFattr("c:\mydir\myfile.txt")
	     *
	
	     function ShowFAttr
	
	     parameters m.filename
	
	     m.attribute = GetFileAttributes(m.filename)
	
	     * Attribute string for use in a message box.
	     m.attr = ''
	
	     * These aren't necessarily mutually exclusive, so use Ifs.
	     if bitand(m.attribute, FILE_ATTRIBUTE_READONLY) = ;
	     FILE_ATTRIBUTE_READONLY
	        m.attr = m.attr + 'Read only' + CR
	     endif
	
	     if bitand(m.attribute, FILE_ATTRIBUTE_HIDDEN) = FILE_ATTRIBUTE_HIDDEN
	        m.attr = m.attr + 'Hidden' + CR
	     endif
	
	     if bitand(m.attribute, FILE_ATTRIBUTE_SYSTEM) = FILE_ATTRIBUTE_SYSTEM
	        m.attr = m.attr + 'System' + CR
	     endif
	
	     if bitand(m.attribute, FILE_ATTRIBUTE_ARCHIVE) = FILE_ATTRIBUTE_ARCHIVE
	        m.attr = m.attr + 'Archive' + CR
	     endif
	
	     if bitand(m.attribute, FILE_ATTRIBUTE_NORMAL) = FILE_ATTRIBUTE_NORMAL
	        m.attr = m.attr + 'Normal' + CR
	     endif
	
	     if bitand(m.attribute, FILE_ATTRIBUTE_TEMPORARY) = ;
	     FILE_ATTRIBUTE_TEMPORARY
	        m.attr = m.attr + 'Temporary' + CR
	     endif
	
	     =messagebox("File " + m.filename + ' has the following attributes: ' + ;
	     CR + m.attr, 0 + 64 + 0, "GetFileAttributes()")
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
