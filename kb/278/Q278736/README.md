---
layout: page
title: "Q278736: XADM:  Alternatives to the &quot;Move  Mailbox&quot; command of the"
permalink: kb/278/Q278736/
---

## Q278736: XADM:  Alternatives to the &quot;Move  Mailbox&quot; command of the

	Article: Q278736
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The article describes two methods that you can use to work around the move
	mailbox command in the Microsoft Exchange Server Administrator Program.
	
	MORE INFORMATION
	================
	
	WARNING: Before you begin either of the methods described in this section, make
	sure that you have a verified backup in place. Also, it is recommended that you
	test the methods first with a test mailbox.
	
	Method One: Using Header.exe
	----------------------------
	
	This workaround is useful if you have only a few users.
	
	NOTE: Header.exe is a BackOffice Resource Kit tool. Refer to the Resource Kit
	Support Policy in the last section of this article for more information about
	support limitations. It is recommended that you read the documentation to this
	tool.
	
	1. Start Microsoft Outlook, and then move of the contents of the mailbox to .pst
	  files.
	
	2. Export the mailbox's rules:
	
	  a. Click Inbox, and then click Rules Wizard on the Tools menu.
	
	  b. Click Options, and then click Export Rules.
	
	  c. Type the path and a file name where you want to save the set of rules, and
	     then click Save.
	
	3. Export the folder properties for this mailbox:
	
	  a. Start Header.exe that is located in the BackOffice Resource Kit.
	
	  b. Mark all available attributes.
	
	  c. Click Add, click File, and then type the path and the file name.
	
	  d. Click Open, and then click Generate.
	
	  e. Start the Administrator program.
	
	  f. On the Tools menu, click Directory Export.
	
	  g. Click the home server of the mailboxes that you want to export.
	
	  h. Click Export file, type the name and path of the file that you have just
	     created by using Header.exe, and then click Open.
	
	  i. Click the Recipients container, and then click OK.
	
	  j. In the Export objects section, click to select the Mailboxes check box,
	     and then click Export.
	
	  k. Open the export file using Microsoft Excel or Microsoft Notepad, and then
	     delete all the entries for mailboxes that you do not want to move.
	
	  l. Change the home server, home-MDB and home-MTA to the appropriate server,
	     and then save the file.
	
	4. Delete the appropriate mailbox on the source server after you verify that you
	  have successfully completed the preceding steps.
	
	5. Import the mailbox properties on the new home server:
	
	  a. Go to the Administrator program, and then click Directory Import on the
	     Tools menu.
	
	  b. Enter the domain of the source server, and then as the Exchange Server
	     computer, enter the source server.
	
	  c. Click Import File, type the name and the path of the file that you
	     modified in Notepad or Excel, and then click Import.
	
	6. Use Outlook to import the data of the .pst file.
	
	7. Use the Rules Wizard in Outlook to import the rules.
	
	Method Two: Using Exmerge.exe and Header.exe
	--------------------------------------------
	
	This method is useful if you are moving a large number of users (over 50).
	
	NOTE: Exmerge.exe is a BackOffice Resource Kit tool. Refer to the Resource Kit
	Support Policy in the next section for more information about support
	limitations. It is recommended that you read the documentation to this tool.
	
	1. Log on using an Exchange service account.
	
	2. Export the properties of the mailbox (to do so, refer step three in the
	  preceding method).
	
	3. Start Exmerge.exe on the source server, and then click Two steps method.
	
	4. Click the source server and the mailboxes that you want to move, and then
	  click Next.
	
	5. Click a folder, and then use the default settings.
	
	6. Delete the mailbox on the source server.
	
	7. Import the properties of the mailbox on the target server (to do so, refer to
	  step five in the preceding method).
	
	8. Send mail to each of the new mailboxes to activate them. After you activate
	  the mailboxes, the mailboxes are displayed in the Exmerge window (the second
	  step of Exmerge.exe).
	
	  NOTE: If you want to use localized names for the Outlook folders (for example
	  Inbox), modify the Exmerge.ini file. The following example describes German
	  translations:
	
	  [EXMERGE]
	  MapFolderNameToLocalisedName = 1
	  [Folder Name Mappings]
	  Inbox = Posteingang
	  Delete Items = Geloschte Objekte
	  Sent Items = Gesendete Objekte
	  Outbox = Postausgang
	
	  For more information, refer to Exmerge.doc.
	
	9. Mark the mailboxes, and then type the name of the folder where you saved the
	  Exmerge files (<Filename>.pst).
	
	Microsoft BackOffice Resource Kit Support Policy
	------------------------------------------------
	
	The software supplied on the Microsoft BackOffice 4.5 Resource Kit CD-ROM is not
	officially supported. Microsoft does not guarantee the performance of the
	Microsoft BackOffice 4.5 Resource Kit tools, response times for answering
	questions, or bug fixes to the tools. However, we do provide a way for customers
	who purchase Microsoft BackOffice 4.5 Resource Kit to report bugs and receive
	possible fixes for their issues by sending e-mail to rkinput@microsoft.com. This
	e-mail address is only for Microsoft BackOffice 4.5 Resource Kit-related
	issues.
	
	The software (including instructions for its use and all printed and online
	documentation) is provided "AS IS" without warranty of any kind. Microsoft
	further disclaims all implied warranties including, without limitation, any
	implied warranties of merchantability or of fitness for a particular purpose.
	The entire risk arising out of the use or performance of the software and
	documentation remains with you.
	
	In no event shall Microsoft, its authors, or anyone else involved in the
	creation, production, or delivery of the software be liable for any damages
	whatsoever (including, without limitation, damages for loss of business profits,
	business interruption, loss of business information, or other pecuniary loss)
	arising out of the use of or inability to use the software or documentation,
	even if Microsoft has been advised of the possibility of such damages.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Component         : ResourceKit Mail ResKit-SupportTool Tools
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :4.0,5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
