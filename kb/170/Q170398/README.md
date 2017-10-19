---
layout: page
title: "Q170398: XADM: Error Applying Service Pack"
permalink: /kb/170/Q170398/
---

## Q170398: XADM: Error Applying Service Pack

	Article: Q170398
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Updat.exe program to apply a service pack, the following error
	message occurs:
	
	  Could not open the file named C:\setup\bin\Address.dll
	
	CAUSE
	=====
	
	The self-extracting executable for the service pack (downloaded from the
	Microsoft FTP site), has been expanded without using the -d switch.
	
	WORKAROUND
	==========
	
	If the -d option is not used when extracting the service pack files, all the
	service pack files are extracted into the current working directory. Most
	likely, the extraction process will display messages asking the user whether
	certain files need to be overwritten.
	
	If the -d option is used during the service pack expansion, it will automatically
	create the required directories and copy files into these directories, and no
	files will need to be overwritten. Therefore, to work around the problem, you
	need to use the -d option during the service pack expansion.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
