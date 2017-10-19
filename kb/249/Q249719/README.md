---
layout: page
title: "Q249719: Error Message: 8447: Internet Server Error"
permalink: /kb/249/Q249719/
---

## Q249719: Error Message: 8447: Internet Server Error

	Article: Q249719
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run ASP pages using a Microsoft Remote Data Service (RDS) connection to
	a database, the following error message may appear in the browser:
	
	  8447: Internet Server Error
	
	The same error message appears if you run the Adctest.asp sample file.
	
	CAUSE
	=====
	
	This error message may be caused by one of the following:
	
	- The virtual directory for RDS in the Default Web Site has been removed.
	
	-OR-
	
	- RDS was not installed properly.
	
	WORKAROUND
	==========
	
	If the physical files for RDS still exist and only the virtual directory for RDS
	was accidentally removed, use the following steps to restore the RDS virtual
	directory:
	
	1. Re-create the virtual directory named MSADC in the Default Web Site using the
	  wizard. Map this virtual directory to <drive letter>:\Program
	  Files\Common Files\System\Msadc. Enable Read and Execute (including Script)
	  permissions.
	
	2. Right-click the virtual directory that you just created, and the select
	  Properties. On the Virtual Directory tab, select Application Settings, and
	  then click the Remove to delete any name in the Name box and point the
	  application starting point to the Default Web Site. The Create button will
	  now be available.
	
	3. Stop and start the Default Web Site.
	
	4. In Windows NT Explorer, check the physical file and folder permissions for
	  Program Files\Common Files\System\Msadc. The minimum permissions should be
	  Everyone: READ.
	
	5. Test ASP with RDS. You can use the Adctest.asp sample file included with the
	  IIS in the <drive letter>:\Program Files\Common
	  Files\System\Msadc\Samples directory.
	
	If RDS is not installed correctly or the physical files in the Program
	Files\Common Files\System\Msadc directory are corrupted, RDS can be installed
	independently. For information on RDS, please see the following Web page:
	
	  http://www.microsoft.com/data/ado/rds/
	
	The version included with the Windows NT Option Pack (NTOP) is Microsoft Data
	Access Components (MDAC) version 1.5 with RDS version 1.5. Because RDS is part
	of MDAC, it is recommended that you upgrade MDAC if RDS needs to be
	reinstalled.
	
	For the latest information on MDAC, please see the following Web site:
	
	  http://www.microsoft.com/data
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q184606 HOWTO: Use RDS From an IIS 4.0 Virtual Server
	
	Also, see the Readme.txt file in the Program Files\Common Files\System\Msadc
	directory on the IIS computer.
	
	Additional query words: IIS4, RDS, ADCTEST, MDAC
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
