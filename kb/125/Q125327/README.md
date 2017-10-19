---
layout: page
title: "Q125327: Mac ARA: PowerBook Model 540c Hangs When Downloading Resources"
permalink: /kb/125/Q125327/
---

## Q125327: Mac ARA: PowerBook Model 540c Hangs When Downloading Resources

	Article: Q125327
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a Mail for AppleTalk server via Apple Remote Access (ARA)
	with the PowerBook model 540c, you may see the following message(s) when
	resources are downloaded from the server:
	
	  Unable to store all information necessary to work offline. You may not have
	  enough memory to finish operation.
	
	  -or-
	
	  Unable to store information necessary to work offline. You may not have
	  enough room to store information.
	
	This error will occur regardless of the number of names in the ALL list, the
	presence or absence of forms, and the amount of free memory and disk space
	available.
	
	CAUSE
	=====
	
	The PowerBook 540c is controlled in part by a Control Panel named POWERBOOK.
	
	There are three options designed to conserve power when the machine is away from
	an AC source. These options are exposed when the slider switch is moved from
	Easy to Custom.
	
	One of these options is Screen Dims, which sets the time before the monitor fades
	to its conservation setting. When the Screen Dimming option is in any position
	other than Never, the 540c will hang when downloading resources via ARA. The
	hang will occur as the screen dim occurs.
	
	WORKAROUND
	==========
	
	This issue has been resolved in Macintosh System version 7.5.1. Please contact
	Apple for additional information or for obtaining the upgrade.
	
	If you can not upgrade to Macintosh System version 7.5.1, you can make sure
	Screen Dims is always set to Never when you work with the Mail client. Activate
	the PowerBook Control Panel, and slide the toggle switch from Easy to Custom. In
	the Minutes Until: section, slide the Screen Dims Switch to Never.
	
	MORE INFORMATION
	================
	
	The adjusted setting will allow the resource download operation to complete, but
	it may come at the price of taxing the battery, specifically when you download a
	large address list. It is advisable to have the PowerBook model 540c connected
	to an AC power when you are away from the office when you download mail
	resources, and to make sure the battery is fully charged before you run this
	operation if an AC power source is not available.
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
