---
layout: page
title: "Q251245: &quot;Invalid Name&quot; Error Message When You Log On to MMS with Compass"
permalink: /kb/251/Q251245/
---

## Q251245: &quot;Invalid Name&quot; Error Message When You Log On to MMS with Compass

	Article: Q251245
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to the Microsoft Metadirectory Services (MMS) server through the
	Compass client, you may receive the following error message:
	
	  Invalid Name
	
	CAUSE
	=====
	
	This behavior occurs if the user name is not found in the MMS database. The name
	may not be found in the database for any of the following reasons:
	
	- The logon name is misspelled.
	
	- The user does not exist in the database.
	
	- The hashing function in the database is not working correctly.
	
	- The database is damaged.
	
	When you log on to MMS, you are identified in one of the following ways:
	
	- Simple Mail Transfer Protocol (SMTP) e-mail address (for example,
	  <Username>@microsoft.com)
	
	- Distinguished name (for example,
	  cn=<Username>,ou=Administration,dc=Microsoft International,dc=COM).
	
	NOTE: Case is not significant, regardless of which method is used.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the following troubleshooting steps:
	
	1. Determine if a specific user can log on to the MMS server using their SMTP
	  e-mail address. If the problem is isolated to only one user, refer to the
	  "Logon Name (SMTP E-Mail Address) Is Invalid" section of this article. If the
	  problem is not isolated to just one user, continue to step 2.
	
	2. Determine if a specific user can log on to the MMS server using their
	  distinguished name. If not, refer to the "User Does Not Exist in the
	  Database" section of this article.
	
	3. Determine if any users can log on anonymously to the MMS server. If not,
	  refer to the "Problems with the X500.db Database File" section of this
	  article. (For more information about anonymous logon, refer to the "More
	  Information" section of this article.)
	
	4. Determine if any users can log on (authenticated) to the MMS server (using
	  either their distinguished name or SMTP e-mail address). If not, refer to the
	  "Hashing Function in the Database Is Not Working Properly" section of this
	  article. (For more information about authenticated logon, refer to the "More
	  Information" section of this article.)
	
	Logon Name (SMTP E-Mail Address) Is Invalid
	-------------------------------------------
	
	To verify that the logon name is correct, use the following steps:
	
	1. Log on to Compass anonymously or as another user (this works unless the
	  default Access Controls have been changed).
	
	2. In the Action panel, click Search.
	
	3. In the Search box, type the user's name, and then press ENTER.
	
	4. The default search method is for Match Attribute is Any, or any hashed
	  attribute. At least one match should be displayed in the panel beneath the
	  Search dialog box. Click the correct match and then double-click the user's
	  name to display the user properties.
	
	5. On the General tab, click to select the Email check box. The name must be
	  identical to the name you are typing to log on to Compass.
	
	  NOTE: To confirm that you use the exact string, it is recommended that you
	  copy the value from the Email box and paste it into the logon dialog box.
	
	User Does Not Exist in the Database
	-----------------------------------
	
	To verify that the user exists in the database, use the following steps:
	
	1. Attempt to log on anonymously through Compass.
	
	2. Click Known Universe.
	
	3. In the left-hand panel, click Search.
	
	4. Type "administrator" (without the quotation marks), and then press ENTER.
	
	5. If no Administrator entries are displayed below the Search dialog box, refer
	  to the "Problems with the X500.db Database File" section of this article.
	
	6. If you find the Administrator entry, double-click the icon to display the
	  entry's properties.
	
	If you are unable to search anonymously,there may be a security restriction in
	place. If you are unable to log on as an administrator to check security access
	controls, contact Microsoft Product Support Services.
	
	
	Problems with the X500.db Database File
	---------------------------------------
	
	If the database is deleted or renamed, the Zoomit Server service creates a new
	database when the service starts. To verify the size of the X500.db file, use
	the following steps:
	
	1. Go to the Zoomserv\Data\Db folder.
	
	2. Locate the x500.db file.
	
	3. Right-click the file, and then click Properties.
	
	4. On the General tab, note the size of the file.
	
	  NOTE: File sizes vary. A zero-byte file indicates a severe problem (there is
	  no data in the Asn.1 database and the entire database must be recovered from
	  backup).
	
	5. If the size of the file is normal, refer to the "Hashing Function in the
	  Database Is Not Working Properly" section of this article.
	
	Hashing Function in the Database Is Not Working Properly
	--------------------------------------------------------
	
	Make sure you have ruled out all preceding scenarios. In this situation, you are
	unable to log on to the database as any user, although the X500.db file size is
	greater than 0 bytes. If you confirm this, use either of the following methods
	to attempt to resolve the issue:
	
	- Run Viahashtool.exe with the server online and regenerate only the hash
	  tables (for additional information, refer to the "More Information" section
	  of this article).
	
	- Run Viacompact.exe with the server offline and regenerate the entire
	  database. (For additional information about the Viacompact tool, refer to the
	  "More Information" section of this article.)
	
	  NOTE: This is the most radical and costly option because the process can take
	  many hours. In addition, the server must remain offline for the entire
	  process and the process cannot be stopped.
	
	If you are still unable to resolve the invalid name issue, contact Microsoft
	Product Support Services.
	
	MORE INFORMATION
	================
	
	How to Perform Anonymous Logon in MMS
	-------------------------------------
	
	1. Click Start, point to Programs, and then click Zoomit Directory Services V2.
	
	2. Click Zoomit Compass.
	
	3. Click Advanced.
	
	4. Click Anonymous in the "Type of Login" area.
	
	5. If you receive a Servers dialog box, click the appropriate server, and then
	  click OK.
	
	How to Perform Authenticated Logon in MMS
	-----------------------------------------
	
	1. Click Start, point to Programs, and then click Zoomit Directory Services V2.
	
	2. Click Zoomit Compass.
	
	3. Click Advanced.
	
	4. Click Based on Identity in the "Type of Login" area.
	
	5. In the Name box, type either the user's SMTP e-mail address or the user's MMS
	  distinguished name.
	
	6. In the Password box, type the user's password.
	
	7. If you receive a Servers dialog box, click the appropriate server, and then
	  click OK.
	
	How to Regenerate Hash Tables
	-----------------------------
	
	To regenerate hash tables, use the following steps:
	
	1. Click Start, click Run, type "cmd" (without the quotation marks), and then
	  press ENTER.
	
	2. Go to the Zoomserv\Bin folder.
	
	3. Type the following command, and then press ENTER:
	
	  viahashtool -regenerate
	
	4. When Viahashtool has finished, stop the Zoomit Server service.
	
	5. Delete the Zoomserv\Data\Db\Hash*.db and Hashwild.db files.
	
	6. Rename the Zoomserv\Data\Db\Hash*.temp and Hashwild.temp files to Hash.db and
	  Hashwild.db, respectively.
	
	7. Restart the Zoomit Server service.
	
	How to Run Viacompact
	---------------------
	
	1. Stop the Zoomit Server service.
	
	2. Click Start, point to Programs, and then click Zoomit Directory Services V2.
	
	3. Click Zoomit Via Compact Utility.
	
	4. Click Start to run the tool.
	
	5. After the tool is finished running, check for any error messages, and then
	  try to log on to the MMS server through Compass.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q250484 Using the VIA Compact Utility in Microsoft Metadirectory Services
	
	
	Additional query words: corrupt corrupted dn
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
