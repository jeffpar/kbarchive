---
layout: page
title: "Q258445: English.dat File Listed Instead of English.cas in Casread.txt"
permalink: kb/258/Q258445/
---

## Q258445: English.dat File Listed Instead of English.cas in Casread.txt

	Article: Q258445
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbdocerr
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Casread.txt file included with the second CD-ROM of Windows NT Server
	Enterprise Edition 4.0 contains a documentation error. The Casread.txt file in
	the MSCS\Support folder contains a list of the files that are required to run
	the Cluster Administrator Sanity (CAS) test. The English.dat is incorrectly
	listed, instead it should be listed as the English.cas file.
	
	RESOLUTION
	==========
	
	To work around this problem, note that all of the necessary files are on the
	second Windows NT Server Enterprise Edition 4.0 CD-ROM in the following
	folders:
	
	- Castest.bat - MSCS\Support
	
	- Cluadms.pcd - MSCS\Support
	
	- English.cas - MSCS\Support
	
	- Mtrun.exe - MSCS\Support\i386 or MSCS\Support\alpha (depends on the platform
	  you want to test)
	
	- Mstest40.dll - MSCS\Support\i386 or MSCS\Support\alpha (depends on the
	  platform you want to test)
	
	- Msvcrt40.dll - MSCS\Support\i386 or MSCS\Support\alpha (depends on the
	  platform you want to test)
	
	- Ntlog.dll - MSCS\Support\i386 or MSCS\Support\alpha (depends on the platform
	  you want to test)
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Although Microsoft provides no support for the CAS test, to use it you must copy
	all of the appropriate files to a folder (C:\TEST) on drive C of a working
	cluster, and then run Castest.bat from a command prompt. When you do so, you
	must specify the cluster name, as in the following example:
	
	c:\test\castest.bat <cluster name>
	
	The utility then loops through a series of tests for 5, 10, or 15 minutes. For
	the CAS tool to work, you must run the utility from the first node installed in
	the cluster and it most own all of the clustered resources when you start the
	test, because the tool requires that you start on a node that has control of all
	of the Resources and Groups. Note that if you do not start the tool this way,
	you receive error messages. After the test finishes, search the new log file for
	the word "Failed" to see if you received any errors.
	
	IMPORTANT: Note that the CAS test is not meant to test a cluster that is
	currently in production. If you use it to test fail-over (manual tests are
	recommended to test fail-over), the CAS test should only be run on a newly
	installed cluster server before any resources or programs are added to the
	cluster.
	
	NOTE: This tool is not meant to be used with Windows 2000 Server Clusters. To
	test Windows 2000 Server Clusters in a similar scenario, visit the following
	Microsoft Web site at:
	
	  http://www.microsoft.com/windows2000/techinfo/reskit/tools/existing/cvu-o.asp
	
	Additional query words: mscs 4.00
	
	======================================================================
	Keywords          : kbtool kbdocerr 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
