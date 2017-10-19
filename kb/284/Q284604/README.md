---
layout: page
title: "Q284604: INFO: Logging On to Exchange by Using CDO Can Create Default Fol"
permalink: /kb/284/Q284604/
---

## Q284604: INFO: Logging On to Exchange by Using CDO Can Create Default Fol

	Article: Q284604
	Product(s): Microsoft Exchange
	Version(s): 1.21,5.5
	Operating System(s): 
	Keyword(s): kbCDO kbCDO121 kbMsg kbEDK550 kbGrpDSMsg kbDSupport
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	- Collaboration Data Objects (CDO), version 1.21 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Collaboration Data Objects (CDO) to log on to a mailbox and access
	any Outlook default folder, all Outlook default folders are created if they do
	not already exist.
	
	MORE INFORMATION
	================
	
	When a new mailbox is created on Exchange Server, the only folders that Exchange
	creates are the Inbox, Outbox, Deleted Items, and Sent Items folders. The
	default Outlook folders (Calendar, Contacts, Tasks, Drafts, and Journal) are not
	created. The first time the Outlook client logs onto the mailbox, Outlook
	creates these folders.
	
	You may want to create these folders before the Outlook client first logs on to
	the mailbox. To do this, log on to the mailbox with CDO and access one of the
	default folders. If they are not present, all of the Outlook folders are created
	by this attempt.
	
	To do this, follow these steps:
	
	1. Create a new mailbox on your Exchange server.
	
	2. Log on to the new mailbox by using Mdbvu32.exe.
	
	3. Browse to Top of Information Store. Under Child Folders, you see Inbox,
	  Outbox, Sent Items, and Deleted Items. The other default folders are not
	  present at this time.
	
	4. In Microsoft Visual Basic, create a new Standard EXE project, and add a
	  reference to the CDO 1.21 library.
	
	5. Add a button to the form, and paste the following code in the button's Click
	  event:
	
	  Private Sub cmdCreateCalendar_Click()
	      Dim oSession As MAPI.Session
	      Dim strProfile As String
	      Dim oCalendar As MAPI.Folder
	      
	      Set oSession = CreateObject("MAPI.Session")
	      ' TO DO:
	      ' Be sure to replace "server_name" with the name of your Exchange server
	      ' and replace "mailbox_alias" with the alias of your newly created mailbox.
	      strProfile = "server_name" & vbLf & "mailbox_alias"
	      
	      oSession.Logon , , False, True, , True, strProfile
	      ' Default folders are created when the next line is called.
	      Set oCalendar = oSession.GetDefaultFolder(CdoDefaultFolderCalendar)
	      oSession.Logoff
	      
	      Set oCalendar = Nothing
	      
	      Set oSession = Nothing
	      
	  End Sub
	
	6. Run the project, click the button to run the code, and then close the
	  program.
	
	7. Log on to the mailbox again by using Mdbvu32.exe. Browse to Top of
	  Information Store. Now, under Child Folders, you see all of the Outlook
	  default folders.
	
	NOTE: The sample code accesses the Calendar folder, but you can also do this by
	accessing any of the following default folders:
	
	- CdoDefaultFolderCalendar
	
	- CdoDefaultFolderContacts
	
	- CdoDefaultFolderJournal
	
	- CdoDefaultFolderNotes
	
	- CdoDefaultFolderTasks
	
	Additional query words: mdbvu32 exe
	
	======================================================================
	Keywords          : kbCDO kbCDO121 kbMsg kbEDK550 kbGrpDSMsg kbDSupport 
	Technology        : kbOutlookSearch kbAudDeveloper kbCDOsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbExchange2000Search kbOutlook98Search kbZNotKeyword3 kbCDO121 kbExchange2000Serv
	Version           : :1.21,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
