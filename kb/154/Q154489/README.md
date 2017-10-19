---
layout: page
title: "Q154489: Inside OLE (2ed) VC++ 4.x Update Files"
permalink: /kb/154/Q154489/
---

## Q154489: Inside OLE (2ed) VC++ 4.x Update Files

	Article: Q154489
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside OLE, Second Edition ISBN 1-55615-843-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	"Inside OLE, 2nd Edition," by Kraig Brockschmidt, was designed and tested for
	use with Microsoft Visual C++ 2.0. Microsoft Visual C++, version 4.x will not
	compile these samples unless specific changes are made.
	
	Kraig Brockschmidt has prepared a set of updated makefiles to allow most Inside
	OLE examples to compile using Visual C++ 4.x. Microsoft Press has posted this
	update as INOLE2_4.EXE.
	
	The following file is available for download from the Microsoft Download Center:
	
	  INOLE2_4.EXE
	  (http://download.microsoft.com/download/ole/Update/2.0/WIN98Me/EN-US/INOLE2_4.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	README.TXT CONTENTS
	
	---------------------------------------------------
	README.TXT for vc4proj.EXE
	
	Description:
	  .MAK and .MDP files for use with Microsoft Visual C++ 4.x
	  to compile the files provided with the Microsoft Press book
	  titled, "Inside OLE Second Edition," by Kraig Brockschmidt
	
	Readme created 8/5/96 by Microsoft Press
	---------------------------------------------------
	
	SUMMARY
	-------
	
	These files will allow you to pull nearly all of the Inside OLE
	samples into the VC++ 4.x IDE for compilation and debugging. They do
	not interfere or conflict with the command-line MAKEFILEs that are
	already part of the samples.
	
	UPDATE CONTENTS
	---------------
	
	INOLE2_4.exe- Contains the following files
	  README.TXT-  Summary and installation instructions (this file)
	  INSTALL.BAT- Batch file for default installation of vc4proj.exe
	  vc4proj.exe- Contains all .MAK and .MDP files for
	               "Inside OLE Second Edition"
	
	INSTALLATION INSTRUCTIONS
	-------------------------
	
	1. Download INOLE2_4.exe
	
	2. Double-click (or run) INOLE2_4.exe in a temporary or cache
	  directory to expand README.TXT (this file), install.bat, and
	  vc4proj.exe
	
	3. Double-click INSTALL.BAT to perform the default installation of the
	  "Inside OLE Second Edition" update files for VC++ 4.x
	
	  OR
	
	  Move vc4proj.exe to the INOLE directory (c:\INOLE by default) and
	  then run the following command from an MS-DOS command prompt:
	       vc4proj.exe -d
	
	4. Carefully read vc4proj.txt, which is placed in the INOLE directory
	  by vc4proj.exe. vc4proj.txt contains important information
	  regarding the use of the Inside OLE files with
	  Microsoft Visual C++ version 4.
	
	5. Delete README.TXT (this file), INSTALL.BAT, vc4proj.exe, and
	  INOLE2_4.exe (Note that INSTALL.BAT automatically attempts to
	  clean up and delete these files)
	
	Microsoft Press does not guarantee this update to work, nor does
	Microsoft Press support the proper functioning of these update files.
	If you encounter difficulties installing this update, please send
	e-mail to Microsoft Press at:
	
	  MSPINPUT@MICROSOFT.COM
	
	Please include a problem description, the steps you have tried to
	correct the problem, and any error messages that you encounter.
	
	Sincerely,
	Microsoft Press Technical Support
	
	CORRECTION
	----------
	
	Microsoft Press will include the updated makefiles in future printings editions
	of this book.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book.
	
	Additional query words: kbfile BookBug mspress ms press 4.0 4.1 4.2 Inside OLE 2ed (2ed)
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
