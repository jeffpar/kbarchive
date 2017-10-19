---
layout: page
title: "Q216843: Clients Receive &quot;Error 1000 No Licenses Are Available&quot;"
permalink: /kb/216/Q216843/
---

## Q216843: Clients Receive &quot;Error 1000 No Licenses Are Available&quot;

	Article: Q216843
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When ICA clients attempt to connect to a Terminal Server computer running
	MetaFrame, they may experience logon problems with regard to licensing. The
	clients may receive the following error message:
	
	  Error 1000 No Licenses Are Available.
	
	The server also logs the following event ID:
	
	  Event ID 1004
	  Source: TermService
	  Description: Unable to acquire a license for user <name>, domain
	  <name>.
	
	These symptoms are usually experienced in conjunction with excessive logon and
	logoff attempts.
	
	CAUSE
	=====
	
	The preceding error messages can occur if the Citrix MetaFrame server runs out
	of pooled licenses. It is possible that the licenses were consumed by other
	connections on different servers.
	
	RESOLUTION
	==========
	
	To resolve this behavior, change the License Pool Count by performing the
	following steps:
	
	1. Open the MetaFrame Tools group.
	
	2. Click Citrix Licensing.
	
	3. Select the installed license or licenses.
	
	4. On the License menu, click Change Pool Count.
	
	5. Change the number pooled accordingly.
	
	NOTE: When using the Citrix client, installing their latest updates may resolve
	the issue.
	
	MORE INFORMATION
	================
	
	It is recommended that you reserve a portion of the licenses as locally based
	for administrative purposes. License usage can be monitored in Citrix Server
	administration. By default, all Citrix MetaFrame licenses are pooled. This is by
	design.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
