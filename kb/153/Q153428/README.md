---
layout: page
title: "Q153428: Microsoft Phone Dials Local Number as Long Distance"
permalink: /kb/153/Q153428/
---

## Q153428: Microsoft Phone Dials Local Number as Long Distance

	Article: Q153428
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): win95 msphone1
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Phone to dial a local number with the same area code as
	the current location, a 1 may be dialed before the local phone number.
	
	CAUSE
	=====
	
	If you click the Dial As Long Distance check box in the Dialing Options dialog
	box to select it, whether you click Cancel or OK, the Dial As Long Distance
	check box remains selected for that phone number and any other local phone
	number with the same prefix. Once the check box is selected, the prefix of the
	number being dialed is added to the list of toll prefixes associated with the
	current location.
	
	RESOLUTION
	==========
	
	To remove the local prefix from the list of toll prefixes, use either of the
	following methods:
	
	- In Microsoft Phone, click Dialing Options, enter the local number or another
	  local number with the same prefix, click the Dial As Long Distance check box
	  to clear it, and then click OK.
	
	- Remove the prefix from the list of toll prefixes manually. To do so, follow
	  these steps:
	
	  1. In Microsoft Phone, click Connect Using on the Tools menu.
	
	  2. Click Fax Properties, click the Dialing tab, and then click Toll Prefixes.
	
	  3. Click the prefix, click Remove, and then click OK.
	
	     NOTE: These settings are global settings that affect fax calls as well as
	     calls placed with Microsoft Phone.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : win95 msphone1 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	
