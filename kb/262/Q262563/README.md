---
layout: page
title: "Q262563: Schedule+ User Sees ??? for User's Free/Busy Data"
permalink: kb/262/Q262563/
---

## Q262563: Schedule+ User Sees ??? for User's Free/Busy Data

	Article: Q262563
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.0,7.0a,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Schedule+, versions 7.0, 7.0a, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the InterOrg Replication tool to replicate the Schedule+ Free Busy
	system folder between two organizations, a Schedule+ user sees question marks
	(???) in the Free/Busy bar for an Outlook user in the secondary organization.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version         Size     File name     Platform
	  ----------------------------------------------------------------
	  11/18/99  22.36   8.30.2651.0060  121104   Msoutl32.dll  x86
	
	
	
	WORKAROUND
	==========
	
	If the Schedule+ users do not need to open an Outlook calendar, rename the
	Msoutl32.dll file on the Schedule+ clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Outlook 97 Viewer for Schedule +
	7.x.
	
	MORE INFORMATION
	================
	
	Schedule+ users cannot access an Outlook user's free-and-busy information when
	they are using Schedule+ with the Outlook driver for Schedule+ (Msoutl32.dll) if
	the free-and-busy information is replicated into the Exchange Server
	organization by the InterOrg Replication tool. Free-and-busy time for all
	Outlook users in a local organization is available to local Schedule+ users by
	using the above mechanism, and all Outlook users in the local organization can
	access the free-and-busy information for users in the remote organization. In
	other words, both the Outlook driver for Schedule+ and the InterOrg Replication
	tool work in their own right, the problem is that the Outlook driver cannot read
	the free-and-busy information created by the InterOrg Replication tool.
	Schedule+ users can see free-and-busy information for users in remote
	organizations prior to installing the Outlook driver for Schedule+. The problem
	only shows itself after Msoutl32.dll has been installed.
	
	Additional query words: sched+ scd+ msoutl
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbZNotKeyword2 kbOutlook2000Search kbScheduleSearch kbSchedule700 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbSchedule700a kbSchedule750
	Version           : :7.0,7.0a,7.5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
