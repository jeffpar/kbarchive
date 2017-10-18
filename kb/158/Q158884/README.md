---
layout: page
title: "Q158884: SET: Problem Running Programs in German Resource Kit"
permalink: kb/158/Q158884/
---

## Q158884: SET: Problem Running Programs in German Resource Kit

	Article: Q158884
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 31-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.51 
	-------------------------------------------------------------------------------
	
	NOTE: This articles applies to the German version of the Microsoft Windows NT Resource Kit only.
	
	SYMPTOMS
	========
	
	You might experience problems when running the CPS utilities Winntp.exe or
	Uplodprf after installing the Resource Kit from the original German Windows NT
	3.5x Resource Kit CD-ROM.
	
	For example, if you attempt to run Winntp.exe, you will receive the following
	error message:
	
	  Unable to find the .INF Source File.
	  Check the /i switch on the Setup command line.
	
	
	CAUSE
	=====
	
	The original United States Windows NT 3.51 Resource Kit CD-ROM was not fully ISO
	9660 compliant. While mastering the German CD-ROM, all special character and
	long filenames were automatically converted to ISO 9660. This process changed
	all ~ (tilde) characters to _ (underscore) characters. The CPS file ~profile.inf
	was changed to _profile.inf, which causes Winntp.exe to fail.
	
	Note that the Windows NT 4.0 Resource Kits do not have files containing the ~
	character, so this issue affects only the 3.5x version of the German Resource
	Kit.
	
	WORKAROUND
	==========
	
	After installing the Resource Kit utilities, rename _profile.inf to
	~profile.inf.
	
	RESOLUTION
	==========
	
	Microsoft Press Germany has created a corrected CD-ROM for this title.
	
	Q1) How can a customer identify the defective CD-ROM?
	
	  The defective CD-ROM has a two-color label: magenta and black.
	  The label for the corrected CD-ROM is solid Black.
	
	Q2) Is this specific to the German Windows NT Resource Kit CD-ROM?
	
	  Yes.
	
	Q3) What is the fax number and e-mail address for replacement requests?
	
	  Fax: ++49 89 31765270
	  E-mail should be sent using the following format:
	  To: RKINPUT@MICROSOFT.COM
	  Subject: German NT 3.51 ResKit Correction CD-ROM Request
	  Body Text: <include name and mailing address for replacement>
	
	
	Q4) Are there any other known problems with the defective CD-ROM?
	
	  \SOURCE\POSIX\GREP is the only other directory that contains tilde filenames
	  that might also be similarly affected.
	
	Additional query words: bookbug mspress ms_press NT3.50 NT3.51 reskit
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : :3.51
	
	=============================================================================
	
