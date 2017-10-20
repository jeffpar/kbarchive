---
layout: page
title: "Q199695: XCLN: Outlook &amp; Exchange Downloads Outdated GAL from MSMail"
permalink: /kb/199/Q199695/
---

## Q199695: XCLN: Outlook &amp; Exchange Downloads Outdated GAL from MSMail

{% raw %}

	Article: Q199695
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2.x,3.2,3.2a,3.5,4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	- Microsoft Mail for Windows, version 2.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook and Exchange clients remotely accessing the Microsoft Mail postoffice
	using RAS, download an outdated global address list. The LAN clients' global
	address list is current. Attempts to perform a manual Remote Regenerate may fail
	to update the remote global address.
	
	CAUSE
	=====
	
	This problem is caused by downloading an outdated file from the postoffice. To
	determine what that file is and how to resolve the problem, see the "Resolution"
	section.
	
	RESOLUTION
	==========
	
	Use the following to determine which event is causing the outdated file to be
	downloaded.
	
	Cause 1: The user's postoffice does not have an account designated as Remote.
	
	  Verify: The postoffice has at least one user account defined as Remote,
	  call-in only.
	
	  Resolution: Designate at least one mailbox as a Remote account.
	
	Cause 2: Another process is prohibiting the message transfer agent (MTA) from
	performing a Remote Regenerate at 4:00 A.M. daily.
	
	  Verify: The MTA is functioning properly at 4:00 A.M.
	
	  Resolution: Determine what is preventing External.exe from functioning at this
	  time.
	
	Cause 3: The Rnetwork.glb file is locked or corrupted, and no longer being
	regenerated.
	
	  Verify: The Rnetwork.glb file has a date stamp of the current date, and the
	  time is close to 4:00 A.M.
	
	  Resolution:
	
	  1. Review the log maintained by the MTA.
	
	  2. Review the session.log from the MTA for the error "unable to access
	  rnetsem.glb."
	
	  3. Rename the Rnetsem.glb file on the postoffice, and allow External.exe to run
	  at 4:00 A.M. This file will get recreated during the next cycle.
	
	Cause 4: The user's mailbox is designated as Remote, and configured for a Custom
	view rather than for the Default view.
	
	  Verify: Review the affected user accounts for the "View" assigned to their
	  Remote status.
	
	  Resolution:
	
	  1. If the user's view is set for a Custom view, follow item 2, or change the
	  user's view to Default view.
	
	  2. Check for existence of [hex#].glb files. These represent Remote Custom views.
	
	  3. If these exist, they require manual updating through Admin.exe by, by
	  selecting Remote, then Views, and then Modify on the menu.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbMailSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbMail2xSearch kbMailPCN320 kbMailPCN320a kbMailPCN350 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:2.x,3.2,3.2a,3.5,4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
