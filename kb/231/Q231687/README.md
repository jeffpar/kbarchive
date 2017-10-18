---
layout: page
title: "Q231687: XFOR: Changing GroupWise Users' Display Name in Exchange GAL"
permalink: kb/231/Q231687/
---

## Q231687: XFOR: Changing GroupWise Users' Display Name in Exchange GAL

	Article: Q231687
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to change the display name of GroupWise users as they appear in
	the Microsoft Exchange Server global address list. This article explains how to
	change the display name to be in the format of LastName, FirstName. By default,
	the GroupWise custom recipients are displayed in the format of FirstName,
	LastName.
	
	MORE INFORMATION
	================
	
	By default in Exchange Server, users are displayed in the global address list in
	the format of FirstName, LastName. In GroupWise, users appear in the address
	book as LastName, FirstName. For this reason, you may want to change the way the
	GroupWise users appear in the global address list to match the way they appear
	in the GroupWise system.
	
	To accomplish this, you need to modify the Mapgwise.tbl file, which is located in
	the Exchsrvr\Connect\Exchconn\DxaGwise directory.
	
	IMPORTANT: You should make a backup of the Mapgwise.tbl file before making any
	changes to it. By default, the Mapgwise.tbl file appears as follows:
	
	  TA = "GWISE:" DOMAIN "." POSTOFFICE "." OBJECT
	  DN = DOMAIN "." POSTOFFICE "." OBJECT
	  ALIAS = OBJECT
	  FULLNAME = ISEQUAL(FIRSTNAME AND(" ", LASTNAME), "", ISEQUAL(FIRSTNAME, "",
	  ISEQUAL(LASTNAME, "", OBJECT, LASTNAME), FIRSTNAME), TRIM(FIRSTNAME AND(" ",
	  LASTNAME),"B"))
	  FIRSTNAME = FIRSTNAME
	  LASTNAME = LASTNAME
	  DEPARTMENT = DEPARTMENT
	  TITLE = TITLE
	  PHONE = PHONE
	  FAX = FAX
	  SMTPADDR = SMTPALIAS
	
	To change the display name to be LastName, FirstName, modify the file so that it
	appears as follows:
	
	  TA = "GWISE:" DOMAIN "." POSTOFFICE "." OBJECT
	  DN = DOMAIN "." POSTOFFICE "." OBJECT
	  ALIAS = OBJECT
	  FULLNAME = ISEQUAL(LASTNAME FIRSTNAME, "" , OBJECT, TRIM(ISEQUAL(FIRSTNAME,
	  "", LASTNAME, ISEQUAL(LASTNAME, "", FIRSTNAME, LASTNAME ", "
	  FIRSTNAME)),"B"))
	  FIRSTNAME = FIRSTNAME
	  LASTNAME = LASTNAME
	  DEPARTMENT = DEPARTMENT
	  TITLE = TITLE
	  PHONE = PHONE
	  FAX = FAX
	
	Stop and restart the Microsoft Exchange Connector for Novell GroupWise. In the
	Exchange Server Administrator program, in the Microsoft Exchange Connector for
	Novell GroupWise Properties, click the Dirsynch Schedule tab. Click the
	"Immediate Full Reload of GroupWise to Exchange Directory Synchronization"
	option. You may want to do this during off-peak hours so that the impact on your
	messaging environment is minimal.
	
	The GroupWise users should now be in the format of LastName, FirstName.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
