---
layout: page
title: "Q263755: XFOR: Lotus Notes Command-Line Migration Instructions Incomplete"
permalink: /kb/263/Q263755/
---

## Q263755: XFOR: Lotus Notes Command-Line Migration Instructions Incomplete

	Article: Q263755
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2 exc55sp3 kbExchange2000SP1Fix
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Migration Wizard that is included with Exchange Server 5.5 Service Pack 1
	and later allows you to migrate mailboxes and calendars from Lotus Notes. The
	documentation that is included with these service packs contains instructions
	about how to use command-line options to migrate information from a Lotus Notes
	server. However, this documentation is incomplete.
	
	MORE INFORMATION
	================
	
	In Exchange Server 5.5 Service Pack 1, the Readme.rtf file contains the
	instructions about how to use the Migration Wizard to migrate information from
	Lotus Notes. In Exchange Server 5.5 Service Packs 2 and 3, the Readmigr.rtf file
	contains these instructions.
	
	The existing instructions include the following text:
	
	  
	
	  Using Command-Line Options
	  --------------------------
	
	  You can run the Migration Wizard using a combination of command-line options
	  and a control file. For general information on command-line options, see
	  Microsoft Exchange Server Migration, which is included in the Exchange Server
	  5.5 documentation.
	
	  The specific control file option for migrating from a Lotus Notes server is
	  Mode and the value is NOTES.
	
	  The accounts file, specified by the Accounts option in the control file, lists
	  the specific accounts to migrate. The format for names in the optional
	  accounts file is different than the format that appears in the Migration
	  Wizard. To list specific accounts, use the following format:
	
	  <First name> <Last name>/<Notes Organization Name>
	
	  For example: Maria Black/FergBard
	
	  If the Lotus Notes address book uses the Middle Initial field, use the
	  following format:
	
	  <First name> <Initial> <Last name>/<Notes Organization
	  Name>
	
	  For example: Maria R Black/FergBard
	
	  NOTE: Any option that applies when Mode is CCMAIL also applies when Mode is
	  NOTES.
	
	The above text from the existing instructions does not indicate that the
	following keywords can be used in the control file when you migrate from a Lotus
	Notes server:
	
	- Notesini: Location of the Notes.ini file. This keyword is required. By
	  default, the Migration Wizard attempts to locate the file in the Winnt
	  folder.
	
	- Accounts: Location of the file that contains a list of user accounts to
	  migrate. This keyword is required. By default, the Migration Wizard migrates
	  all of the user accounts on the Lotus Notes post office.
	
	- Schedule: Specifies whether or not to extract schedule information. This
	  keyword is optional. The valid values for this keyword are TRUE and FALSE.
	  The default value is TRUE.
	
	- Tasks: Specifies whether or not to migrate tasks. This keyword is optional.
	  The valid values for this keyword are TRUE and FALSE. The default value is
	  TRUE.
	
	- DocLinkConversion: Specifies how Lotus Notes document links are converted
	  within the messages being migrated. This keyword is optional. The valid
	  values for this keyword are:
	
	   - URL: Document links are converted to hyperlinks within the message.
	   - OLE: Document links are converted to OLE attachments within the message.
	   - RTF: Document links are converted to Rich Text Format (RTF) attachments
	     within the message.
	
	  The default value is RTF.
	
	All of the other keywords that you can use for a Lotus Notes migration are the
	same as the keywords that you use for a Lotus cc:Mail migration.
	
	When you use command-line options to migrate information from a Lotus Notes
	server, use the following syntax
	
	  "mailmig /c:control file /a:User.ID file /p:password" (without the quotation
	  marks)
	
	where control file is the location of the Notes.ini file, User.ID file is the
	location of the Lotus Notes User.ID file, and password is the password
	associated with the User.ID file.
	
	For additional information about the command-line options that are available for
	the Migration Wizard and the keywords that you can use in the control file,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q198957 XFOR: Command Line Parameters for the Latest Migration Wizard
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 exc55sp3 kbExchange2000SP1Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
