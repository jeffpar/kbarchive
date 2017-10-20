---
layout: page
title: "Q183398: SMSINST: Duplicate SMS IDs Exist After a Package Is Deployed"
permalink: /kb/183/Q183398/
---

## Q183398: SMSINST: Duplicate SMS IDs Exist After a Package Is Deployed

{% raw %}

	Article: Q183398
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a package is created with Systems Management Server Installer and deployed
	to clients, duplicate SMS IDs appear in the database. The client was correctly
	configured (with a unique SMS ID) before the package was deployed.
	
	CAUSE
	=====
	
	If a repackage occurs on a reference computer, that has the Systems Management
	Server client software installed and the SMS_INVENTORY_AGENT runs during the
	repackage phase, Sms.ini is updated by the SMS_INVENTORY_AGENT and the repackage
	process detects a change in Sms.ini file. The Sms.ini file is then inserted into
	the compile script and is subsequently distributed to the clients receiving the
	job.
	
	The \Ms\Sms\Logs directory will also have updated files which are detected.
	
	WORKAROUND
	==========
	
	1. Do not install the Systems Management Server client on the reference
	  computer.
	
	2. Manually remove the Sms.ini file entry from the destination computer after
	  the second phase of the repackage. To remove the Sms.ini file, perform the
	  following steps:
	
	  a. In the Application Files dialog box, click the Files tab.
	
	  b. Under Destination Computer, select the Application folder.
	
	  c. Select Sms.ini and click the Delete File button.
	
	MORE INFORMATION
	================
	
	If the package is actually deployed to clients, they will all obtain the same
	SMS ID. Each client should be uninstalled (<Logon.srv>\Deinstal.bat) and
	their Sms.ini files removed before reinstalling the client software.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodsms sms uninstall uninstalled remove removed deinstall deinstalled
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
