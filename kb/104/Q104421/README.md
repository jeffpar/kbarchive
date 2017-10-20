---
layout: page
title: "Q104421: PC Win: Check Names Utility Stops After Match Is Found"
permalink: /kb/104/Q104421/
---

## Q104421: PC Win: Check Names Utility Stops After Match Is Found

{% raw %}

	Article: Q104421
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows, when the Check
	Names utility finds a match, it will stop searching the available address lists.
	The purpose of the utility is to check the characters in the To: and Cc: lines
	against the address lists. This helps to ensure that mail is not being sent to
	an artificial user.
	
	MORE INFORMATION
	================
	
	The Check Names utility is one of the options available in the Mail for Windows
	Compose screen. The Check Names utility first runs against the default address
	list. If no matches are found, it will search the Global Address List (GAL)
	until a match is found. As soon as the Check Names utility finds a match, the
	search is considered complete and the utility ends its search.
	
	If you set the GAL as the default, the Check Names utility will only search the
	GAL.
	
	To set the default, select the Address button in the Compose screen. This will
	open the Address dialog box. The Address Book button is on the top left corner
	of the dialog box. Select the button to open the Open Directory dialog box.
	
	All the available address lists will be displayed and you can select which one
	you want to use.
	
	Example
	-------
	
	In the Personal Address Book (PAB) are the names Andy Smith and Anna Smith. In
	the Postoffice Address List (POL) are the names Andrew Smith and Anice Smith. In
	the GAL are the names Anne Smith and Antoine Smith. Assume all names belong to
	unique Mail users.
	
	Suppose you choose the PAB to be the default address list and you want to send a
	message to Anne Smith. You type "AN" in the To: line and click the Check Names
	button to start the utility. The utility will find the names Andy Smith and Anna
	Smith from the PAB and will terminate.
	
	If you type "ANN" in the To: line, the utility will find the name Anna Smith. If
	you type "ANNE" in the To: line, the utility will find the name Anne Smith from
	the GAL.
	
	Now suppose you select the POL to be the default address list and you want to
	send a message to Antoine Smith. If you type "AN" in the To: line, the utility
	will return the names Andrew Smith and Anice Smith from the POL. If you type
	"ANT" in the To: line, the utility will return the name Antoine Smith from the
	GAL.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
