---
layout: page
title: "Q110388: Mac OOF: Using the Valid Thru: Field in the OOF Form"
permalink: kb/110/Q110388/
---

## Q110388: Mac OOF: Using the Valid Thru: Field in the OOF Form

	Article: Q110388
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When configuring options with the Out of Office (OOF) form in version 3.1d of
	Microsoft Mail for AppleTalk Networks, users have the option to specify an
	expiration date for their OOF registration.
	
	The field "Valid thru:" accepts a date specified in the MM/DD/YY format. By
	entering a date in this field, the user can specify when the OOF server will
	remove his or her registration from the OOF database.
	
	The OOF server will process all mail according to configured options until
	11:59:59 P.M. on the date specified in the "Valid thru:" field. At that time,
	the OOF server will remove the user registration from the OOF server database
	and will send a notification of the removal to the user[ASCII 146]s mail
	account.
	
	MORE INFORMATION
	================
	
	Although the form specifies the date to be entered in MM/DD/YY format, it will
	accept any valid Macintosh date entry. The OOF server will validate the entry
	and, if the specified date is not considered valid, will reject the OOF
	registration. For ease of configuration, Microsoft recommends dates be entered
	in MM/DD/YY format.
	
	Additional query words: 3.10d crash bomb
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
