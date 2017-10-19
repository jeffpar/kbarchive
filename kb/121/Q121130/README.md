---
layout: page
title: "Q121130: PC Win: MMFClean GP Fault in Large POL w/ Gateway Addresses"
permalink: /kb/121/Q121130/
---

## Q121130: PC Win: MMFClean GP Fault in Large POL w/ Gateway Addresses

	Article: Q121130
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.20
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	3.20
	WINDOWS
	kbtool kbbug3.20 kbfile
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MMFCLEAN utility may cause a general protection fault (GP fault) in the
	Microsoft Windows operating system when you access a postoffice, if a large
	number of gateway addresses have been added to the postoffice address list.
	
	CAUSE
	=====
	
	Postoffice address lists that include a large number of gateway addresses may
	create a problem for MMFCLEAN during the initialization process.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. Create two subdirectories, GLB and NME, on a local hard disk drive.
	
	2. Place the three access files (ACCESS.GLB, ACCESS2.GLB, and ACCESS3.GLB) from
	  the postoffice into the local GLB subdirectory, and place a zero- byte
	  ADMIN.NME file in the local NME subdirectory.
	
	3. Run ACCTONME.EXE from the root of the local hard disk drive. A new ADMIN.NME
	  file will be created.
	
	4. Ensure that no one is accessing the postoffice with the Mail Administrator,
	  Import, or Moveuser program.
	
	5. Make a backup copy of the ADMINSHD.NME file.
	
	6. Copy the newly created ADMIN.NME file to the ADMINSHD.NME file located on the
	  active postoffice.
	
	7. Run MMFCLEAN and then restore the ADMINSHD.NME file from backup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of MMFCLEAN. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information about the ACCTONME.EXE utility and how to obtain it, please
	see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q99419
	  TITLE     : PC DB: Database Maintenance Utilities (Complete)
	
	MMFCLEAN is available as MMFUTIL.EXE. You can find MMFUTIL.EXE, a self-
	extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile MMFUTIL.EXE, and click GO! Open the article, and click the
	  button to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get MMFUTIL.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks). Double-click the MS
	  Software Library icon. Find the appropriate product area. Locate and Download
	  MMFUTIL.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: <LINK TYPE="ARTICLE" VALUE="Q119591">Q119591</LINK>
	
	  TITLE     : How to Obtain Microsoft Support Files from Online
	
	  Services
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : 3.20
	
	=============================================================================
	
