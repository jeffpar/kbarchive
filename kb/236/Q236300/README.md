---
layout: page
title: "Q236300: XFOR: Notes Migration Wizard Only Looks at Names.nsf"
permalink: /kb/236/Q236300/
---

## Q236300: XFOR: Notes Migration Wizard Only Looks at Names.nsf

{% raw %}

	Article: Q236300
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Migration Wizard, a list of Lotus Notes
	users available for migration is displayed. The list may not include all the
	Notes users. This article explains the cause of this problem and suggests a
	workaround action to this problem.
	
	CAUSE
	=====
	
	The Migration Wizard first verifies the existence of Regist.nsf file, a special
	Name and Address Book (NAB) for some Japanese installations of Notes. If the
	Regist.nsf file exists, the wizard uses a different set of fields for migration.
	If it does not exist, the Migration Wizard only looks for the Names.nsf file. If
	the address list is kept in a different database (file), those users' names are
	not displayed in the Migration Wizard User Interface (UI).
	
	WORKAROUND
	==========
	
	If you want the users to be included in the migration, you must add their names
	to the Names.nsf file. The following list of required and optional fields in a
	Notes Document shows the mappings that the Migration Wizard uses.
	
	The required fields:
	
	  Form=Person
	  Mailserver=<server being migrated (DN or Abbreviated DN)>
	  Mailfile=<NSF being migrated>
	  Fullname=<Full name of user being migrated>
	
	Optional Fields that will be migrated (if available):
	
	  ShortName => Mail-Nickname & NT-Acct-Name/Obj-User
	  FirstName => Given-Name
	  LastName => Surname
	  MiddleInitial => Initials
	  CompanyName => Company
	  Department => Department
	  Assistant => Assistant-Name
	  JobTitle => Title
	  Location => Physical-Delivery-Office-Name
	
	  OfficePhoneNumber => Telephone-Office1
	  CellPhoneNumber => Telephone-Mobile
	  OfficeFAXPhoneNumber => Telephone-Fax
	  PhoneNumber => Telephone-Home
	  HomeFAXPhoneNumber => Telephone-Home-Fax
	  Comment => Comment
	  State => State-Or-Province-Name
	  StreetAddress => Street-Address
	  Zip => Postal-Code
	  City => Locality-Name
	  country => Text-Country
	  Manager => Extension-Attribute-13
	  Children => Extension-Attribute-2
	  Spouse => Extension-Attribute-1
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
