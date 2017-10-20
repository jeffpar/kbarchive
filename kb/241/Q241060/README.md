---
layout: page
title: "Q241060: Err Msg: The Certificate Server Did Not Start: Unable To..."
permalink: /kb/241/Q241060/
---

## Q241060: Err Msg: The Certificate Server Did Not Start: Unable To...

{% raw %}

	Article: Q241060
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install NTOP version of Certificate Server on incompatible ODBC
	versions, the Certificate Server Service does not start and the following error
	appears in the Application Log of the Event Viewer:
	
	  The Certificate Server did not start: unable to initialize the database
	  connection for <Your CA Name>. The error code is oxffffffff.
	
	CAUSE
	=====
	
	This issue can occur if you install Internet Explorer 5 or MDAC 2.1 on your
	computer before you install Certificate Server.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Open the ODBC Data Sources Administrator in Control Panel.
	
	2. If you see a User DSN named CertSrv that is using the Access database, click
	  Remove.
	
	3. Recreate the User DSN as a System DSN named CertSrv:
	  a. On the System DSN tab, click Add.
	
	  b. Click "Microsoft Access Driver (*.mdb)," and then click Finish.
	
	  c. On the ODBC Microsoft Access Setup Page, type "CertSrv" (without the
	     quotation marks) for the Data Source Name.
	
	  d. Under Database, click Select.
	
	  e. Point to the %SystemRoot%\System32\CertLog\certsrv.mdb file, and then
	     click OK.
	
	  f. On the ODBC Microsoft Access Setup Page, click Advanced, and then
	     configure the Default Authorization Login Name box to use "Admin" and no
	     password.
	
	4. Use the Services tool in Control Panel to restart the Certificate Server
	  Service.
	
	MORE INFORMATION
	================
	
	There is an incompatibility between the NTOP installer and the ADO (Jet
	database) of MDAC 2.1 which shipped in Internet Explorer 5. This incompatibility
	causes Certificate Server to create a UserDSN for certsrv instead of the
	necessary SystemDSN.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
