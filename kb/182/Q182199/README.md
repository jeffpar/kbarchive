---
layout: page
title: "Q182199: XADM: How to Move Details Templates to Another Server"
permalink: /kb/182/Q182199/
---

## Q182199: XADM: How to Move Details Templates to Another Server

{% raw %}

	Article: Q182199
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedure for moving Details Templates to another
	server.
	
	MORE INFORMATION
	================
	
	1. On Server A, create a directory called Templates.
	
	2. From the Support\Samples\Tpl directory on the Microsoft Exchange Server 4.0
	  compact disc, copy Tpl.ini and Tpl.csv to your Templates directory on Server
	  A.
	
	3. Remove the Read-Only attributes from these files.
	
	4. Edit the Tpl.ini file. Under the [Import] and [Export] sections, modify the
	  Basepoint entry by replacing the words "ORG" and "SITE" with your
	  organization and site names. Save the file.
	
	5. At the command prompt, switch to the Templates directory and type the
	  following:
	
	  C:\exchsrvr\bin\admin /e tpl.csv /d Server A /o tpl.ini
	
	6. Copy the Templates directory from Server A to Server B.
	
	7. On Server B, at the command prompt, type the following:
	
	  C:\exchsrvr\bin\admin /I tpl.csv /d Server B /o tpl.ini
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
