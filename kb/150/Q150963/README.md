---
layout: page
title: "Q150963: Err Msg: Event ID: 5513 Source: Netlogon"
permalink: /kb/150/Q150963/
---

## Q150963: Err Msg: Event ID: 5513 Source: Netlogon

{% raw %}

	Article: Q150963
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT workstation or server (in the member-server role), the following
	error appears when you log on:
	
	  A domain controller for your domain could not be located. You have been
	  logged on using cached information. Changes to your profile since you last
	  logged on may not be available.
	
	If you check the System Event Log, you find the following event:
	
	Event ID:    5513
	Source:      Netlogon
	Description: The computer name <computer name> connected to server <name>
	            using the trust relationship to the <name> domain. However,
	            the computer doesn't properly know the security identifier
	            (SID) for the domain. Reestablish the trust relationship.
	
	If you find this event, check basic networking functionality and then follow the
	procedure indicated below.
	
	CAUSE
	=====
	
	These error messages indicate the Windows NT workstation or server computer
	account information does not match that held by the authenticating domain
	controller. The computer account information is held in the registry on the
	Windows NT workstation or server and on all domain controllers. There are a
	number of things that can cause the computer account database on the domain
	controller to have different information than the computer itself, for example,
	if systems account manager (SAM) and Security were restored to a different
	version (either by emergency repair or from a tape restore). The trust
	relationship a computer has with the domain it is a member of is similar to the
	trust relationship a domain can have with another domain with respect to the
	account that is created.
	
	RESOLUTION
	==========
	
	Follow these steps:
	
	1. On the primary domain controller (PDC), open Server Manager and locate the
	  Windows NT workstation or Windows NT server (member-server) that is getting
	  the errors.
	
	2. Select that computer account, select Computer on the menu bar and then select
	  Remove From Domain. This will delete the entry for that computer (The entry
	  you see will not disappear immediately; this is nothing to be concerned
	  about.)
	
	3. Immediately, select Computer in the menu bar and then select Add To Domain.
	  Click Windows NT Workstation or Server, then supply the computer name as
	  defined in Control Panel>Network for the affected computer. Click OK.
	
	4. On the Windows NT workstation or Windows NT server with the error message,
	  log on with a local administrative account. Open the Network tool in Control
	  Panel. Press the Change button that is next to the Domain or Workgroup name.
	  Make sure to select Workgroup and type a fictitious Workgroup name. Click OK.
	
	5. A dialog welcoming the computer to the new workgroup appears. Click OK. Close
	  Control Panel and choose Yes when prompted to restart the computer.
	
	6. On the same Windows NT workstation or Windows NT server, log on again with a
	  local administrative account. Open the Network tool in Control Panel. Press
	  the Change button that is next to the Domain or Workgroup name. This time,
	  make sure to select Domain and type your Windows NT domain name and click OK.
	
	
	7. A dialog welcoming the system to the domain appears; click OK. Close Control
	  Panel and choose Yes when prompted to restart the computer.
	
	8. After this restart, on the FROM line in the logon dialog box, click the arrow
	  to display a list of domain entries. Log on to the domain with a valid domain
	  account.
	
	This procedure should eliminate Event ID: 5513.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q128489 Inter-Domain Trust Account Passwords
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	

{% endraw %}
