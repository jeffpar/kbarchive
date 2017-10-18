---
layout: page
title: "Q293637: Event ID 8 When Clients Try to Access IIS FTP Site"
permalink: kb/293/Q293637/
---

## Q293637: Event ID 8 When Clients Try to Access IIS FTP Site

	Article: Q293637
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500
	Last Modified: 08-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When FTP clients try to access an Internet Information Server (IIS) FTP site,
	they may receive an error message, and Event ID 8 appears in the System Event
	Viewer Log:
	
	  Source MSFTPSVC Event ID 8: FTP Server could not create a client worker
	  Thread for user at host xxx.xxx.xxx.xxx. The connection to this user is
	  terminated the data is the error. (No error Code)
	
	where xxx.xxx.xxx.xxx is the client's IP address.
	
	To determine if this error relates to IP Security, use the Adsutil.vbs script
	when this event occurs to enumerate the metabase as follows:
	
	1. On the Start menu, click Run, and then type "cmd" (without the quotation
	  marks) to open a command prompt.
	
	2. In IIS 5.0, type the following command to change directories:
	
	  "cd inetpub\adminscipts" (without the quotation marks)
	
	  In IIS 4.0, type the following command to change directories:
	
	  "cd winnt\system32\inetsrv\adminsamples" (without the quotation marks)
	
	3. To enumerate and generate the error, type the following command:
	
	  "cscript adsutil.vbs enum msftpsvc/<FTP site number>/root" (without the
	  quotation marks)
	
	  NOTE: The FTP site number is 1 for the Default FTP Site.
	
	If you receive the following error message:
	
	  DataType: "IPSec" Not Yet Supported on property: IPSecurity
	
	  ErrNumber: 0 (0x0)
	
	the problem is caused by incorrect settings in the metabase. Although these
	errors seem to be occurring, the Internet Services Manager shows that IP
	restrictions are currently being used.
	
	CAUSE
	=====
	
	This problem can occur when the metabase flag for IP Security is not correctly
	removed from the metabase after changes are made to the IP Restrictions.
	Although the settings are changed so that everyone has access to the FTP site,
	the setting in the metabase is still flagged.
	
	RESOLUTION
	==========
	
	If the problem recurs after you give all clients access to the FTP site, follow
	these steps:
	
	1. In IIS 5.0, at the command prompt, type the following command:
	
	  "cd inetpub\adminscipts" (without the quotation marks)
	
	  In IIS 4, at a command prompt, type the following command:
	
	  "cd winnt\system32\inetsrv\adminsamples" (without the quotation marks)
	
	2. At a command prompt, type the following command:
	
	  "cscript adsutil.vbs delete msftpsvc/<FTP site number>/root/ipsecurity"
	  (without the quotation marks)
	
	  You should receive the following message:
	
	  
	
	  deleted property "ipsecurity"
	
	3. At a command prompt, type the following command to stop the FTP services:
	
	  "net stop iisadmin /y" (without the quotation marks)
	
	4. At a command prompt, type the following command to start the FTP services:
	
	  "net start msftpsvc" (without the quotation marks)
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
