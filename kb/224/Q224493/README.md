---
layout: page
title: "Q224493: XADM: Using ISSCAN to Remove Virus-Affected Messages/Attachments"
permalink: kb/224/Q224493/
---

## Q224493: XADM: Using ISSCAN to Remove Virus-Affected Messages/Attachments

	Article: Q224493
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55 kbgraphxlinkcritical
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5, on platform(s):
	   - the hardware: DEC Alpha 
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Isscan.exe is a new utility that enables administrators to scan the Exchange
	Server 5.x private or public information store and remove message attachments
	based on the attachment name or the message subject. This tool is most useful
	for the removal of virus-infected attachments from the information store and
	scans for the Melissa virus by default. The example included in this article
	removes the ILOVEYOU Microsoft Visual Basic Scripting Edition (VBScript) worm
	virus.
	
	The utility is available for both Intel and Alpha platforms. There is one version
	for Exchange Server versions up to and including Exchange Server 5.0 Service
	Pack 3 and Exchange Server 5.5 Service Pack 3, and another version for Exchange
	Server 5.5 post-Service Pack 3.
	
	MORE INFORMATION
	================
	
	Syntax for the command line is:
	
	  isscan {-pri|-pub} [-fix] -test {badmessage |badattach | badattach2} [-c
	  <critfile>]
	
	The -fix parameter instructs the Isscan utility to remove the messages or
	attachments found. Without the -fix parameter, the Isscan utility records all of
	the messages and attachments it finds in a log file.
	
	The -pri | -pub parameter instructs the Isscan utility to scan either the private
	or public information store (the Priv.edb or Pub.edb file).
	
	The -test badmessage parameter deletes attachments from the attachment table that
	are determined to be associated with a bad message.
	
	The -test badattach and -test badattach2 parameters delete attachments from the
	attachment table that is determined to be bad.
	
	The -c <critfile> parameter enables you to create a criteria file that the
	Isscan utility uses as it searches the message and attachment databases. If this
	is not specified, it defaults to the following (for the Melissa virus):
	
	- The badmessage parameter deletes single attachments on messages with a
	  subject that starts with "Important Message From," and a creation time after
	  03/01/99.
	
	- The badattach and badattach2 parameters delete attachments with a filename of
	  "List.doc," and a size between 40,000 and 60,000 bytes.
	
	- If the critfile parameter is specified, Isscan parses the case-sensitive
	  entries in the file to determine the search criteria.
	
	There are two types of entries in the file: attachment or message.
	
	- An attachment entry has the following format. There is a space between ATTACH
	  and <filename>, and a tab separates <minsize> from
	  <filename> and <maxsize>.
	
	  ATTACH <filename><A0><A0><A0><A0><A0><minsize><A0><A0><A0><A0><A0><maxsize>
	
	- A message entry has the following format. There is a space between MSG and
	  <start-of-subject>, and a tab between <start-of-subject> and
	  <yyyy/mm/dd>.
	
	  MSG <start-of-subject><A0><A0><A0><A0><A0><yyyy/mm/dd>
	
	NOTE: When you create the Criteria file, use an editor other than the MS-DOS
	Editor to ensure proper formatting.
	You can have multiple entries for each criterion. The attachment file names must
	be in 8.3 format. If you have a long file name, use the 8.3 format for the file
	name (for instance, use "Zipped~1.exe" for "Zippedfile.exe"). In addition, you
	can specify up to 256 criteria in the criteria file. A sample file looks like
	the following:
	
		ATTACH FirstAttachment.doc	40000	60000
		ATTACH SecondAttachment.vbs	40000	60000
		ATTACH ThirdAttachment.exe	20000	40000
		MSG Important Message From	1999/03/01
		MSG New version of virus	1999/03/28
	
	IMPORTANT: As a safeguard, the filename and subject values cannot be fewer than
	five characters long.
	
	There can be two Messaging Application Programming Interface (MAPI) types for an
	attachment in Exchange Server: PR_ATTACH_FILENAME and/or
	PR_ATTACH_LONG_FILENAME. For example:
	
	  ATTACH Zipped_Files.exe15000500000
	  ATTACH Zipped~1.exe15000500000
	
	The PR_ATTACH_FILENAME is the 8.3 filename used for backward compatibility with
	16-bit clients.
	
	You can use the Mdbvu32.exe file from the Exchange Server 5.5 CD-ROM to view
	attachments in a user mailbox. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q214816 HOWTO: Use Mdbvu32.exe to Set/Create a Property on a Folder
	
	The Isscan utility creates a report called either Isscan.pri or Isscan.pub,
	depending on whether you scan a private store or public store. This report
	includes the following information:
	
	- When run with the -test badmessage parameter, this report includes the sender
	  and recipient of a message that is deleted.
	
	- When run with the -test badattach parameter, this report includes the file
	  name of the attachment that is deleted.
	
	- When run with the -test badattach2 parameter, this report includes the file
	  name of the attachment that is deleted and the sender and recipient of the
	  associated message.
	
	When you run the Isscan utility with the -test badmessage parameter, it searches
	the message folder table based on the specified message criteria. When you run
	the Isscan utility with the -test badattach parameter, it searches the
	attachment table based on the specified attachment criteria. Searching the
	attachment table is faster, but it prevents the Isscan utility from obtaining
	information about the sender and recipient of the message.
	
	When you run the Isscan utility with the -test badattach2 parameter, it uses the
	specified attachment criteria, but it checks attachments through the message
	folder table instead of the attachment table. This makes the search slower, but
	it enables the Isscan utility to obtain information about the sender and
	recipient of the message. This is useful for viruses where the Subject field is
	always different, which prevents you from a search based on message criteria.
	The -test badattach2 parameter enables you to search based on attachment
	criteria instead, while still obtaining information about the sender and
	recipient.
	
	Example
	-------
	
	The following example removes any references to attachments in the PRIVATE
	information store that contains the initial infection of the ILOVEYOU worm
	virus.
	
	1. Use Notepad to make a file called Critfile.txt that contains the following
	  lines.
	
	  ATTACH LOVE-L~1.VBS		10000	50000
	  ATTACH LOVE-LETTER-FOR-YOU.txt.vbs	10000	50000
	
	NOTE: A new variant to the ILOVEYOU virus surfaced, on 2/12/2001. The filename of
	the attachment is:
	
	  Annakournikova.jpg.vbs.
	
	To remove this file, use the following syntax in the criteria file:
	
	  "ATTACH Annako~1.vbs 1 500000" (without the quotation marks)
	
	2. Use Notepad to make a batch file named IsscanFixPri.bat, and enter the
	  following on the first line in the file.
	
	  isscan -fix -pri -c lovecrit.txt -test badattach
	
	3. Copy Isscan.exe, Critfile.txt, and Delove.bat to the
	  <drive>\Exchsrvr\Bin folder.
	
	4. Stop the Exchange Server information store.
	
	5. At a command prompt, change to the Exchsrvr\Bin folder, and run the batch
	  file.
	
	6. When Isscan completes, run the following from the command prompt.
	
	  isinteg -fix -pri -test message
	
	To check the PUBLIC information store, replace "-pri" with "-pub," and repeat the
	steps.
	
	A .zip archive that contains instructions, Isscan.exe, and batch files to remove
	WORM viruses and repair both the private and public information store may be
	downloaded from the Microsoft Download Center.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Exchange Server 5.5 Updated Utility for Cleaning Worm Viruses (Intel):
	
	  DownloadDownload Wormhelpi.zip now
	  (http://download.microsoft.com/download/exch55/Utility/3.0/NT45/EN-US/wormhelpi.zip)
	
	  Exchange Server 5.5 Updated Utility for Cleaning Worm Viruses (DEC Alpha:
	
	  DownloadDownload Wormhelpa.zip now
	  (http://download.microsoft.com/download/exch55/Utility/3.0/ALPHA/EN-US/wormhelpa.zip)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	NOTE: The Wormhelp files are updates to the iloveyouhlp files
	
	Important Notes
	---------------
	
	- This is only a method to clean an already affected Exchange Server database.
	  This does not in any way prevent the virus from being introduced into the
	  e-mail system.
	
	- To prevent the virus from being introduced, enact a well planned anti-virus
	  strategy at all Internet firewalls and at every desktop workstation.
	
	- You can run the command, isinteg -fix -pri -test message, to delete the
	  reference to the attachment--otherwise the message reports "Could not open
	  one or more attachments." The message is not deleted with either the
	  badmessage or the badattach switch. Only the attachment is removed on either
	  option.
	
	  However, no test removes the actual Paperclip icon.
	
	- Isscan does not search for wildcard attachments or messages. The user must
	  specify a file name that is at least five characters long. For example,
	  searching for messages or attachments by specifying "*.doc" (without the
	  quotation marks) does not work.
	
	- The entries in the criteria file are case sensitive. For example, the
	  following entries remove different variants of the ILOVEYOU virus:
	
	  ATTACH LOVE-LETTER-FOR-YOU.TXT.vbs   10000   50000
	  ATTACH LOVE-LETTER-FOR-YOU.txt.vbs   10000   50000
	
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: ISSCAN
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Isscan.exe | 5.5.2648.0 | 
	+-------------------------+
	
	
	Additional query words: melissa virus fun love iloveyou funlove isscan exe corrupt priv edb or pub list doc annakournikova jpg vbs mdbvu32
	
	======================================================================
	Keywords          : exc5 exc55 kbgraphxlinkcritical 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
