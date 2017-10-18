---
layout: page
title: "Q119445: Syntax for Addressing Faxes Using Microsoft At Work PC Fax"
permalink: kb/119/Q119445/
---

## Q119445: Syntax for Addressing Faxes Using Microsoft At Work PC Fax

	Article: Q119445
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax through Microsoft Mail or print to Microsoft At Work
	PC Fax on FAX, you receive the following error message:
	
	  Some names could not be matched to names in the address list. Try correcting
	  the names or choose Address to select names from the address list.
	  Successfully matched names are underlined.
	
	CAUSE
	=====
	
	This error occurs when the syntax on the To: line is incorrect. The correct
	syntax for sending a fax is as follows:
	
	     [fax:number]
	
	  -or-
	
	     [fax:name@number]
	
	If any element is omitted (such as a beginning or ending bracket), the above
	error message is displayed.
	
	WORKAROUND
	==========
	
	You can work around the syntax requirement by using an alias for the fax number,
	which you can create by adding a Microsoft At Work PC Fax address book entry. To
	do this:
	
	1. Run Microsoft Mail.
	
	2. From the Mail menu, choose Address Book.
	
	3. Choose the New Address button (the one displaying a blank Rolodex card).
	
	4. Select Microsoft At Work PC Fax and choose OK.
	
	NOTE: If Microsoft At Work PC FAX is not listed as an option, from the File menu
	choose Exit and Sign Out of Mail. Restart Mail. Microsoft At Work PC FAX should
	now be an available option.
	
	1. Fill in the New User information and make sure the Fax Number entry has the
	  correct number without any syntax. (For example, if the fax number is
	  555-1234, type either 555-1234 or 5551234.) The Name On Coverpage, Location,
	  and Voice Number entries are optional.
	
	2. Choose the Personal Address Book button (the one displaying a box of address
	  cards) to insert the new entry into your Personal Address Book.
	
	3. Choose Cancel to return to the Address Book.
	
	Additional query words: ms mail msmail 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
