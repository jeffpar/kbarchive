---
layout: page
title: "Q252896: Error Message: (DB5_getRootRecord) Error Locating Local DSA Name"
permalink: /kb/252/Q252896/
---

## Q252896: Error Message: (DB5_getRootRecord) Error Locating Local DSA Name

	Article: Q252896
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Metadirectory server log in Zoomserv\Data\Logs\Genlogs may report
	the following error message:
	
	  (DB5_getRootRecord) Error locating local
	  dsa:[DsaName=serverName,ou=Applications,contextPrefixRDN]
	
	In addition to the preceding error message, you may experience the following
	behavior:
	
	- Microsoft Metadirectory Service (Zoomit Server service) continues to run.
	
	- You are able to log on to the Compass client.
	
	- Management Agents do not work correctly.
	
	- Objects may be missing in the metadirectory.
	
	CAUSE
	=====
	
	This behavior can occur because the Digital Signature Algorithm (DSA) record has
	been either damaged or deleted.
	
	RESOLUTION
	==========
	
	To resolve this behavior, you must rebuild the DSA record and reset the value of
	the DSA's standard attribute to its default values (as defined in
	\Zoomserv\Bin\Init\At.st). To rebuild the DSA record, follow these steps:
	
	1. Start a command prompt.
	
	2. Change folders to the \Zoomserv\Bin\Init folder on the drive where Microsoft
	  Metadirectory Services is installed
	
	3. Run the following command:
	
	..\bin\importt -updatedib -updateallattributes
	The preceding command can successfully run with the service either running or
	stopped. However, if possible, the server should be stopped. None of the
	metaverse data can be affected.
	
	NOTE: If the preceding resolution does not correct the problem, contact Microsoft
	Product Support Services.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q258020 Object Not Found Error Message Accessing 'The Known Universe' in MMS
	
	Additional query words: metadirectory mms objects attributes
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
