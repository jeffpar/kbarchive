---
layout: page
title: "Q199255: Exchange Server Training Comments and Corrections"
permalink: /kb/199/Q199255/
---

## Q199255: Exchange Server Training Comments and Corrections

	Article: Q199255
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Exchange Server Training Kit ISBN 1-57231-709-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Exchange Server Training Kit,
	ISBN 1-57231-709-4.
	
	Contents:
	
	- Page xliv: To install Active Server Pages see readme.txt
	
	- Page 39: Incorrect Reference to Topics Covered
	
	- Page 294: Incorrect Arrow Direction In Figure 6-4
	
	- Page 312: Clarification For Task 12a
	
	- Page 471: Synchronization Information Is Inaccurate
	
	- Page 754: Web Page To Download Sample Applications Has Moved
	
	- Page 813: Incorrect Mailbox Name In Diagram
	
	- Page 903: Incorrect Password
	
	- Page 916: Incorrect Key For KM Database
	
	- Page 932: Incorrect Arrow Numbers In Figure 14-15
	
	- Page 978: Missing Path In Step 14
	
	- Pages 1063 - 1064: Code Correction
	
	- Page 1098: Text Correction
	
	- Page 1111: Text Correction
	
	- Page 1162: Text Correction
	
	- Chapters 18 - 20: MS Mail, Lotus cc:Mail, & Lotus Notes Not Included
	
	MORE INFORMATION
	================
	
	Page xliv: To install Active Server Pages see readme.txt
	--------------------------------------------------------
	
	On page xliv, the instruction to install Active Server Pages are incorrect.
	
	Instructions on installing Internet Information Server 3.0 with Active Server
	Pages are in the readme.txt file on CD-ROM that includes the Supplemental Course
	Materials, Internet Explorer and the Online Book. This CD-ROM is labeled as such
	and is part no. 097-0001918.
	
	The instructions are as follows:
	
	To install Microsoft Internet Information Server 3.0:
	
	1. Choose Run from the Start menu
	
	2. Type D:\ASP (where D is your CD-ROM drive letter)
	
	3. This will open a Windows Explorer window
	
	4. Double click the ASP.EXE file, which will launch the install program. Follow
	  all the prompts to install Internet Information Server 3.0.
	
	5. For more information, please view the readme.htm in the ASP folder on the CD.
	
	
	Page 39: Incorrect Reference to Topics Covered
	----------------------------------------------
	
	On page 39, please remove the section titled "PROFS and SNDS Connectors".
	
	PROFS and SNDS connectors are not covered in the book, nor are there chapters 21
	and 22 in the book.
	
	
	Page 294: Incorrect Arrow Direction In Figure 6-4
	-------------------------------------------------
	
	On page 294, in Figure 6-4, an arrow is incorrectly pointed from
	Messaging-Enabled application to CMC. The arrow should be pointed from
	Messaging-Enabled application to CDO. Also, there should be an arrow pointing
	from Messaging-Aware applications to Simple MAPI.
	
	
	Page 312: Clarification For Task 12a
	------------------------------------
	
	On page 312, Task 12a involves the installation of Exchange Client, which comes
	with Exchange Server 5.0. This training kit includes an evaluation edition of
	Exchange Server 5.5, which comes with the Outlook Client, but not the Exchange
	Client. Therefore, the steps listed in this task cannot be completed unless you
	own a copy of Exchange Server 5.0 as outlined in the prerequisites above the
	task.
	
	
	Page 471: Synchronization Information Is Inaccurate
	---------------------------------------------------
	
	On page 471, in the second paragraph, the synchronization information is
	inaccurate.
	
	Change the fourth sentence from:
	"A routine check is performed once a day and whenever you change the local
	directory."
	
	To:
	"A routine check is performed every three hours and whenever you change the local
	directory."
	
	
	Page 754: Web Page To Download Sample Applications Has Moved
	------------------------------------------------------------
	
	The web page referenced in the first paragraph on Page 754 is no longer valid.
	You can locate the sample applications by searching the Microsoft Exchange
	Server Support site from the following location:
	
	  http://www.microsoft.com/exchange/support/2000/default.asp
	
	
	Page 813: Incorrect Mailbox Name In Diagram
	-------------------------------------------
	
	Page 813, in the diagram,
	
	Change:
	"Mailbox - Admin-L1"
	
	To:
	"Mailbox - Fred Pumpkin"
	
	
	Page 903: Incorrect Password
	----------------------------
	
	On page 903, in Figure 14-5,
	
	Change:
	"Fred supplies his KM Server password to..."
	
	To:
	"Fred supplies his KM Administrator password to..."
	
	
	Page 916: Incorrect Key For KM Database
	---------------------------------------
	
	On page 916, in the second bulleted item,
	
	Change:
	"KM database; stores the private signing key..."
	
	To:
	"KM database; stores the private sealing key..."
	
	
	Page 932: Incorrect Arrow Numbers In Figure 14-15
	-------------------------------------------------
	
	On page 932, in Figures 14-15, arrow 1 should be labeled as arrow 2, and arrow 2
	should be labeled as arrow 1.
	
	
	Page 978: Missing Path In Step 14
	---------------------------------
	
	On page 978, in the first line,
	
	Change:
	"14. At the command prompt, type Notepad Isinteg.pub"
	
	To:
	"14. At the command prompt, type Notepad c:\Isinteg.pub"
	
	
	Pages 1063 - 1064: Code Correction
	----------------------------------
	
	Pages 1063 - 1064, starting with the last four lines of code on page 1063 and
	continuing through the code on page 1064:
	Change:
	
	  'Get The Number Of Messages In The Folder
	  Set CDOSession = EventDetails.Session
	  Set oFolder = CDOSession.GetFolder
	  (EventDetails.FolderID, Null )
	
	  iMsgCount = oFolder.Fields(g_CdoPR_CONTENT_COUNT)
	
	  If iMsgCount > 500 Then
	  'Create Message In Outbox
	  Set oFolderOutbox = CDOSession.Outbox
	  Set oMsg = oFolderOutbox.
	  Messages.Add(cstr("Warning: Too many items in
	  folder!"), "There are " & iMsgCount & "mes
	  sages in the folder")
	
	  Set oRec = oMsg.Recipients.Add ("Horst
	  Sauerbier")oRec.Type = 1 'Set Recipient in the
	  To: line oRec.Resolve = 1'Resolve the Recipi-
	  ent Address
	
	  oMsg.Send 'Send The Message
	
	  End If
	
	To:
	
	  'Get The Number Of Messages In The Folder
	  Set CDOSession = EventDetails.Session
	  Set oFolder = CDOSession.GetFolder _
	  (EventDetails.FolderID, Null )
	
	  iMsgCount = oFolder.Fields(g_CdoPR_CONTENT_COUNT)
	
	  If iMsgCount > 500 Then
	  'Create Message In Outbox
	  Set oFolderOutbox = CDOSession.Outbox
	  Set oMsg = oFolderOutbox.Messages.Add(cstr( _
	  "Warning: Too many items in folder!"), _
	  "There are " & iMsgCount & _
	  "messages in the folder")
	
	  Set oRec = oMsg.Recipients.Add( _
	  "Horst Sauerbier")
	  oRec.Type = 1 'Set Recipient in the To: line
	  oRec.Resolve = 1 'Resolve the Recipient
	  'Address
	
	  oMsg.Send 'Send The Message
	
	  End If
	
	
	Page 1098: Text Correction
	--------------------------
	
	Page 1098, second sentence of the first paragraph:
	Change: "The connector is an additional component that comes only with the
	Enterprise Edition."
	To: "The connector is an additional component that comes with the Enterprise
	Edition of Exchange Server 5.0 as well as both the Standard and Enterprise
	Editions of Exchange Server 5.5."
	
	
	Page 1111: Text Correction
	--------------------------
	
	Page 1111, first bullet under the Prerequisites subheading:
	Change: "A test MS Mail postoffice is installed during this exercise using a
	network installation point. If you prefer, you can install the postoffice
	directly from your floppy disks instead."
	To: "A test MS Mail postoffice is installed during this exercise. In order to
	complete this exercise you will need to have your own copy of MS Mail. Although
	this exercise uses a network installation point, if you prefer, you can install
	the postoffice directly from your floppy disks instead."
	
	
	Page 1162: Text Correction
	--------------------------
	
	Page 1162, second sentence of the second paragraph:
	Change: "However, the connector is available only in the Enterprise Edition."
	To: "The connector is available in the Enterprise Edition of Exchange Server 5.0
	as well as in both the Standard and Enterprise Editions of Exchange Server
	5.5."
	
	
	Chapters 18 - 20: MS Mail, Lotus cc:Mail, & Lotus Notes Not Included
	--------------------------------------------------------------------
	
	Chapters 18 - 20 walk you through how to connect to Microsoft Mail and Schedule+,
	Lotus cc:Mail, and Lotus Notes. These applications are not provided in the
	Microsoft Exchange Server Training Kit.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 1-57231-709-4 TKBook XCHNG Unkroth
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
