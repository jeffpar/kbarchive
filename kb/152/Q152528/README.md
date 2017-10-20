---
layout: page
title: "Q152528: Library Odbc32.dll Could Not Be Loaded to Perform the Query"
permalink: /kb/152/Q152528/
---

## Q152528: Library Odbc32.dll Could Not Be Loaded to Perform the Query

{% raw %}

	Article: Q152528
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use an Internet Database Connector (IDC) file with Internet
	Information Server (IIS) to connect to a database (any type of database), you
	may get the following error message:
	
	  The library Odbc32.dll could not be loaded to perform the query.
	
	CAUSE
	=====
	
	This error may be caused by the following:
	
	- The Odbc32.dll file is not installed or not in a location where IIS can find
	  it.
	
	- The Odbc32.dll file is damaged.
	
	- The Odbc32.dll file permissions do not allow the IUSR_SERVERNAME account
	  access to the file. This is common on domain controllers where the
	  administrator has restricted permissions on the Microsoft Windows NT system
	  directories to make the server more secure.
	
	RESOLUTION
	==========
	
	Verify that Odbc32.dll file is installed, and check the file and directory
	permissions on the file. The IUSR_SERVERNAME account must, at minimum, have READ
	access to this file.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
