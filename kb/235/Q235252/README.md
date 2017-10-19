---
layout: page
title: "Q235252: XCLN: Outlook 2000 Delegate Calendar Permissions Unavailable Aft"
permalink: /kb/235/Q235252/
---

## Q235252: XCLN: Outlook 2000 Delegate Calendar Permissions Unavailable Aft

	Article: Q235252
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000
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
	
	If you upgrade to Outlook 2000 from a previous version of Outlook that uses
	Microsoft Schedule+ as the primary calendar, you may be unable to configure
	calendar permissions for delegates after you disable the use of Schedule+ as the
	primary calendar.
	
	When you click Options on the Tools menu, click Delegates, and then try to set up
	calendar permissions, the permission list is unavailable, which prevents you
	from establishing calendar permissions for delegates.
	
	CAUSE
	=====
	
	This problem can occur because if you upgrade to Outlook 2000 and continue to
	use Schedule+ as your primary calendar, and then convert to use the Outlook
	calendar as your primary calendar, the UseSchedPlus registry value is changed
	from 1 to 0 in the Office 9.0 key, but the corresponding Office 8.0 entry is not
	changed from 1 to 0.
	
	Outlook 2000 disables the Schedule+ option in the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\9.0\Outlook\SchedPlusOption
	
	  "UseSchedPlus"=dword:00000000
	
	However, the following registry key remains enabled:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Outlook\SchedPlusOption
	
	  "UseSchedPlus"=dword:00000001
	
	WORKAROUND
	==========
	
	Change the following Office 8.0 registry key to disable the SchedPlusOption
	value by changing it to 0:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\8.0\Outlook\SchedPlusOption
	
	  "UseSchedPlus"=dword:00000000
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook 2000.
	
	
	Additional query words: grey gray dropdown drop down OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
