---
layout: page
title: "Q162695: SMSINST: &quot;Access Denied&quot; Message When Connecting to a Printer"
permalink: kb/162/Q162695/
---

## Q162695: SMSINST: &quot;Access Denied&quot; Message When Connecting to a Printer

	Article: Q162695
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbprint smsinst
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although printing is still possible, users of computers running Windows NT
	Workstation that connect to a network printer share see "access denied" in the
	printer window caption when they do the following:
	
	1. On the Start menu, point to Settings, and click Printers.
	
	2. Double-click the shared network printer icon.
	
	Therefore, the printer queue that is displayed is empty and the user cannot
	control (for example, delete or cancel) his or her own print jobs.
	
	CAUSE
	=====
	
	Systems Management Server Installer cannot handle multiple REG_MULTI_SZ registry
	entries; only the first entry of such a registry entry is used in the package.
	
	The problem has been experienced after the installation of a third-party product
	that added entries to the following registry keys:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlset\Services\LanmanServer
	  \Parameters\NullSessionShares
	
	  -and-
	
	  HKEY_LOCAL_MACHINE\SYSTEM\ CurrentControlset\Services\LanmanServer
	  \Parameters\NullSessionPipes
	
	In this case, when a Systems Management Server package was created, Systems
	Management Server distributed only the first of the REG_MULTI_SZ entries named
	above; all other entries (for example, spoolss) were lost under the
	NullSessionPipes key. This caused workstations to get an "access denied" message
	when connecting to the printer share.
	
	
	
	WORKAROUND
	----------
	
	To work around this problem, use an external utility designed for editing
	multi-string registry values. Execution of such utilities can be accomplished
	within Systems Management Server Installer by using the Execute Program script
	item.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0, Windows NT Server versions 3.5, 3.51, 4.0, and Windows NT
	Workstation versions 3.5, 3.51, 4.0.
	
	MORE INFORMATION
	----------------
	
	For more information on Systems Management Server Installer and multiple
	REG_MULTI_SZ registry entries, see the following article in the Microsoft
	Knowledge Base:
	
	  Q174328 SMSINST: Repackage Does Not Capture REG_MULTI_SZ Changes
	
	For more information on services using the system account and null sessions, see
	the following articles in the Microsoft Knowledge Base:
	
	  Q132679 Local System Account and Null Sessions in Windows NT
	
	  Q122702 Using the System Account as a Service in Windows NT 3.5
	
	  Q121281 LMHOSTS #Include Directives Requires Null Session Support
	
	Additional query words: prodmsms prodnt
	
	======================================================================
	Keywords          : kbprint smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	
