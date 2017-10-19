---
layout: page
title: "Q259714: NT 4.0 Resource Kit, Supplement Four Setup Hangs"
permalink: /kb/259/Q259714/
---

## Q259714: NT 4.0 Resource Kit, Supplement Four Setup Hangs

	Article: Q259714
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 12-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Four ISBN 0-7356-0837-7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the Windows NT 4.0 Resource Kit, Supplement 4 on servers that
	have large hard drives or clustered drives, the setup program may appear to hang
	as it searches the hard drive for upgrade requirements.
	
	CAUSE
	=====
	
	During the Resource Kit installation, Setup will check your entire hard drive
	for upgrade requirements. This process can be tremendously slow if you have a
	huge hard drive or clustered drives. For example, a server with 100 GB will take
	over 24 hours before the installation will complete.
	
	WORKAROUND
	==========
	
	The following RKSup4.stf file has been modified to correct this problem and is
	available at the following FTP site:
	
	  ftp://ftp.microsoft.com/reskit/nt4/x86/
	
	To use the modified RKSup4.stf file, please follow these steps:
	
	1. Copy the entire contents of the "Windows NT 4.0 Resource Kit, Supplement 4"
	  CD to %SYSTEMROOT%\rksup4.
	
	2. Download and copy the RKSup4.stf file to %SYSTEMROOT%\rksup4\i386.
	
	3. Run setup from %SYSTEMROOT%\rksup4.
	
	Please Note: This workaround only works for the i386 platform. There is no plan
	to release a fix for Alpha.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Other minor issues still exist:
	
	1. With the new modified *.stf file, Setup does not create the links to Remote
	  Admin Scripts Help (rscripts.chm) and Internet Explorer 5 Resource Kit
	  Book(IERK5.chm).
	
	2. When you run Setup in a quiet mode using Sloader /q command, you cannot
	  install to any other location other than Drive C:\NTReskit
	
	Additional query words: Resource Kit RKBOOK ResKit NT
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
