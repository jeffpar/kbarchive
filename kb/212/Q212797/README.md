---
layout: page
title: "Q212797: SMSINST: Get Temporary Filename Script Does Not Return Full Path"
permalink: /kb/212/Q212797/
---

## Q212797: SMSINST: Get Temporary Filename Script Does Not Return Full Path

	Article: Q212797
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Get Temporary Filename script item, the variable that is
	returned does not contain the full path, it contains only the file name.
	
	WORKAROUND
	==========
	
	To work around this issue, obtain the latest version of Microsoft Systems
	Management Server Installer from the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/downloads/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	MORE INFORMATION
	================
	
	The Get Temporary Filename script item is used to obtain a unique temporary file
	name used during installation. These file names are often used to provide names
	for support .dll files that are not needed after the installation is complete.
	
	A script example and its results:
	
	  item: Get Temporary Filename
	    Variable=TFILE
	  end
	  item: Display Message
	    Title=tfile
	    Text=%tfile%
	    Flags=00000100
	  end
	
	The above script may produce a file name, such as "GLF18A.TMP," rather than the
	expected full path and file name.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2,2.0
	Issue type        : kbbug
	
	=============================================================================
	
