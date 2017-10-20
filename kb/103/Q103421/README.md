---
layout: page
title: "Q103421: PC Gen: Contents of Mail 3.2 Enhancements and Corrections"
permalink: /kb/103/Q103421/
---

## Q103421: PC Gen: Contents of Mail 3.2 Enhancements and Corrections

{% raw %}

	Article: Q103421
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail for PC Networks contains the following
	enhancements and corrections:
	
	SERVER ENHANCEMENTS
	-------------------
	
	- Multitasking Message Transfer Agent (MTA), which is sold separately.
	
	- Microsoft Windows Move User utility that can move users from version 2.1,
	  3.0, and 3.2 postoffices to version 3.0 or 3.2 postoffices.
	
	- Two different Batch User Create utilities that can create new users on a
	  local postoffice. One reads the Novell NetWare 2.1x or 3.11 bindery, the
	  other reads the NET.ACC file from a Microsoft LAN Manager user level security
	  file server.
	
	- Microsoft Mail Gateway to AT&T Easylink Mail (U.S. product only).
	
	- Transfer mail through native X.25.
	
	- Ability to limit message size when transferring over a network.
	
	- MTA can be configured to reboot automatically if critical error is detected.
	
	- Postoffice is no longer limited to one Dynamic Drive table.
	
	- Mail is now transferred by the MTA using First In/First Out (FIFO).
	
	
	- Improved reliability of the asynchronous transmission protocol.
	
	- Improved algorithm for handling P1 files.
	
	- Improved error messages in SYSTEM.LOG.
	
	- MS-DOS MTA low memory conditions have been improved. Also, more reliable with
	  large message bodies.
	
	
	- OS/2 Rebuild runs 35% to 55% faster than MS-DOS Rebuild.
	
	- Directory Synchronization (DirSync) does not update any of the GAL files if
	  any of them are in use.
	
	- The Administrator program updates versions 1.0 and 1.0a of Microsoft
	  Schedule+ for Windows calendar (.CAL) passwords.
	
	SERVER CORRECTIONS
	------------------
	
	Bug #   Description
	------------------------------------------------------------------------
	
	  7    IMPORT -A causes an incorrect mailbag assigned when importing
	       SNADS, PROFS, and OfficeVision addresses.
	
	          Version 3.0 of Import creates a separate mailbag for each
	          SNADS, PROFS, and OfficeVision user instead of pointing all
	          imported users to the mailbag for their gateway. Since the
	          gateways only check the gateway mailbag, the mail messages
	          never get delivered.
	
	 60    External does not report an error on a lost .MAI file.
	
	          A new error message will be received by the sender when the
	          version 3.2 of External cannot find a .MAI file. The error
	          that the user sees is:
	
	             "Message was not sent due to missing message file"
	
	          It will also be logged in the SYSTEM.LOG with the error
	          message:
	
	             "Mail retry count exceeded sending to: username error."
	
	 61    External reports incorrect error sending mail with lost
	       .ATT files.
	
	          If a mail message is created with attachments and saved to be
	          sent later using the MS-DOS client, but before the message is
	          sent one of the attachment files gets deleted. Then version
	          3.0 of External will report various errors in SYSTEM.LOG and
	          SESSION.LOG.
	
	          Version 3.2 of External will report a non-delivery message to
	          the sender:
	
	             "Mail was not sent due to missing attachment."
	
	          There will also be an accompanying notice in the SYSTEM.LOG.
	
	 62    Infinite "disk error" when out of disk space sending
	       attachment.
	
	          When version 3.0 of External tries to send a message with an
	          attachment to a postoffice with insufficient disk space, then
	          external tries to send this message indefinitely (or until the
	          lifespan of the message is exceeded).
	
	          In version 3.2 of External, before each mail item is sent the
	          destination PO drive is checked for available disk space. If
	          not, the drive will be marked as FULL and delivery will be
	          attempted at the next interval update.
	
	 64    External: Locked files cause incorrect delivery.
	
	          Version 3.2 of External now puts an error message in
	          SYSTEM.LOG.
	
	 65    External loses messages under low memory conditions.
	
	          Version 3.2 of External now properly returns undeliverable
	          messages by only parsing the data necessary to return to
	          sender.
	
	 66    External: Postoffice not processed if mailbag is missing.
	
	          In version 3.2 of External, if the mailbag for a particular
	          postoffice is missing, External will log the error,
	
	             "Drive in error: M:"
	
	          to the screen and SESSION.LOG. It will continue to process
	          mail on this drive to other locations.
	
	 68    External ignores Admin settings for baud rate.
	
	          In version 3.2 of Admin, the baud rate setting for external
	          postoffice definitions has been removed. The following
	          reasons support this decission:
	
	             - It is ignored in older versions
	             - Incoming call rates are not predictable
	             - Modem scripts over-ride the default
	
	 69    External does not deliver large messages.
	
	          Version 3.2 returns these messages to sender with an
	          explanation.
	
	 71    Admin: Adding SNADS user without adding DGN gets wrong
	       address.
	
	          When adding a SNADS user to the postoffice address list with
	          Admin, if the DGN for that user was not already defined, Admin
	          created the wrong address for the user and mapped the name to
	          an existing DGN even though the administrator correctly typed
	          in a valid DGN in the DEN.DGN. This address which is added to
	          the postoffice address list is correct, but the added reference
	          to gateway list for this DGN/NODE was incorrect.
	
	          This was also a potential problem for PROFS/OfficeVision users
	          when adding users to NODES not already defined. The correct
	          behavior is to not add the user and the reference to the
	          gateway list when DGN/Node is not already defined.
	
	 72    External: Multiple modem messages put in response buffer.
	
	          Version 3.0 of External would occassionally get the error:
	
	             "failure to initialize modem"
	
	          upon initializing the modem. External was incorrectly reading
	          the modems' response buffer.
	
	 76    Import accepts transaction without mailbox name.
	
	          Version 3.2 of Import will not create a user account unless a
	          valid address exists in the import file. Version 3.0 of Import
	          would let you add a user even if you forgot to include the 10
	          charactor mailbox name.
	
	 82    Admin: Remote client cannot read external POs and gateways
	       listed in RNETWORK.GLB file.
	
	          When regenerating the directory view for Remote clients, the
	          Admin utility would corrupt the RNETWORK.GLB file if there
	          were no additional external Postoffices defined within the
	          same Network.
	
	179    DirSync updates lost in import request.
	
	          In version 3.2, the SRVSEQ value (the # of the last
	          transaction sent to this Requestor) used as a reference to
	          the local directory store is now read from the Server PO
	          REQCONF.GLB and not from SRVCONF.GLB. This will keep track
	          of Import requests properly.
	
	329    Import does not handle FFAPI add transactions properly.
	
	          Version 3.2 of Import will now treat FFAPI type addresses
	          the same as PCM type addresses.
	
	370    Reqmain: No message sent to Admin if REQTRANS.GLB is not
	       processed.
	
	          Version 3.0 would not report an error if REQTRANS.GLB was
	          corrupt. Version 3.2 will report:
	
	             "FATAL [ 40] Possible database corruption detected:
	              REQTRANS."
	
	371    Srvmain: No message sent to Admin if MSTTRANS.GLB is
	       corrupt.
	
	          Version 3.0 would report no error if the MSTTRANS.GLB is
	          corrupt. Version 3.2 reports a fatal error that is sent to
	          the Server Administrator as part of the summary report for
	          DirSync.
	
	680    External: Circular routing problems.
	
	          Version 3.0 of External can cause circular routing of
	          messages when more than one External is sending mail from
	          the same postoffice at the same time.
	
	1149    Attachments can be stranded if external connection is
	       dropped.
	
	          Version 3.2 of External will now stop the delivery of a
	          message if the transport layer fails while delivering
	          attachments.
	
	1314    Attachments not always deleted from postoffice.
	
	          In version 3.0, the attachment delete loop would cause
	          only the first attachment of a message to be deleted when a
	          message was deleted.
	
	1361    External: X.CSI wastes too much time recovering from Return
	       No Response (RNR) and Reject (REJ).
	
	          Version 3.2 of External will rely on modem hardware flow
	          control (RTS/CTS) in the SIO layer when RNR or REJ's occur.
	          Version 3.0 External would idle for 10 seconds per each RNR
	          or REJ's, causing unwanted timeout problems.
	
	1362    External: X.CSI finding the start of a packet is slow.
	
	          Version 3.0 External called a DosRead() for every byte from
	          the COM driver buffer when searching for a STX character. At
	          high speeds this meant hundreds of 1 byte DosReads() creating
	          high CPU usage. Version 3.2 of External now reads in multiple
	          bytes into a special STX buffer greatly reducing CPU demand.
	
	1365    External: X.CSI dumping bad packet can cause problems.
	
	          Version 3.0 of External will copy data from the protocol ring
	          buffers (X.CSI) to the SIO layer if X.CSI becomes full.
	          Version 3.2 External will not.
	
	          In version 3.0 of External, the CRC calculation on a data
	          packet is performed after the data is read from SIO,
	          therefore, it is redundant to dump the data back to the SIO
	          layer because it already resides in a X.CSI window packet
	          buffer. Version 3.2 of External will now drop these packets
	          and retain optimal performance.
	
	1420    External: Machine hangs with low disk space and expired
	       useful life.
	
	          Version 3.0 of External will hang upon delivering an "expired
	          useful life message" on a PO that does not have enough
	          diskspace. Version 3.2 of External resolves this issue by
	          logging the low diskspace and not attempting to deliver mail
	          to that PO until space is available.
	
	1645    Srvmain does not update ReqSync when DirSync .ATT is
	       corrupted.
	
	          If a corrupted DirSync attachment is processed by version 3.0
	          of SRVMAIN, it will add transactions to the queue up to the
	          point of corruption and then terminate. However, it does not
	          update the ReqSync field in the SRVCONF.GLB file to indicate
	          that some transactions were processed/received. No
	          transactions will be lost in this scenario, but duplicate
	          transactions will be submitted by the requestor.
	
	          Version 3.2 of SRVMAIN resolves this by taking the Reqsync
	          number directly from the last record processed in the
	          SRVCONF.GLB file instead of from the mail text body. If there
	          is a CRC read error in the transaction file, all records up to
	          the corrupted one will be processed.
	
	1646    External: Duplicate mail incident.
	
	          When mail is composed to multiple recipients, version 3.0 of
	          External would lock the mailbags for the externally defined
	          postoffices before the Dispatch process started. The mailbag
	          was not locked while External was collecting mail. Therefore,
	          when multiple externals are collecting mail off the same
	          postoffice, they both can collect the same mail item and
	          successfully deliver it to the same recipient.
	
	          Version 3.2 of External resolves this by locking the mailbags
	          before the collection process begins. As a result overall
	          throughput of a multi-External hub will be faster because each
	          external will not try and collect mail on one postoffice while
	          another external is collecting mail on the same postoffice.
	
	1678    External: Postoffices on dynamic drives updates lists at every
	       -U minutes.
	
	          In version 3.2 of External, directories on dynamic drives
	          are only updated at the interval specified by -U, if the
	          postoffice directories have been changed since the last
	          update. The change is detected by checking to see if the
	          value in FLAG.GLB has changed since last update.
	
	1775    External: Zero length attachments.
	
	          When remote users call into version 3.0 External and request
	          headers update only when they do not have any headers,
	          External will create a zero byte attachment and leave it
	          stranded when the remote user disconnects. Version 3.2 of
	          External resolves this by deleting the attachment file upon
	          the disconnect.
	
	2008    DirSync: Srvmain has problems with Intel EtherExpress 16.
	
	          With certain network cards and protocols, the SRVCONF.GLB
	          file becomes corrupted. Version 3.2 fixes the problem by
	          making internal buffer size consistent across all calls to
	          SRVCONF.GLB.
	
	2082    Re-enabling the DirSync Server does not work.
	
	          In version 3.2, when re-configuring or creating a postoffice
	          to be a Dir-sync server the Admin program will now verify
	          that the REQCONF.GLB file has a srvsync value of zero. If
	          Requestors do not submit an Import request to the newly
	          enabled Server PO then they will not get updates. This is
	          because, each Requestor records the sync of the last update
	          received from the Server PO. This is a non-zero value. When
	          the Server PO is enabled, updates are numbered from 1. So,
	          if a Requestor asks for updates from sync=100, 100 will not
	          exist yet and that Requestor will receive zero updates.
	
	2104    External: Does not delete .P0x files from the P1 directory.
	
	          Version 3.0 External can leave stranded .POx files.
	
	2128    External returns valid address messages to sender.
	
	          When version 3.2 External is aware that it has corrupt
	          routing information, it will disable Dispatch for that PO and
	          its INQUEUE3.MBG. Mailer will still run on the destination PO,
	          but External will hold all LAN mail until the address list
	          is refreshed.
	
	MAIL FOR WINDOWS CORRECTIONS:
	
	Bug #   Description
	-----   --------------------------------------------------------------
	
	  1    Corruption of MMF when located on PC-NFS file server.
	
	          When running version 3.0b of Microsoft Mail for Windows on a
	          PC-NFS file server, the Mail Message File (MMF) becomes
	          corrupted and prevents you from sending and reading mail
	          messages.
	
	  2    Setup error when installing client on network server.
	
	          When setting up version 3.0b of Microsoft Mail for Windows
	          and the WINDOWS and WINDOWS\SYSTEM directories were on two
	          different drives, Setup would report an error and would not
	          complete.
	
	  3    Problem with extended characters in postoffice name.
	
	          When you send mail to an external postoffice group or gateway
	          group that contains extended characters in the address, version
	          3.0b of Microsoft Mail for Windows does not convert from code
	          page 850 to ANSI code page when it reads the records from the
	          NETPO.GLB file or any other gateway address file.
	
	  4    Convert program cannot handle lowercase HEX for owner field.
	
	          While converting your folders, version 3.0b of CONVERT.EXE
	          may report a network error and then exit. The Convert program
	          assumes the owner field in the .IDX file is in all uppercase
	          letters and does not know how to handle hexadecimal numbers in
	          lowercase letters.
	
	  5    Sample Microsoft Visual Basic for Windows application does
	       not work with Visual Basic version 2.0.
	
	          In version 3.2, MAPI.H has been modified to be strictly ANSI
	          compatible, and will no longer cause warnings on Warning
	          Level 4 with the Microsoft C version 7.0 compiler. The sample
	          Visual Basic Simple MAPI application has been modified to
	          compile when using Microsoft Visual Basic version 2.0.
	
	  6    SNADS DGNs in address book are not in alphabetical order.
	
	          External postoffices, SNADS DGNs, and nodes for PROFS and
	          OfficeVision are not displayed in alphabetic order because
	          version 3.0b of Mail for Windows reads them in one at a
	          time and adds them to the hierarchy. Version 3.2 of Microsoft
	          Mail for Windows reads them in all at once, sorts them, and
	          adds them to the hierarchy.
	
	  7    ALT+double-click on attachment does not work.
	
	          When you attempt to launch attachments that do not have an
	          extension, an error occurs when you hold down the ALT key
	          and double-click the mouse button to load the attachment
	          into Notepad.
	
	 26    Bad algorithm for changing the filename of Macintosh file
	       attachments.
	
	          When you attempt to launch MACBINARY attachments, version
	          3.0b of Mail for Windows changes the filename of the file
	          being launched if that filename is less than eight characters
	          in length.
	
	 69    Cannot handle more than 66 different network/gateway names.
	
	          An "Unknown user" error may occur when you send a message.
	          Version 3.0b of Mail for Windows only caches the first 8170
	          bytes of the NETWORK.GLB file and loses the rest. Postoffices
	          and gateways that are defined past 8170 bytes are ignored;
	          therefore, you cannot send messages to the users on those
	          postoffices or gateways.
	
	 73    MAPILogon is case sensitive.
	
	          The simple MAPI command MAPILogon() does a case sensitive
	          match on the user name and password; however, Microsoft
	          Mail is not case sensitive. This problem only occurs if a
	          MAPI session was already established when MAPILogon() is
	          called.
	
	110    Reading E-Form from shared folder causes MAPI failure.
	
	          Fixed in version 3.2 of Microsoft Mail for Windows.
	
	140    MAPISaveMessage resets originator to caller.
	
	          Fixed in version 3.2 of Microsoft Mail for Windows.
	
	141    Convert changes message date to 12/16/68.
	
	          When parsing old A.M./P.M. style dates (generated from
	          some gateways), version 3.0b of Mail for Windows adds 12 to
	          the time if it is P.M. However, if the message was sent
	          during the Noon hour, the time is incorrectly read as 24:xx.
	          Because this is an invalid time, the date is set to the
	          12/16/68.
	
	149    Group name cannot display details when a form was used.
	
	          In version 3.0b of Microsoft Mail for Windows, PC Mail
	          groups would not be reply-able from SimpleMAPI as the
	          address would have no email address.
	
	161    SENDFILE does not support extended characters.
	
	          In version 3.0b of Microsoft Mail for Windows, extended
	          characters are not supported when using the File Manager
	          SendFile command. An error message is displayed saying
	          that the file can not be accessed.
	
	162    Extended characters not supported for backup.
	
	          In version 3.0b of Microsoft Mail for Windows, extended
	          characters are not supported for *.MMF filenames.
	
	176    GP fault when running custom setup and only installing
	       spelling.
	
	          Fixed in version 3.2 of Microsoft Mail for Windows.
	
	187    GP Fault when login due to corrupt .XTN file.
	
	          Version 3.0b of Microsoft Mail for Windows may cause a
	          general protection (GP) fault when it encounters a
	          corrupt .XTN file in the database. It incorrectly handles
	          .XTN files that are an incorrect size.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
