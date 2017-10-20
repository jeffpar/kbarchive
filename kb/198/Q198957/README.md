---
layout: page
title: "Q198957: XFOR: Command Line Parameters for the Latest Migration Wizard"
permalink: /kb/198/Q198957/
---

## Q198957: XFOR: Command Line Parameters for the Latest Migration Wizard

{% raw %}

	Article: Q198957
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article includes all available information, as well as any new updates, to
	the Migration Wizard as of the release of Microsoft Exchange Server 5.5 Service
	Pack 2.
	
	MORE INFORMATION
	================
	
	Command-Line Options for the Migration Wizard:
	
	You can use the Migration Wizard or a combination of command-line options and a
	control file to perform migration. The command-line options are as follows.
	
	/C:<control file> Specifies the path and file name of the control file.
	
	/A:<account name> The administrator account name for either a Microsoft
	Mail (PC) or Novell GroupWise postoffice. Not needed for migration file import,
	Lotus cc:Mail, or Collabra Share migration.
	
	/P:<password> The password for the administrator account on the Microsoft
	Mail (PC) or Lotus cc:Mail Postoffice, or the password for the Novell GroupWise
	migration ID. Not needed for migration file import.
	
	/S Silent mode. No error dialog boxes are displayed. All errors are written to
	the Windows NT Application Event log.
	
	/? Displays the Help text files.
	
	NOTE: If you are using the Migration Wizard in batch mode, the code page of the
	control file and the account file must be the Windows Default code page. Use the
	code page for the language you are migrating.
	
	For example:
	
	  mailmig /C:d:\migrate\po72195.txt
	  mailmig /C:Salespo.txt /A:Admin /P:Katmandu
	
	When run in a batch mode, mailmig returns result codes depending on the success
	of the processing:
	
	- 0=success: no errors or warnings
	
	- 1=warnings, no errors
	
	- 2=errors, possible warnings
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q263755 XFOR: Lotus Notes Command-Line Migration Instructions Incomplete in
	  Existing Service Pack Documentation
	
	Control File Keywords:
	
	The control file is a text file that includes the options listed below. Each
	option is followed by a brief description.
	
	Mode The mode for this migration. Valid options are FILE, MSMAILPC, CCMAIL,
	COLLABRA, NOTES, GRPWISE, GRPWISE5, ADSI(for LDAP), and IMAP. If included, it
	must be the first line in the control file. (Required)
	
	Function The migration function to perform. Valid options are FULL, EXTRACT, and
	IMPORT. FULL means to perform a full migration (extract and import). EXTRACT
	means to extract a user list file (MS Mail PC) or to extract migration files
	(Lotus cc:Mail, Lotus Notes, Novell GroupWise, Novell GroupWise 5.x, LDAP, IMAP,
	and Collabra Share). IMPORT means to perform an MS Mail (PC) import from a user
	list file or to import migration files created by one of the other extractors.
	Defaults to FULL. Note that this is ignored unless Mode option is set to
	MSMAILPC, CCMAIL, NOTES, COLLABRA, GRPWISE, GRPWISE5, IMAP or LDAP. (Optional)
	
	File (Required when Mode option is set to FILE, or Function option is set to
	EXTRACT or IMPORT, or the Mode option is set to CCMAIL, NOTES, COLLABRA,
	GRPWISE, GRPWISE5, ADSI, or IMAP.) Specify the path and file name of the packing
	list or userlist file, or for CCMAIL, NOTES, COLLABRA, ADSI, IMAP, GRPWISE or
	GRPWISE5, specify the path to the temporary directory for migration files.
	
	Accounts (Optional and used when Mode is set to CCMAIL, NOTES, GRPWISE, MSMAILPC,
	GRPWISE5 or ADSI. Required when Mode is set to IMAP.) A userlist file with a
	listing of accounts to be migrated. If not specified, it defaults to all
	accounts in the postoffice or container (for LDAP). The format of the names in
	the accounts file must match the name format as it appears in the Migration
	Wizard account selection dialog box. Each name is on one line, followed by a
	carriage return and line feed. For IMAP, check the format of the userlist file
	with the Ldapimap.rtf documentation.
	
	Mailbox (Optional.) Whether to extract mailbox creation information and create
	the mailbox on Microsoft Exchange Server. If this is set to TRUE, mailboxes are
	created and messages are imported. If this is set to FALSE, messages are
	imported to existing mailboxes or mailboxes that are converted from custom
	recipients. Valid options are TRUE and FALSE. Defaults to TRUE.
	
	GWDomain The path to the GroupWise 5.x domain. Valid options are either a UNC
	path or a mapped drive location. (Applicable and required only when MODE is
	GRPWISE5).
	
	POName The name of the GroupWise 5.x Post Office to migrate or extract.
	(Applicable and required only when MODE is GRPWISE5).
	
	Postoffice (Required when Mode is MSMAILPC, CCMAIL, NOTES, COLLABRA, GRPWISE or
	ADSI). This specifies the full path to the container, including server name. In
	general the format can be:
	
	  M:\GRPWISE\PostOf LDAP_SERVER/OU=Recipients,O=MICROSOFT
	
	Secure (Optional; ignored unless Mode option is set to ADSI or IMAP). Valid
	options are TRUE and FALSE. Defaults to FALSE.
	
	Encrypted (Optional; ignored unless Mode option is set to ADSI or IMAP). Valid
	options are TRUE and FALSE. Defaults to FALSE.
	
	Port (Optional; ignored unless Mode option is set to ADSI). The port number for
	LDAP access may differ for each LDAP directory. The default port is 389.
	
	Email Whether to extract personal e-mail messages. Valid options are TRUE and
	FALSE. Defaults to TRUE. (Optional; ignored unless Mode option is set to
	MSMAILPC, CCMAIL, NOTES, GRPWISE, GRPWISE5, or IMAP.)
	
	Public (Optional; ignored unless Mode option is set to MSMAILPC, CCMAIL, or
	COLLABRA.) This is used to determine whether to extract shared folders, bulletin
	board or forum information. Valid options are TRUE and FALSE. Defaults to TRUE.
	Can not be used when MODE is GRPWISE5.
	
	PAB (Optional, ignored unless Mode option is set to MSMAILPC) Whether to extract
	personal address book (PAB) entries and PAB distribution lists. Valid options
	are TRUE and FALSE. Defaults to TRUE. Can not be used when MODE is GRPWISE5.
	
	Schedule (Optional; ignored unless Mode option is set to MSMAILPC, NOTES,
	GRPWISE, or GRPWISE5.) Whether to extract schedule information. Valid options
	are TRUE and FALSE. Defaults to TRUE.
	
	EmailStart (Optional; ignored unless Mode option is set to MSMAILPC, NOTES,
	CCMAIL, GRPWISE, GRPWISE5, or IMAP.) The earliest (start) date for filtering
	which e-mail messages are moved. It is in the date/time format (YYYYMMDDHHMMSS).
	Defaults to Jan 01, 1601. Messages without dates are always migrated.
	
	EmailEnd (Optional; ignored unless Mode option is set to MSMAILPC, NOTES, CCMAIL,
	GRPWISE, GRPWISE5, or IMAP.) The end date for filtering which e-mail messages
	are moved. It is in the date/time format (YYYYMMDDHHMMSS). Messages without
	dates are always migrated. Defaults to the current date.
	
	Home-Server (Required when Mailbox option is set to TRUE.) The Microsoft Exchange
	Server computer where information is to be migrated. Defaults to the server that
	was used last or the current machine name.
	
	Container (Optional; ignored unless Mailbox option is set to TRUE.) The container
	and path on the specified home server where new mailboxes are to be migrated.
	The path is formatted as follows:
	
	  Recipients/cn=users/cn=accnting
	
	where users is a subcontainer of Recipients and accnting is a subcontainer of
	users. Defaults to the Recipients container. The directory name is visible on
	the property page of the Recipients container and can be different from the
	display name. For example, the display name of the default Recipients container
	on a French Microsoft Exchange Server computer is "Destinataires," but the
	directory name is "Recipients."
	
	Template (Optional; ignored unless Mailbox option is set to TRUE or mailboxes are
	created.) The Microsoft Exchange Server alias for the template mailbox to be
	used in creating new mailboxes. If the template mailbox is in a different
	Recipients container from the new mailbox, the template must be specified with
	the full distinguished name. Defaults to null. To find the distinguished name of
	a mailbox, you can use Directory Export and set the header line of the export
	file to: obj-class,common-name,obj-dist-name.
	
	NTAccounts (Optional; ignored unless Mailbox option is set to TRUE.) Whether to
	create Windows NT accounts for new users and which value to use as the Windows
	NT account password. Valid options are RANDOM, ALIAS, and NO. RANDOM creates
	Windows NT accounts and generate random passwords. ALIAS creates Windows NT
	accounts and uses the Microsoft Exchange Server e-mail alias as the initial
	password. NO does not create Windows NT accounts. Defaults to NO.
	
	NTDomain (Optional; ignored unless Mailbox option is set to TRUE.) The Windows NT
	domain where new Windows NT accounts are to be created. Defaults to the domain
	that the user running migration is logged on to.
	
	DefFldPerms (Optional, ignored unless Public is set to TRUE.) Used to assign
	default access permissions to all users for migrated shared information. Valid
	options are None, Author, and PubEditor. Defaults to none. Can not be used when
	MODE is NOTES, GRPWISE, GRPWISE5, IMAP, or LDAP.
	
	FldOwner (Required if Public is set to TRUE.) Distinguished name of the account
	that will own the public folder. Can not be used when MODE is NOTES, GRPWISE,
	GRPWISE5, IMAP, or LDAP.
	
	ImportDestination (Optional; ignored unless MODE is set to MSMAILPC, CCMAIL,
	NOTES, GRPWISE, GRPWISE5, IMAP, or FILE.) Specifies the destination store for
	migrated data. Valid options are SERVER and PST. SERVER migrates information to
	the Microsoft Exchange Server information store. PST migrates information to
	personal folder (.PST) files and personal address books (.PAB). Default is
	SERVER.
	
	PSTPath (Ignored unless ImportDestination is set to PST.) The fully qualified
	path to the directory where personal folder (.PST) and personal address book
	(.PAB) files will be created.
	
	GWUserGRPName (Required if MODE is set to GRPWISE, otherwise ignored by
	everything else.) The name of the Novell GroupWise group whose members are to be
	migrated. This can not be used when MODE is GRPWISE5.
	
	SchdStart (Optional; ignored unless MODE is set to NOTES, GRPWISE or GRPWISE5.)
	The earliest (start) date for filtering which calendar data is moved. It is in
	the date/time format (YYYYMMDDHHMMSS). Defaults to Jan 01, 1601. Information
	without dates is always migrated.
	
	SchdEnd (Optional; ignored unless Mode option is set to NOTES, GRPWISE, or
	GRPWISE5.) The end date for filtering which calendar data is moved. It is in the
	date/time format (YYYYMMDDHHMMSS). Messages without dates are always migrated.
	If the keyword is not used, it defaults to all dates.
	
	Phone (Optional; ignored unless MODE option is set to GRPWISE or GRPWISE5.)
	Whether to migrate phone messages. Valid options are TRUE and FALSE. Defaults to
	TRUE.
	
	Appointments (Optional; ignored unless MODE option is set to GRPWISE or GRPWISE5)
	Whether to migrate appointments. Valid options are TRUE and FALSE. Defaults to
	TRUE.
	
	Notes (Optional; ignored unless MODE option is set to GRPWISE or GRPWISE5.)
	Whether to migrate notes. Valid options are TRUE and FALSE. Defaults to TRUE.
	
	Tasks (Optional; ignored unless MODE option is set to GRPWISE or GRPWISE5.)
	Whether to migrate tasks. Valid options are TRUE and FALSE. Defaults to TRUE.
	
	GWRTF (Optional; ignored unless MODE option is set to GRPWISE.) Indicates whether
	messages are migrated in Rich Text Format (RTF). If set to FALSE, messages are
	migrated in ANSI format. Valid options are TRUE and FALSE. Defaults to TRUE.
	
	! (Optional.) A comment delimiter. Must be the first value in the line.
	
	Sample Code
	
	The examples below are provided as examples only.
	
	Importing migration files created by a source extractor:
	! This is a control file for 'File' Migrations (that is, Import)
	
	  Mode,File<BR/>
	  File,C:\Migrate\Ccpo1225.pkl<BR/>
	  Home-Server,HONGKONG01<BR/>
	  Public,TRUE<BR/>
	  DefFldPerms,none<BR/>
	  FldOwner,/o=FAB/ou=AP/cn=Recipients/cn=Administrator<BR/>
	  Container,none<BR/>
	  Template,/o=FAB/ou=AP/cn=Recipients/cn=TemplateMailbox<BR/>
	  NTAccounts,RANDOM<BR/>
	  NTDomain,FAB-MAIN
	
	Microsoft Mail (PC) Extracting a user list:
	! This is a control file for 'MS Mail' Migrations
	
	  Mode,MSMAILPC<BR/>
	  File,C:\Migrate\Userlist.csv<BR/>
	  Function,Extract<BR/>
	  Email,FALSE<BR/>
	  PUBLIC,FALSE<BR/>
	  PAB,FALSE<BR/>
	  Schedule,FALSE<BR/>
	  Postoffice,M:\
	
	Microsoft Mail (PC) Importing with a user list, the template mailbox is in a
	different recipient container:
	! This is a control file for 'MS Mail' Migrations
	
	  Mode,MSMAILPC<BR/>
	  ImportDestination,SERVER<BR/>
	  File,C:\Migrate\Userlist.csv<BR/>
	  Function,IMPORT<BR/>
	  PUBLIC,FALSE<BR/>
	  Postoffice,M:\ <BR/>
	  EmailStart,19950101000000<BR/>
	  EmailEnd,19950102000000<BR/>
	  Home-Server,HONGKONG01<BR/>
	  Template,/o=FAB/ou=AP/cn=Recipients /cn=Template/cn=zTemplateMailbox<BR/>
	  NTAccounts,RANDOM<BR/>
	  NTDomain,FAB-MAIN
	
	Microsoft Mail (PC) One step migration:
	! This is a control file for 'MS Mail' Migrations
	
	  Mode,MSMAILPC<BR/>
	  ImportDestination,SERVER<BR/>
	  Postoffice,\\HONGKONGPO\MAILDATA\ <BR/>
	  EmailStart,19950101000000<BR/>
	  EmailEnd,19950102000000<BR/>
	  Home-Server,HONGKONG01<BR/>
	  Template,/o=FAB/ou=AP/cn=Recipients/cn=TemplateMailbox<BR/>
	  NTAccounts,RANDOM<BR/>
	  NTDomain,FAB-MAIN
	
	Lotus cc:Mail Extracting to migration files:
	! This is a control file for 'cc:Mail' Migrations
	
	  Mode,CCMAIL<BR/>
	  File,C:\MIGRATE\ <BR/>
	  Function,EXTRACT<BR/>
	  Public,FALSE<BR/>
	  Postoffice,M:\ <BR/>
	  POName,Region1PO
	
	Lotus:cc:Mail Importing migration files:
	! This is a control file for 'cc:Mail' Migrations
	
	  Mode,FILE<BR/>
	  File,C:\MIGRATE\CCPO1225.PKL<BR/>
	  Home-Server,HONGKONG01<BR/>
	  Template,/o=FAB/ou=AP/cn=Recipients/cn=TemplateMailbox<BR/>
	  NTAccounts,RANDOM<BR/>
	  NTDomain,FAB-MAIN
	
	Lotus cc:Mail One step migration:
	! This is a control file for 'cc:Mail' Migrations
	
	  Mode,CCMAIL<BR/>
	  File,C:\MIGRATE\ <BR/>
	  Function,FULL<BR/>
	  Public,FALSE<BR/>
	  Postoffice,M:\ <BR/>
	  POName,Region1PO<BR/>
	  Home-Server,HONGKONG01<BR/>
	  Template,/o=FAB/ou=AP/cn=Recipients/cn=TemplateMailbox<BR/>
	  NTAccounts,RANDOM<BR/>
	  NTDomain,FAB-MAIN
	
	Novell GroupWise 4.x One step migration:
	! This is a control file for 'GroupWise' Migrations
	
	  Mode,GrpWise<BR/>
	  Function,FULL<BR/>
	  PostOffice,M:\ <BR/>
	  File,C:\MIGRATE<BR/>
	  Home-Server,HONGKONG01<BR/>
	  Container,/o=FAB/ou=AP/cn=Recipients<BR/>
	  Template,/o=FAB/ou=AP/cn=Recipients/cn=TemplateMailbox<BR/>
	  NTAccounts,alias<BR/>
	  NTDomain,FAB-MAIN<BR/>
	  Accounts,C:\MIGRATE\HK_HQ\MIGUSERS.TXT<BR/>
	  GWRTF,TRUE
	
	Collabra Share One step migration:
	! This is a control file for 'Collabra' Migrations
	
	  Mode,Collabra<BR/>
	  Function,FULL<BR/>
	  PostOffice,\\CORP_1\SHARED<BR/>
	  File,C:\MIGRATE<BR/>
	  DefFldPerms,none<BR/>
	  FldOwner,/o=FAB/ou=AP/cn=Recipients/cn=FolderAdmin<BR/>
	  Home-Server,BALMAIN
	
	GroupWise 5.x One step migration:
	! This is a control file for 'GroupWise 5.x' Migrations
	
	  Mode, GRPWISE5<BR/>
	  GWDomain,\\MALAYSIA\SYS\GRPWISE5<BR/>
	  POName,Petaling Jaya<BR/>
	  File,C:\MIGRATE
	
	LDAP One step migration:
	! This is a control file for 'LDAP' Migrations
	
	  Mode, ADSI<BR/>
	  Postoffice, BEDLAM/OU=RECIPIENTS,O=MICROSOFT<BR/>
	  File,C:\MIGRATE
	
	IMAP One step migration:
	! This is a control file for 'IMAP' Migrations
	
	  Mode,IMAP<BR/>
	  File,C:\MIGRATE<BR/>
	  Accounts,C:\Migrate\Adsi.001\Imapusr.csv
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
