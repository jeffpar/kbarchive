---
layout: page
title: "Q257407: XCLN: Web Publishing Error Message When Creating Outlook Team Fo"
permalink: kb/257/Q257407/
---

## Q257407: XCLN: Web Publishing Error Message When Creating Outlook Team Fo

	Article: Q257407
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Team Folders Wizard to create a team folder, you may either be
	prompted for your user name and password or you may receive the following error
	message when you publish your files to the Web server:
	
	  Web Publishing Error:
	  Error: occurred during HTTP publishing of Web files. Select OK to try another
	  destination to publish your files to or Cancel to exit the wizard.
	
	CAUSE
	=====
	
	This issue can occur if the permissions that are necessary to publish files to
	the target folder are not enabled properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps on the computer running
	Microsoft Internet Information Service (IIS):
	
	1. In Windows Explorer, locate the InetPub folder.
	
	2. Right-click the folder, and then click Properties.
	
	3. Click the Security tab, and then click Permissions.
	
	4. Click Everyone, click Remove, click OK, and then click OK again.
	
	5. Repeat steps 1 through 4 for the Wwwroot folder and, if applicable, the
	  subfolder that you created under the Wwwroot folder to store your team
	  folders data.
	
	6. Restart the server.
	
	7. In Windows Explorer, grant the Everyone group Full Control permission for the
	  InetPub and Wwwroot folders. If you created a subfolder for your team folders
	  under InetPub\Wwwroot, then grant the Everyone group permissions for that
	  subfolder also.
	
	MORE INFORMATION
	================
	
	For additional information about troubleshooting permissions issues when you use
	IIS or FrontPage Server Extensions, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q196308 Name and Password Are Not Accepted When Opening Web
	
	  Q216705 How to Set Permissions on a FrontPage Web on IIS
	
	  Q224985 FP98: How to Reset Permissions on Multiple Virtual Servers with
	  FrontPage 98 Server Extensions
	
	  Q224147 How to Reset Permissions Using FrontPage 98 Server Extensions
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
