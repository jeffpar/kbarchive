---
layout: page
title: "Q164535: Random Errors w/ IDC or ASP Queries to Access Database"
permalink: /kb/164/Q164535/
---

## Q164535: Random Errors w/ IDC or ASP Queries to Access Database

	Article: Q164535
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may receive the following random errors when performing Internet Database
	Connector (IDC) or Active Server Pages (ASP) queries to an Access database:
	
	- CreateObject errors when using ASP sample pages
	
	- Errors in Inetinfo.exe at random memory addresses
	
	- After executing the query, the browser appears to stop responding
	
	CAUSE
	=====
	
	This can occur when the Winnt folder does not have write permissions set for the
	IUSR_servername account.
	
	WORKAROUND
	==========
	
	To work around this problem, create System Environment variables for both TMP
	and TEMP with the value %SystemDrive%\TEMP, as shown below:
	
	1. In Control Panel System, click the Environment tab.
	
	2. Select a variable in the System Variables box.
	
	3. In the Variable box, select the current variable name and type TMP (or TEMP).
	
	4. Click Set.
	
	5. In the Value box, type:
	
	  " %SystemDrive%\TEMP " (without the quotation marks)
	
	6. Click Set.
	
	7. Close Control Panel and restart the computer.
	
	NOTE: If you are not allowing anonymous authentication, and instead using Basic
	or NT Challenge response, you must give the write permission for the Winnt
	folder to individual users or groups.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0
	
	=============================================================================
	
