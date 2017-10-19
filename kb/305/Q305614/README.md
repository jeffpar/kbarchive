---
layout: page
title: "Q305614: SMSINST: Unexpected Results with &quot;Install File&quot; Action"
permalink: /kb/305/Q305614/
---

## Q305614: SMSINST: Unexpected Results with &quot;Install File&quot; Action

	Article: Q305614
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Install Files action in Systems Management Server Installer with
	Installer Step-up Utility version 2.0.147.00 and you specify a file name
	extension of less than three characters for the "Destination Pathname" value,
	unexpected results may occur
	
	CAUSE
	=====
	
	SMS Installer incorrectly interprets destination path names with less than three
	characters in the extension as folder names instead of file names. For example,
	if you attempt to create an SMS Installer script to install the Testfile.ab and
	Testfile.123 files in the C:\Test folder, and you either specify the file names
	for the destination path or you specify a wildcard on the source path, the
	resulting installed folder is:
	
	  C:\Test\Testfile.123 (an actual file)
	  C:\Test\Testfile.ab (a folder)
	
	Furthermore, specifying that the file with the two-character extension be
	installed first results in the Install.log file being placed in the incorrectly
	created folder:
	
	  C:\Test\Testfile.ab\Install.log
	
	The Install.log file contains the following output:
	
	  *** Installation Started 8/10/2001 3:56:25 ***
	  Title:
	  Source: E:\q305614\test.EXE
	  Made Dir: C:\test
	  Made Dir: C:\test\testfile.a
	  File Copy: C:\test\testfile.a\
	  File Copy: C:\test\testfile.123
	
	In this log output, note the backslash character (\) at the end of the
	"C:\test\testfile.a\" line, indicating that it was created and copied as a
	folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.147.00.
	
	MORE INFORMATION
	================
	
	This problem has been corrected in version 2.0.148.00 of Systems Management
	Server Installer with the Installer Step-up utility, available at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/installer.asp
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
