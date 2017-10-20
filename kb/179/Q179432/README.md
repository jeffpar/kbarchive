---
layout: page
title: "Q179432: Silent Install Fails with Outlook Deployment Wizard"
permalink: /kb/179/Q179432/
---

## Q179432: Silent Install Fails with Outlook Deployment Wizard

{% raw %}

	Article: Q179432
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbsetup kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Outlook Deployment Kit that shipped with the April 1, 1998
	Microsoft Select compact disc to deploy Microsoft Outlook 98 and you select
	either the Silent Install option in the Wizard or you use the following command
	line:
	
	  setup.exe /Q:A /C:"outlwzd.exe /S:""#e"" /Q /R:N"
	
	the installation fails immediately and you receive the following message:
	
	  Error: Setup cannot find a properly configured setup.ini file for quiet
	  mode. Consult the Outlook 98 Deployment Kit for information on creating
	  quiet mode installations. Do you wish to continue installing without
	  quiet mode?
	
	If you click Yes, the installation continues; however, there is no way to disable
	the message without updating the Setup.ini file.
	
	CAUSE
	=====
	
	There is a conflict with the silent installation mode on the Select compact
	disc. This does not affect non-Select compact discs in silent mode, or Select
	compact discs in non- silent mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1
	--------
	
	Dowload the latest version of the Outlook 98 Deployment Kit from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/TechNet/Outlook/Manuals/deploy/welcome.asp
	
	Method 2
	--------
	
	Odkpatch.exe is available to resolve this issue. To apply the patch, run
	Odkpatch.exe before building a custom Outlook package. Any custom packages you
	previously built must be rebuilt after you run the patch.
	
	NOTE: Odkpatch.exe is language independent. It can be used on any language
	version of the ODK.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Odkpatch.exe now
	  (http://download.microsoft.com/download/outlook98/Patch/1.0/WIN98Me/EN-US/ODKPATCH.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 98 ODK
	
	======================================================================
	Keywords          : kbfile kbpatch kbsetup kbgraphxlinkcritical 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
