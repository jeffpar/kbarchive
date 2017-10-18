---
layout: page
title: "Q215335: XADM: Disabling Per-user Read/Unread Properties on Public Folder"
permalink: kb/215/Q215335/
---

## Q215335: XADM: Disabling Per-user Read/Unread Properties on Public Folder

	Article: Q215335
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	As of Service Pack 2 for Exchange Server version 5.5, it has become possible to
	disable the Read/Unread properties on a specific Exchange Server public folder.
	
	If a public folder has thousands of messages, the folder may appear slow to
	respond to user requests. For additional information regarding public folders
	slowness, please refer to the following article in the Microsoft Knowledge
	Base:
	
	  Q188631 XADM: Public Folder Slowness in Folders with Thousands of Messages
	
	MORE INFORMATION
	================
	
	With the Information Store Viewer (Mdbvue32.exe), you can view or set details
	about a user's message storage files, which consist of the private information
	store, the personal folder file (.pst), and the offline folder file (.ost). The
	Information Store Viewer shows the properties available for each message, how
	you can use them, and in what format they appear. For example, you can use the
	Information Store Viewer to determine why a message can be saved but not sent.
	This tool uses the files Propvu32.dll, Statvu32.dll, Tblvu32.dll, and
	Xvport.dll.
	
	This tool is most useful when you're troubleshooting problems with Microsoft
	Product Support Services. When using this tool, you should have knowledge of the
	messaging application programming interface (MAPI). For more information, see
	the MAPI Programmer's Reference.
	
	Use the Mdbvu32.exe utility to add this property to a public folder by following
	these steps:
	
	1. Choose MDB and OpenMessageStore.
	
	2. DB-Open IPM subtree
	
	3. Select your public folder.
	
	4. Select Property Interface.
	
	5. Choose SetProps.
	
	6. Type "66c5" (without the quotation marks) in the PropID(Hex) field and
	  "PT_BOOLEAN" (without the quotation marks) in the Prop type field.
	
	7. Type "1" (without the quotation marks) in Prop Data, and click Add.
	
	8. Select the new entry, and click Call.
	
	9. Click Close.
	
	10. Back at the Property Interface page, click SaveChanges, and click Close
	  until you can log off the store back at the MDB menu.
	
	11. Click Close to exit.
	
	12. Stop and restart the Microsoft Exchange information store service.
	
	When the information store service restarts, all messages should be displayed as
	"unread" in this public folder.
	
	NOTE: This procedure must be performed separately on each public folder that
	exhibits symptoms as described in Q188631.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
