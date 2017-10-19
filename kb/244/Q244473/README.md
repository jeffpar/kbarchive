---
layout: page
title: "Q244473: XFOR: Foreign Connector Updates in Service Pack 3"
permalink: /kb/244/Q244473/
---

## Q244473: XFOR: Foreign Connector Updates in Service Pack 3

	Article: Q244473
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes new features in Microsoft Exchange Server 5.5 Service Pack 3 (SP3) as well as known issues.
	
	MORE INFORMATION
	================
	
	New Features
	------------
	
	Microsoft Exchange Server 5.5 SP3 includes the following new features:
	
	   - The Calendar Connector enables Exchange Server and Notes Domino R5 calendar compatibility.
	   - The Connector for Lotus Notes allows Exchange Server and Notes Domino R5 Server to interact.
	   - The Calendar Connector can be installed on any Exchange Server computer.
	   - The Exchange Connector for Novell GroupWise.
	   - The Exchange Connector for Lotus Notes converts Exchange Server Tasks and Lotus Notes "To Do" items to text messages.
	   - The Connector for Lotus Notes supports Korean.
	   - The Exchange SNADS Connector directory synchronization supports Netsys MEMO 6.2 and later.
	   - SNADS directory synchronization uses SAS/C compiler and libraries.
	   - Lotus Notes R5 users can add BCC Recipients to meeting requests.
	   - Lotus Notes R5 users can decline meeting requests with an additional option.
	   - Lotus Notes R5 users can request information about meeting requests.
	   - Microsoft Exchange Server Application Services for Lotus Notes.
	   - Updates to the Microsoft Exchange Server Application Services for Lotus Notes.
	   - Microsoft Importer for Lotus cc:Mail Archives.
	   - Migration wizard update.
	 
	
	The Calendar Connector Enables Exchange Server and Notes Domino R5 Calendar Compatibility:
	
	The Calendar Connector allows Exchange Server and Lotus Notes Domino R5 users to
	query each other's calendars for free and busy times.
	
	The Calendar Connector can be found on the SP3 CD in the
	<Drive>:\<Language>\Exchconn\Setup\<Platform>\Calcon folder,
	where <Platform> is the computer on which you are installing the
	connector.
	
	The Connector for Lotus Notes Allows Exchange Server and Notes Domino R5 Server to Interact:
	
	The Connector for Lotus Notes enables Exchange Server to exchange mail messages
	and meeting requests, and to synchronize directories with Lotus Domino R5
	Server.
	
	The Calendar Connector Can Be Installed on Any Exchange Server Computer:
	
	Earlier versions of the Microsoft Calendar Connector must be installed on an
	Exchange Server computer that hosts a replica of the Schedule+ Free/Busy
	Information public folder. This restriction has been removed in SP3. With SP3
	applied, the Calendar Connector may be installed on any Exchange Server
	computer.
	
	If you install the Calendar Connector on a server that does not host a replica of
	the Free/Busy public folder, you must set the following registry key to specify
	the name of the Exchange Server computer on which a replica of this public
	folder is located:
	
	  HKEY_LOCAL_MACHINE\System\Current Control
	  Set\Services\MSExchangeCalCon\Parameters\Replicas
	
	If you have multiple replicas of the Free/Busy public folder in the Exchange
	Server site, you must set the registry key to contain a comma-separated list of
	all server names that are hosting such replicas. The full name of the folder is
	Schedule+ Free Busy Information - <sitename>, where <sitename> is
	the name of the Exchange Server site containing the foreign (custom) recipient
	entries.
	
	The Exchange Connector for Novell GroupWise:
	
	The Exchange Connector for Novell GroupWise provides complete messaging and
	calendar interoperability between Exchange Server and Novell GroupWise. The
	connector provides complete bi-directional directory synchronization along with
	a transport that supports both standard messages and meeting requests.
	
	The Exchange Connector for Novell GroupWise is located on the SP3 CD in the
	<Drive>:\Exchconn\Setup\<Platform>\Gwxconn folder, where
	<Platform> is the computer on which you are installing the Exchange
	Connector for Novell GroupWise.
	
	When you combine the Exchange Connector for Novell GroupWise with the new
	Calendar Connector that provides free and busy reporting between the two
	systems, you have a complete messaging solution for connecting Exchange Server
	and GroupWise.
	
	The Exchange Connector for Lotus Notes Converts Exchange Server Tasks and Lotus Notes "To Do" Items to Text Messages:
	
	Exchange Server Tasks and Lotus Notes "To Do" items are converted to text
	messages when they are sent over the Connector for Lotus Notes. Work items are
	not exchanged between Notes and Exchange Server in an integrated fashion.
	
	The Connector for Lotus Notes Supports Korean:
	
	With SP3, the Connector for Lotus Notes supports Korean as one of the configured
	Notes server languages. When the connector inserts text of its own into a
	message (for example, the reason for a delivery failure), it does so in the
	language that you configure in the Exchange Server Administrator program.
	
	Notes server languages are configured in the Exchange Server Administrator
	program on the Options page of the Connector for Lotus Notes.
	
	The Exchange SNADS Connector Directory Synchronization Supports Netsys MEMO 6.2 and Later:
	
	When you install and configure the MEMO directory exchange agent on the mainframe
	as described in Chapter 6 of the User's Guide - Microsoft Exchange Server
	Connector for SNADS Directory Synchronization Component, you must choose the
	appropriate JCL modules from the MSFT.MEMO.INSTLIB dataset according to the
	following table.
	
	+-------------------------------------------------------------------------+
	| For MEMO version 6.1 or earlier use | For MEMO version 6.2 or later use | 
	+-------------------------------------------------------------------------+
	| JCLPUSH                             | JCLPSH62                          | 
	+-------------------------------------------------------------------------+
	| JCLPULL                             | JCLPUL62                          | 
	+-------------------------------------------------------------------------+
	| JCLSCHMA                            | JCLSC62                           | 
	+-------------------------------------------------------------------------+
	
	MEMO 6.2 and later uses a single new dataset called CATALOG to replace the
	CATBASE and CATCHG datasets used in earlier versions. If you are synchronizing
	with MEMO 6.2 or later, you must edit the dataset name for CATALOG in the
	JCLxxx62 members to match the naming conventions of your organization.
	
	JCLPSH62 invokes a new transaction program called MDXM021, instead of MDXM020,
	which is invoked by the older version JCLPUSH. This new module has been changed
	so that the MEMO UTLRAUSR utility no longer uses the CB= parameter. MDXM021
	still passes the CC= parameter to the utility, which is used to determine the
	amount of workspace required by the utility. This value is dynamically
	calculated by the program, based on the number of directory entries being
	synchronized into MEMO. If the calculated value is insufficient, you can
	override it by adding a specific parameter value on the EXEC statement in the
	JCLPSH62 JCL. For example:
	
	  //STEP1 EXECPGM=MDXM021,TIME=30,PARM='CC=99999'
	
	Configuring the Exchange Connector for SNADS:
	
	When you configure the Exchange Connector for SNADS using the Exchange Server
	Administrator program as described in Chapter 7 of the User's Guide - Microsoft
	Exchange Server Connector for SNADS Directory Synchronization Component, you
	must make a change on the Host Directory property page.
	
	Under Transaction Program Names, in the Exchange to Host box, type the value
	"MDXM021" (without the quotation marks) if you are synchronizing with MEMO 6.2
	or later. If you are using an earlier version of MEMO, accept the default value
	of MDXM020.
	
	SNADS Directory Synchronization Uses SAS/C Compiler and Libraries:
	
	SNADS Connector directory exchange agents are distributed with the SAS/C
	transient library for Multiple Virtual Storage (MVS). This article and the
	Microsoft Exchange Server 5.5 Service Pack 3 Release Note describe certain items
	to consider when you install the SAS/C transient libraries.
	
	The SAS/C C++ Compiler that is used to generate portions of code for this release
	of SNADS directory synchronization and the resident and SAS/C transient
	libraries are all release 6.00C with the zap Z6001594.
	
	The batch transient library is redistributed in the SASC.C600.LINKLIB dataset.
	
	If you have the SAS/C Compiler for MVS installed on your system, or the SAS/C
	transient library installed because it was redistributed with another product,
	it is important to use the correct version of the transient library. Use the
	latest release and maintenance level of the transient library for all code
	compiled with the SAS/C compiler unless a particular product requires a specific
	level of the transient library.
	
	SNADS Connector directory exchange agents are intended to run with the version
	supplied in the SASC.C600.LINKLIB library or later.
	
	Unload the SASC.C600.LINKLIB transient library into a single dataset. This
	dataset can be provided in JCL to jobs running directory synchronization on the
	mainframe. Alternatively, you might decide to install the transient library into
	the Linklist or Link Pack Area (LPA). The following list shows the search order
	used to find transient modules at run time:
	
	- DDname CTRANS
	
	- Tasklib
	
	- STEPLIB
	
	- JOBLIB
	
	- LPA
	
	- Linklist libraries
	
	To run directory synchronization using JCL-supplied transient libraries, add the
	SASC.C600.LINKLIB transient library to your JCL with the CTRANS DDname. You may
	already have another SAS/C transient library installed in the Linklist or LPA.
	You should determine the SAS/C transient library version before you install the
	SASC.C600.LINKLIB library to ensure that you do not copy a later version over an
	earlier one.
	
	If you have another SAS/C transient library installed, you might have other
	products that distribute an SAS/C transient library, for example, ISP.SISPSASC,
	the ISPF Client/Server code. If these transient libraries have been installed
	into the Linklist or LPA, and they are later versions than the transient library
	distributed with the SNADS Connector, you must perform one of the following
	tasks:
	
	- Install the most recent transient library into the Linklist or LPA. This
	  ensures that the other products continue to work. In some cases, a product
	  has specific dependencies on a particular version of the transient library.
	  Such dependencies should be noted in the product's installation notes.
	
	-or-
	
	- Run the SNADS directory exchange agent with its transient libraries supplied
	  by JCL.
	
	If these transient libraries have been installed into the Linklist or LPA, and
	they are the same or more recent version of the transient library distributed
	with the SNADS Connector, then the SNADS directory exchange agent is likely to
	run with that version of the transient library.
	
	If you have other SAS/C transient libraries that are not installed into the
	Linklist or LPA, there is not likely to be any conflicts because each product
	will have its required transient library supplied by JCL.
	
	Lotus Notes R5 Users Can Add BCC Recipients to Meeting Requests:
	
	With SP3, Lotus Notes R5 users can add BCC recipients to meeting requests. If the
	BCC recipient is another Notes R5 user, he or she cannot accept or decline the
	request because it is sent for informational purposes only. If the BCC recipient
	is an Exchange Server user, he or she can accept or decline the meeting
	request.
	
	Lotus Notes R5 Users Can Decline Meeting Requests with an Additional Option:
	
	An additional feature available to Lotus Notes R5 users allows them to decline
	meeting requests and not be informed of any future updates to the meeting. If
	the meeting request originally came from an Exchange Server user, this option is
	not supported. Notes R5 users will always receive updates to meeting requests
	from Exchange Server users.
	
	Lotus Notes R5 Users Can Request Information About Meeting Requests:
	
	Lotus Notes R5 users can respond to meeting requests using a new feature called
	"Request Information." This is a request sent to the meeting organizer for
	updated information about the meeting. If a Notes R5 user attempts to request
	information from an Exchange Server meeting organizer, the Exchange Notes
	Connector simply delivers a new meeting request with the same date and time as
	the original meeting.
	
	Microsoft Exchange Server Application Services for Lotus Notes:
	
	You can use Exchange Server Application Services for Lotus Notes to migrate Lotus
	Notes applications to Exchange Server. Application Services for Lotus Notes is
	available on the SP3 CD in the Server\Support\Appsrvs folder.
	
	Updates to the Microsoft Exchange Server Application Services for Lotus Notes:
	
	For the most current information about the Microsoft Exchange Application
	Services for Lotus Notes, please visit the following Web site:
	
	  http://www.microsoft.com/exchange/downloads/55/NotesAppServices.asp
	
	Microsoft Importer for Lotus cc:Mail Archives:
	
	Microsoft Importer for Lotus cc:Mail Archives migrates cc:Mail archive files from
	Lotus cc:Mail to Exchange Server, allowing users to preserve information stored
	in personal e-mail folders. In this release, the cc:Mail Archive Importer has
	been enhanced to migrate cc:Mail users' private directories, known as
	Privdir.ini files. Users can now migrate their Privdir.ini files into a
	Microsoft Outlook Personal Address Book. The Microsoft Importer for Lotus
	cc:Mail Archives is included on the SP3 CD in the
	<drive>:\Eng\Server\Support\Migrate\Ccma folder.
	
	To learn more about the Importer, run the self-extracting Ccma.exe file. After
	you unzip the file, you can read either "The Microsoft Importer for Lotus
	cc:Mail Archives Administrator's Guide" (AdminCCM.rtf), or "The Microsoft
	Importer for Lotus cc:Mail Archives User's Guide" (UserCCM.rtf).
	
	Migration Wizard Update:
	
	The Exchange Server Migration wizard has been upgraded and provides additional
	support for Novell GroupWise 4.x and 5.x, and Lotus Notes 4.6. The Migration
	wizard also extracts and imports directory and mail information from LDAP-based
	and IMAP-based messaging systems such as Netscape Mail Server. You can find
	complete documentation on the updated features in the Migration wizard in the
	<Drive>:\<Language>\Docs\Migrate folder, where <Language>
	matches your operating system and code page.
	
	Known Issues for SP3
	--------------------
	
	The following are known issues in Microsoft Exchange Server 5.5 Service Pack 3:
	
	   - Comments added by Lotus Notes R5 users who are accepting or declining meeting requests are not delivered to Exchange Server.
	   - Exchange Server user responses to recurring meeting requests do not update the Domino Participant Status list.
	   - Lotus Notes R5 meeting acceptances, tentative acceptances, and decline responses may be downgraded to text messages.
	   - The Notes configuration utility is not supported on Domino R5.
	   - The Notes R4 Client is required to connect Exchange Server and Domino R5 Servers.
	   - Outlook users cannot recall messages sent to Lotus Notes users.
	   - Update does not upgrade some connectors.
	
	Comments Added by Lotus Notes R5 Users Who Are Accepting or Declining Meeting Requests Are Not Delivered to Exchange Server:
	
	Lotus Notes R5 users can add an optional comment when they accept or decline
	meeting requests. However, such comments are not delivered to Exchange Server
	users.
	
	Exchange Server User Responses to Recurring Meeting Requests Do Not Update the Domino Participant Status List:
	
	When an Exchange Server user responds to a request for a recurring meeting sent
	by a Notes user, the response is delivered to the Notes user. However, the
	Domino R5 Participant Status list for the recurring meeting is not updated to
	reflect the Exchange Server user's response.
	
	Lotus Notes R5 Meeting Acceptances, Tentative Acceptances, and Decline Responses May Be Downgraded to Text Messages:
	
	In some cases, the Microsoft Exchange Connector for Lotus Notes cannot match an
	appropriate acceptance or decline response from a Notes R5 user to a meeting
	request that originates from an Exchange Server user. In these cases, the
	Exchange Server users receive an ordinary text message that indicates the nature
	of the Notes user's response.
	
	The Notes Configuration Utility Is Not Supported on Domino R5:
	
	The Notes Configuration utility, which appears in the Microsoft Exchange
	Connectivity program group, can be used to configure Lotus Notes Domino R4
	servers for the connector. Do not use this utility to configure Domino R5
	servers.
	
	The Notes R4 Client Is Required to Connect Exchange Server and Domino R5 Servers:
	
	When you connect to a Domino R5 server, you must install a Notes R4 Client,
	version 4.6.2 or later, on the Exchange Server computer where the Connector for
	Lotus Notes is installed. Use of a Notes R5 client on the Exchange Server
	computer is not supported.
	
	Outlook Users Cannot Recall Messages Sent to Lotus Notes Users:
	
	The message recall function provided by Microsoft Outlook does not work with
	messages sent to Lotus Notes users. If an Outlook user attempts to recall a
	message that was sent to a Notes user, the Notes recipient receives the normal
	recall notification message sent by Outlook. However, the message is not
	recalled, and the Outlook user receives no indication that the recall has
	failed.
	
	Update Does Not Upgrade Some Connectors:
	
	The following connectors are not updated when you upgrade to Microsoft Exchange
	Server 5.5 Service Pack 3:
	
	- Microsoft Exchange Connector for Lotus Notes
	
	- Microsoft Exchange Connector for Novell GroupWise
	
	- Microsoft Exchange Connector for SNADS
	
	- Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS)
	
	For more information, see the Readme.rtf file that is located in the
	Exchsrvr\Connect\Exchconn folder of the SP3 CD after you install the
	connectors.
	
	To Upgrade the Connectors
	
	Upgrade to Microsoft Exchange Server 5.5 Service Pack 3. On the Service Pack 3
	CD, switch to the folder that contains the files for the connector you want to
	upgrade. The connector directories are as follows:
	
	- Connector for Lotus Notes:
	  <Lanugage>\Exchconn\Setup\<Platform>\Setup\Ntsconn
	
	- Connector for Novell GroupWise:
	  <Lanugage>\Exchconn\Setup\<Platform>\Setup\Gwconn
	
	- Connector for SNADS:
	  <Lanugage>\Exchconn\Setup\<Platform>\Setup\Snaconn
	
	- Connector for OfficeVision/VM:
	  <Lanugage>\Exchconn\Setup\<Platform>\Setup\Ovvconn
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
