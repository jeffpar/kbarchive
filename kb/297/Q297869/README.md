---
layout: page
title: "Q297869: Issues After You Modify Kerberos MaxTokenSize Registry Value"
permalink: /kb/297/Q297869/
---

## Q297869: Issues After You Modify Kerberos MaxTokenSize Registry Value

	Article: Q297869
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbsms200 w2000kerb kbKerberos
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you apply post-Windows 2000 Service Pack 1 (SP1) fixes or Windows 2000
	Service Pack 2 (SP2) and modify the Kerberos MaxTokenSize registry value,
	various Systems Management Server (SMS) administrator issues may occur. The
	following list provides examples of the types of issues you may experience:
	
	- When you create a package from definition, you may receive the following
	  error message:
	
	  Description: Wizard internal error: invalid WBEM ExecMethod result. Please
	  exit the Wizard.
	  HRESULT : 0x800706BF-The remote procedure call failed and did not execute.
	
	- When you try to create a new advertisement, you may receive the following
	  error message:
	
	  No properties are available on this object.
	
	- When you enumerate collections, you receive a list of Collection icons, but
	  the collection name may be missing. For example, you may not see the "All
	  Systems" name even though the typical icon is still displayed.
	
	- When browsing collections within the Advertisement Wizard, you may also
	  receive the following error message:
	
	  _com_error exception in MMC Admin UI!
	
	CAUSE
	=====
	
	This issue can occur if the value for the MaxTokenSize value for Kerberos is set
	too high.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, set the value of the MaxTokenSize value that is
	located in the following registry key to a decimal value of less than 50,000:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\Kerberos\Parameters
	
	NOTE: By default, the MaxTokenSize value does not exist, and it must be added
	manually.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsms200 w2000kerb kbKerberos 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
