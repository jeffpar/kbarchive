---
layout: page
title: "Q183275: Changing the Display Name of Notes Users in Exchange GAL"
permalink: kb/183/Q183275/
---

## Q183275: Changing the Display Name of Notes Users in Exchange GAL

	Article: Q183275
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to modify the display name of Lotus Notes users as they appear in
	the Exchange Server Global Address List (GAL). Also, you can have Exchange
	Server users displayed differently in the Lotus Notes Address Book (NAB).
	
	This article explains how to get Lotus Notes users to be displayed in
	<LastName, FirstName> format in Exchange Server. Similarly, steps may be
	taken to make display name changes when Exchange Server users are propagated
	into Lotus Notes. However, it is not recommended that the default mapping from
	Exchange Server to Lotus Notes be changed.
	
	MORE INFORMATION
	================
	
	By default, in Exchange Server, Lotus Notes users are displayed in <FirstName
	LastName> format. Exchange Server users are displayed in <FirstName
	LastName> format.
	
	In Lotus Notes, Notes users are displayed in <LastName, FirstName> format.
	Exchange Server users are displayed in <LastName, FirstName> format.
	
	One of the following files is usually involved:
	
	- If modifying the display name of Lotus Notes users in Exchange Server,
	
	  Exchsrvr\Connect\Exchconn\Dxamex\Mapnotes.tbl - Lotus Notes to Exchange Server
	  directory synchronization
	
	- If modifying the display name of Exchange Server users in Lotus Notes,
	
	  Exchsrvr\Connect\Exchconn\Dxanotes\Mapmex.tbl - Exchange Server to Lotus Notes
	  directory synchronization
	
	Listing of default Mapnotes.tbl:
	
	  Alias = ISEQUAL( ShortName, "", SUBSTR( FullName, 1, 64 ), ShortName )
	  FullName = X500( FullName, "CN" )
	  TA = "NOTES:" Strip( FullName, ";", "L", "R" ) "@" MailDomain
	  DN = UNID
	  FirstName = FirstName
	  LastName = LastName
	  Company=Company
	  Department = Department
	  Office = Location
	  Initials = Initials
	
	Listing of modified Mapnotes.tbl:
	
	  Alias = ISEQUAL( ShortName, "", SUBSTR( FullName, 1, 64 ), ShortName )
	
	     ;Default rule:
	     ;FullName = X500( FullName, "CN" )
	
	     ;Changed rule.  This rule changes the display name of Notes users to
	     ;appear as <LastName, FirstName> in the Exchange Server GAL. It
	     ;preserves the Display name of Notes Groups.
	
	  FullName = ISEQUAL( ShortName, "", X500( FullName, "CN" ), X500( LastName ", " FirstName, "CN" ))
	
	  TA = "NOTES:" Strip( FullName, ";", "L", "R" ) "@" MailDomain
	  DN = UNID
	  FirstName = FirstName
	  LastName = LastName
	  Company = Company
	  Department = Department
	  Office = Location
	  Initials = Initials
	
	As always, before making any changes, it is a good idea to make a backup copy of
	the file(s) you are about to modify. Then follow these steps:
	
	1. Change the 'FullName' mapping rule as shown in the file listing above.
	
	2. Copy the modified Mapnotes.tbl into your Exchsrvr\Connect\ Exchconn\Dxamex
	  directory, replacing the existing file.
	
	  The next step may be done at off peak hours, so the impact to your messaging
	  environment is minimal.
	
	3. Run Lotus Notes to Exchange Server directory synchronization. Click Immediate
	  Full Reload on the Directory Synchronization tab of the Notes Connector
	  property page.
	
	The Lotus Notes users originally appearing in Exchange Server as <FirstName
	LastName> should change to the <LastName, FirstName> format. It is not
	necessary to clear the current container you have for Lotus Notes users.
	
	It is not recommended to change the default mapping from Exchange Server to Lotus
	Notes of the FullName field. The FullName field is used for replying to the
	message. If you change this format, when a Notes user addresses an Exchange
	Server user from the address book, the e-mail will likely not go through because
	the recipient address will not exactly match the Lotus Notes proxy in Exchange
	Server of that Exchange Server user.
	
	When you open the address book itself, that is, Names.nsf, you see a view in
	which the first column is not an actual field in the person document. Notes
	combines the first name and last name and displays them together under the Name
	column.
	
	Take care to distinguish whether you are looking at an actual field of the
	document that you would like changed (in which case you may not be able to make
	changes for the above reason), or whether you are looking at a view, which you
	can certainly modify if you have the permission.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q180517 XFOR: Customizing Dirsync Between Exchange and Notes
	
	Additional query words: Mapping Rules Display Names Firstname Lastname Groups Dir Sync
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
