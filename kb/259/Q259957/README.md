---
layout: page
title: "Q259957: XCLN: Sample Outlook.prf File with Internet E-mail Service"
permalink: /kb/259/Q259957/
---

## Q259957: XCLN: Sample Outlook.prf File with Internet E-mail Service

{% raw %}

	Article: Q259957
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an administrator deploys Outlook, the administrator can configure Internet
	E-mail service for a user Messaging Application Programming Interface (MAPI)
	profile by using a Profile Descriptor File (.prf).
	
	The Microsoft Office 2000 Resource Kit contains a sample Outlook.prf file with
	example Internet E-mail service options. The "More Information" section of this
	article contains the complete text of the Outlook.prf file that is included with
	the Resource Kit.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Automatic Profile Generator (Newprof.exe) reads a Profile
	Descriptor File (.prf), and then creates a profile based on the information in
	the file.
	
	Newprof.exe version 5.5.2325 or later is required to create a MAPI profile with
	Internet E-mail service(s) for Outlook 98. Newprof.exe version 5.5.3121.0
	(shipped with SR1a) or later is needed to create a MAPI profile with Internet
	E-mail service(s) for Outlook 2000. The Microsoft IExpress Deployment Kit
	contains Newprof.exe version 5.5.2803. For additional information about the
	IExpress Deployment Kit, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q237803 XCLN: Updated Version of the IExpress Deployment Kit Available
	
	Contents of the sample Outlook.prf file:
	=================================
	
	; Sample PRF file for creating Outlook profiles in Corporate or Workgroup
	configuration
	;
	-------------------------------------------------------------------------------------
	; Copyright (C), Microsoft Corporation, 1997-1999.
	;
	; The following PRF file is included as an example of how to create a PRF file
	that will
	; configure a profile with the following services: Microsoft Exchange Server,
	Outlook
	; Address Book, Personal Folders, and Internet E-mail (POP3). Sections 1 through
	5 may;
	; be modified; DO NOT MODIFY SECTIONS 6 and 7. It will most likely prevent the
	profile
	; from being properly created Be very careful when editing to ensure property
	values
	; match their property types.
	
	; Note that sections 2 and 3 are similar. Section 2 determines the kind and
	number
	; of MAPI services, while section 3 determines the number of accounts. Sections 4
	and
	; 5 are also similar. Section 4 determines specific settings for each MAPI
	service,
	; while section 5 determines specific settings for Internet Accounts. Finally,
	sections
	; 6 and 7 are also similar; they display the possible settings for MAPI services
	and
	; Internet Accounts, respectively.
	
	; ************************************************************************
	; Section 1 - Profile defaults.
	; ************************************************************************
	
	[General]
	Custom=1
	; -- Required. Indicates that this is a customized PRF file.
	ProfileName=Microsoft Outlook
	DefaultProfile=Yes
	OverwriteProfile=Yes
	DefaultStore=Service2
	
	; ************************************************************************
	; Section 2 - Services in profile.
	; ************************************************************************
	; The list of MAPI services that will be added to the profile.
	
	[Service List]
	Service1=Microsoft Outlook Client
	Service2=Microsoft Exchange Server
	Service3=Outlook Address Book
	Service4=Personal Folders
	Service5=Internet E-mail
	; If you add an Internet E-mail service, you also have to add an Account in
	; section 3.
	
	; ************************************************************************
	; Section 3 - List of internet accounts.
	;*******************************************************************
	; The list of accounts that will be created.
	
	[Internet Account List]
	Account1=I_Mail
	
	; ************************************************************************
	; Section 4 - Default values for each service.
	; ************************************************************************
	
	[Service1]
	; No settings configured.
	
	[Service2]
	ConversionProhibited=TRUE
	HomeServer=<Exchange Server>
	; Required.
	; -- The name of the Microsoft Exchange Server the user should
	; connect to. You can specify any Microsoft Exchange Server
	; in your site, and the correct Home Server will be assigned;
	; when the user first logs on.
	
	[Service3]
	Ben=TRUE
	; -- Dummy property. Do not delete or modify.
	
	[Service4]
	PathToPersonalFolders=c:\outlook.pst
	; The directories in the path to the personal folders must already exist
	
	[Service5]
	AccountName=PopAccount
	' The AccountName has to match the Account name in Section 5.
	LongAccountName=Internet E-mail - PopAccount
	; The LongAccountName always has to be "Internet E-mail -" + <space> +
	AccountName
	
	; ************************************************************************
	; Section 5 - Values for each internet account.
	; *******************************************************************
	; The settings for each account that will be created. The available
	; account settings are listed in Section 3, below.
	
	[Account1]
	; This is an example of a POP3 account
	AccountName=PopAccount
	ConnectionType=1
	POP3Server=MyPOPServer
	SMTPDisplayName=Someone
	SMTPEmailAddress=someone@microsoft.com
	SMTPOrgName=Personal
	SMTPServer=MySMTPServer
	
	; ************************************************************************
	; Section 6 - Mapping for profile properties. DO NOT MODIFY.
	; ************************************************************************
	
	; ************************************************************************
	; Outlook settings stored in the profile
	[Microsoft Outlook Client]
	SectionGUID=0a0d020000000000c000000000000046
	
	FormDirectoryPage=PT_STRING8,0x0270
	; -- The URL of Exchange Web Services Form Directory page used to
	; create Web forms.
	
	WebServicesLocation=PT_STRING8,0x0271
	; -- The URL of Exchange Web Services page used to display
	; unknown forms.
	
	ComposeWithWebServices=PT_BOOLEAN,0x0272
	; -- Set to TRUE to use Exchange Web Services to compose forms.
	
	PromptWhenUsingWebServices=PT_BOOLEAN,0x0273
	; -- Set to TRUE to use Exchange Web Services to display unknown
	; forms.
	
	OpenWithWebServices=PT_BOOLEAN,0x0274
	; -- Set to TRUE to prompt user before opening unknown forms when
	; using Exchange Web Services.
	
	; ************************************************************************
	; Microsoft Exchange Server service definitions.
	[Microsoft Exchange Server]
	ServiceName=MSEMS
	MDBGUID=5494A1C0297F101BA58708002B2A2517
	
	MailboxName=PT_STRING8,0x6607
	; -- The name of the user's Exchange Server Mailbox
	
	HomeServer=PT_STRING8,0x6608
	; -- The name of the Microsoft Exchange Server the user should
	; connect to. You can specify any Microsoft Exchange Server
	; in your site, and the correct Home Server will be assigned;
	; when the user first logs on.
	
	OfflineFolderPath=PT_STRING8,0x6610
	; -- The path to the Offline Store File that contains
	; local replicas of the user's Mailbox and Favorites.
	; If you do not specify a value, no Offline Store will
	; be created. If you specify a path, an Offline Store
	; will be created and the Inbox, Outbox, Deleted Items,
	; and Sent Items folders will be replicated to it.
	
	OfflineAddressBookPath=PT_STRING8,0x660E
	; -- The path to the directory to store offline address
	; book files in.
	
	ExchangeConfigFlags=PT_LONG,0x6601
	; -- Behavior when connecting to the Exchange Server.
	; 32 - Auto detect online/offline connection state (default)
	; 48 - Always connect online
	; 50 - Prompt user for online or offline connection
	
	ConversionProhibited=PT_BOOLEAN,0x3A03
	; -- A boolean value indicating whether NEWPROF should
	; attempt to resolve the Exchange mailbox name at run time.
	; If set to TRUE, NEWPROF will copy the name to the profile
	; without resolving it.
	; If FALSE, the name will be resolved. Invalid server or
	; mailbox name will not be copied to the profile.
	
	; ************************************************************************
	; Microsoft Mail service definitions.
	[Microsoft Mail]
	ServiceName=MSFS
	
	ServerPath=PT_STRING8,0x6600
	; -- The path to the users post office. Mapped network drives, UNC and NETWARE
	paths
	; are acceptable. NETWARE paths of the type NWServer/share:dir\dir1 are converted
	to
	; UNC paths of the type \\NWServer\share\dir\dir1.
	
	Mailbox=PT_STRING8,0x6601
	; -- The users mailbox name. eg. in a NET/PO/USER address,
	; this is USER. The maximum mailbox name is 10 characters.
	
	Password=PT_STRING8,0x67f0
	; -- The users mailbox password. The maximum password is 8 characters.
	
	RememberPassword=PT_BOOLEAN,0x6606
	; -- A boolean value indicating whether the users password is
	; to be remembered in the profile or not. This is useful because
	; if the password is remembered the user can bypass the logon prompt
	; if his server path, mailbox name and password are all supplied.
	
	ConnectionType=PT_LONG,0x6603
	; -- The connection type. This may be one of CFG_CONN_AUTO, CFG_CONN_LAN,
	; CFG_CONN_REMOTE, CFG_CONN_OFFLINE as defined below.
	;
	; 0x0 -- LAN type connection. Used to connect to the post office using a
	; UNC path or pre-existing mapped drive.
	; 0x1 -- Dial up connection using Dial-up Networking.
	; 0x2 -- Not connected.
	; 0x3 -- Automatically detect whether the connection type is LAN or REMOTE.
	; This connection type is only available on Win95.
	
	UseSessionLog=PT_BOOLEAN,0x6604
	; -- A boolean value indicating whether session logging
	; is on or off.
	
	SessionLogPath=PT_STRING8,0x6605
	; -- The path to the session log file.
	
	EnableUpload=PT_BOOLEAN,0x6620
	; -- A boolean value which indicates whether mail in the outbox
	; is sent.
	
	EnableDownload=PT_BOOLEAN,0x6621
	; -- A boolean value which indicates whether mail in the server
	; mailbag is downloaded.
	
	UploadMask=PT_LONG,0x6622
	; -- A bit array which allows the user to indicate which addresses
	; for which the transport is to attempt delivery. This is useful
	; in order to allow a user to specify that a transport only handle
	; delivery for a subset of the addresses it can really process.
	; When multiple transports are installed and the user wants a
	; different transport to handle some specific address types they
	; can use this bit array to specify that the MSMAIL transport
	; only handle a specific set of addresses.
	;
	; Possible values as defined below include:
	;
	; 0x00000001 -- Local Post Office and External Post Office address types
	; 0x00000002 -- PROFS address types
	; 0x00000004 -- SNADS address types
	; 0x00000008 -- MCI address types
	; 0x00000010 -- X.400 address types
	; 0x00000040 -- FAX address types
	; 0x00000080 -- MHS address types
	; 0x00000100 -- SMTP address types
	; 0x00000800 -- OfficeVision address types
	; 0x00001000 -- MacMail address types
	; 0x000019df -- All of the above address types
	
	NetBiosNotification=PT_BOOLEAN,0x6623
	; -- A boolean value which indicates whether a netbios notification
	; is sent to a recipients transport when mail is delivered to
	; their server inbox.
	
	NewMailPollInterval=PT_STRING8,0x6624
	; -- The polling interval in minutes when the transport
	; checks for new mail. 1 <= polling interval <= 9999
	
	DisplayGalOnly=PT_BOOLEAN,0x6625
	; -- A boolean value which, if TRUE, only displays the Microsoft Mail Global
	Address
	; list for name selection. The Postoffice list, external post office lists, and
	gateway
	; address lists are not shown.
	
	UseHeadersOnLAN=PT_BOOLEAN,0x6630
	; -- A boolean value which indicates whether the user wants to enable
	; headers while working on the LAN. Headers mode allows the user
	; to download message headers and selectively choose which mail
	; to download.
	
	UseLocalAdressBookOnLAN=PT_BOOLEAN,0x6631
	; -- A boolean value which indicates whether the user wants to use
	; name resolution based on a local copy of the server address book
	; rather than the server address book itself.
	
	UseExternalToHelpDeliverOnLAN=PT_BOOLEAN,0x6632
	; -- A boolean value which indicates whether EXTERNAL.EXE, a server process,
	should be used
	; to deliver submitted mail messages. This is sometimes useful when mail is
	running
	; on a slow LAN connection.
	
	UseHeadersOnRAS=PT_BOOLEAN,0x6640
	; -- A boolean value which indicates whether the user wants to enable
	; headers while working over a slow speed link. Headers mode
	; allows the user to download message headers and selectively
	; choose which mail to download.
	
	UseLocalAdressBookOnRAS=PT_BOOLEAN,0x6641
	; -- A boolean value which indicates whether the user wants to use
	; name resolution based on a local copy of the server address book
	; rather than the server address book itself.
	
	UseExternalToHelpDeliverOnRAS=PT_BOOLEAN,0x6639
	; -- A boolean value which indicates whether EXTERNAL.EXE, a server process,
	should be used
	; to deliver submitted mail messages. This speeds up message delivery when mail
	is
	; running on a Dial-up network connection.
	
	ConnectOnStartup=PT_BOOLEAN,0x6642
	; -- A boolean value which indicates that a Dial-up Network connection should
	; be established when the transport provider starts up.
	
	DisconnectAfterRetrieveHeaders=PT_BOOLEAN,0x6643
	; -- A boolean value which indicates that a Dial-up Network connection should
	; be automatically terminated when headers are finished downloading.
	
	DisconnectAfterRetrieveMail=PT_BOOLEAN,0x6644
	; -- A boolean value which indicates that a Dial-up Network connection should
	; be automatically terminated after mail has finished being sent
	; received.
	
	DisconnectOnExit=PT_BOOLEAN,0x6645
	; -- A boolean value which indicates that a Dial-up Network connection should
	; be automatically terminated when the provider is exited.
	
	DefaultDialupConnectionName=PT_STRING8,0x6646
	; -- The name of the Dial-up Network profile that the transport will use by
	; default to attempt the connection.
	
	DialupRetryCount=PT_STRING8,0x6648
	; -- Number of times to attempt dial for connection.
	; 1 <= retry attempts <= 9999
	
	DialupRetryDelay=PT_STRING8,0x6649
	; -- Delay between retry attempts in seconds.
	; 30 <= retry delay <= 9999
	
	; ************************************************************************
	; Personal Folders service definitions.
	
	[Personal Folders]
	ServiceName=MSPST MS
	
	PathToPersonalFolders=PT_STRING8,0x6700
	; -- Path to personal folders.
	
	RememberPassword=PT_BOOLEAN,0x6701
	; -- A boolean value that determines if the personal folders password
	; should be cached.
	
	EncryptionType=PT_LONG,0x6702
	; -- A value that designates the type of encryption that is used to
	; compress the data in the PST:
	;
	; No Encryption 0x80000000
	; Compressable Encryption 0x40000000
	; Best Encryption 0x20000000
	
	Password=PT_STRING8,0x6703
	; -- PST password.
	
	; ************************************************************************
	; Outlook Address Book service definitions.
	
	[Outlook Address Book]
	ServiceName=CONTAB
	Ben=PT_STRING8,0x6700
	; -- Dummy property. Do not modify.
	
	; ************************************************************************
	; Microsoft LDAP Directory service definitions.
	[Microsoft LDAP Directory]
	ServiceName=EMABLT
	
	LDAPServer=PT_STRING8,0x6600
	; -- This is the IP address or host name of the machine containing
	; the LDAP server.
	
	LDAPServerPort=PT_STRING8,0x6601
	; -- The port number that the LDAP server is listening on.
	
	UserName=PT_STRING8,0x6602
	; -- Enter the user's name. This value is not required if you allow
	; anonymous binds.
	
	SearchBase=PT_STRING8,0x6603
	; -- The Search Base (e.g. o=microsoft, c=US).
	
	SearchFilter=PT_STRING8,0x6604
	; -- The Search Filter in RFC1777 format with %s allowed as a
	; substitution token for the name to be searched for. For example,
	; (|(cn=*%s*)(sn=*%s*)) can be used to perform a search on common name
	; or surname.
	
	MAPIAddressType=PT_STRING8,0x6605
	; -- The address type to be used by MAPI in message submission. For
	; example, SMTP.
	
	EMailAttribute=PT_STRING8,0x6606
	; -- The E-Mail Attribute (e.g. mail, mhsOrAddresses or
	; rfc822Mailbox), which is mapped to the MAPI PR_EMAIL_ADDRESS property.
	
	LDAPTimeLimit=PT_STRING8,0x6607
	; -- LDAP Time Limit for searching (in seconds). The maximum length of
	; time to search the directory. A value of 0 means that the search will
	; not be limited by time. Note that this will not necessarily supersede
	; any system-wide limits defined on the server.
	
	LDAPSizeLimit=PT_STRING8,0x6608
	; -- LDAP Size limit for searching (in number of 'hits'). The maximum
	; number of matches to return. A value of 0 means that there is no
	; limit to the number of matches. Note that this will not necessarily
	; supersede any system-wide limits defined on the server.
	
	LDAPTimeLimitLowBand=PT_STRING8,0x6609
	; -- Same as LDAP Time Limit, except for low bandwidth links.
	
	LDAPSizeLimitLowBand=PT_STRING8,0x660a
	; -- Same as LDAP Size Limit, except for low bandwidth links.
	
	LogFilePath=PT_STRING8,0x660b
	; -- Log File (full pathname).
	
	ErrorLogging=PT_STRING8,0x660c
	; -- Error Logging Levels , ON or OFF.
	
	DisplayNameSource=PT_STRING8,0x6611
	; -- Attribute to be used within the Internet Directory entry for
	; populating the user Display Name.
	
	DisplayFailDialog=PT_STRING8,0x6612
	; -- Attribute to determine if a dialog will be displayed when a search
	; to the Internet Directory fails. The dialog will display additional
	; information. Values can be either 1 (display) or 0 (do not display).
	
	[Internet E-Mail]
	; If you configure an Internet E-mail service, then you also need to add
	; information in section 5.
	
	ServiceName=IMAIL
	; When creating an Internet E-Mail service, both AccountName and
	; LongAccountName MUST BE specified!
	
	AccountName=PT_STRING8,0x661f
	; This should be exactly the same as the I_Mail AccountName
	; property.
	
	LongAccountName=PT_STRING8,0x3001
	; This should be the "Internet E-mail - " + the AccountName
	; property. For example, if AccountName="foo", then this
	; should be "Internet E-mail - foo".
	
	; ************************************************************************
	; Section 7 - Mapping for internet account properties. DO NOT MODIFY.
	; ************************************************************************
	
	; Internet E-Mail service Settings/Definitions
	; In a Corporate or Workgroup configuration, the only type of account that
	; can be created is an I_MAIL (POP3) account. You can use settings from
	; the [I_Mail] section below.
	;
	
	[I_Mail]
	; *****************************
	; *** Mail Account Settings ***
	; *****************************
	; Configurable settings for POP3 (Corporate and Intenet Only configs)
	; and IMAP (Internet Only config only) mail accounts
	
	AccountName=PT_STRING8,0x1235
	; The name of the account that appears in the Account List.
	
	ConnectionType=PT_DWORD,0x1239
	; Values:
	; 0 = Connect using local area network (LAN).
	; 1 = Connect using Internet Explorer's or a 3rd party dialer.
	; 2 = Connect using modem and the Dial-up Networking connection
	; specified in the Connectoid property.
	
	Connectoid=PT_STRING8,0x123A
	; Specify the existing Dial-up Networking connection to use.
	
	; -----------------------------
	; --- POP3 Account Settings ---
	; -----------------------------
	
	POP3Server=PT_STRING8,0x13C4
	; Specifies the name of the POP3 server used for incoming messages.
	
	POP3UseSicily=PT_BOOLEAN,0x13C8
	; Set to 1 if you want to use Secure Password Authentication to logon
	; to the POP3 server.
	
	POP3LogonName=PT_STRING8,0x13C5
	; If POP3UseSicily is turned on, this sets the name used to logon
	; to the POP3 server.
	
	POP3Port=PT_DWORD,0x13C9
	; Specfies the port number used to connect to the POP3 server.
	
	POP3SSL=PT_BOOLEAN,0x13CA
	; Set to 1 to use the SSL (Secure Sockets Layer) security protocal to
	; connect to the POP3 server.
	
	POP3TimeOut=PT_DWORD,0x13CB
	; Specifies how long to wait for a response for the server before
	; stopping to attempt to send or receive messages. Possible values:
	; 30 = 30 seconds
	; 60 = 1 minute
	; 90 = 1 minute 30 seconds
	; 120 = 2 minutes
	; 150 = 2 minutes 30 seconds
	; 180 = 3 minutes
	; 210 = 3 minutes 30 seconds
	; 240 = 4 minutes
	; 270 = 4 minutes 30 seconds
	; 300 = 5 minutes
	
	POP3LeaveOnServer=PT_BOOLEAN,0x13CC
	; Set to 1 to store a copy of all sent and received messages on the
	; POP3 server.
	
	POP3RemoveExpired=PT_BOOLEAN,0x13CE
	; If POP3LeaveOnServer is turned on, set to 1 to delete messages on
	; the server after a specific number of days (see also
	; POP3ExpireDays).
	
	POP3ExpireDays=PT_DWORD,0x13CF
	; If POP3LeaveOnServer and POP3RemoveExpired are turned on, sets
	; the number of days after which messages left on the server will
	; be deleted.
	
	POP3RemoveDeleted=PT_BOOLEAN,0x13CD
	; This property is only supported on Outlook 98 (8.5)or higher! If
	; you try to use it on Outlook 97 (8.0x) the account will not be
	; created.
	; If POP3LeaveOnServer is turned on, set to 1 to delete a message
	; from the server when the message is deleted from the Deleted
	; Items folder on the local machine.
	
	; -----------------------------
	; --- SMTP Account Settings ---
	; -----------------------------
	
	SMTPServer=PT_STRING8,0x1428
	; Specifies the name of the SMTP server used for outcoming messages.
	
	SMTPUseSicily=PT_DWORD,0x142C
	; Values:
	; 0 = No server authentication required.
	; 1 = Use Secure Password Authentication, or set SMTP server logon
	; name using SMTPLogonName.
	
	SMTPLogonName=PT_STRING8,0x1429
	; If SMTPUseSicily is set to 1, this sets the name used to logon to
	; the SMTP server.
	
	SMTPPort=PT_DWORD,0x142D
	; Specfies the port number used to connect to the SMTP server.
	
	SMTPSSL=PT_BOOLEAN,0x142E
	; Set to 1 to use the SSL (Secure Sockets Layer) security protocal to
	; connect to the SMTP server.
	
	SMTPTimeOut=PT_DWORD,0x142F
	; Specifies how long to wait for a response for the server before
	; stopping to attempt to send or receive mail messages. Values are
	; the same as POP3TimeOut.
	
	SMTPDisplayName=PT_STRING8,0x1430
	; Specifies the "friendly" name associated with the email address.
	
	SMTPOrgName=PT_STRING8,0x1431
	; Specifies the group or organization.
	
	SMTPEmailAddress=PT_STRING8,0x1432
	; Specifies the email address. Must be in the format name@company
	
	SMTPReplyAddress=PT_STRING8,0x1433
	; Specifies that replies to outgoing email should be sent to this
	; email address.
	
	SMTPSplitMessages=PT_BOOLEAN,0x1434
	; This property is only supported on Outlook 98 (8.5) or higher! If
	; you try to use it on Outlook 97 (8.0x) the account will not be
	; created.
	; Set to 1 to break up outgoing messages, so that each message is
	; smaller than the file size indicated by SMTPSplitSize.
	
	SMTPSplitSize=PT_DWORD,0x1435
	; The maximum size, in KB, of a piece of a split message.
	
	REFERENCES
	==========
	
	For more information on using the IExpress Deployment Kit to create profiles,
	please see the following article in the Microsoft Knowledge Base:
	
	For additional information about using the IExpress Deployment Kit to create
	profiles, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q198113 XCLN:How To Use IExpress To Generate Profiles for Users at Logon
	
	The online version of the Office 2000 Resource kit is available at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/Office/ORK
	
	Additional query words: outlook.prf newprof internet
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
