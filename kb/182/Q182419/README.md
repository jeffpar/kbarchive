---
layout: page
title: "Q182419: SMS: SMSEXEC Dr. Watson When Decompressing a Package File"
permalink: /kb/182/Q182419/
---

## Q182419: SMS: SMSEXEC Dr. Watson When Decompressing a Package File

	Article: Q182419
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SMSEXEC, a Dr. Watson error may occur when decompressing a Package
	File if the path length of the package's directory structure is longer than 200
	characters.
	
	If the package's directory structure exceeds 200 characters, the Systems
	Management Server Despooler Service generates the following error when it
	attempts to decompress the package:
	
	  SMSEXEC.EXE - Application Error
	  The instruction at "0x1f359f78" referenced memory at "0x2e6e6f69". The memory
	  could not be "written".
	
	Note that the memory values may vary.
	
	The last entry in the Despool.log file will be:
	
	  Decompressing package <file name> to C:\_S M0000.TMP
	
	CAUSE
	=====
	
	In a package that contains subdirectories and files, the path and filename
	combination can not exceed 200 characters. For example, if a sharing package is
	defined with the following directory structure
	
	  \<RootDir>\Directory 1\Directory 2\Filename.txt
	
	where <RootDir> is the root of the package source directory, then the
	length of the path "\Directory 1\Directory 2\Filename.txt" cannot exceed 200
	characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. Service Pack for
	Systems Management Server version 1.2. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
