---
layout: page
title: "Q134339: Gtwy: Frequently Asked Questions for Microsoft Mail Gateways"
permalink: /kb/134/Q134339/
---

## Q134339: Gtwy: Frequently Asked Questions for Microsoft Mail Gateways

	Article: Q134339
	Product(s): Microsoft Mail For PC Networks
	Version(s): ; MS-DOS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks 
	- Microsoft Mail Gateway to Fax 
	- Microsoft Mail Gateway to MHS 
	- Microsoft Mail Gateway to SMTP 
	- Microsoft Mail Gateway to X.400 
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	The following is a list of frequently asked questions about Microsoft Mail
	gateways.
	
	1. Q. What are the most common gateway issues listed in the Microsoft Knowledge
	  Base?
	
	  A.
	
	  Q99714: MHS: Connecting Microsoft Mail to cc:Mail
	  Q103802: MHS: How to Test Whether the Gateway Is Working
	  Q94468: MHS: Microsoft Mail &amp; NetWare Global Messaging (NGM)
	  Q96244: SMTP: Err Msg: Socket Error (123) When Starting Gateway
	  Q99713: SMTP: How REPLY Chooses a FROM Address
	  Q100455: Using Gateway Address Lists
	
	2. Q. What is MHS, and how does it relate to the Microsoft Mail Gateway to MHS?
	
	  A. Message Handling Service, MHS, is a product sold by Novell. It consists of
	  three components: a directory manager, a connectivity manager, and a
	  transport server. The directory manager is an administrative tool used to
	  define the MHS database. The connectivity manager routes messages within the
	  database. The transport server transfers messages from one MHS database to
	  another. MHS databases communicate with each other asynchronously. Microsoft
	  Mail Gateway to MHS is a gateway application that conforms to the Standard
	  Message Format version 70 (SMF70) specification. It retrieves messages from
	  Microsoft Mail and converts them into the SMF70 format, then deposits them in
	  the MHS database. From here, the MHS connectivity manager is responsible for
	  final delivery to the recipient. The gateway will also pick up mail routed to
	  it from the MHS connectivity manager, convert it to Microsoft Mail format,
	  and deliver it to the Microsoft Mail postoffice.
	
	3. Q. Does the Microsoft Mail Gateway to MHS work with NetWare Global Messaging
	  (NGM)?
	
	  A. Yes. NGM adheres to SMF71. To be compatible with an SMF70 gateway, such as
	  Microsoft Mail Gateway to MHS, a Novell executable file, GWDEMON.EXE, must be
	  running on a dedicated workstation. For more information, see Chapter 8 in
	  the NetWare Global Messaging Administration Manual.
	
	4. Q. What is required to configure Microsoft Mail Gateway to SMTP?
	
	  A. A mail routing host (smart host) in the TCP/IP network is required. The
	  smart host may or may not be using the Domain Name Service (DNS) to handle
	  message routing.
	
	  If your smart
	      host uses          See this article in the Microsoft Knowledge Base
	      --------------------------------------------------------------------
	
	      DNS                Q101459, "SMTP: GW0645: Configuring the SMTP
	                         Gateway & DNS"
	      Host tables        Q115496, "SMTP: Configuring the Mail Routing Host
	                         Without DNS"
	
	  If the DNS or host table is not configured correctly, you may experience
	  errors such as "550 Addressee Unknown."
	
	5. Q. What causes the Microsoft Mail Gateway to SMTP to hang?
	
	  A. There are five known network configurations that can affect Microsoft Mail
	  Gateway to SMTP reliability:
	
	   - Postoffice (PO) and Gateway should be on the same physical network.
	
	   - Use a Mail Relay Host for inbound SMTP mail.
	
	   - Have routers use static routing.
	
	   - Use a 16-bit Network Interface Card (NIC).
	
	   - Use one protocol per NIC (IPX/SPX).
	
	  For more information about these configurations, see
	
	  Q131150, "SMTP: Causes of Hangs on Mail Gateway to SMTP," in the Microsoft
	  Knowledge Base.
	
	6. Q. What is the optimal way to deploy the Microsoft Mail Gateway to SMTP in my
	  company?
	
	  A. A small-volume implementation can process up to 10,000 messages a day, and
	  consists of one SMTP gateway. A medium-volume implementation can process up
	  to 20,000 messages a day, with dedicated incoming/outgoing SMTP gateways or
	  with the purchase of an additional SMTP gateway. A large-volume
	  implementation can handle any number of messages greater than 20,000 a day,
	  and can be multiple incoming/outgoing gateways, or both.
	
	  Four possible configurations for small- to large-volume scenarios are
	  discussed in the Microsoft Knowledge Base. For more information, see Q132060,
	  "SMTP: SMTP Gateway in Small, Medium, and Large Organizations."
	
	7. Q. Why does outgoing mail work, but incoming mail does not, with the
	  Microsoft Mail Gateway to X.400?
	
	  A. If this is the first time you are setting up the gateway, you must add the
	  Microsoft Mail Gateway to X.400 to the "Routing" section in the X400ADM.EXE
	  Administrator program.
	
	8. Q. How many Eicon X.25 cards can the Microsoft Mail Gateway to X.400
	  support?
	
	  A. The Microsoft Mail Gateway to X.400 can support one Eicon X.25 card and one
	  Ethernet card at the same time. Multiple simultaneous connections can be
	  processed using both cards, or one on the computer running the gateway.
	
	9. Q. Why am I getting "ERROR 3" errors?
	
	  A. Both the Microsoft Mail Gateway to X.400 and the other X.400 mail system
	  must be properly configured for messages to transfer properly. This means
	  that each X.400 system must have defined its own parameters (nsap, tsap,
	  ssap, MTA name and password, and x.121 address) and those of the other X.400
	  system. Some parameters are not required; for more information, refer to your
	  Microsoft Mail Gateway to SMTP documentation.
	
	10. Q. With the Microsoft Mail Gateway to PROFS and OfficeVision, why do I get
	  better performance with inbound mail than with outbound mail?
	
	  A. The VTAM/NCP parameters and buffer sizes on the PROFS host are not
	  configured optimally. Some suggestions for improving performance are:
	
	   - Tailor the attachment card buffer size to host VTAM/NCP parameters.
	
	   - Check VTAM/NCP host definitions for token-ring (MAXDATA, MAXTSL, Class of
	     Service).
	
	   - Adjust the RU size on MODETAB.
	
	11. Q. Why aren't free and busy times flowing between Microsoft Mail and IBM
	  PROFS and OfficeVision?
	
	  A. There are two main configuration points for free and busy times to flow
	  properly:
	
	  Check AdminSch and make sure there is a gateway definition for the VM host
	  that includes the user name, making a complete 10 x 10 x 10 address.
	  AdminSch should also show the fields "Date Sent" and "Date Received," with
	  dates filled in if free and busy times have been exchanged. If these fields
	  are blank, check the SCHDIST.LOG file in the MAILDATA\LOG subdirectory of
	  the Mail database. Remember to fill in a time interval in AdminSch.
	
	  On the Host side, MS-CSM, check the file "schdplus control." This file should
	  have comment records, PROFS: records, and PO: records. One PO: record should
	  be present for each Microsoft Mail postoffice. If a PROFS: or PO: record is
	  missing, exchange of free and busy times has not occurred successfully. The
	  SCHDIST.LOG file will contain errors recording why this was unsuccessful.
	
	12. Q. How do I disable the cover page and distribution box in the Microsoft
	  Mail Gateway to Fax?
	
	  A. You cannot disable the cover page or distribution box.
	
	13. Q. With the Microsoft Mail Gateway to Fax, how do I get inbound faxes
	  delivered to the recipient instead of a designated user?
	
	  A. Faxes currently cannot be routed to the intended recipient. Instead, they
	  are routed to a designated user, who forwards them to the recipient. The
	  technology necessary for a computer program to read in a handwritten
	  recipient name and understand the intended recipient is not yet available.
	
	14. Q. Can I send attachments from a Microsoft Mail client directly to the
	  Microsoft Mail Gateway to Fax?
	
	  A. You can only do this with ASCII text attachments. If you need to send
	  other types of documents, use the fax printer driver.
	
	15. Q. Why isn't my SNADS mail working?
	
	  A. The SNADS gateway is not a Microsoft product. If you experience problems
	  sending mail to and from SNADS, contact your SNADS gateway vendor -- either
	  Softswitch or Linkage.
	
	16. Q. How do I get addresses changed from Microsoft Mail format to my format?
	
	  A. File Format API (FFAPI) only provides addresses in the form 10 x 10 x 10.
	  The address lists generated for Microsoft Mail users to send mail to FFAPI
	  users can only be in the 10 x 10 x 10 format. You can use the Import utility
	  to add lists of FFAPI users to the Microsoft Mail address lists. If the
	  FFAPI users have addresses in another format, the FFAPI gateway
	  administrator must provide the functionality to create a table or conversion
	  code to change the addresses from 10 x 10 x 10 format to the desired format;
	  FFAPI does not provide a table or conversion utility to change 10 x 10 x 10
	  addresses to another format.
	
	17. Q. Why doesn't mail sent to a group work?
	
	  A. Mail messages sent from File Format API (FFAPI) to a group that has
	  members on other postoffices besides the FFAPI postoffice will not receive
	  the message. FFAPI was not designed to resolve group members who receive
	  mail on other postoffices.
	
	18. Q. What does the error "80 - Bad Gateway Service Type" mean? A. This error
	  indicates you have created a FFAPI postoffice with the same network name as
	  another Microsoft Mail postoffice. You must use unique network names.
	
	19. Q. How can I give more memory to the Connection Name Utility (CNU) and the
	  Microsoft Mail for AppleTalk Networks server when it is running as an
	  extension or an application?
	
	  A. When Microsoft Mail for AppleTalk Networks is running as an extension, the
	  administrator can sign in to mail as a network manager and can increase the
	  amount of memory allocated to the server by choosing the Server Settings
	  option from the Mail menu and setting the server memory allocation. Remember
	  that extensions cannot be granted for more than half the total amount of
	  memory in the machine.
	
	  When the server is running as an application, you can select the application
	  and press COMMAND+I. You can then adjust the amount of memory allocated in
	  the preferred settings field accordingly. This same procedure is applied
	  when you want to allocate more memory to the CNU when you are running
	  Microsoft Mail Connection for PC and AppleTalk Networks.
	
	20. Q. I just installed the Microsoft Mail Connection for PC and AppleTalk
	  Networks and I do not want to wait for the next directory synchronization
	  cycle to propagate the address list. Can I update both the Macintosh and
	  Intel Mail systems' address lists right away?
	
	  A. Yes, you can:
	
	  1. With the Connection Name Utility (CNU) in the foreground on the Macintosh
	     running the gateway, press COMMAND+S or choose Save To File from the File
	     menu. A standard file Save As dialog appears.
	
	  2. Choose Desktop.
	
	  3. Open the Intel volume on which the connection store is located.
	
	  4. Open Maildata and continue until you reach the MACGATE folder.
	
	  5. Change "Untitled" in the "Dump World list into" field to a filename such
	     as MACLIST.DOC. (NOTE: You can use any 8.3 MS-DOS filename.)
	
	     The file that is created by this process is in the format required by the
	     Import program (IMPORT.EXE). The R(eplace) PCM:proxynet/proxypo command is
	     included at the top of the list as well.
	
	     With this file at hand, all Microsoft Mail for PC Networks users who are
	     downstream of the Mail for PC Networks gateway can almost immediately
	     complete a fresh installation of the connection gateway. The administrator
	     can send the address list, along with the Connection setup disk, to other
	     Mail for PC Networks administrators, who can install the downstream
	     component and the address list in the same session, leaving directory
	     synchronization to its normal task of updating the global address list of
	     participating postoffices.
	
	  To import the list into a Mail for PC Networks postoffice
	  ---------------------------------------------------------
	
	  In the steps listed above, you created a file named MACLIST.DOC and placed it
	  in the MACGATE directory in the Mail for PC Networks gateway's Mail
	  database. The Import (IMPORT.EXE) and Rebuild (REBUILD.EXE) files should
	  also be located in the Mail database. To import the list, run the following
	  commands
	
	  import admin -p<password> -d<x> -fmaclist.doc
	  rebuild -d<x> -f
	
	  where:
	
	  admin is the administrator account for the postoffice
	  <password> is the password for the account
	  <x> is the drive letter pointing to the root of the mail database
	
	  The Import utility will update the postoffice network list, and the Rebuild
	  utility will update the global address list.
	
	  To reverse the procedure
	  ------------------------
	
	  Because it is possible to quickly get the contents of the Macintosh All list
	  to the PC Mail environment, it is also possible to reverse the direction and
	  insert the contents of the global address list into the All list.
	
	  1. From the CNU, press COMMAND+I and choose the complete directory option.
	
	  2. Watch the Macgate monitor and observe the import request cross the
	     gateway.
	
	  3. From an administrator directory on a local computer, run the following
	     commands against the directory synchronization server
	
	  srvmain -r -d<x>
	  srvmain -t -d<x>
	  external -d<x> -0 -a
	  external -d<x> -0 -a
	
	     where <x> points to the drive letter of the mail database
	
	  4. Confirm that MACGATE.EXE delivers a message to the network manager of the
	     gateway Macintosh postoffice. The subject of the message will be similar
	     to the following:
	
	  From: $SYSTEM Subject: SrvTx R=(a digit) S=(multiple digits)
	
	  5. Do nothing with this message. Bring the CNU forward. Choose Application
	     from the Configure menu and set the receive updates time to 5 minutes
	     ahead of the current Macintosh system time. When that time passes, you
	     will see the system message removed from the network manager's inbox. In
	     approximately 30 minutes, the contents of the global address list will be
	     incorporated into the All list.
	
	  6. Restore the receive updates time to its original setting.
	
	Additional query words: FAQ questions and answers
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbMailGateSearch kbZNotKeyword3
	Version           : :; MS-DOS:
	
	=============================================================================
	
