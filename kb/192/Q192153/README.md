---
layout: page
title: "Q192153: DOC: CompactDatabase IntelliSense Different than Documentation"
permalink: /kb/192/Q192153/
---

## Q192153: DOC: CompactDatabase IntelliSense Different than Documentation

	Article: Q192153
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The IntelliSense parameters for the DAO 3.5 CompactDatabase method are different
	than the parameters specified in the documentation that appears in the Help
	files and Visual Basic Books Online.
	
	MORE INFORMATION
	================
	
	The correct IntelliSense parameters that actually show up are:
	
	     CompactDatabase (SrcName, DstName, [dstLocale], [Options], [SrcLocale])
	
	There is no mention here that there is a parameter for a password. Visual Basic
	Help and Visual Basic Books Online specify that the CompactDatabase method is as
	follows:
	
	     CompactDatabase (olddb, newdb, locale, options, password)
	
	The documentation talks about the password as a parameter, but it does not talk
	about the SrcLocale, which is a parameter in the IntelliSense display.
	
	The actual functionality when using CompactDatabase Method accepts a database
	password in the same position as the SrcLocale parameter displayed by
	IntelliSense. See the REFERENCES section of this article for more information on
	the syntax used in code to pass a password through to a database that is
	protected. It is also important to note that the Jet35upd.exe is available as an
	upgrade designed to fix problems with the CompactDatabase method in Jet 3.5.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170961 : HOWTO: Change an Access Database Password
	
	  Q172733 : ACC97: Updated Version of Microsoft Jet 3.5 Available on MSL
	
	
	Additional query words: kbdocerror kbDAO350 kbJET kbVBp600 kbVBp500 kbDAO kbdse kbDSupport kbVBp kbdocfix
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
