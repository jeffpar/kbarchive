---
layout: page
title: "Q77628: PC Ext: How External Sends Mail Between Postoffices"
permalink: kb/077/Q77628/
---

## Q77628: PC Ext: How External Sends Mail Between Postoffices

	Article: Q77628
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0a,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0a, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail for PC Networks, it is useful to understand how the External
	Mail program (EXTERNAL.EXE) delivers mail between postoffices. This process
	involves several files in the mail system database.
	
	MORE INFORMATION
	================
	
	The sample shown below shows a typical file transfer of a single piece of mail
	from postoffice P: MICROSOFT/CORPORATE to Q: MICROSOFT/MAIL. External first
	checks the postoffices for updates to user/group lists. These lists include all
	the new user lists and definitions that are programmed into the postoffices
	through the Administrator program (ADMIN.EXE).
	
	A user has composed a message on postoffice MICROSOFT/CORPORATE and has addressed
	the message to a user on MICROSOFT/MAIL. The message is written into the
	database for MICROSOFT/CORPORATE in the KEY, MBG, and MAI subdirectories. If an
	attachment is included, a file is written to an ATT subdirectory.
	
	External then checks for any outgoing mail by opening and closing every MBG and
	KEY file on the postoffice. Flags within the files indicate if there is any mail
	required to be sent.
	
	In this example, one mail item is going to be sent from CORPORATE to MAIL. First,
	External reads the KEY, MBG, and MAI file on P: MICROSOFT/CORPORATE. The
	filename in the example is 00003D90.MAI.
	
	The delivery by the External program is a two-part process called Dispatch and
	Mailer. Dispatch is used to deliver the mail between the postoffices and Mailer
	is used to process the mail and place messages into recipients' mailbags.
	
	Dispatch
	--------
	
	External first reads the P2 file (00003D90.MAI) from the CORPORATE postoffice and
	writes to the MAIL postoffice (Q:MAI\MAB\000003CB.MAI):
	
	  [16:24] - Mail file: P:MAI\MA0\00003D90.MAI
	  [16:24] - Sending P2...
	  [16:24] - Target file: Q:MAI\MAB\000003CB.MAI
	
	The dispatcher then writes to the P1 subdirectory the envelope of the mail
	message. The envelope contains a list of all the people to whom the mail message
	must be delivered. This includes the TO field and the CC field:
	
	  [16:24] - Target file: Q:P1\000003CB.P1
	
	External then writes to INQUEUE.KEY and INQUEUE.MBG the name of the file in the
	P1 subdirectory that contains the recipients of the mail.
	
	This concludes the delivery of the mail:
	
	  [16:24] - FM_SEND, ok
	
	Mailer
	------
	
	Mailer reads the INQUEUE files in the KEY and MBG subdirectories. The MBG queue
	contains the reference pointer (P1 subdirectory filename). MAILER then reads the
	references contained in the file in the P1 subdirectory and writes to each
	recipient's KEY file and MBG file a pointer to the mail item contained in the
	MAI subdirectory:
	
	  [16:24] - inqueue opened
	  [16:24] - Processing received mail queue on: Q: MICROSOFT/MAIL
	  [16:24] - Inqueue file: Q:MAI\MAB\000003CB.MAI
	
	Note: A mail item that is sent to numerous people will have a reference pointer
	for each person who is to have the mail item but there will only be ONE .MAI
	file.
	
	  [16:24] - Checking, P: MICROSOFT/CORPORATE, for list update...
	  [16:24] -
	  [16:24] - Checking, Q: MICROSOFT/MAIL, for list update...
	  [16:24] -
	  [16:24] - Sending mail (1)
	  [16:24] -   From: MICROSOFT/CORPORATE
	  [16:24] -     To: MICROSOFT/MAIL
	  [16:24] - Mail file: P:MAI\MA0\00003D90.MAI
	  [16:24] - Sending P2...
	  [16:24] - Target file: Q:MAI\MAB\000003CB.MAI
	  [16:24] - Sending P1...
	  [16:24] - Target file: Q:P1\000003CB.P1
	  [16:24] - FM_SEND, ok
	  [16:24] -
	  [16:24] - inqueue opened
	  [16:24] - Processing received mail queue on: Q: MICROSOFT/MAIL
	  [16:24] - Inqueue file: Q:MAI\MAB\000003CB.MAI
	  [16:24] -
	  [16:24] - inqueue closed
	  [16:24] - inqueue opened
	  [16:24] - inqueue closed
	  [16:24] - inqueue opened
	  [16:24] - inqueue closed
	  [16:26] - inqueue opened
	  [16:26] - inqueue closed
	  [16:26] - inqueue opened
	  [16:26] - inqueue closed
	  [16:27] - Checking, Q: MICROSOFT/MAIL, for list update...
	  [16:27] -
	  [16:27] - Checking, P: MICROSOFT/CORPORATE, for list update...
	  [16:27] -
	
	Glossary
	--------
	
	  Term       Definition
	  -------------------------------------------------------------------
	
	  ATT        Attachments subdirectory and attachments files.
	             Referenced by a pointer within the message contents (MAI
	             file).
	
	  Contents   Contents of the message include the items such as the
	             date, time, subject, priority, attachments, and the
	             message itself. Another name for the MAI file. In visual
	             terms this can equate to selecting a message from the
	             Inbox and reading the contents.
	
	  Envelope   See P1.
	
	  MAI        See CONTENTS.
	
	  MBG, KEY   Combined, these two files are used to provide a list of
	             Inbox items that point to the mail message. This can
	             equate to looking at the Inbox in the Mail program.
	
	  P2         Another name for the MAI file. Otherwise known as the
	             contents of the message. To equate, this would be the
	             actual message that was composed.
	
	  P1         An acronym for the addressing or the envelope of the
	             message. The envelope contains all the TO and CC
	             addresses the mail items are supposed to go to.
	
	REFERENCES
	==========
	
	SESSION.LOG was created with the following External command line:
	
	  external -dpq -v -l -q1
	
	Additional query words: 2.10 3.00 3.00a 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300a kbMailPCN350 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0a,3.2,3.2a,3.5
	
	=============================================================================
	
