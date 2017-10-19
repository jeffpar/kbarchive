---
layout: page
title: "Q194559: SMS: SNMPELEA May Conflict with Compaq Insight Manager Agents"
permalink: /kb/194/Q194559/
---

## Q194559: SMS: SNMPELEA May Conflict with Compaq Insight Manager Agents

	Article: Q194559
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server SNMP Event Log Extension Agent (SNMPELEA) is
	installed on a system that also has Compaq Insight Manager Agents installed, the
	Windows NT SNMP service may fail to start at system startup. The Windows NT
	Service Control Manager will report that the Windows NT SNMP service failed to
	start. However, the Windows NT SNMP service will automatically start within a
	few seconds.
	
	RESOLUTION
	==========
	
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Systems
	Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time        Size      File name    Platform
	  ------------------------------------------------------
	  10/13/98   5:41pm      112,544   Snmpelea.dll (Intel)
	  10/13/98   5:43pm      205,072   Snmpelea.dll (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Snmpelea.dll file in the
	  <SMS_root_directory>\Site.srv\Maincfg.box\Client.src\<platform>.bin
	  directory with the hotfixed version.
	
	  NOTE: You can perform this step automatically by using Hotfix.exe with the
	  provided Hotfix.ini file.
	
	2. Maintenance Manager will replicate the updated files to the
	  Logon.srv\<platform>.bin directory on the Systems Management Server
	  logon servers during its next work cycle. After that occurs, you can update
	  the clients. To update the clients, either manually run Upgrade.bat on each
	  client or follow the instructions in the following article in the Microsoft
	  Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Compaq Insight Manager is manufactured by Compaq, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodsms CIM boot boots starts
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
